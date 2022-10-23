<template>
  <Component :is="tag" class="base-title">
    <slot />
  </Component>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps({
  tag: {
    type: String,
    default: 'h2',
  },
});
</script>

<style>
.base-title {
  margin: 0;
  font-size: 24px;
  font-weight: 700;
}
</style>
