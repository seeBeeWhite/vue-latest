<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCatalogStore } from "@/stores/catalog.js";
import ProductCard from "@/components/ProductCard.vue";

const store = useCatalogStore();
const { activeCategory, activeFinish } = storeToRefs(store);
</script>

<template>
  <v-container class="pt-16">
    <header class="mb-10">
      <div class="text-overline text-secondary mb-2">Каталог</div>
      <h1 class="text-h3 font-weight-regular text-uppercase mb-4">
        Коллекция HISANTA
      </h1>
      <p class="text-body-1 text-secondary">
        Девять моделей офисной мебели в пяти вариантах отделки. Строгие формы,
        которые складываются в единое рабочее пространство.
      </p>
    </header>

    <div
      class="d-flex flex-wrap justify-space-between align-center ga-5 pt-5 pb-8 mb-9 border-b"
    >
      <v-chip-group
        v-model="activeCategory"
        mandatory
        column
        selected-class="border-primary"
      >
        <v-chip
          v-for="category in store.categoryTabs"
          :key="category.id"
          :value="category.id"
          :text="category.name"
          variant="outlined"
          filter
        />
      </v-chip-group>

      <!-- <v-chip-group v-model="activeFinish" mandatory column selected-class="border-primary">
        <v-chip v-for="finish in store.finishes" :key="finish.id" :value="finish.id" :title="finish.name"
          variant="outlined" size="small" filter>
          <v-avatar start size="20" :color="finish.hex" class="border" />
          {{ finish.name }}
        </v-chip>
      </v-chip-group> -->
    </div>

    <v-row>
      <v-col
        v-for="product in store.filteredProducts"
        :key="product.id"
        cols="12"
        sm="6"
        md="4"
      >
        <ProductCard :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>
