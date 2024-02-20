<template>
  <div
    :class="[
      'flex h-[60px] w-[calc(100vw-40px)] items-center rounded-[10px] !bg-[#34d0ff] p-[5px] [box-shadow:3px_3px_10px_#0000007f] sm:h-[50px] sm:w-[400px]',
      {
        'w-[60px] justify-center sm:w-[50px]': !isReady,
      },
    ]"
  >
    <div
      :class="[
        'flex h-full w-full items-center gap-[10px]',
        { 'hidden ': !isReady },
      ]"
    >
      <div
        class="aspect-square h-full overflow-hidden rounded-[7px] bg-fuchsia-200"
      >
        <img
          :src="state.thumbnail"
          class="h-full w-full object-cover"
          :alt="state.title"
        />
      </div>
      <div class="flex flex-1 flex-col text-[.7rem] font-bold text-black">
        <p class="line-clamp-2">{{ state.title }}</p>
      </div>
      <audio
        ref="audioEl"
        controls
        class="hidden"
        src="/Ball VRP & Novel Soul - Fake Colors (128 kbps).mp3"
        :autoplay="false"
      />
      <canvas ref="canvasRef" class="h-[25px] w-[100px] sm:w-[120px]" />
      <div class="mr-[5px] flex gap-[10px] *:cursor-pointer">
        <div @click="togglePlay" class="[*>path]:fill-black *:w-[20px]">
          <svg
            v-if="!state.isPlay"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="black"
              d="M10.396 18.433L17 12l-6.604-6.433A2 2 0 0 0 7 7v10a2 2 0 0 0 3.396 1.433"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="black"
              d="M8 6a2 2 0 0 0-2 2v8a2 2 0 0 0 4 0V8a2 2 0 0 0-2-2m7 0a2 2 0 0 0-2 2v8a2 2 0 0 0 4 0V8a2 2 0 0 0-2-2"
            />
          </svg>
        </div>
      </div>
    </div>
    <div v-if="!isReady">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
          transform="matrix(0 0 0 0 12 12)"
        >
          <animateTransform
            id="svgSpinnersPulseRings30"
            attributeName="transform"
            begin="0;svgSpinnersPulseRings32.begin+0.4s"
            calcMode="spline"
            dur="1.2s"
            keySplines=".52,.6,.25,.99"
            type="translate"
            values="12 12;0 0"
          />
          <animateTransform
            additive="sum"
            attributeName="transform"
            begin="0;svgSpinnersPulseRings32.begin+0.4s"
            calcMode="spline"
            dur="1.2s"
            keySplines=".52,.6,.25,.99"
            type="scale"
            values="0;1"
          />
          <animate
            attributeName="opacity"
            begin="0;svgSpinnersPulseRings32.begin+0.4s"
            calcMode="spline"
            dur="1.2s"
            keySplines=".52,.6,.25,.99"
            values="1;0"
          />
        </path>
        <path
          fill="currentColor"
          d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
          transform="matrix(0 0 0 0 12 12)"
        >
          <animateTransform
            id="svgSpinnersPulseRings31"
            attributeName="transform"
            begin="svgSpinnersPulseRings30.begin+0.4s"
            calcMode="spline"
            dur="1.2s"
            keySplines=".52,.6,.25,.99"
            type="translate"
            values="12 12;0 0"
          />
          <animateTransform
            additive="sum"
            attributeName="transform"
            begin="svgSpinnersPulseRings30.begin+0.4s"
            calcMode="spline"
            dur="1.2s"
            keySplines=".52,.6,.25,.99"
            type="scale"
            values="0;1"
          />
          <animate
            attributeName="opacity"
            begin="svgSpinnersPulseRings30.begin+0.4s"
            calcMode="spline"
            dur="1.2s"
            keySplines=".52,.6,.25,.99"
            values="1;0"
          />
        </path>
        <path
          fill="currentColor"
          d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
          transform="matrix(0 0 0 0 12 12)"
        >
          <animateTransform
            id="svgSpinnersPulseRings32"
            attributeName="transform"
            begin="svgSpinnersPulseRings30.begin+0.8s"
            calcMode="spline"
            dur="1.2s"
            keySplines=".52,.6,.25,.99"
            type="translate"
            values="12 12;0 0"
          />
          <animateTransform
            additive="sum"
            attributeName="transform"
            begin="svgSpinnersPulseRings30.begin+0.8s"
            calcMode="spline"
            dur="1.2s"
            keySplines=".52,.6,.25,.99"
            type="scale"
            values="0;1"
          />
          <animate
            attributeName="opacity"
            begin="svgSpinnersPulseRings30.begin+0.8s"
            calcMode="spline"
            dur="1.2s"
            keySplines=".52,.6,.25,.99"
            values="1;0"
          />
        </path>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import axios from 'axios';
