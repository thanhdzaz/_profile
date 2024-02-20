export const useSyncDarkMode = () => {
  const globalS = uGlobalS();
  const darkMode = computed(() => globalS.darkMode);

  const handle = () => {
    document
      .querySelector('html')!
      .classList[darkMode.value ? 'add' : 'remove']('dark');
  };

  onMounted(handle);

  watch(darkMode, handle);
};
