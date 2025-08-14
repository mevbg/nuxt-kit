import { onMounted } from 'vue';
import { useNotificationSystem } from './useNotificationSystem';

export function useNetworkListener({
  offlineMessage,
  onlineMessage
}: {
  offlineMessage: string;
  onlineMessage: string;
}) {
  const { notifyWarning, notifySuccess } = useNotificationSystem();

  onMounted(() => {
    if (!navigator.onLine) {
      notifyWarning(offlineMessage);
    }

    window.addEventListener('offline', () => {
      notifyWarning(offlineMessage);
    });

    window.addEventListener('online', () => {
      notifySuccess(onlineMessage);
    });
  });
}
