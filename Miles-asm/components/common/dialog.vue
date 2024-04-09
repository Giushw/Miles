<template>
  <div class="dialog_btnWrapper">
    <button type="button" class="dialog_btn" @click="openDialog">
      <slot name="btnText">
        Open dialog
      </slot>
    </button>
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeDialog" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="dialog_body">
        <div class="dialog_bodyWrapper">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="dialog_panel">
              <div class="flex justify-between">
                <DialogTitle as="h3" class="dialog_panelTitle">
                  {{ title }}
                </DialogTitle>

                <button type="button" @click="closeDialog">
                  <font-awesome-icon :icon="faClose" class="dialog_panelClose" />
                </button>
              </div>

              <div class="mt-2">
                <picture class="dialog_panelImg" v-if="mode === 'graphic'">
                  <img :src="src" :alt="alt"/>
                </picture>

                <form v-else-if="mode === 'form'" class="dialog_form">
                  <div class="mb-5">
                    <label for="name" class="dialog_formLabel">Name</label>
                    <input 
                      type="text"
                      id="name"
                      v-model="formModel.name"
                      class="dialog_formInput"
                      placeholder="Wooow, my head's spinning! Skydiving experience"
                      required 
                    />
                  </div>

                  <div class="mb-5">
                    <label for="startDate" class="dialog_formLabel">Start Date</label>
                    <input 
                      type="string"
                      id="startDate"
                      v-model="formModel.startDate"
                      class="dialog_formInput"
                      placeholder="gg/mm/yyyy"
                      required 
                    />
                  </div>

                  <div class="mb-5">
                    <label for="endDate" class="dialog_formLabel">End Date</label>
                    <input 
                      type="string"
                      id="endDate"
                      v-model="formModel.endDate"
                      class="dialog_formInput"
                      placeholder="gg/mm/yyyy" 
                      required 
                    />
                  </div>

                  <div class="mb-5">
                    <label for="image" class="dialog_formLabel">Image</label>
                    <input 
                      type="text"
                      id="image"
                      v-model="formModel.image"
                      class="dialog_formInput"
                      placeholder="Just the file name, not the exstention" 
                    />
                  </div>

                  <div class="mb-5">
                    <label for="description" class="dialog_formLabel">Description</label>
                    <input 
                      type="text"
                      id="description"
                      v-model="formModel.description"
                      class="dialog_formInput p-4"
                      placeholder="Lorem ipsum etc..." 
                    />
                  </div>

                  <div class="mb-5">
                    <label for="price" class="dialog_formLabel">Price</label>
                    <input 
                      type="number"
                      id="price"
                      v-model="formModel.price"
                      class="dialog_formInput"
                      placeholder="Travel price" 
                    />
                  </div>

                  <div class="mb-5">
                    <label for="rating" class="dialog_formLabel">Rating</label>
                    <input 
                      type="number"
                      id="rating"
                      v-model="formModel.rating"
                      class="dialog_formInput"
                      placeholder="From 0 to 5 Stars" 
                    />
                  </div>

                  <div class="dialog_panelButtons">
                    <button type="button" class="dialog_panelCta" @click="submitForm">
                      <slot name="btnSubmit">
                        Submit
                      </slot>
                    </button>
                    <button type="reset" class="dialog_panelCancel" @click="cancelForm">
                        Cancel
                    </button>
                  </div>
                </form>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
  
<script setup lang="ts">
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
  import {faClose} from '@fortawesome/free-solid-svg-icons';
  import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle
  } from '@headlessui/vue';
  import type {dialogType, CreateTravelRow, TravelRow} from '~/assets/types/travel';

  const CLEAN_TRAVEL: CreateTravelRow = {
    id: null,
    name: null,
    startDate: null,
    endDate: null,
    image: null,
    description: null,
    price: null,
    rating: null
  };
  
  const props = defineProps<{
    title: string,
    mode: dialogType,
    src?: string,
    alt?: string,
    editEntity?: TravelRow
  }>();

  const emit = defineEmits(['submitForm']);
  
  const isOpen: Ref<boolean> = ref(false);

  const formModel = ref<CreateTravelRow>(
    CLEAN_TRAVEL
  );

  const closeDialog = () => {
    isOpen.value = false
  }; 

  const openDialog = () => {
    isOpen.value = true
  }; 

  const submitForm = () => {
    isOpen.value = false;

    emit('submitForm', formModel.value);
  };

  const cancelForm = () => {
    formModel.value = CLEAN_TRAVEL;
    isOpen.value = false;
  }; 
</script>
  
<style lang="scss">
  .dialog {
    &_btn {
      @apply flex items-center justify-center font-medium rounded-lg text-sm px-4 py-2;
      @apply transition-colors text-gray-800 bg-yellow-500 hover:text-white hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-900;

      &Wrapper {
        @apply inset-0 flex items-center justify-center;
      };
    };

    &_body {
      @apply fixed inset-0 overflow-y-auto;

      &Wrapper {
        @apply flex min-h-full items-center justify-center p-4 text-center;
      };
    };

    &_panel {
      @apply w-full max-w-3xl max-h-[48rem] transform overflow-hidden rounded-2xl bg-gray-700 text-white p-6 text-left align-middle shadow-xl transition-all;
    
      &Title {
        @apply text-xl font-medium leading-6 text-yellow-500 font-josefin;
      };

      &Close {
        @apply  h-4 w-4;
      };

      &Buttons {
        @apply mt-4 flex justify-end;
      }

      &Cta {
        @apply flex items-center justify-center font-medium rounded-lg text-sm px-4 py-2 mr-4;
        @apply transition-colors text-gray-800 bg-yellow-500 hover:text-white hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-900;
      };

      &Cancel {
        @apply inline-flex items-center justify-center font-medium rounded-lg text-sm px-4 py-2;
        @apply bg-black/20 text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75;
      }
    };

    &_form {
      @apply max-w-sm mx-auto;

      &Label {
        @apply block mb-2 text-sm font-medium text-white;
      }

      &Input{
        @apply bg-gray-50 border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-yellow-500 focus:border-yellow-500;
      };
    };
  }
</style>