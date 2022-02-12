<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row align="center" justify="center" dense>
          <v-col cols="12" sm="8" md="4" lg="4">
            <v-card elevation="0">
              <div class="text-center">
                <h1 class="mb-2">비밀번호를 잊으셨나요?</h1>
                <p id="passwordHelp">
                  아래에 입력하신 이메일로 비밀번호를 변경할 수 있는 메일을
                  보내드립니다.
                </p>
              </div>
              <a href="#">
                <v-img
                  src="@/assets/login.png"
                  alt="vuetify components logo"
                  contain
                  height="200"
                />
              </a>
              <v-form>
                <v-text-field
                  ref="cursor"
                  v-model="email"
                  label="Enter your email address"
                  name="email"
                  prepend-inner-icon="mdi-email"
                  type="email"
                  class="rounded-0"
                  outlined
                  required
                  :rules="emailRule"
                />
                <v-btn
                  class="rounded-0"
                  color="black"
                  x-large
                  block
                  dark
                  @onclick="submit()"
                >
                  Reset Password
                </v-btn>
              </v-form>
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
      email: "",
      emailRule: [
        (v) => !!v || "이메일을 입력해주세요.",
        (v) => {
          const replaceV = v.replace(/(\s*)/g, "");
          const pattern =
            /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
          return pattern.test(replaceV) || "이메일 형식으로 입력해주세요";
        },
      ],
    };
  },
  mounted() {
    this.startCursor();
  },
  methods: {
    startCursor() {
      this.$refs.cursor.focus();
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    submit() {
      this.email = this.email.replace(/(\s*)/g, "");
    },
  },
};
</script>

<style>
#passwordHelp {
  font-size: 20px;
}
</style>
