<template>
  <div>
    <v-row justify="center">
    </v-row>
        <Item />
  </div>
</template>

<script>


import Item from "@/components/community/Item.vue";
export default {
  components: {
    Item,
  },
  data: () => ({
  }),
  mounted() {
    this.startCursor();
  },
  methods: {
    startCursor() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },

};
</script>
<style>
</style>
