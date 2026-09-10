<script setup lang="ts">
import { computed } from "vue";
import { useCatalogStore } from "@/stores/catalog.ts";
import type { CategoryId } from "@/interfaces/catalog.ts";

interface Props {
  category: CategoryId;
  finishHex?: string;
}

const props = withDefaults(defineProps<Props>(), {
  finishHex: "",
});

const store = useCatalogStore();
const body = computed(
  () =>
    props.finishHex || store.finishById(store.activeFinish)?.hex || "#C8A97E",
);
const stroke = "#1A1A1A";
const label = computed(
  () => store.categoryName(props.category) || props.category,
);
</script>

<template>
  <svg
    viewBox="0 0 200 200"
    class="w-100 h-100 d-block"
    role="img"
    :aria-label="label"
  >
    <g
      v-if="category === 'stellage'"
      :stroke="stroke"
      stroke-width="2"
      fill="none"
    >
      <rect x="60" y="24" width="80" height="152" :fill="body" />
      <line x1="60" y1="62" x2="140" y2="62" />
      <line x1="60" y1="100" x2="140" y2="100" />
      <line x1="60" y1="138" x2="140" y2="138" />
    </g>

    <g
      v-else-if="category === 'cabinet'"
      :stroke="stroke"
      stroke-width="2"
      fill="none"
    >
      <rect x="58" y="24" width="84" height="152" :fill="body" />
      <line x1="100" y1="24" x2="100" y2="176" />
      <circle cx="94" cy="100" r="2.4" :fill="stroke" />
      <circle cx="106" cy="100" r="2.4" :fill="stroke" />
    </g>

    <g
      v-else-if="category === 'pedestal'"
      :stroke="stroke"
      stroke-width="2"
      fill="none"
    >
      <rect x="66" y="70" width="68" height="106" :fill="body" />
      <line x1="66" y1="96" x2="134" y2="96" />
      <line x1="66" y1="122" x2="134" y2="122" />
      <line x1="66" y1="148" x2="134" y2="148" />
      <line x1="90" y1="83" x2="110" y2="83" stroke-width="3" />
      <line x1="90" y1="109" x2="110" y2="109" stroke-width="3" />
      <line x1="90" y1="135" x2="110" y2="135" stroke-width="3" />
    </g>

    <g v-else :stroke="stroke" stroke-width="2" fill="none">
      <rect x="32" y="74" width="136" height="14" :fill="body" />
      <rect x="40" y="88" width="14" height="74" :fill="body" />
      <rect x="146" y="88" width="14" height="74" :fill="body" />
    </g>
  </svg>
</template>
