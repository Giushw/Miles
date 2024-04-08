<template>
  <article class="rating">
    <font-awesome-icon v-for="star in starOn" :icon="faStar" class="rating_star rating_star--lit"/>

    <template v-if="starOff >= 0">
      <font-awesome-icon v-for="star in starOff" :icon="faStar" class="rating_star"/>
    </template>

  </article>
</template>

<script setup lang="ts">
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
  import {faStar} from '@fortawesome/free-solid-svg-icons';

  const props = defineProps<{
    vote: number
  }>();

  const starOn: ComputedRef<number> = computed(() => Math.trunc(props.vote));
  const starOff: ComputedRef<number> = computed(() => props.vote >= 5 ? 0 : 5 - Math.trunc(props.vote));

</script>

<style lang="scss">
  .rating {
    @apply flex items-center;

    &_star {
      @apply w-4 h-4 ms-1 text-gray-500;

      &--lit {
        @apply text-yellow-500;
      }
    };
  }
</style>
