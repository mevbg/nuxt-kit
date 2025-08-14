import { computed, ref } from 'vue';

export function useClientInfo() {
  const data = ref<Record<string, any>>({});

  const classes = computed(() =>
    Object.keys(data.value).filter(
      (key) => typeof (data.value as any)[key] === 'boolean' && (data.value as any)[key]
    )
  );

  if (import.meta.client) {
    import('mobile-device-detect').then(({ default: defaultInfo, deviceDetect, ...clientData }) => {
      data.value = clientData;
    });
  }

  return { data, classes };
}
