import type { ToastContainerOptions } from 'vue3-toastify';
import { toast } from 'vue3-toastify';

export function useNotificationSystem() {
  const notifyInfo = (label: string, config: ToastContainerOptions = {}) =>
    toast(label, { type: 'info', ...config });

  const notifySuccess = (label: string, config: ToastContainerOptions = {}) =>
    toast(label, { type: 'success', ...config });

  const notifyWarning = (label: string, config: ToastContainerOptions = {}) =>
    toast(label, { type: 'warning', ...config });

  const notifyError = (label: string, config: ToastContainerOptions = {}) =>
    toast(label, { type: 'error', ...config });

  return {
    notifyInfo,
    notifySuccess,
    notifyWarning,
    notifyError,
    clearAll: toast.clearAll,
    isActive: toast.isActive
  };
}
