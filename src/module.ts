import { addPlugin, createResolver, defineNuxtModule, installModule } from '@nuxt/kit';
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
    colorScheme: {
      default: DEFAULT_COLOR_SCHEME,
      systemScheme: true
    }
  },

  async setup(options: NuxtKitOptions) {
    // Create the path resolver
    const resolver = createResolver(import.meta.url);

    // Do not add the extension since the `.ts` will be
    // transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugins/wm.plugin'));

    // Install the Nuxt Color Scheme module
    await installModule('@mevbg/nuxt-color-scheme', {
      default: options.colorScheme?.default ?? DEFAULT_COLOR_SCHEME,
      systemScheme: options.colorScheme?.systemScheme ?? true
    });
  }
});
