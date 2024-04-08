<template>
  <tr class="tableRow">
    <td scope="row" class="tableRow_row">{{props.name}}</td>
    <td class="tableRow_row">{{props.startDate}}</td>
    <td class="tableRow_row">{{props.endDate}}</td>
    <td class="tableRow_row">
      <Popover class="relative" v-if="props.image">
        <PopoverButton>
          <font-awesome-icon :icon="faImage" class="w-8 h-8" />
        </PopoverButton>

        <PopoverPanel class="absolute z-10">
          <img :src="`/image/${props.image}_lg.jpg`" :alt="props.name" />
        </PopoverPanel>
      </Popover>

      <font-awesome-icon v-else :icon="faImage" class="text-gray-500" />
    </td>
    <td class="tableRow_row">{{props.description}}</td>
    <td class="tableRow_row">{{props.price}}</td>
    <td class="tableRow_row">
      <CommonRating :vote="props.rating" />
    </td>
    <td class="tableRow_row">
      <Menu as="div" class="tableRow_actions">
        <div>
          <MenuButton class="tableRow_actionsButton">
            <font-awesome-icon :icon="faEllipsis" class="w-5 h-5" aria-hidden="true" />
          </MenuButton>
        </div>

        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems class="tableRow_actionsItems">
            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-yellow-500 text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                  @click="editRow"
                >
                  <font-awesome-icon :icon="faPen" class="mr-2 w-5 h-5" aria-hidden="true" />
                  Edit
                </button>
              </MenuItem>
            </div>

            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-yellow-500 text-white' : 'text-gray-900',
                    'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                  ]"
                  @click="deleteRow"
                >
                  <font-awesome-icon :icon="faTrash" class="mr-2 w-5 h-5" aria-hidden="true" />
                  Delete
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </td>
  </tr>
</template>

<script setup lang="ts">
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
  import {faImage, faEllipsis, faPen, faTrash} from '@fortawesome/free-solid-svg-icons';
  import type {TravelRow} from '../../assets/types/travel';
  import {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    Popover,
    PopoverButton,
    PopoverPanel
  } from '@headlessui/vue';

  const props = defineProps<TravelRow>();

  const emit = defineEmits(['edit-row', 'delete-row']);

  const editRow = () => {
    console.log('Edit row: ', props.id);
    emit('edit-row', props.id);
  };

  const deleteRow = () => {
    console.log('Delete row: ', props.id);
    emit('delete-row', props.id);
  };
</script>

<style lang="scss">
  .tableRow {
    @apply border-b border-gray-700;

    > *:first-child {
      @apply font-medium whitespace-nowrap text-white;
    }

    &_row {
      @apply px-4 py-3;

      &:last-of-type {
        @apply flex items-center justify-end
      };
    };

    &_picture {
      @apply rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white;
      @apply hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75;
    };

    &_actions {
      @apply  relative inline-block text-left;

      &Button {
        @apply inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75
      };

      &Items {
        @apply absolute z-10 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none;
      };
    }
  }
</style>
