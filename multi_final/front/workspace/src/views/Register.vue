<template>
  <div id="registerDiv">
    <v-tabs v-model="tab" background-color="white" dark centered>
      <v-tabs-slider color="blue" />
      <v-tab v-for="item in items" id="registerTab" :key="item.tab">
        {{ item.tab }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item.tab">
        <v-card flat>
          <v-card-text>
            <component :is="item.content" />
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import NormalRegister from "@/components/NormalRegister";
import CompanyRegister from "@/components/CompanyRegister";
export default {
  name: "App",
  components: {
    NormalRegister,
    CompanyRegister,
  },
  data: () => ({
    tab: null,
    items: [
      { tab: "회원가입", content: "NormalRegister" },
    ],
  }),
};
</script>

<style>
#registerTab {
  font-size: 35px;
  color: black;
}
</style>
