import { computed, onBeforeMount, ref } from 'vue';

export function useClientInfo() {
  const data = ref<Record<string, any>>({});

  const classes = computed(() =>
    Object.keys(data.value).filter(
      (key) => typeof (data.value as any)[key] === 'boolean' && (data.value as any)[key]
    )
  );

  onBeforeMount(async () => {
    const {
      default: defaultInfo,
      deviceDetect,
      ...clientData
    } = await import('mobile-device-detect');
    data.value = clientData;
  });

  return { data, classes };
}
