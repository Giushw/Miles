<template>
  <div class="inset-0 flex items-center justify-center">
    <button
      type="button"
      @click="openModal"
      class="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
    >
      <slot />
    </button>
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="inset-0 bg-black/25" />
      </TransitionChild>

      <div class="inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle v-if="!props.fullPicture"
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                Payment successful
              </DialogTitle>

              <div class="mt-2" v-if="!props.fullPicture">
                <p class="text-sm text-gray-500">
                  Your payment has been successfully submitted. We’ve sent you
                  an email with all of the details of your order.
                </p>
              </div>

              <picture v-if="props.fullPicture && props.srcPicture">
                <!-- <source :srcset="`${pathToImg}_lg.jpg`" media="(min-width: 600px)" /> -->
                <img :src="`${pathToImg}_md.jpg`" :alt="props.altPicture" />
              </picture>

              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                  Close
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
  import {ref, type Ref, computed, type ComputedRef} from 'vue';
  import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  } from '@headlessui/vue';

  const props = defineProps({
    fullPicture: {
      type: Boolean,
      required: false,
      default: false
    },
    srcPicture: {
      type: String,
      required: false,
      default: false
    },
    altPicture: {
      type: String,
      required: false,
      default: false
    },
  });

  const isOpen: Ref<boolean> = ref(false);

  const pathToImg: ComputedRef<string | null> = computed(() => props.srcPicture ? `/public/image/${props.srcPicture}` : null);

  const closeModal = () => {
    isOpen.value = false
  }
  const openModal = () => {
    isOpen.value = true
  }
</script>
