<script lang="ts" setup>
import SwipeCtx from '@/ctx/SwipeCtx.vue';

useSyncDarkMode();
const { isMobile } = useDevice();
const transitionDuration = computed(() => (isMobile ? '0s' : '0.3s'));
</script>

<template>
  <AppStyle>
    <VitePwaManifest />
    <CustomScrollbarZ
      :style="{ width: '100vw', height: '100vh' }"
      :thumbWidth="6"
      :autoExpand="false"
      :autoHide="false"
    >
      <NuxtLayout>
        <SwipeCtx>
          <NuxtPage />
        </SwipeCtx>
      </NuxtLayout>
    </CustomScrollbarZ>
  </AppStyle>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all v-bind(transitionDuration);
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
