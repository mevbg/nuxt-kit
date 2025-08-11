export default defineNuxtConfig({
  modules: ['../src/module'],
  mevKit: {
    colorScheme: {
      default: 'light',
      systemScheme: true
    }
  },
  devtools: { enabled: true }
});
