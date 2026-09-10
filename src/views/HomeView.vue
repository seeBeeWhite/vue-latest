<script setup lang="ts">
import { computed } from "vue";
import { useDisplay } from "vuetify";

// Store
import { useCatalogStore } from "@/stores/catalog.js";

// Components
import ProductCard from "@/components/ProductCard.vue";

// Assets
import heroImage from "@/assets/main/slide-main-0.jpg";

// Const
const store = useCatalogStore();
const { name } = useDisplay();
const features = [
  {
    icon: "mdi-archive-outline",
    title: "Вместительное хранение",
    text: "Продуманная организация пространства в каждой модели.",
  },
  {
    icon: "mdi-shield-check-outline",
    title: "Надёжная конструкция",
    text: "ЛДСП 18 мм и устойчивые опоры для долгого срока службы.",
  },
  {
    icon: "mdi-leaf",
    title: "Качественные материалы",
    text: "Безопасные плиты с износостойким покрытием.",
  },
  {
    icon: "mdi-clock-outline",
    title: "Лаконичный дизайн",
    text: "Строгие формы, которые сочетаются между собой.",
  },
];

// Computed
const heightSlide = computed(() => {
  switch (name.value) {
    case "md":
    case "lg":
    case "xl":
    case "xxl":
      return "500";
    default:
      return "360";
  }
});
const highlights = computed(() =>
  ["mobilex", "modena", "vista", "rolla"]
    .map((id) => store.productById(id))
    .filter(Boolean),
);
</script>

<template>
  <div>
    <!-- Main slide -->
    <v-img :src="heroImage" cover :height="heightSlide">
      <v-container class="d-flex align-center fill-height py-12">
        <v-sheet width="100%" max-width="620" class="pa-6 pa-sm-10 opacity-90">
          <div class="text-overline text-secondary mb-4">
            Корпусная мебель на заказ
          </div>

          <p class="text-h5 text-sm-h4 font-weight-light mb-8">
            Функциональность. Эстетика. Премиальное качество.
            <br />
            Мебель для тех, кто ценит стиль, комфорт и порядок в каждой детали.
          </p>

          <div class="d-flex flex-wrap align-center ga-3">
            <v-btn :to="{ name: 'catalog' }" color="primary" class="px-8">
              Смотреть каталог
            </v-btn>
            <v-btn :to="{ name: 'contacts' }" variant="text" class="px-4">
              Связаться с нами
            </v-btn>
          </div>
        </v-sheet>
      </v-container>
    </v-img>

    <v-container>
      <!-- Features -->
      <section class="py-16">
        <v-row>
          <v-col
            v-for="feature in features"
            :key="feature.title"
            cols="12"
            sm="6"
            md="3"
          >
            <v-icon :icon="feature.icon" size="26" class="mb-4" />
            <h3 class="text-subtitle-1 font-weight-medium mb-2">
              {{ feature.title }}
            </h3>
            <p class="text-body-2 text-secondary">
              {{ feature.text }}
            </p>
          </v-col>
        </v-row>
      </section>

      <v-divider />

      <!-- Favorites -->
      <section class="py-16">
        <div class="d-flex flex-wrap justify-space-between align-end ga-4 mb-9">
          <div>
            <div class="text-overline text-secondary mb-2">Модельный ряд</div>
            <h2 class="text-h4 font-weight-regular text-uppercase">
              Избранное из коллекции
            </h2>
          </div>

          <v-btn
            :to="{ name: 'catalog' }"
            variant="text"
            append-icon="mdi-arrow-right"
          >
            Весь каталог
          </v-btn>
        </div>

        <v-row>
          <v-col
            v-for="product in highlights"
            :key="product.id"
            cols="12"
            sm="6"
            md="3"
          >
            <ProductCard :product="product" />
          </v-col>
        </v-row>
      </section>

      <v-sheet color="transparent" class="border-t border-b py-7 text-center">
        <div
          class="d-flex flex-wrap justify-center align-center ga-4 text-overline text-secondary"
        >
          <template
            v-for="(slogan, index) in store.company.slogan"
            :key="slogan"
          >
            <span>{{ slogan }}</span>
            <v-icon
              v-if="index < store.company.slogan.length - 1"
              icon="mdi-rhombus"
              color="accent"
              size="8"
            />
          </template>
        </div>
      </v-sheet>
    </v-container>
  </div>
</template>
