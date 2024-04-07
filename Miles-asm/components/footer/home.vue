<template>
  <footer class="footerH">
    <div class="footerH_home">
      <span class="footerH_copyright">
        © 2024 Miles™ All Rights Reserved.
      </span>
      <ul class="footerH_links">
        <li>
          <NuxtLink to="/about" class="footerH_link">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/faq" class="footerH_link">FAQ</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/privacy" class="footerH_link">Privacy Policy</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss">
  .footerH {
    @apply shadow p-4;

    &_home {
      @apply w-full mx-auto max-w-screen-xl p-4;
      @apply md:flex md:items-center md:justify-between;
    };

    &_copyright {
      @apply text-sm text-gray-400;
      @apply sm:text-center;
    };

    &_links {
      @apply flex flex-wrap items-center mt-3 text-sm font-medium  text-gray-400;
      @apply sm:mt-0;
    };

    &_link {
      @apply hover:underline me-4;
      @apply md:me-6;
    };
  }
</style>