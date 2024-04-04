<template>
  <div>
    <div class="homeLayout">
      <HeaderHome />
      <p>Specific layout content for homepage</p>
      <slot />
      <FooterHome />
    </div>
  </div>
</template>

<style lang="scss">
  .homeLayout {
    @apply p-7;
  }
</style>