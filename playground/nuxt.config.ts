export default defineNuxtConfig({
  compatibilityDate: '2025-08-21',
  modules: ['../src/module'],
  mevKit: {
    colorScheme: {
      primaryScheme: 'light',
      systemScheme: true
    },
    toastify: {
      autoClose: 3000
    }
  },
  devtools: { enabled: true }
});
