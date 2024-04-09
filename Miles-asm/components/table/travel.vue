<template>
  <section class="travelTable">
    <div class="travelTable_wrapper">
      <div class="travelTable_content">
        <div class="travelTable_heading">
          <div class="travelTable_actions">
            <!-- Add Btn -->
            <CommonDialog mode="form" title="Add a new travel" @submit-form="addRow">
              <template #btnText>
                <font-awesome-icon :icon="faPlus" class="travelTable_actionssSvg mr-2" />
                Add new
              </template>
              <template #btnSubmit>Add</template>
            </CommonDialog>
            <!-- FIlter -->
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
                    <MenuItem>
                      <RadioGroup v-model="filter" class="flex flex-col">
                        <RadioGroupLabel class="travelTable_filterLabel">Rating</RadioGroupLabel>
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
        <div class="travelTable_tableWrapper">
          <table class="travelTable_table">
            <!-- Thead -->
            <thead class="travelTable_tableHead">
              <tr>
                <template v-for="heading in headings" :key="heading.key">
                  <th scope="col" class="travelTable_tableHeadings">{{heading.label}}</th>
                </template>
                <th scope="col" class="travelTable_tableHeadings">
                  <span class="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <!-- Tbody -->
            <tbody>
              <TransitionGroup name="fade" mode="out-in">
                <template v-if="pending">
                  <!-- Loading State -->
                  <tr>
                    <td colspan="8">
                      <CommonSpinner />
                    </td>
                  </tr>
                </template>
                <template v-else>
                  <template v-if="filteredTravels.length === 0">
                    <!-- Empty State -->
                    <tr>
                      <td colspan="8">
                        <div class="travelTable_empty">
                          <font-awesome-icon :icon="faFile" class="travelTable_emptySvg"/>
                          <p class="travelTable_emptyText">No entry found.</p>
                        </div>
                      </td>
                    </tr>
                  </template>
                  <template v-else>
                    <!-- Data State -->
                    <TableRow v-for="travel in filteredTravels"
                      :key="travel.id"
                      :id="travel.id"
                      :name="travel.name"
                      :start-date="travel.startDate"
                      :end-date="travel.endDate"
                      :image="travel.image"
                      :description="travel.description"
                      :price="travel.price"
                      :rating="travel.rating"
                      @edit-row="editRow"
                      @delete-row="deleteRow"
                    />
                  </template>
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
  import {
    faPlus,
    faFilter,
    faChevronDown,
    faFile
  } from '@fortawesome/free-solid-svg-icons';
  import {
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
  } from '@headlessui/vue';
  import type {TravelRow, filterType, KL, CreateTravelRow} from '~/assets/types/travel';

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

  const deleteRow = (id: number) => {
    if (travels.value) {
      travels.value = travels.value.filter(travel => travel.id !== id);
    }
  };

  const addRow = (fm: CreateTravelRow) => {
    if (travels.value) {

      const tailoredTravel: TravelRow = {
        id: fm.id ?? travels.value[travels.value.length - 1].id + 1,
        name: fm.name ??  'Error in save [Name]',
        startDate: fm.startDate ?? 'Error in save [StartDate]',
        endDate: fm.endDate ?? 'Error in save [EndDate]',
        image: fm.image ??'Error in save [Image]',
        description: fm.description ?? 'Error in save [Name]',
        price: fm.price ?? 0,
        rating: fm.rating ?? 0
      };

      const sortedTravels = travels.value.slice();
      sortedTravels.push(tailoredTravel);
      sortedTravels.sort((a, b) => b.rating - a.rating);

      travels.value = sortedTravels;
    };
  };

  const editRow = (fm: CreateTravelRow) => {
    if (travels.value) {
      console.log('found: ', fm);
    } else {
      console.log('not found');
    }
    
  };
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
        @apply absolute z-10 top-7 right-0 w-40 mt-2 px-4 py-4 origin-top-right divide-y divide-gray-100 rounded-md bg-gray-600 shadow-lg ring-1 ring-black/5 focus:outline-none;
      };

      &Item{
        @apply px-3 mb-3 cursor-pointer text-white hover:underline;

        &--Active {
          @apply font-josefin text-yellow-500;
        }
      };

      &Label {
        @apply px-3 mb-3 text-white text-lg border-b border-gray-400;
      }
    };

    &_table {
      @apply w-full text-sm text-left text-gray-400;

      &Wrapper {
        @apply overflow-x-auto min-h-[50vh];
      };

      &Head {
        @apply text-xs uppercase bg-gray-700 text-gray-400;
      };

      &Headings {
        @apply px-4 py-3 font-josefin;
      }
    };

    &_empty {
      @apply flex flex-col items-center py-8;

      &Svg {
        @apply h-6 w-6 mb-4;
      };

      &Text {
        @apply font-semibold text-lg;
      };
    }
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