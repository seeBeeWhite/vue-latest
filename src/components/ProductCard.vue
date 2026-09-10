<script setup lang="ts">
import { computed } from "vue";
import { useCatalogStore } from "@/stores/catalog.js";
// import FurnitureThumb from "@/components/FurnitureThumb.vue";

const props = defineProps({
  product: { type: Object, required: true },
});

const store = useCatalogStore();
const variantsCount = computed(() => props.product.variants.length);
const categoryName = computed(() => store.categoryName(props.product.category));

const variantsLabel = computed(() => {
  if (variantsCount.value === 1) return "модель";
  if (variantsCount.value < 5) return "модели";
  return "моделей";
});
</script>

<template>
  <v-card
    :to="{ name: 'product', params: { id: product.id } }"
    border
    class="h-100"
    hover
    link
  >
    <v-img
      :aspect-ratio="1"
      :src="
        '/src/assets/catalog/' +
        String(product.name).toLowerCase() +
        '/oak-sonoma.png'
      "
      cover
    ></v-img>

    <v-card-item class="pa-5">
      <div class="text-overline text-secondary">{{ product.subtitle }}</div>
      <div class="text-h6 font-weight-regular text-uppercase">
        {{ product.name }}
      </div>
      <div class="text-body-2 text-secondary">
        {{ categoryName }} · {{ variantsCount }} {{ variantsLabel }}
      </div>
    </v-card-item>
  </v-card>
</template>
