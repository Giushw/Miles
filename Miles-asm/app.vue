<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
  import './assets/css/main.css';
</script>

<style lang="scss">
  // TODO: Correated to the nuxt transtion bug
  // .page-enter-active,
  // .page-leave-active {
  //   transition: all 0.4s;
  // };

  // .page-enter-from,
  // .page-leave-to {
  //   opacity: 0;
  //   filter: blur(1rem);
  // };
</style>