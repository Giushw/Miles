<template>
  <div>
    <div class="homeLayout">
      <HeaderHome />
      <slot />
      <FooterHome />
    </div>
  </div>
</template>

<style lang="scss">
  .homeLayout {
    // @apply p-7;
  }
</style>