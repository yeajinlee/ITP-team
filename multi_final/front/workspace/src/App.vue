<template>
  <v-app id="top">
    <Navbar />

    <div id="view">
      <router-view name="app" />
    </div>
    <v-btn id="topbtn" outlined="none" @click="gotop()">
      <v-icon color="#2f5d8c" size="40px"> mdi-arrow-up-bold-circle </v-icon>
    </v-btn>
  </v-app>
  
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
  methods: {
    gotop() {
      var location = document.querySelector("#top").offsetTop;
      window.scrollTo({ top: location, behavior: "smooth" });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap");
* {
  font-family: "Nanum Pen Script";

}
#view {
  padding: 50px;
}
#topbtn {
  position: fixed;
  bottom: 64px;
  right: 10px;

  z-index: 99;
  background-color: none;
  border: none;
}
</style>
