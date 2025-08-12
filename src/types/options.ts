import type { ColorSchemeKey } from '@mevbg/nuxt-color-scheme';

export interface NuxtKitOptions {
  wm?: boolean;
  colorScheme?: {
    default?: ColorSchemeKey;
    systemScheme?: boolean;
  };
}
