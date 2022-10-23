<template>
  <BaseCard class="header" tag="header">
    <nav class="header__navigation navigation">
      <RouterLink class="navigation__link" :to="{ name: 'home' }">
        Home
      </RouterLink>
      <RouterLink class="navigation__link" :to="{ name: 'about' }">
        About
      </RouterLink>
      <RouterLink class="navigation__link" :to="{ name: 'partners' }">
        Partners
      </RouterLink>
    </nav>
  </BaseCard>
</template>

<script lang="ts" setup>
import BaseCard from '@/components/Base/BaseCard.vue';
</script>

<style>
.navigation {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.navigation__link {
  position: relative;
  text-decoration: none;
  color: black;
}

.navigation__link--active:after {
  position: absolute;
  bottom: -2px;
  left: 0;
  background-color: black;
  width: 100%;
  height: 3px;
  content: '';
}
</style>
