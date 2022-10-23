<template>
  <Component :is="layoutComponent">
    <slot />
  </Component>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { computed, defineAsyncComponent } from 'vue';

const LayoutDefault = defineAsyncComponent(
  () => import('../layout/AppLayoutDefault.vue')
);
const AppLayoutLite = defineAsyncComponent(
  () => import('../layout/AppLayoutLite.vue')
);

const layoutComponent = computed(() => {
  const {
    meta: { layout },
  } = useRoute();

  switch (layout) {
    case 'lite':
      return AppLayoutLite;
    default:
      return LayoutDefault;
  }
});
</script>
