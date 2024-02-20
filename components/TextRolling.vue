<script setup lang="ts">
import gsap from 'gsap';

withDefaults(defineProps<{ text: string; height?: number }>(), {
  height: 15,
});

const el = ref<HTMLDivElement | null>(null);

const onHover = () => {
  rmTextNodeHelper(el.value!.childNodes).forEach((i) => {
    gsap.to(rmTextNodeHelper(i.childNodes), {
      y: '-100%',
      stagger: {
        each: 0.02,
      },
    });
  });
};

const onLeave = () => {
  rmTextNodeHelper(el.value!.childNodes).forEach((i) => {
    gsap.to(rmTextNodeHelper(i.childNodes), {
      transform: 'translateY(0%)',
      stagger: {
        each: 0.02,
      },
    });
  });
};
</script>
<template>
  <div
    ref="el"
    @mouseover="onHover"
    @mouseleave="onLeave"
    class="cursor-pointer overflow-hidden"
    :style="{
      height: `${height}px`,
      fontSize: `${height}px`,
      lineHeight: `${height}px`,
    }"
  >
    <div v-for="i in 2" :key="i" class="flex">
      <span
        v-for="(j, idx) in text.replaceAll(' ', '\xa0').split('')"
        class="inline-block"
        :key="idx"
      >
        {{ j }}
      </span>
    </div>
  </div>
</template>
