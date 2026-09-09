<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

// Components
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/images/logo.svg"
      width="125"
      height="125"
    />

    <div>
      <HelloWorld msg="Hello World" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
