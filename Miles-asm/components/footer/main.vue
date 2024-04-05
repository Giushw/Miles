<template>
  <footer class="footer">
    <div class="footer_main">
      <div class="footer_heading">
        <div class="footer_logo">
          <a href="https://miles.com/" class="footer_logoGroup">
            <img src="https://flowbite.com/docs/images/logo.svg" class="footer_logoImage" alt="Miles Logo" />
            <span class="footer_logoText">Miles</span>
          </a>
        </div>
        <div class="footer_nav">
          <div>
            <h2 class="footer_navTitle">Resources</h2>
            <ul class="footer_navList">
              <li class="mb-4">
                <NuxtLink to="/about" class="footer_navLink">About us</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/faq" class="footer_navLink">FAQ</NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="footer_navTitle">Get in touch</h2>
            <ul class="footer_navList">
              <li class="mb-4">
                <NuxtLink to="/contact" class="footer_navLink">Contact us</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/job" class="footer_navLink">Work with us</NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="footer_navTitle">Legal</h2>
            <ul class="footer_navList">
              <li class="mb-4">
                <NuxtLink to="/privacy" class="footer_navLink">Privacy Policy</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/legal" class="footer_navLink">Terms &amp; Conditions</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="footer_lineSpacer" />
      <div class="footer_bottom">
        <span class="footer_copyright">
          © 2023 Miles™ All Rights Reserved.
        </span>
        <div class="footer_socials">
          <a href="#" class="footer_socialLink">
            <font-awesome-icon :icon="faFacebookF" class="w-4 h-4"/>
            <span class="sr-only">Facebook page</span>
          </a>
          <a href="#" class="footer_socialLink">
            <font-awesome-icon :icon="faTwitter" class="w-4 h-4"/>
            <span class="sr-only">Twitter page</span>
          </a>
          <a href="#" class="footer_socialLink">
            <font-awesome-icon :icon="faLinkedin" class="w-4 h-4"/>
            <span class="sr-only">Linkedin account</span>
          </a>
          <a href="#" class="footer_socialLink">
            <font-awesome-icon :icon="faGithub" class="w-4 h-4"/>
            <span class="sr-only">GitHub account</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
  import {
    faFacebookF,
    faTwitter,
    faGithub,
    faLinkedin
  } from '@fortawesome/free-brands-svg-icons';
</script>

<style lang="scss">
  .footer {
    @apply bg-gray-900;

    &_main {
      @apply mx-auto w-full max-w-screen-xl p-4 py-6;
      @apply lg:py-8;
    };

    &_heading {
      @apply md:flex md:justify-between;
    };

    &_logo {
      @apply mb-6;
      @apply md:mb-0;
    };

    &_logoGroup {
      @apply flex items-center;
    };

    &_logoImage {
      @apply h-8 me-3;
    };

    &_logoText {
      @apply self-center text-2xl font-semibold whitespace-nowrap text-white;
    };

    &_nav {
      @apply grid grid-cols-2 gap-8;
      @apply sm:gap-6 sm:grid-cols-3;
    };

    &_navTitle {
      @apply mb-6 text-sm font-semibold uppercase text-white;
    };

    &_navList {
      @apply text-gray-400 font-medium;
    }

    &_navLink {
      @apply hover:underline;
    }
    
    &_lineSpacer {
      @apply my-6 border-gray-700;
      @apply sm:mx-auto;
      @apply lg:my-8;
    };

    &_bottom {
      @apply sm:flex sm:items-center sm:justify-between;
    };

    &_copyright {
      @apply text-sm text-gray-400;
      @apply sm:text-center;
    };

    &_socials {
      @apply flex mt-4;
      @apply sm:justify-center sm:mt-0;
    };

    &_socialLink {
      @apply text-gray-500 hover:text-white ms-5;
    };
  }
</style>