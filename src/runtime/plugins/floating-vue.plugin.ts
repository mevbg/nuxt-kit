import { defineNuxtPlugin, useRuntimeConfig } from '#app';
import FloatingVue from 'floating-vue';
import 'floating-vue/dist/style.css';
import { floatingVueDefaultConfig } from '../configs/floating-vue.config';

export default defineNuxtPlugin((nuxtApp) => {
  const {
    public: { floatingVue: floatingVueConfig }
  } = useRuntimeConfig();

  const config = Object.assign({}, floatingVueDefaultConfig, floatingVueConfig);

  nuxtApp.vueApp.use(FloatingVue, config);
});
