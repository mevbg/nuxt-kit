import type { ColorSchemeKey } from '@mevbg/nuxt-color-scheme';

export interface NuxtKitOptions {
  colorScheme?: {
    default?: ColorSchemeKey;
    systemScheme?: boolean;
  };
}
