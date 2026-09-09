<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <h1>You did it!</h1>
  <p>{{ msg }}</p>
</template>

<style scoped></style>
