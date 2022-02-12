<template>
  <div id="itemDiv">
    <v-card>
      <div id="itemUser">
        <v-img
          :src="profileIcon"
          contain
          max-width="80px"
          max-height="80px"
        />
        <p>{{ userName }}</p>
      </div>
      <div id="itemText">
        <p
          v-for="text in texts"
          :key="text.id"
        >
          {{ text.text }}
        </p>
      </div>
      <div id="itemCafe">
        <v-img
          :src="cafeImage"
          contain
          height="450px"
          max-width=""
          max-height=""
        />
      </div>
      <v-row id="itemTag">
        <p
          v-for="tag in tags"
          :key="tag.id"
        >
          {{ tag.tag }}
        </p>
      </v-row>
      <div id="itemRating">
        <v-rating
          v-model="rating"
          color="yellow darken-3"
          background-color="grey darken-1"
          empty-icon="$ratingFull"
          half-increments
          small
          readonly
        />
        <p>{{ rating }}</p>
      </div>
      <router-link :to="{ name: 'Community' }">
        <v-card
          class="list"
          color=""
          outlined
        >
          <v-btn
            id="list"
            text
            color="black"
            width="100%"
          >
            목록으로
          </v-btn>
        </v-card>
      </router-link>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      default: "닉네임",
    },
    profileIcon: {
      type: String,
      default: require("@/assets/community/profileIcon.png"),
    },
    texts: {
      type: Array,
      default: () => [
        { id: 1, text: "안녕하세요" },
        { id: 1, text: "반갑습니다." },
        { id: 1, text: "안녕히가세요" },
      ],
    },
    cafeImage: {
      type: String,
      default: require("@/assets/community/starbucks.png"),
    },
    tags: {
      type: Array,
      default: () => [
        { id: 1, tag: "모던" },
        { id: 2, tag: "깔끔한" },
      ],
    },
    rating: {
      type: Number,
      default: 4.5,
    },
  },
  data: () => ({}),
  computed: {
    cafeImagePath() {
      return "@/assets/logo.png";
    },
  },
  async mounted() {},
  methods: {
    tagTypeName(tagId, index) {
      for (const tag of this.tags) {
        if (tag.id == tagId) {
          if (this.cafe.tag_ids.length - 1 == index) {
            return tag.name;
          } else {
            return tag.name + ",";
          }
        }
      }
    },
  },
};
</script>

<style>
#itemDiv * {
  padding: 1px;
  margin: 12px;
  font-size: 20px;
}
#itemUser {
  display: flex;
  text-align: bottom;
  align-items: center;
  flex-direction: row;
  border-bottom: 2px solid rgb(160, 179, 193);
}
#itemUser * {
  margin: 0px;
  padding: 0px;
  font-size: 40px;
}
#itemText {
}
#itemText * {
  margin: 0px;
  padding: 0px;
}
#itemCafe {
  border-top: 2px solid rgb(216, 216, 214);
  border-bottom: 2px solid rgb(216, 216, 214);
}
#itemCafe * {
  margin: 0px;
  padding: 0px;
}
#itemTag * {
  background: rgb(213, 94, 45);
  height: 40px;
  width: 80px;
  border-radius: 15px;
  font-size: 30px;
  text-align: center;
  margin: 2px;
}
#itemRating {
  display: flex;
  text-align: bottom;
  align-items: center;
  flex-direction: row;
  border-top: 2px solid rgb(213, 94, 45);
}
#list {
  font-size: 40px;
}
</style>
