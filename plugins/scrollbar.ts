import { defineNuxtPlugin } from '#app';
import CustomScrollbar from 'custom-vue-scrollbar';

export default defineNuxtPlugin((nuxtApp: any) => {
  nuxtApp.vueApp.component('CustomScrollbarZ', CustomScrollbar);
});
