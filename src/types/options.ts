import type { MasterGeneratorParams } from '@mevbg/design-essentials-vendor';
import type { ColorSchemeKey } from '@mevbg/nuxt-color-scheme';

export interface NuxtKitOptions {
  wm?: boolean;
  designEssentials?: MasterGeneratorParams;
  colorScheme?: {
    default?: ColorSchemeKey;
    systemScheme?: boolean;
  };
}
