<template>
  <ClientOnly v-if="condition" fallback-tag="div">
    <slot />
  </ClientOnly>

  <div v-else>
    <slot />
  </div>
</template>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      condition?: boolean;
    }>(),
    {
      condition: false
    }
  );
</script>
