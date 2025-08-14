import { computed, ref } from 'vue';

export function useClientInfoClasses() {
  const data = ref<Record<string, any>>({});

  const classes = computed(() =>
    Object.keys(data.value).filter(
      (key) => typeof (data.value as any)[key] === 'boolean' && (data.value as any)[key]
    )
  );

  const setClientInfoClasses = async () => {
    const {
      default: defaultInfo,
      deviceDetect,
      ...clientData
    } = await import('mobile-device-detect');

    data.value = clientData;

    window.document.documentElement.classList.add(...classes.value);
  };

  return { setClientInfoClasses };
}
