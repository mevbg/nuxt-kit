import { defineNuxtPlugin, useRuntimeConfig } from '#app';
import wm from '@mevbg/wm';

export default defineNuxtPlugin(() => {
  if (import.meta.client && useRuntimeConfig().public.wm) {
    wm();
  }
});
