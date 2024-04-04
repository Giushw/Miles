<template>
  <div>
    <h1>Welcome to the Index Page!</h1>
    <ul>
      <li><NuxtLink to="/travel">Travel</NuxtLink></li>
      <li><NuxtLink to="/booking">Booking</NuxtLink></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: 'home'
  })
</script>