import { useMagicKeys } from '@vueuse/core';

const isReady = ref(false);

const audioEl = ref<HTMLMediaElement>();
const canvasRef = ref<HTMLCanvasElement>();
const analyser = ref<AnalyserNode>();
const audioSource = ref<MediaElementAudioSourceNode>();
const ctxCanvas = ref<any>(null);
const { space } = useMagicKeys();

watch(space, (v) => v && togglePlay());

onMounted(async () => {
  ctxCanvas.value = canvasRef.value!.getContext('2d');

  audioEl.value!.onended = function () {
    state.isPlay = false;
  };
  const res = await axios.post('/api/proxy-yt', {
    url: 'https://www.youtube.com/watch?v=oX4uaarflA4&list=RDMM&index=2',
  });
  const data = res.data;

  isReady.value = true;

  state.track.src = '/Ball VRP & Novel Soul - Fake Colors (128 kbps).mp3';
  state.title = `DG812 - 8 Bit ♪`;
  state.thumbnail = `./doge_right.png`;
});

const state = reactive({
  track: new Audio(),
  title: '',
  thumbnail: '',
  isPlay: false,
});

const togglePlay = () => {
  if (!audioEl.value?.paused) {
    audioEl.value?.pause();
    state.isPlay = false;
    return;
  }
  audioEl.value?.play();
  state.isPlay = true;

  const audioContext = new AudioContext();

  if (!audioSource.value) {
    audioSource.value = audioContext.createMediaElementSource(audioEl.value!);

    analyser.value = audioContext.createAnalyser();

    audioSource.value.connect(analyser.value);

    analyser.value.connect(audioContext.destination);
  }

  analyser.value!.fftSize = 32_768;
  const bufferLength = analyser.value!.frequencyBinCount;

  const dataArray = new Uint8Array(bufferLength);

  function animate() {
    ctxCanvas.value.clearRect(
      0,
      0,
      canvasRef.value!.width,
      canvasRef.value!.height,
    );
    analyser.value!.getByteTimeDomainData(dataArray);

    ctxCanvas.value.fillStyle = 'transparent';
    ctxCanvas.value.fillRect(
      0,
      0,
      canvasRef.value!.width,
      canvasRef.value!.height,
    );

    ctxCanvas.value.lineWidth = 5;
    ctxCanvas.value.strokeStyle = 'rgb(0 0 0)';
    ctxCanvas.value.beginPath();

    const sliceWidth = canvasRef.value!.width / bufferLength;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      const v = dataArray[i] / 128.0;
      const y = v * (canvasRef.value!.height / 2);

      if (i === 0) {
        ctxCanvas.value.moveTo(x, y);
      } else {
        ctxCanvas.value.lineTo(x, y);
      }

      x += sliceWidth;
    }

    ctxCanvas.value.lineTo(canvasRef.value!.width, canvasRef.value!.height / 2);
    ctxCanvas.value.stroke();
    requestAnimationFrame(animate);
  }

  animate();
};
</script>

<style scoped></style>
