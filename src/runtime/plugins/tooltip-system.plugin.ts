import { defineNuxtPlugin } from '#app';
import FloatingVue from 'floating-vue';
import 'floating-vue/dist/style.css';
import { floatingVueDefaultConfig } from '../configs/floating-vue.config';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(FloatingVue, floatingVueDefaultConfig);
});
