<template>
  <footer class="footer">
    <div class="footer_home">
      <span class="footer_copyright">
        © 2024 Miles™ All Rights Reserved.
      </span>
      <ul class="footer_links">
        <li>
          <NuxtLink to="/about" class="footer_link">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/faq" class="footer_link">FAQ</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/privacy" class="footer_link">Privacy Policy</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss">
  .footer {
    @apply shadow p-4 bg-gray-800;

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