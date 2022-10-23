<template>
  <AppLayout>
    <RouterView v-slot="{ Component }">
      <Transition name="slide-down" mode="out-in" appear>
        <component :is="Component" />
      </Transition>
    </RouterView>
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from '@/components/layout/AppLayout.vue';
</script>

<style>
#app {
  display: flex;
  flex-grow: 1;
  font-weight: normal;
}
</style>
