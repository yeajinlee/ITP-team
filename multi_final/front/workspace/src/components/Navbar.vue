<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
      extended
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>ITP</v-toolbar-title>

      <v-spacer></v-spacer>

  <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
    </v-app-bar>
  </div>
</template>

