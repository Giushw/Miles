<template>
  <div>
    <div class="homeLayout">
      <HeaderHome />
      <slot class="content" />
      <FooterHome />
    </div>
  </div>
</template>

<style lang="scss">
  .homeLayout {
    // > * {
    //   height: 90vh;

    //   &:first-child, &:last-child {
    //     height: 5vh;
    //   }
    // };
  }
  .content {
    // hei
  }
</style>