<template>
  <footer class="footerM">
    <article class="footerM_main">
      <div class="footerM_heading">
        <div class="footerM_logo">
          <div class="footerM_logoGroup">
            <img src="/svg/logo.svg" class="footerM_logoImage" alt="Miles Logo" />
            <span class="footerM_logoText">Miles</span>
          </div>
        </div>
        <div class="footerM_nav">
          <div>
            <h2 class="footerM_navTitle">Resources</h2>
            <ul class="footerM_navList">
              <li class="mb-4">
                <NuxtLink to="/about" class="footerM_navLink">About us</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/faq" class="footerM_navLink">FAQ</NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="footerM_navTitle">Get in touch</h2>
            <ul class="footerM_navList">
              <li class="mb-4">
                <NuxtLink to="/contact" class="footerM_navLink">Contact us</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/job" class="footerM_navLink">Work with us</NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="footerM_navTitle">Legal</h2>
            <ul class="footerM_navList">
              <li class="mb-4">
                <NuxtLink to="/privacy" class="footerM_navLink">Privacy Policy</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/legal" class="footerM_navLink">Terms &amp; Conditions</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr class="footerM_lineSpacer" />
      <div class="footerM_bottom">
        <span class="footerM_copyright">
          © 2024 Miles™ All Rights Reserved.
        </span>
        <div class="footerM_social">
          <a href="#" class="footerM_socialLink">
            <font-awesome-icon :icon="faFacebookF" class="w-4 h-4"/>
            <span class="sr-only">Facebook page</span>
          </a>
          <a href="#" class="footerM_socialLink">
            <font-awesome-icon :icon="faTwitter" class="w-4 h-4"/>
            <span class="sr-only">Twitter page</span>
          </a>
          <a href="#" class="footerM_socialLink">
            <font-awesome-icon :icon="faLinkedin" class="w-4 h-4"/>
            <span class="sr-only">Linkedin account</span>
          </a>
          <a href="#" class="footerM_socialLink">
            <font-awesome-icon :icon="faGithub" class="w-4 h-4"/>
            <span class="sr-only">GitHub account</span>
          </a>
        </div>
      </div>
    </article>
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
  .footerM {
    @apply bg-gray-800 mt-0;

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

      &Group {
        @apply flex items-center;
      };

      &Image {
      @apply h-8 me-3;
      };

      &Text {
      @apply self-center text-2xl font-semibold whitespace-nowrap text-white font-spinnaker;
      };
    };

    &_nav {
      @apply grid grid-cols-2 gap-8;
      @apply sm:gap-6 sm:grid-cols-3;

      &Title {
        @apply mb-6 text-sm font-semibold uppercase text-yellow-500;
      };

      &List {
        @apply text-gray-400 font-medium;
      };

      &Link {
        @apply transition-colors;
        @apply hover:underline hover:text-yellow-500;
      }
    };

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

    &_social {
      @apply flex mt-4;
      @apply sm:justify-center sm:mt-0;

      &Link {
        @apply text-gray-500 hover:text-yellow-500 ms-5;
      }
    };
  }
</style>