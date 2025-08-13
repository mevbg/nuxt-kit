import { showError } from '#app';
import { useNotificationSystem } from './useNotificationSystem';

export function useErrorHandler() {
  const { notifyError } = useNotificationSystem();

  const showErrorPage = (err: Error) => showError(err);

  const showErrorNotification = (err: Error) => notifyError(err.message);

  return {
    showErrorPage,
    showErrorNotification
  };
}
