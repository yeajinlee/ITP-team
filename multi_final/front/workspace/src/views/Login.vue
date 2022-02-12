<template>
  <div id="loginDiv">
    <v-tabs v-model="tab" background-color="white" dark centered>
      <v-tabs-slider color="blue" />
      <v-tab v-for="item in items" id="loginTab" :key="item.tab">
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
import NormalLogin from "@/components/NormalLogin";

export default {
  name: "App",
  components: {
    NormalLogin,

  },
  data: () => ({
    tab: null,
    items: [
      { tab: "로그인", content: "NormalLogin" },

    ],
  }),
  mounted() {},
  methods: {},
};
</script>

<style>
#loginTab {
  font-size: 35px;
  color: black;
}
</style>
