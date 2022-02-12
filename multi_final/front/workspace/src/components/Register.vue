<template>
  <v-app>
    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
          dense
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
            lg="4"
          >
            <v-card elevation="0">
              <v-img
                src="@/assets/logo.png"
                alt="Fedorae Education Log"
                containheight="200"
              />
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="name"
                    label="Enter your name"
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
                    label="Enter your email"
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
                    label="Enter your password"
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
                    label="Re-enter your password"
                    name="password"
                    prepend-inner-icon="mdi-lock-outline"
                    type="password"
                    class="rounded-0"
                    outlined
                    required
                    :rules="rePasswordRule"
                  />
                  <v-btn
                    class="rounded-0"
                    color="#000000"
                    x-large
                    block
                    dark
                    @onclick="submit()"
                  >
                    Register
                  </v-btn>
                  <v-card-actions class="text--secondary">
                    <v-spacer />
                    <!-- <router-link :to="{ name: 'SignUp' }">Sign Up</router-Link>-->
                    Already have an account? |
                    <a
                      href="#"
                      class="p1-2"
                      style="color: #000000"
                    > Sign In</a>
                  </v-card-actions>
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
    };
  },
  methods: {
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
</style>
