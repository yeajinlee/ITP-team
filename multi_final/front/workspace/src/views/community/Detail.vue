<template>
  <div id="itemDiv">
    <v-card>
      <div id="itemUser">
        <v-img
          :src="$route.query.profileIcon"
          contain
          max-width="80px"
          max-height="80px"
        />
        <p>{{ $route.query.userName }}</p>
      </div>
      <div id="itemTitle">
        <p>{{ $route.query.title }}</p>
      </div>
      <div id="itemText">
        <p v-for="text in $route.query.texts" :key="text.id">
          {{ text.text }}
        </p>
      </div>
      <div id="itemCafe">
        <v-img
          :src="$route.query.cafeImage"
          contain
          height="450px"
          max-width=""
          max-height=""
        />
      </div>
      <v-row id="itemTag">
        <v-card-text>
          <v-chip-group column>
            <v-chip
              v-for="tag in $route.query.tags"
              :key="tag.id"
              color="orange"
            >
              {{ tag.tag }}
            </v-chip>
          </v-chip-group>
        </v-card-text>
      </v-row>
      <div id="itemRating">
        <v-rating
          v-model="$route.query.rating"
          color="yellow darken-3"
          background-color="grey darken-1"
          empty-icon="$ratingFull"
          half-increments
          small
          readonly
        />
        <p>{{ $route.query.rating }}</p>
      </div>
      <router-link :to="{ name: 'Community' }">
        <v-card class="list" color="" outlined>
          <v-btn id="list" text color="black" width="100%"> 목록으로 </v-btn>
        </v-card>
      </router-link>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  computed: {},
  async mounted() {
    this.startCursor();
  },
  methods: {
    refreshAll() {
      // 새로고침
      this.$router.go();
    },
    startCursor() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style>
#list {
  font-size: 40px;
}
</style>
