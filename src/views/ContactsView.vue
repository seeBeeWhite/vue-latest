<script setup lang="ts">
import { useCatalogStore } from "@/stores/catalog.ts";

const store = useCatalogStore();
const company = store.company;

interface Detail {
  label: string;
  value: string;
}

const details: Detail[] = [
  { label: "УНП", value: company.unp },
  { label: "Юридический адрес", value: company.legalAddress },
  { label: "Почтовый адрес", value: company.postAddress },
  { label: "Банк", value: company.bank },
  { label: "БИК", value: company.bik },
];

const accounts: string[] = [
  "р/с BYN — BY73 PJCB 3012 4122 7410 0000 0933",
  "р/с USD — BY62 PJCB 3012 4122 7410 0000 0840",
  "р/с RUB — BY46 PJCB 3012 4122 7410 0000 0643",
];
</script>

<template>
  <v-container class="pt-16">
    <header class="mb-12">
      <div class="text-overline text-secondary mb-2">Контакты</div>
      <h1 class="text-h4 font-weight-regular text-uppercase">
        {{ company.legalName }}
      </h1>
    </header>

    <v-row>
      <v-col cols="12" md="4">
        <div class="text-overline text-secondary mb-4">Связаться</div>

        <v-list bg-color="transparent" class="pa-0" lines="one">
          <v-list-item
            v-for="phone in company.phones"
            :key="phone"
            :href="`tel:${phone.replace(/\s/g, '')}`"
            :title="phone"
            prepend-icon="mdi-phone-outline"
            class="border-b px-0"
          />
          <v-list-item
            v-for="email in company.emails"
            :key="email"
            :href="`mailto:${email}`"
            :title="email"
            prepend-icon="mdi-email-outline"
            class="border-b px-0"
          />
        </v-list>
      </v-col>

      <v-col cols="12" md="8" class="ps-md-10">
        <div class="text-overline text-secondary mb-4">Реквизиты</div>

        <div>
          <v-row
            v-for="detail in details"
            :key="detail.label"
            no-gutters
            class="border-b py-4"
          >
            <v-col cols="12" sm="4" class="text-body-2 text-secondary pe-sm-6">
              {{ detail.label }}
            </v-col>
            <v-col cols="12" sm="8" class="text-body-2">
              {{ detail.value }}
            </v-col>
          </v-row>

          <v-row no-gutters class="border-b py-4">
            <v-col cols="12" sm="4" class="text-body-2 text-secondary pe-sm-6">
              Расчётные счета
            </v-col>
            <v-col cols="12" sm="8" class="text-body-2">
              <div v-for="account in accounts" :key="account">
                {{ account }}
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>

    <v-sheet
      color="transparent"
      class="border-t border-b mt-16 py-7 text-center"
    >
      <div
        class="d-flex flex-wrap justify-center align-center ga-4 text-overline text-secondary"
      >
        <template v-for="(slogan, index) in company.slogan" :key="slogan">
          <span>{{ slogan }}</span>
          <v-icon
            v-if="index < company.slogan.length - 1"
            icon="mdi-rhombus"
            color="accent"
            size="8"
          />
        </template>
      </div>
    </v-sheet>
  </v-container>
</template>
