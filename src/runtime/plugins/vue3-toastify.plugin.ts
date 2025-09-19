import { defineNuxtPlugin, useRuntimeConfig } from '#app';
import Vue3Toastify, { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default defineNuxtPlugin((nuxtApp) => {
  const {
    public: { toastify: toastifyConfig }
  } = useRuntimeConfig();

  nuxtApp.vueApp.use(Vue3Toastify, toastifyConfig);

  return {
    provide: { toast }
  };
});
