import "./axios";

// Types
import type { App } from "vue";

// Plugins
import router from "../router";
import pinia from "../stores";
import scroll from "./scroll-to";
import vuetify from "./vuetify";

export function registerPlugins(app: App) {
  app.use(router).use(pinia).use(vuetify).use(scroll.instance, scroll.options);
}
