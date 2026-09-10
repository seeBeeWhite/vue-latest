<script setup lang="ts">
import { ref } from "vue";
import { Route } from "@/interfaces/route";

interface NavLink {
  title: string;
  to: { name: Route.Name };
}

const links: NavLink[] = [
  { title: "Главная", to: { name: Route.Name.HOME } },
  { title: "Каталог", to: { name: Route.Name.CATALOG } },
  { title: "Контакты", to: { name: Route.Name.CONTACTS } },
];

const drawer = ref(false);
</script>

<template>
  <v-app-bar color="background" height="72" border="b" flat>
    <v-container class="d-flex align-center fill-height">
      <v-btn
        :to="{ name: Route.Name.HOME }"
        variant="text"
        class="text-h6 font-weight-regular text-uppercase px-0"
      >
        МебельМакс
      </v-btn>

      <v-spacer />

      <nav class="d-none d-sm-flex ga-4" aria-label="Основная навигация">
        <v-btn
          v-for="link in links"
          :key="link.title"
          :to="link.to"
          :text="link.title"
          variant="text"
          size="small"
          color="secondary"
          active-color="primary"
        />
      </nav>

      <v-app-bar-nav-icon
        class="d-sm-none"
        aria-label="Открыть меню"
        @click="drawer = !drawer"
      />
    </v-container>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary location="right">
    <v-list nav>
      <v-list-item
        v-for="link in links"
        :key="link.title"
        :to="link.to"
        :title="link.title"
        @click="drawer = false"
      />
    </v-list>
  </v-navigation-drawer>
</template>
