<template>
  <div
    class="flex min-h-screen w-full flex-col items-center justify-center gap-[20px] pt-[30px]"
  >
    <div class="uppercase">&gt;Side Project</div>

    <NuxtImg
      :src="dogEyesRight ? '/doge_right.png' : '/doge_left.png'"
      class="w-[200px] object-cover sm:w-[170px]"
    />
    <div>{{ textUpdate }}</div>
  </div>
</template>

<script setup lang="ts">
const textUpdate = ref('Data is updating ...');
const dogEyesRight = ref(true);
const { x } = useMouse();

const setDogEyes = () =>
  (dogEyesRight.value = x.value - document.body.clientWidth / 2 >= 0);

onMounted(setDogEyes);
watch(x, setDogEyes);
</script>
