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
    header {
      @apply bg-transparent -mb-16;
    }
  }

  .jumbotron, .empty {
    @apply h-screen;
  }

  footer {
    @apply bg-transparent -mt-32;
    @apply lg:-mt-24;
  }
</style>