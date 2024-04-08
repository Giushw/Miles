<template>
  <div>
    <div class="defaultLayout">
      <HeaderMain />
      <div class="spacer"></div>
      <slot />
      <FooterMain />
    </div>
  </div>
</template>

<style lang="scss">
  .spacer {
    @apply mt-16;
  }
</style>