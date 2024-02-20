<template>
  <div
    class="flex min-h-screen w-full flex-col items-center justify-center pt-[30px]"
  >
    <h1 class="text-[1rem] uppercase">&gt;Contact</h1>
    <div class="mt-[20px] flex flex-col">
      <a class="text-center" href="mailto:hi.unkuz@gmail.com"
        >hi.unkuz@gmail.com</a
      >
      <a class="text-center" href="tel:+84888388859">+84 888388859</a>
    </div>
    <div class="mt-[10px] flex gap-[20px] [&>svg]:cursor-pointer">
      <div title="I'm not available">
        <Facebook_invert class="!size-[17px] cursor-not-allowed" />
      </div>

      <div title="I'm not available">
        <Twitter_invert class="!size-[17px] cursor-not-allowed" />
      </div>
      <NuxtLink
        to="https://unkuz.gumroad.com/"
        title="Gumroad"
        target="_blank"
        external
      >
        <Gumroad class="!size-[17px]" />
      </NuxtLink>
      <NuxtLink
        to="https://www.instagram.com/unkuz"
        title="Instagram"
        target="_blank"
        external
      >
        <Instagram_invert class="!size-[17px]" />
      </NuxtLink>
      <NuxtLink
        to="https://github.com/unkuz"
        title="Github"
        target="_blank"
        external
      >
        <Github_invert
          class="!size-[17px] [&>path]:!fill-transparent dark:[&>path]:stroke-white"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import Facebook_invert from '@/assets/svg/facebook_invert.svg';
import Instagram_invert from '@/assets/svg/instagram_invert.svg';
import Twitter_invert from '@/assets/svg/twitter_invert.svg';
import Github_invert from '@/assets/svg/github_invert.svg';
import Gumroad from '@/assets/svg/gumroad.svg';
</script>
