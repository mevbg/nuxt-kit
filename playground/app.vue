<template>
  <div :style="{ textAlign: 'center' }">
    <h1>{{ pkg.title }}</h1>

    <ConditionalClientOnly :condition="!serverSideSystemScheme">
      <div
        :style="{
          display: 'inline-flex',
          justifyContent: 'left',
          gap: '20px'
        }"
      >
        <div v-for="(btn, index) in colorSchemeModes" :key="index" @click="setColorSchemeMode(btn)">
          <div
            :style="{
              display: 'inline-flex',
              justifyContent: 'left',
              gap: '4px',
              cursor: 'pointer'
            }"
          >
            <input
              :id="btn"
              v-model="colorSchemeMode"
              name="colorSchemeMode"
              type="radio"
              :value="btn"
              :style="{
                cursor: 'pointer'
              }"
            />
            <label
              :for="btn"
              :style="{
                cursor: 'pointer'
              }"
            >
              {{ btn.charAt(0).toUpperCase() + btn.slice(1) }}
            </label>
          </div>
        </div>
      </div>
    </ConditionalClientOnly>
  </div>
</template>

<script setup>
  import pkg from '../package.json';
  import ConditionalClientOnly from '../src/runtime/components/ConditionalClientOnly.vue';

  const {
    availableModes: colorSchemeModes,
    currentMode: colorSchemeMode,
    className: colorSchemeClassName,
    serverSideSystemScheme,
    setColorSchemeMode
  } = useColorScheme();
  const { classes: clientClasses } = useClientInfo();

  useHead({
    title: pkg.title,

    htmlAttrs: {
      lang: 'bg-BG',
      class: computed(() => [colorSchemeClassName.value, ...clientClasses].join(' '))
    }
  });
</script>

<style>
  body {
    font-family: system-ui;
  }

  /* Light as default */
  :root {
    --color-background: white;
    --color-text: black;
  }

  .dark {
    --color-background: black;
    --color-text: white;
  }

  /* Dark as default */
  /* :root {
  --color-background: black;
  --color-text: white;
}

.light {
  --color-background: white;
  --color-text: black;
} */

  body {
    background-color: var(--color-background);
    color: var(--color-text);
  }
</style>
