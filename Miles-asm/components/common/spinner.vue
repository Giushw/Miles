<template>
    <div class="spinner">
      <div class="">
        <TransitionRoot
          appear
          :show="isShowing"
          as="template"
          enter="transform transition duration-[400ms]"
          enter-from="opacity-0 rotate-[-120deg] scale-50"
          enter-to="opacity-100 rotate-0 scale-100"
          leave="transform duration-200 transition ease-in-out"
          leave-from="opacity-100 rotate-0 scale-100 "
          leave-to="opacity-0 scale-95 "
        >
          <font-awesome-icon :icon="faCircleNotch" class="spinner_image"/>
        </TransitionRoot>
      </div>
    </div>
  </template>
  
<script setup lang="ts">
  import {ref} from 'vue';
  import {TransitionRoot} from '@headlessui/vue';
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
  import {faCircleNotch} from '@fortawesome/free-solid-svg-icons';
  
  const isShowing = ref(true);
</script>

<style lang="scss">
  .spinner {
    @apply flex flex-col items-center py-16;

    &_wrapper {
      @apply h-32 w-32;
    }

    &_image {
      @apply h-full w-full rounded-md bg-white shadow-lg;
    }
  }
</style>