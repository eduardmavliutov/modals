<template>
  <BasePage tag="main" class="page">
    <BaseTitle>About</BaseTitle>
    <pre class="page__content">
			It's all about us, all about us
			It's all about, all about us, all about us
			We'll run away if we must
			'Cause ya know, ah, ah

			It's all about us, it's all about us
			It's all about love, it's all about us
			In you I can trust, it's all about us
			It's all about us
		</pre>
  </BasePage>
</template>

<script lang="ts" setup>
import BasePage from '@/components/Base/BasePage.vue';
import BaseTitle from '@/components/Base/BaseTitle.vue';
</script>

<style>
.page__content {
  white-space: pre-line;
}
</style>
