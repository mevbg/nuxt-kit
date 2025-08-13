import { onMounted } from 'vue';
import { useNotificationSystem } from './useNotificationSystem';

export function useNetworkListener() {
  const { notifyWarning, notifySuccess } = useNotificationSystem();

  onMounted(() => {
    if (!navigator.onLine) {
      notifyWarning('нема интернет баце');
    }

    window.addEventListener('offline', () => {
      notifyWarning('нема интернет баце');
    });

    window.addEventListener('online', () => {
      notifySuccess('вече има нет баце');
    });
  });
}
