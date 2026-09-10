<script setup lang="ts">
import { useCatalogStore } from "@/stores/catalog.ts";

const store = useCatalogStore();
const company = store.company;
const year = new Date().getFullYear();
</script>

<template>
  <v-footer class="d-block bg-background border-t mt-16 py-10">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <div class="text-h6 font-weight-regular text-uppercase">HISANTA</div>
          <p class="text-body-2 text-secondary mt-1">
            Коллекция мебели для офиса
          </p>
        </v-col>

        <v-col cols="12" sm="6" md="2">
          <div class="text-overline text-secondary mb-2">Разделы</div>
          <v-list bg-color="transparent" density="compact" class="pa-0">
            <v-list-item :to="{ name: 'home' }" title="Главная" class="px-0" />
            <v-list-item
              :to="{ name: 'catalog' }"
              title="Каталог"
              class="px-0"
            />
            <v-list-item
              :to="{ name: 'contacts' }"
              title="Контакты"
              class="px-0"
            />
          </v-list>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <div class="text-overline text-secondary mb-2">Контакты</div>
          <v-list bg-color="transparent" density="compact" class="pa-0">
            <v-list-item
              v-for="phone in company.phones"
              :key="phone"
              :href="`tel:${phone.replace(/\s/g, '')}`"
              :title="phone"
              prepend-icon="mdi-phone-outline"
              class="px-0"
            />
            <v-list-item
              v-for="email in company.emails"
              :key="email"
              :href="`mailto:${email}`"
              :title="email"
              prepend-icon="mdi-email-outline"
              class="px-0"
            />
          </v-list>
        </v-col>

        <v-col cols="12" sm="6" md="4">
          <div class="text-overline text-secondary mb-2">Компания</div>
          <p class="text-body-2 text-secondary">{{ company.legalName }}</p>
          <p class="text-body-2 text-secondary mt-1">УНП {{ company.unp }}</p>
        </v-col>
      </v-row>

      <v-divider class="my-6" />

      <div
        class="d-flex flex-column flex-sm-row justify-space-between ga-3 text-caption text-secondary"
      >
        <span>© {{ year }} {{ company.brand }}</span>
        <span class="text-uppercase">{{ company.slogan.join(" · ") }}</span>
      </div>
    </v-container>
  </v-footer>
</template>
