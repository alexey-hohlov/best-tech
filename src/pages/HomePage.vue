<script setup lang="ts">
import { useProductsStore } from '@/store/productsStore';
import { Card, Input, Select } from '@/components';
import { EmptyPage } from '@/pages';
import { SortBy } from '@/types/storeTypes';

const store = useProductsStore();

const selectOptions = [
  { name: 'Сортировать по...', value: SortBy.default },
  { name: 'По возрастанию цены', value: SortBy.ascilation },
  { name: 'По убыванию цены', value: SortBy.descilation },
];

const handleSearch = (event: Event) => {
  const input = event.target as HTMLInputElement;
  store.setSearchQuery(input.value);
};

const handleSort = (event: Event) => {
  const select = event.target as HTMLSelectElement;
  store.setSort(select.value);
};
</script>

<template>
  <section class="flex flex-col gap-3">
    <div class="flex gap-4 flex-wrap">
      <Input
        class="w-full sm:w-auto"
        placeholder="Поиск"
        :onChange="handleSearch"
        :value="store.searchQuery"
      />
      <Select
        class="w-full sm:w-auto"
        :options="selectOptions"
        :onChange="handleSort"
      />
    </div>
    <ul
      class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4"
      v-if="store.filteredProducts.length"
    >
      <Card
        v-for="item in store.filteredProducts"
        :key="item.id"
        :product="item"
      />
    </ul>
    <EmptyPage v-else message="Ничего не найдено" />
  </section>
</template>
