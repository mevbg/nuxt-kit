import type { MasterGeneratorParams } from '@mevbg/design-essentials-vendor';
import type { ColorSchemeOptions } from '@mevbg/nuxt-color-scheme';
import type { ToastContainerOptions } from 'vue3-toastify';

export interface NuxtKitOptions {
  wm?: boolean;
  designEssentials?: MasterGeneratorParams;
  colorScheme?: ColorSchemeOptions;
  toastify?: ToastContainerOptions;
  floating?: unknown;
}
