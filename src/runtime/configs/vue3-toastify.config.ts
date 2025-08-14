import type { ToastContainerOptions } from 'vue3-toastify';

export const transitions = [
  'bounce',
  'slide',
  'zoom',
  'flip'
] as const satisfies ToastContainerOptions['transition'][];

export const positions = [
  'top-right',
  'top-center',
  'top-left',
  'bottom-right',
  'bottom-center',
  'bottom-left'
] as const satisfies ToastContainerOptions['position'][];

export const types = ['info', 'success', 'warning', 'error'] as const;

export const toastifyDefaultType = 'info';

export const toastifyDefaultConfig: ToastContainerOptions = {
  // dangerouslyHTMLString: true,
  position: 'top-center',
  transition: 'bounce',
  autoClose: 5000,
  hideProgressBar: false,
  pauseOnFocusLoss: true,
  closeButton: true,
  pauseOnHover: true,
  closeOnClick: true
};
