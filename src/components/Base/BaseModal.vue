<template>
  <Portal to="body" class="base-modal">
    <BaseOverlay />
  </Portal>
</template>

<script lang="ts" setup>
import BaseOverlay from '@/components/Base/BaseOverlay.vue';
</script>

<style>
.base-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
