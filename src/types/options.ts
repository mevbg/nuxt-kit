import type { MasterGeneratorParams } from '@mevbg/design-essentials-vendor';
import type { ColorSchemeOptions } from '@mevbg/nuxt-color-scheme';

export interface NuxtKitOptions {
  wm?: boolean;
  designEssentials?: MasterGeneratorParams;
  colorScheme?: ColorSchemeOptions;
}
