<template>
  <div class="layout layout--lightgreen">
    <BaseContainer class="layout__container">
      <TheHeader class="layout__header" />
      <div class="layout__main">
        <slot />
      </div>
    </BaseContainer>
  </div>
</template>

<script lang="ts" setup>
import TheHeader from '@/components/TheHeader/TheHeader.vue';
import BaseContainer from '@/components/Base/BaseContainer.vue';
</script>

<style>
.layout {
  padding: 20px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

.layout--lightgreen {
  background-color: rgb(161, 233, 161);
}

.layout__container {
  flex-grow: 1;
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 20px;
}
</style>
