<template>
  <div
    class="flex min-h-screen w-full flex-col items-center justify-center gap-[20px] py-[100px] sm:mx-auto sm:w-[500px]"
  >
    <h1 class="text-[1rem] uppercase">&gt;About</h1>
    <div class="">
      <p class="text-balance text-justify indent-8">
        &gt;Unkuz, also known as Nguyen Ba Cuong, is a creative web developer
        with 2.5+ years of experience working in building website. Proficient in
        HTML, CSS, JavaScript, TypeScript, Python,...: plus modern libraries,
        frameworks. Well-versed in requirements aith an in-depth knowledge. I'm
        currently working in Hanoi as a Software Engineering, while also taking
        on freelance projects that pique my interest. Here is the list of
        technologies that I have experience with:
      </p>

      <div
        class="mt-[10px] flex flex-col gap-[8px] indent-0 [&_svg]:cursor-pointer"
      >
        <span>Application and Data</span>
        <div
          class="flex flex-wrap gap-x-[20px] gap-y-[5px] [&_svg]:text-[30px]"
        >
          <NuxtLink to="https://tailwindcss.com/" target="_blank" external>
            <Tailwind filled />
          </NuxtLink>
          <NuxtLink to="https://gsap.com/" target="_blank" external>
            <Gsap filled target="_blank" />
          </NuxtLink>
          <NuxtLink to="https://react.dev/" target="_blank" external>
            <ReactIcon filled target="_blank" />
          </NuxtLink>
          <NuxtLink to="https://nuxt.com/" target="_blank" external>
            <NuxtIcon filled />
          </NuxtLink>
          <NuxtLink to="https://nextjs.org/ " target="_blank" external>
            <NextIcon filled class="!text-[45px] dark:invert" />
          </NuxtLink>
          <NuxtLink to="https://vuejs.org/" target="_blank" external>
            <VueIcon filled />
          </NuxtLink>
          <NuxtLink to="https://lodash.com/" target="_blank" external>
            <Lodash filled />
          </NuxtLink>
          <NuxtLink to="https://pixijs.com/" target="_blank" external>
            <Pixi filled />
          </NuxtLink>
          <NuxtLink to="https://threejs.org/" target="_blank" external>
            <ThreeJS filled class="dark:invert" />
          </NuxtLink>
          <NuxtLink to="https://expressjs.com/" target="_blank" external>
            <Express filled class="dark:invert" />
          </NuxtLink>
          <NuxtLink to="https://nestjs.com/" target="_blank" external>
            <Nestjs filled />
          </NuxtLink>
          <NuxtLink
            to="https://www.djangoproject.com/"
            target="_blank"
            external
          >
            <Django filled class="!text-[45px] dark:invert" />
          </NuxtLink>
          <NuxtLink to="https://nodejs.org/en/" target="_blank" external>
            <Nodejs filled class="!text-[45px]" />
          </NuxtLink>
          <NuxtLink to="https://socket.io/" target="_blank" external>
            <Socketio filled />
          </NuxtLink>
          <NuxtLink to="https://www.python.org/" target="_blank" external>
            <Python filled />
          </NuxtLink>
          <NuxtLink to="https://www.mongodb.com/" target="_blank" external>
            <Mongodb filled />
          </NuxtLink>
          <NuxtLink to="https://www.mysql.com/" target="_blank" external>
            <Mysql filled />
          </NuxtLink>
          <NuxtLink to="https://www.postgresql.org/" target="_blank" external>
            <Postgresql filled />
          </NuxtLink>
        </div>
        <span>Utilities</span>
        <div
          class="flex flex-wrap gap-x-[20px] gap-y-[8px] [&_svg]:text-[30px]"
        >
          <NuxtLink to="https://www.framer.com/" target="_blank" external>
            <Framerjs filled />
          </NuxtLink>
          <NuxtLink to="https://jestjs.io/" target="_blank" external>
            <Jest filled />
          </NuxtLink>
          <NuxtLink to="https://www.figma.com/" target="_blank" external>
            <Figma filled />
          </NuxtLink>
        </div>
        <span>DevOps</span>
        <div
          class="flex flex-wrap gap-x-[20px] gap-y-[8px] [&_svg]:text-[30px]"
        >
          <NuxtLink to="https://www.docker.com/" target="_blank" external>
            <Docker filled />
          </NuxtLink>
          <NuxtLink to="https://www.datadoghq.com/" target="_blank" external>
            <Datadog filled class="!text-[45px]" s />
          </NuxtLink>
          <NuxtLink to="https://analytics.google.com/" target="_blank" external>
            <Google_analytics filled />
          </NuxtLink>
          <NuxtLink to="https://www.travis-ci.com/" target="_blank" external>
            <TravisCI filled />
          </NuxtLink>
        </div>
      </div>
      <p class="text-balance text-justify indent-8">
        &gt;Besides being a software engineer, I am also quite interested in
        becoming a music producer. In recent months, I've been inspired by the
        future bounce music genre. Producers who inspire me at the moment are:
        rentz, bayze, bad reputation, dirty palm, ball vrp,...Hopefully in 2024
        I can release a song sound something similar 🤣
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import VueIcon from '@/assets/svg/vue.svg';
import NuxtIcon from '@/assets/svg/nuxt.svg';
import ReactIcon from '@/assets/svg/react.svg';
import NextIcon from '@/assets/svg/next.svg';
import Tailwind from '@/assets/svg/tailwind.svg';
import Django from '@/assets/svg/django.svg';
import Nodejs from '@/assets/svg/nodejs.svg';
import Socketio from '@/assets/svg/socketio.svg';
import Python from '@/assets/svg/python.svg';
import Mysql from '@/assets/svg/mysql.svg';
import Postgresql from '@/assets/svg/postgresql.svg';
import Mongodb from '@/assets/svg/mongodb.svg';
import Express from '@/assets/svg/express.svg';
import Nestjs from '@/assets/svg/nestjs.svg';
import Lodash from '@/assets/svg/lodash.svg';
import Framerjs from '@/assets/svg/framerjs.svg';
import Jest from '@/assets/svg/jest.svg';
import Datadog from '@/assets/svg/datadog.svg';
import Figma from '@/assets/svg/figma.svg';
import Docker from '@/assets/svg/docker.svg';
import Google_analytics from '@/assets/svg/google_analytics.svg';
import TravisCI from '@/assets/svg/travisCI.svg';
import Pixi from '@/assets/svg/pixi.svg';
import ThreeJS from '@/assets/svg/threejs.svg';
import Gsap from '@/assets/svg/gsap.svg';
</script>
