<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useCatalogStore } from "@/stores/catalog.js";
import FurnitureThumb from "@/components/FurnitureThumb.vue";

const props = defineProps({
  id: { type: String, required: true },
});

const store = useCatalogStore();
const router = useRouter();
const { activeFinish } = storeToRefs(store);

const product = computed(() => store.productById(props.id));
const categoryName = computed(() =>
  product.value ? store.categoryName(product.value.category) : "",
);

const breadcrumbs = computed(() => [
  { title: "Каталог", to: { name: "catalog" } },
  { title: categoryName.value, disabled: true },
  { title: product.value?.name ?? "", disabled: true },
]);

const related = computed(() => {
  if (!product.value) return [];

  return store.products
    .filter(
      (item) =>
        item.category === product.value.category &&
        item.id !== product.value.id,
    )
    .slice(0, 3);
});

if (!product.value) router.replace({ name: "catalog" });
</script>

<template>
  <v-container v-if="product" class="pt-10">
    <v-breadcrumbs
      :items="breadcrumbs"
      class="px-0 pt-0 mb-6"
      density="compact"
    />

    <v-row>
      <v-col cols="12" md="6">
        <v-img
          :aspect-ratio="1"
          :src="
            '/src/assets/catalog/' +
            String(product.name).toLowerCase() +
            '/' +
            activeFinish +
            '.png'
          "
          cover
        ></v-img>

        {{ activeFinish }}

        <v-chip-group v-model="activeFinish" mandatory column class="mt-4">
          <v-chip
            v-for="finish in store.finishes"
            :key="finish.id"
            :value="finish.id"
            variant="outlined"
            filter
          >
            <v-avatar start size="18" :color="finish.hex" class="border" />
            {{ finish.name }}
          </v-chip>
        </v-chip-group>
      </v-col>

      <v-col cols="12" md="6" class="ps-md-10">
        <div class="text-overline text-secondary mb-2">
          {{ product.subtitle }}
        </div>
        <h1 class="text-h3 font-weight-regular text-uppercase mb-5">
          {{ product.name }}
        </h1>
        <p class="text-body-1 text-secondary mb-6">
          {{ product.description }}
        </p>

        <v-row density="compact" class="mb-6">
          <v-col
            v-for="feature in product.features"
            :key="feature"
            cols="12"
            sm="6"
          >
            <div class="d-flex align-center ga-2 text-body-2">
              <v-icon icon="mdi-check" size="18" color="accent" />
              <span>{{ feature }}</span>
            </div>
          </v-col>
        </v-row>

        <div class="text-overline text-secondary mt-8 mb-3">
          Габариты (Ш × Г × В)
        </div>
        <v-table density="comfortable" class="border rounded-lg">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary">Модель</th>
              <th class="text-uppercase text-secondary">Размеры, мм</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="variant in product.variants" :key="variant.model">
              <td>{{ variant.model }}</td>
              <td>{{ variant.size }}</td>
            </tr>
          </tbody>
        </v-table>

        <p class="text-caption text-secondary mt-3">
          * Все элементы изготовлены из ЛДСП толщиной 18 мм
        </p>

        <v-btn :to="{ name: 'contacts' }" color="primary" class="px-8 mt-8">
          Запросить цену
        </v-btn>
      </v-col>
    </v-row>

    <section v-if="related.length" class="mt-16">
      <v-divider class="mb-10" />
      <h2 class="text-h5 font-weight-regular text-uppercase mb-7">
        Смотрите также
      </h2>

      <v-row>
        <v-col v-for="item in related" :key="item.id" cols="12" sm="4">
          <v-card
            :to="{ name: 'product', params: { id: item.id } }"
            border
            hover
            link
          >
            <v-responsive :aspect-ratio="4 / 3">
              <v-sheet
                color="surface-variant"
                class="d-flex align-center justify-center h-100 pa-5"
              >
                <FurnitureThumb :category="item.category" />
              </v-sheet>
            </v-responsive>

            <v-card-item class="pa-4">
              <div class="text-overline text-secondary">
                {{ item.subtitle }}
              </div>
              <div class="text-subtitle-1 font-weight-regular text-uppercase">
                {{ item.name }}
              </div>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>
