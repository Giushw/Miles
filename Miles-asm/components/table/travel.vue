<template>
  <section class="travelTable">
    <div class="travelTable_wrapper">
      <div class="travelTable_content">
        <div class="travelTable_heading">
          <div class="travelTable_actions">
              <button type="button" class="travelTable_actionsAdd">
                <font-awesome-icon :icon="faPlus" class="travelTable_actionssSvg mr-2" />
                Add new
              </button>

              <Menu as="div" class="travelTable_actionsFilter">
                <div>
                  <MenuButton class="travelTable_filterBtn">
                    <font-awesome-icon :icon="faFilter" class="travelTable_actionsSvg mr-2"/>
                      Filter
                    <font-awesome-icon :icon="faChevronDown" class="travelTable_actionsSvg ml-2"/>
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
                  <MenuItems class="travelTable_filterItems">
                    <div class="px-1 py-1">
                      <MenuItem v-slot="{ active }">
                        <RadioGroup v-model="filter">
                          <RadioGroupLabel class="px-3 py-5 text-white">Rating</RadioGroupLabel>
                          <RadioGroupOption v-slot="{ checked }" value="top">
                            <span :class="checked ? 'travelTable_filterItem--Active' : ''" class="travelTable_filterItem">
                              5 Stars only
                            </span>
                          </RadioGroupOption>
                          <RadioGroupOption v-slot="{ checked }" value="mid">
                            <span :class="checked ? 'travelTable_filterItem--Active' : ''" class="travelTable_filterItem">
                              4 to 2 Stars
                            </span>
                          </RadioGroupOption>
                          <RadioGroupOption v-slot="{ checked }" value="wrost">
                            <span :class="checked ? 'travelTable_filterItem--Active' : ''" class="travelTable_filterItem">
                              1 Stars only
                            </span>
                          </RadioGroupOption>
                          <RadioGroupOption v-slot="{ checked }" value="none">
                            <span :class="checked ? 'travelTable_filterItem--Active' : ''" class="travelTable_filterItem">
                              None
                            </span>
                          </RadioGroupOption>
                        </RadioGroup>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </transition>
              </Menu>
          </div>
        </div>
        <!-- Table -->
        <div class="overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <template v-for="heading in headings" :key="heading.key">
                          <th scope="col" class="px-4 py-3">{{heading.label}}</th>
                        </template>
                        <th scope="col" class="px-4 py-3">
                            <span class="sr-only">Actions</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                  <TransitionGroup name="fade" mode="out-in">
                    <template v-if="pending">
                      <tr>
                        <td colspan="6">
                          <CommonSpinner />
                        </td>
                      </tr>
                    </template>
                    <template v-else>
                      <TableRow v-for="travel in filteredTravels"
                        :key="travel.id"
                        :id="travel.id"
                        :name="travel.name"
                        :start-date="travel.startDate"
                        :end-date="travel.endDate"
                        :description="travel.description"
                        :price="travel.price"
                        :rating="travel.rating"
                      />
                    </template>
                  </TransitionGroup>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup lang="ts">
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
  import {faPlus, faFilter, faChevronDown} from '@fortawesome/free-solid-svg-icons';
  import {Menu, MenuButton, MenuItems, MenuItem} from '@headlessui/vue';
  import {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
  } from '@headlessui/vue';
  import type {TravelRow, filterType, KL} from '../../assets/types/travel';

  const headings: KL[] = [
    {key: 'name', label: 'Name'},
    {key: 'start', label: 'Departure'},
    {key: 'end', label: 'Arrival'},
    {key: 'img', label: 'Picture'},
    {key: 'info', label: 'Description'},
    {key: 'price', label: 'Price'},
    {key: 'rate', label: 'Rating'}
  ];

  const {pending, data} = await useLazyFetch<TravelRow[]>('/api/travel');
  
  const travels: Ref<TravelRow[] | null> = ref(data);

  const filter: Ref<filterType> = ref('none');

  const filteredTravels: ComputedRef<TravelRow[]> = computed(() => {
  return travels.value?.filter(travel => {
    switch (filter.value) {
      case 'top':
        return Math.trunc(travel.rating) === 5;
      case 'wrost':
        return Math.trunc(travel.rating) === 1;
      case 'mid':
        return travel.rating >= 2 && travel.rating <= 4;
      default:
        return true; // Keep all items if no filter is selected
    }
  }) || [];
});
</script>

<style lang="scss">
  .travelTable {
    @apply bg-gray-900 p-3;
    @apply sm:p-5 lg:min-h-[65vh];

    &_wrapper {
      @apply mx-auto max-w-screen-xl px-4 w-full;
      @apply lg:px-12;
    };

    &_content {
      @apply bg-gray-800 relative shadow-md overflow-hidden;
      @apply sm:rounded-lg;
    };

    &_heading {
      @apply flex flex-col items-center justify-end space-y-3 p-4;
      @apply md:flex-row md:space-y-0 md:space-x-4;
    };

    &_actions {
      @apply w-full flex flex-col space-y-2 items-stretch justify-end flex-shrink-0;
      @apply md:w-auto md:flex-row md:items-center md:space-x-3 md:space-y-0;

      &Svg {
        @apply h-4 w-4;
      };

      &Add {
        @apply flex items-center justify-center font-medium rounded-lg text-sm px-4 py-2;
        @apply transition-colors text-gray-800 bg-yellow-500 hover:text-white hover:bg-yellow-800 focus:ring-4 focus:ring-yellow-900;
      };

      &Filter {
        @apply relative inline-flex text-left;
      };
    };

    &_filter {
      &Btn {
        @apply inline-flex w-full items-center justify-center font-medium rounded-lg text-sm px-4 py-2;
        @apply bg-black/20 text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75;
      };

      &Items {
        @apply absolute z-10 top-7 right-0 w-40 mt-2 px-4 py-4 origin-top-right divide-y divide-gray-100 rounded-md bg-gray-800 shadow-lg ring-1 ring-black/5 focus:outline-none;
      };

      &Item{
        @apply px-3 py-3 cursor-pointer text-white hover:underline;

        &--Active {
          @apply font-josefin text-yellow-500;
        }
      }
    };
  }

  // Tansition animation
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>