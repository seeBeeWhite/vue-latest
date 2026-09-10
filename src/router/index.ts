import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

import { Route } from "@/interfaces/route.ts";

const routes: RouteRecordRaw[] = [
  {
    path: Route.Path.HOME,
    name: Route.Name.HOME,
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: Route.Path.CATALOG,
    name: Route.Name.CATALOG,
    component: () => import("@/views/CatalogView.vue"),
  },
  {
    path: Route.Path.PRODUCT,
    name: Route.Name.PRODUCT,
    component: () => import("@/views/ProductView.vue"),
    props: true,
  },
  {
    path: Route.Path.CONTACTS,
    name: Route.Name.CONTACTS,
    component: () => import("@/views/ContactsView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: Route.Name.HOME },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
