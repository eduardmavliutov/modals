<template>
  <Component :is="tag" class="base-card">
    <slot />
  </Component>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

defineProps({
  tag: {
    type: String,
    default: 'div',
  },
});
</script>

<style>
.base-card {
  padding: 20px;
  background-color: white;
  border-radius: 10px;
}
</style>
