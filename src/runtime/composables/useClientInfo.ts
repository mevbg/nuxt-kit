import * as clientInfo from 'mobile-device-detect';
import { ref } from 'vue';

type ClientInfo = typeof clientInfo & { default: Record<string, any> };

export function useClientInfo() {
  const data = ref<Record<string, any>>({});
  const classes = ref<string[]>([]);

  const { default: defaultInfo, deviceDetect, ...clientData } = clientInfo as ClientInfo;

  data.value = clientData;
  classes.value = Object.keys(clientData).filter(
    (key) => typeof (clientData as any)[key] === 'boolean' && (clientData as any)[key]
  );

  return { data, classes };
}
