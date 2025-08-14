import { generateDesignEssentials } from '@mevbg/design-essentials-vendor';
import {
  addComponent,
  addImports,
  addPlugin,
  addServerImportsDir,
  createResolver,
  defineNuxtModule,
  installModule
} from '@nuxt/kit';
import type { Nuxt } from 'nuxt/schema';
import { DEFAULT_COLOR_SCHEME } from './runtime/defaults';
import type { NuxtKitOptions } from './types/options';

// Re-export types for TypeScript support
export * from './types/options';

// Export Nuxt Color Scheme module
export * from '@mevbg/nuxt-color-scheme';

export default defineNuxtModule<NuxtKitOptions>({
  meta: {
    name: '@mevbg/nuxt-kit',
    configKey: 'mevKit'
  },

  // Default configuration options of the Nuxt module
  defaults: {
    wm: true,
    colorScheme: {
      default: DEFAULT_COLOR_SCHEME,
      systemScheme: true
    }
  },

  async setup(options: NuxtKitOptions, nuxt: Nuxt) {
    // Add the configuration to the runtime config
    nuxt.options.runtimeConfig.public.wm = options.wm;

    // Install the modules
    Promise.all([
      installModule('@vueuse/nuxt'),
      installModule('@mevbg/nuxt-color-scheme', {
        default: options.colorScheme?.default ?? DEFAULT_COLOR_SCHEME,
        systemScheme: options.colorScheme?.systemScheme ?? true
      })
    ]);

    // Create the path resolver
    const resolver = createResolver(import.meta.url);

    // Add the plugins
    // Do not add the extension since the `.ts` will be
    // transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugins/wm.plugin'));
    addPlugin(resolver.resolve('./runtime/plugins/notification-system.plugin'));
    addPlugin(resolver.resolve('./runtime/plugins/tooltip-system.plugin'));

    // Add the composables
    addImports([
      {
        name: 'useClientInfoClasses',
        from: resolver.resolve('./runtime/composables/useClientInfoClasses')
      },
      {
        name: 'useErrorHandler',
        from: resolver.resolve('./runtime/composables/useErrorHandler')
      },
      {
        name: 'useNetworkListener',
        from: resolver.resolve('./runtime/composables/useNetworkListener')
      },
      {
        name: 'useNotificationSystem',
        from: resolver.resolve('./runtime/composables/useNotificationSystem')
      },
      {
        name: 'useScrollDirectionUp',
        from: resolver.resolve('./runtime/composables/useScrollDirectionUp')
      },
      {
        name: 'useMetaData',
        from: resolver.resolve('./runtime/composables/useMetaData')
      },
      {
        name: 'useHeadLinks',
        from: resolver.resolve('./runtime/composables/useHeadLinks')
      }
    ]);

    // Add the server utils
    addServerImportsDir(resolver.resolve('./runtime/server/utils'));

    // Add the components
    addComponent({
      name: 'ConditionalClientOnly',
      filePath: resolver.resolve('./runtime/components/ConditionalClientOnly.vue')
    });

    // Generate the design essentials
    nuxt.hook('modules:done', async () => {
      if (options.designEssentials) {
        console.info('Generating design essentials...');

        try {
          await generateDesignEssentials(options.designEssentials);
          console.info('Design essentials generated successfully!');
        } catch (err) {
          console.error('Failed to generate design essentials:', err);
          throw err;
        }
      }
    });
  }
});
