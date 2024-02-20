<template>
  <div ref="el">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { navigation } from '@/config/app';

const el = ref<HTMLDivElement | null>(null);
const router = useRouter();
const route = useRoute();

const { direction } = useSwipe(el);

watch(direction, (val) => {
  const idxCurrent = _findIndex(navigation, { path: route.path });
  if (
    (idxCurrent === 0 && val === 'right') ||
    (idxCurrent === navigation.length - 1 && val === 'left')
  ) {
    return;
  }

  if (val === 'left') {
    router.push(navigation[idxCurrent + 1].path);
    return;
  }
  if (val === 'right') {
    router.push(navigation[idxCurrent - 1].path);
    return;
  }
});
</script>

<style scoped></style>
