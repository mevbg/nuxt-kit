import { defineNuxtPlugin, useRuntimeConfig } from '#app';
import FloatingVue from 'floating-vue';
import 'floating-vue/dist/style.css';

export default defineNuxtPlugin((nuxtApp) => {
  const {
    public: { floating: floatingVueConfig }
  } = useRuntimeConfig();

  nuxtApp.vueApp.use(FloatingVue, floatingVueConfig);
});
