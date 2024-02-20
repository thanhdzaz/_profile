<script setup lang="ts">
import { navigation } from '@/config/app';
import Sloppy from '@/assets/svg/logo.svg';
import TextRolling from '@/components/TextRolling.vue';

const route = useRoute();
const globalS = uGlobalS();

const magicName = (selectedPath: string, routePath: string, name: string) =>
  _isEqual(selectedPath, routePath) ? '>' + name : name;
</script>

<template>
  <header
    class="fixed left-0 top-0 z-10 flex w-full items-center justify-between bg-[#fdfdfd0e] px-[20px] backdrop-blur-[5px] dark:bg-black sm:px-[100px] sm:pt-[50px]"
  >
    <div
      title="Sloppy"
      class="flex items-center gap-[10px] py-[20px] font-au sm:py-0"
    >
      <NuxtLink to="/" replace>
        <Sloppy
          class="!mb-0 !h-auto !w-[35px] dark:invert [&>path]:!fill-none"
        />
        <!-- <div :class="['select-none text-[1.7rem] tracking-widest']">Sloppy</div> -->
      </NuxtLink>
    </div>
    <div class="flex gap-[20px] [&>div]:hover:cursor-pointer">
      <NightMode @click="globalS.toggleDarkMode" />
      <NuxtLink v-for="(i, idx) in navigation" :to="i.path" :key="idx" replace>
        <div
          :class="[
            ' uppercase',
            {
              'text-[#34d0ff]': route.path === i.path,
            },
          ]"
        >
          <TextRolling :text="magicName(route.path, i.path, i.name)" />
        </div>
      </NuxtLink>
    </div>
  </header>
</template>
