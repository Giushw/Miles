<template>
  <header class="headerM">
    <div class="headerM_wrapper">
      <NuxtLink to="/" class="headerM_logo">
        <img src="/svg/logo.svg" class="h-8" alt="Miles Logo" />
        <span class="headerH_logoText">Miles</span>
      </NuxtLink>
      <div class="headerM_menu">
        <Menu>
          <MenuButton class="headerM_menuButton">
            <span class="sr-only">Open main menu</span>
            <font-awesome-icon :icon="faBars" class="w-5 h-5"/>
          </MenuButton>
          <MenuItems>
            <MenuItem v-slot="{active}">
              <NuxtLink to="/travel" :class='{"bg-yellow-500": active}'>Travel</NuxtLink>
            </MenuItem>
            <MenuItem v-slot="{active}">
              <NuxtLink to="/booking" :class='{"bg-yellow-500": active}'>Booking</NuxtLink>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
      <nav class="headerM_nav" id="navbar-sticky">
        <ul class="headerM_navList">
          <li>
            <NuxtLink to="/travel" class="headerM_link">Travel</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/booking" class="headerM_link">Booking</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
  import {faBars} from '@fortawesome/free-solid-svg-icons';
  import {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem
  } from '@headlessui/vue';
</script>

<style lang="scss">
  .headerM {
    @apply bg-gray-800 fixed w-full z-20 top-0 start-0 border-b border-gray-700;

    &_wrapper {
      @apply max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4;
    };

    &_logo {
      @apply flex items-center space-x-3 rtl:space-x-reverse;

      &Text {
        @apply self-center text-2xl font-semibold whitespace-nowrap text-white font-spinnaker;
      }
    };

    &_menu {
      @apply flex md:order-2 space-x-3 rtl:space-x-reverse;
      @apply md:space-x-0 md:hidden;

      &Button {
        @apply inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg;
        @apply hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600;
        @apply md:hidden ;
      }
    };

    &_nav {
      @apply items-center justify-between hidden w-full;
      @apply md:flex md:w-auto md:order-1;

      &List {
        @apply flex flex-col p-4 mt-4 font-medium border border-gray-700 rounded-lg bg-transparent;
        @apply rtl:space-x-reverse;
        @apply md:p-0 md:space-x-8 md:flex-row md:mt-0 md:border-0;
      }
    };

    &_link {
      @apply block py-2 px-3 rounded text-white hover:text-white border-gray-700 hover:bg-gray-100;
      @apply md:p-0 md:hover:text-yellow-500 md:hover:bg-transparent;
    };
  }
</style>