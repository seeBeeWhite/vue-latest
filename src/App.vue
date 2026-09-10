<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<template>
  <v-app>
    <AppHeader />

    <v-main>
      <router-view v-slot="{ Component, route }">
        <v-fade-transition mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </v-fade-transition>
      </router-view>

      <AppFooter />
    </v-main>
  </v-app>
</template>
