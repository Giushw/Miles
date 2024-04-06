<template>
  <div>
    <section class="jumbotron">
      <div class="jumbotron_heading">
        <h1 class="jumbotron_title">Full speed Ahead!</h1>
        <p class="jumbotron_paragraph">
          Ready to rack up some serious Miles (pun intended!) and ditch the daily grind?
          Explore our incredible destinations, we have everything for your next adventures.  
          <strong class="jumbotron_accent">Search</strong> for your dream vacation or if you already know where to go, jump straight to <strong class="jumbotron_accent">booking</strong>!
        </p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <NuxtLink to="/travel" class="jumbotron_cta">Travel</NuxtLink>
          <NuxtLink to="/booking" class="jumbotron_cta">Booking</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: 'home'
  })
</script>

<style lang="scss">
  .jumbotron {
    @apply bg-center bg-no-repeat bg-[url('/image/wall.jpg')] bg-gray-700 bg-blend-multiply;
  
    &_heading {
      @apply px-4 mx-auto max-w-screen-xl text-center py-24;
      @apply lg:py-56;
    };

    &_title {
      @apply mb-4 text-4xl font-extrabold tracking-tight leading-none text-yellow-500 font-josefin ;
      @apply md:text-5xl lg:text-6xl;
    };

    &_paragraph {
      @apply mb-8 text-lg font-normal text-gray-300;
      @apply lg:text-xl sm:px-16 lg:px-48;
    };

    &_accent {
      @apply text-yellow-500;
    }

    &_cta {
      @apply inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-900;
      @apply lg:mr-4;
    };
  }
</style>