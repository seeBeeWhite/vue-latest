// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Translations provided by Vuetify
import { ru } from "vuetify/locale";

// Composables
import { createVuetify, type ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const hisantaLight: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#FFFFFF",
    surface: "#FFFFFF",
    "surface-variant": "#F5F5F3",
    primary: "#1A1A1A",
    secondary: "#6B6B66",
    "on-background": "#1A1A1A",
    "on-surface": "#1A1A1A",
    "on-primary": "#FFFFFF",
    accent: "#C8A97E",
  },
  variables: {
    "border-color": "#E6E6E2",
    "border-opacity": 1,
    "medium-emphasis-opacity": 0.72,
    "high-emphasis-opacity": 0.94,
  },
};

export default createVuetify({
  locale: {
    locale: "ru",
    messages: { ru },
  },
  date: {
    locale: {
      ru: "ru-RU",
    },
  },
  components,
  directives,
  theme: {
    defaultTheme: "hisantaLight",
    themes: {
      hisantaLight,
    },
  },
  defaults: {
    VBtn: {
      color: "primary",
      flat: true,
      rounded: "lg",
      elevation: 0,
      height: 48,
    },
    VCard: {
      flat: true,
      rounded: "lg",
      VCardActions: {
        VBtn: { variant: "flat" },
      },
    },
    VChip: { variant: "outlined", size: "small", label: true },
    VDataTableServer: {
      VChip: { style: "min-width: 86px" },
    },
    VDialog: {
      VCard: {
        VCardTitle: { class: "bg-primary" },
        VCardActions: {
          VBtn: { color: "primary" },
        },
      },
    },
    VSelect: { variant: "underlined" },
    VTabs: { class: "text-medium-emphasis" },
    VTextField: { variant: "outlined", clearIcon: "mdi-close" },
    VTextarea: { variant: "outlined", clearIcon: "mdi-close" },
    VFileInput: { variant: "outlined", clearIcon: "mdi-close" },
    VAutocomplete: { variant: "outlined", clearIcon: "mdi-close" },
  },
});
