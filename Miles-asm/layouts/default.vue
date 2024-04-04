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
  .defaultLayout {
    @apply p-5;
  }

  .spacer {
    @apply mt-3;
  }
</style>