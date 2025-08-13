import { defineNuxtPlugin } from '#app';
import Vue3Toastify, { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { toastifyDefaultConfig } from '../configs/vue3-toastify.config';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Toastify, toastifyDefaultConfig);

  return {
    provide: { toast }
  };
});
