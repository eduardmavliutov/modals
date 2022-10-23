<template>
  <div class="layout layout--lightgrey">
    <BaseContainer class="layout__container">
      <TheHeader class="layout__header" />
      <div class="layout__main">
        <slot />
      </div>
      <TheFooter class="layout__footer" />
    </BaseContainer>
  </div>
</template>

<script lang="ts" setup>
import TheHeader from '@/components/TheHeader/TheHeader.vue';
import BaseContainer from '@/components/Base/BaseContainer.vue';
import TheFooter from '@/components/TheFooter/TheFooter.vue';
</script>

<style>
.layout {
  padding: 20px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

.layout__container {
  flex-grow: 1;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
}

.layout--lightgrey {
  background-color: #d3d3d34a;
}

.layout__main {
  display: flex;
  flex-direction: column;
}
</style>
