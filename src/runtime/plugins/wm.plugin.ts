import { defineNuxtPlugin } from '#app';
import wm from '@mevbg/wm';

export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    wm();
  }
});
