<template>
  <v-app>
    <v-main id="divNormalRegister">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center" dense>
          <v-col cols="12" sm="8" md="4" lg="4">
            <v-card elevation="0">
              <v-img
                src="@/assets/Login.jpg"
                alt="Fedorae Education Log"
                containheight="200"
              />
              <v-card-text>
                <v-form>
                  <v-text-field
                    ref="cursor"
                    v-model="name"
                    label="닉네임을 입력해 주세요."
                    name="name"
                    prepend-inner-icon="mdi-account"
                    type="text"
                    class="rounded-0"
                    outlined
                    required
                    :rules="nameRule"
                  />
                  <v-text-field
                    v-model="email"
                    label="이메일을 입력해 주세요."
                    name="email"
                    prepend-inner-icon="mdi-mail"
                    type="email"
                    class="rounded-0"
                    outlined
                    required
                    :rules="emailRule"
                  />
                  <v-text-field
                    v-model="password"
                    label="비밀번호를 입력해 주세요."
                    name="password"
                    prepend-inner-icon="mdi-lock"
                    type="password"
                    class="rounded-0"
                    outlined
                    required
                    :rules="passwordRule"
                  />
                  <v-text-field
                    v-model="rePassword"
                    label="비밀번호를 재입력해 주세요."
                    name="password"
                    prepend-inner-icon="mdi-lock-outline"
                    type="password"
                    class="rounded-0"
                    outlined
                    required
                    :rules="rePasswordRule"
                  />
                  <v-file-input
                    :rules="profileRule"
                    accept="image/png, image/jpeg, image/bmp"
                    class="fileSelect rounded-0"
                    prepend-icon="mdi-camera"
                    counter
                    show-size
                    outlined
                    label="여기를 눌러 프로필 파일을 첨부해주세요."
                    color="black"
                  />
                  <v-btn
                    id="normalRegisterSubmit"
                    class="rounded-0"
                    color="#000000"
                    x-large
                    block
                    dark
                    @onclick="submit()"
                  >
                    Register
                  </v-btn>
                </v-form>
              </v-card-text>
              <v-card-actions class="ml-6 mr-6 text-center" />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      nameRule: [
        (v) => !!v || "이름을 입력해주세요.",
        (v) =>
          !(v && (v.length > 5 || v.length < 2)) ||
          "이름은 2~5 자로 입력해주세요",
        (v) => {
          const replaceV = v.replace(/(\s*)/g, "");
          const pattern = /^[가-힣]{2,5}$/;
          return pattern.test(replaceV) || "한글만 입력해주세요";
        },
      ],
      emailRule: [
        (v) => !!v || "이메일을 입력해주세요.",
        (v) => {
          const replaceV = v.replace(/(\s*)/g, "");
          const pattern =
            /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
          return pattern.test(replaceV) || "이메일 형식으로 입력해주세요";
        },
      ],
      passwordRule: [
        (v) => !!v || "비밀번호를 입력해주세요.",
        (v) => {
          const replaceV = v.replace(/(\s*)/g, "");
          return replaceV.length >= 8 || "8자리 이상 입력해주세요.";
        },
      ],
      rePasswordRule: [
        (v) => !!v || "비밀번호를 입력해주세요.",
        (v) => {
          const replaceV = v.replace(/(\s*)/g, "");
          return replaceV.length >= 8 || "8자리 이상 입력해주세요.";
        },
        (v) => v == this.password || "입력된 비밀번호가 다릅니다.",
      ],
      profileRule: [
        (value) =>
          !value ||
          value.size < 1000000 ||
          "첨부하는 사진의 크기는 1 MB 이하여야 합니다.",
      ],
    };
  },
  mounted() {
    this.startCursor();
  },
  methods: {
    startCursor() {
      this.$refs.cursor.focus();
      var location = document.querySelector("#normalRegisterSubmit").offsetTop;
      window.scrollTo({ top: location, behavior: "smooth" });
    },
    submit() {
      this.name = this.name.replace(/(\s*)/g, "");
      this.email = this.email.replace(/(\s*)/g, "");
      this.password = this.password.replace(/(\s*)/g, "");
      this.rePassword = this.rePassword.replace(/(\s*)/g, "");
    },
  },
};
</script>

<style>
#divNormalRegister * {
  font-size: 20px;
}
</style>
