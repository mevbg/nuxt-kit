import { ref } from 'vue';

export function useClientInfoClasses() {
  const data = ref<Record<string, any>>({});

  const setClientInfoClasses = async () => {
    const {
      default: defaultInfo,
      deviceDetect,
      ...clientData
    } = await import('mobile-device-detect');

    data.value = clientData;

    const classes = Object.keys(clientData).filter(
      (key) =>
        typeof (clientData as Record<string, any>)[key] === 'boolean' &&
        (clientData as Record<string, any>)[key]
    );

    if (classes.length > 0) {
      window.document.documentElement.classList.add(...classes);
    }
  };

  return { setClientInfoClasses };
}
