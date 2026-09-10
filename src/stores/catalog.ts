import { defineStore } from "pinia";
import { PRODUCTS, CATEGORIES, FINISHES, COMPANY } from "@/data/catalog";
import type {
  Category,
  CategoryId,
  Company,
  Finish,
  FinishId,
  Product,
} from "@/interfaces/catalog.ts";

export interface CategoryTab {
  id: "all" | CategoryId;
  name: string;
}

interface CatalogState {
  products: Product[];
  categories: Category[];
  finishes: Finish[];
  company: Company;
  activeCategory: "all" | CategoryId;
  activeFinish: FinishId;
}

export const useCatalogStore = defineStore("catalog", {
  state: (): CatalogState => ({
    products: PRODUCTS,
    categories: CATEGORIES,
    finishes: FINISHES,
    company: COMPANY,
    activeCategory: "all",
    activeFinish: "oak-sonoma",
  }),

  getters: {
    categoryTabs: (state): CategoryTab[] => [
      { id: "all", name: "Все" },
      ...state.categories,
    ],

    filteredProducts: (state): Product[] => {
      if (state.activeCategory === "all") return state.products;
      return state.products.filter((p) => p.category === state.activeCategory);
    },

    productById:
      (state) =>
      (id: string): Product | undefined =>
        state.products.find((p) => p.id === id),

    finishById:
      (state) =>
      (id: FinishId): Finish | undefined =>
        state.finishes.find((f) => f.id === id),

    categoryName:
      (state) =>
      (id: CategoryId): string =>
        state.categories.find((c) => c.id === id)?.name ?? "",
  },
});
