export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  compatibilityDate: '2025-08-21',
  mevKit: {
    colorScheme: {
      primaryScheme: 'light',
      systemScheme: true
    },
    toastify: {
      autoClose: 3000
    }
  }
});
