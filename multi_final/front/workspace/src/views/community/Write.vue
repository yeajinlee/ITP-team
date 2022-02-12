<template>
  <div id="writeDiv">
    <v-card>
      <div id="writeTitle">
        <v-text-field placeholder="카페명을 입력해주세요." />
      </div>
      <div id="writeText">
        <v-textarea
          solo
          name="input"
          background-color="amber lighten-4"
          label="의견을 남겨주세요."
        />
      </div>
      <div id="writeCafe">
        <v-divider class="mx-4" />
        <v-card-text>
          이미지 첨부 1Mb 이내 1장만 가능 : jpg,png,bmp만 가능
        </v-card-text>
        <v-file-input
          :rules="rules"
          accept="image/png, image/jpeg, image/bmp"
          class="fileSelect pa-8"
          prepend-icon="mdi-camera"
          counter
          show-size
          small-chips
          truncate-length="10"
          label="여기를 눌러 이미지 파일을 첨부해주세요."
          color="black"
        />
      </div>
      <v-row id="writeTag">
        <v-card-text>
          <v-chip-group
            v-model="selection"
            active-class="orange darken-4 white--text"
            column
          >
            <v-chip>모던</v-chip>
            <v-chip>클래식</v-chip>
            <v-chip>깔끔한</v-chip>
            <v-chip>화려한</v-chip>
          </v-chip-group>
        </v-card-text>
      </v-row>
      <div id="writeRating">
        <v-rating
          v-model="rating"
          color="yellow darken-3"
          background-color="grey darken-1"
          empty-icon="$ratingFull"
          half-increments
          small
        />
        <p>{{ rating }}</p>
      </div>

      <v-card id="writeBtn" color="">
        <router-link :to="{ name: 'Community' }">
          <v-btn id="confirm" text color="black"> 작성하기 </v-btn>
        </router-link>
        <router-link :to="{ name: 'Community' }">
          <v-btn id="cancle" text color="black"> 돌아가기 </v-btn>
        </router-link>
      </v-card>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    rules: [
      (value) =>
        !value ||
        value.size < 1000000 ||
        "첨부하는 사진의 크기는 1 MB 이하여야 합니다.",
    ],
    writeTitle: "카페명을 입력해주세요",
  }),
  computed: {
    cafeImagePath() {
      return "@/assets/logo.png";
    },
  },
  async mounted() {
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
#writeDiv * {
  padding: 1px;
  margin: 12px;
  font-size: 20px;
}
#writeTitle {
  display: flex;
  text-align: bottom;
  align-items: center;
  flex-direction: row;
}
#writeTitle * {
  margin: 0px;
  padding: 0px;
  padding-bottom: 5px;
  font-size: 40px;
}
#writeText * {
  margin: 0px;
  padding: 0px;
  height: 385px;
}
#writeCafe {
  border-bottom: 2px solid rgb(216, 216, 214);
}
#writeCafe * {
  margin: 0px;
  padding: 0px;
}
#writeTag * {
  margin: 0px;
  margin-right: 10px;
  font-size: 30px;
}

#writeRating {
  margin-bottom: 0px;
  display: flex;
  text-align: bottom;
  align-items: center;
  flex-direction: row;
  border-top: 2px solid rgb(213, 94, 45);
}
#writeBtn {
  margin: 10px;
  padding: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
}
#writeBtn * {
  margin: 0px;
  padding: auto;
  font-size: 30px;
  box-shadow: none;
  width: 50%;
}

#writeBtn *:hover {
  background-color: rgb(216, 216, 214);
}
</style>
