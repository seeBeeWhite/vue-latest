// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Translations provided by Vuetify
import { ru } from "vuetify/locale";

// Composables
import { createVuetify, type ThemeDefinition } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const BrandTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: "#074166",
    secondary: "FFECB3",
    white: "#FFFFFF",
    black: "#212121",
    background: "#FAFAFA",
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
    defaultTheme: "BrandTheme",
    themes: {
      BrandTheme,
    },
  },
  defaults: {
    VBtn: { color: "primary", flat: "true" },
    VCard: {
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
