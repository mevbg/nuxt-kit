import { useWindowScroll } from '@vueuse/core';
import { ref, watch } from 'vue';

export function useScrollDirectionUp(threshold: number = 0) {
  const { y } = useWindowScroll();
  const lastY = ref(y.value);
  const isScrollingUp = ref(false);

  watch(y, (newY) => {
    if (Math.abs(newY - lastY.value) < threshold) return;

    isScrollingUp.value = newY < lastY.value;
    lastY.value = newY;
  });

  return isScrollingUp;
}
