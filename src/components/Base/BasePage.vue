<template>
  <main class="base-page">
    <BaseCard class="base-page__card">
      <slot />
    </BaseCard>
  </main>
</template>

<script lang="ts" setup>
import BaseCard from '@/components/Base/BaseCard.vue';
</script>

<style>
.base-page {
  display: flex;
  height: 100%;
}

.base-page__card {
  flex-grow: 1;
}
</style>
