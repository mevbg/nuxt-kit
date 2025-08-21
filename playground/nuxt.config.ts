export default defineNuxtConfig({
  compatibilityDate: '2025-08-21',
  modules: ['../src/module'],
  mevKit: {
    colorScheme: {
      default: 'light',
      systemScheme: true
    }
  },
  devtools: { enabled: true }
});
