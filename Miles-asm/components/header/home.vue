<template>
  <header class="headerH">
    <div class="headerH_wrapper">
      <NuxtLink to="/" class="headerH_logo">
        <img src="/svg/logo.svg" class="h-8" alt="Miles Logo" />
        <span class="headerH_logoText">Miles</span>
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
  .headerH {
    @apply border-gray-200 bg-gray-900;

    &_wrapper {
      @apply flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4;
    };

    &_logo {
      @apply flex items-center space-x-3 rtl:space-x-reverse;

      &Text {
        @apply self-center text-2xl font-semibold whitespace-nowrap text-white font-spinnaker ;
      }
    }
  }
</style>