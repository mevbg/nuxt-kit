import * as clientInfo from 'mobile-device-detect';

type ClientInfo = typeof clientInfo & { default: Record<string, any> };

export function useClientInfo() {
  const { default: defaultInfo, deviceDetect, ...data } = clientInfo as ClientInfo;

  const classes: string[] = Object.keys(data).filter(
    (key) => typeof (data as any)[key] === 'boolean' && (data as any)[key]
  );

  return { data, classes };
}
