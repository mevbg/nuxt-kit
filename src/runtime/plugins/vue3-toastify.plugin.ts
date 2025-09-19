import { defineNuxtPlugin, useRuntimeConfig } from '#app';
import Vue3Toastify, { toast, type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { toastifyDefaultConfig } from '../configs/vue3-toastify.config';

export default defineNuxtPlugin((nuxtApp) => {
  const {
    public: { toastify: toastifyConfig }
  } = useRuntimeConfig();

  const config = Object.assign({}, toastifyDefaultConfig, toastifyConfig) as ToastContainerOptions;

  nuxtApp.vueApp.use(Vue3Toastify, config);

  return {
    provide: { toast }
  };
});
