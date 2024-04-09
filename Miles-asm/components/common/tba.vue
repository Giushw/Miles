<template>
    <div>
    <section class="empty">
      <div class="empty_heading">
        <h1 class="empty_title">404</h1>
        <p class="empty_paragraph">
          Sorry but you are <strong class="empty_accent">Miles</strong> ahead (pun intended!) and the <strong class="empty_accent">{{text}}</strong> page is still under construction!
        </p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <NuxtLink to="/" class="empty_cta">Curse you, irony!</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    text: string
  }>();
</script>


<style lang="scss">
  .empty {
    @apply bg-center bg-no-repeat bg-[url('/image/404.jpg')] bg-gray-700 bg-blend-multiply flex flex-col justify-center;
  
    &_heading {
      @apply px-4 mx-auto max-w-screen-xl text-center py-24;
      @apply lg:py-56;
    };

    &_title {
      @apply mb-4 text-4xl font-extrabold tracking-tight leading-none text-yellow-500 font-josefin ;
      @apply md:text-5xl lg:text-9xl;
      
      // Tailwind Override for big font size
      @media (max-width: 1023px) {
        font-size: 12rem;
      };
      @media (min-width: 1024px) {
        font-size: 20rem;
      };
    };

    &_paragraph {
      @apply mb-8 text-lg font-normal text-gray-300;
      @apply lg:text-xl sm:px-16 lg:px-48;
    };

    &_accent {
      @apply text-yellow-500 font-josefin;
    };

    &_ctas {
      @apply  grid-cols-2 gap-2;
    }

    &_cta {
      @apply inline-flex justify-center items-center py-3 px-5 rounded-xl lg:w-1/4;
      @apply font-josefin text-base font-medium text-center lg:text-2xl;
      @apply transition-colors text-gray-800 bg-yellow-500 hover:text-white hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-900;
      
      &:first-of-type {
        @apply lg:mr-4;
      }
    };
  }
</style>