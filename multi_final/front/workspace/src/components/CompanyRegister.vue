<template>
  <v-app>
    <v-main id="divCompanyRegister">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center" dense>
          <v-col cols="12" sm="8" md="4" lg="4">
            <v-card elevation="0">
              <v-img
                src="@/assets/login.png"
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
                    id="companyRegisterEmail"
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
                    id="companyRegisterPassword"
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
                  <v-text-field
                    id="companyRegisterNumber"
                    v-model="companyNumber"
                    label="사업자 등록번호를 입력해 주세요."
                    name="companyNumber"
                    prepend-inner-icon="mdi-account"
                    type="text"
                    class="rounded-0"
                    outlined
                    required
                    :rules="companyNumberRule"
                    @keyup="getCompanyMask(companyNumber)"
                  />
                  <v-text-field
                    id="companyRegisterName"
                    v-model="companyName"
                    label="점포명을 입력해 주세요."
                    name="companyName"
                    prepend-inner-icon="mdi-account"
                    type="text"
                    class="rounded-0"
                    outlined
                    required
                    :rules="companyNameRule"
                  />
                  <v-text-field
                    id="companyRegisterAdmin"
                    v-model="companyAdmin"
                    label="대표자명을 입력해 주세요."
                    name="companyAdmin"
                    prepend-inner-icon="mdi-account"
                    type="text"
                    class="rounded-0"
                    outlined
                    required
                    :rules="nameRule"
                  />
                  <v-text-field
                    id="companyRegisterPhoneNumber"
                    v-model="phoneNumber"
                    label="전화번호를 입력해 주세요."
                    name="phoneNumber"
                    prepend-inner-icon="mdi-phone"
                    type="text"
                    class="rounded-0"
                    outlined
                    required
                    :rules="phoneNumberRule"
                    @keyup="getPhoneMask(phoneNumber)"
                  />
                  <v-text-field
                    id="companyRegisterAddress"
                    v-model="address"
                    label="주소를 입력해 주세요."
                    name="address"
                    prepend-inner-icon="mdi-book"
                    type="text"
                    class="rounded-0"
                    outlined
                  />
                  <v-file-input
                    v-model="companyDocument"
                    :error-messages="cafeImage"
                    label="사업자 증빙서류 업로드해 주세요."
                    filled
                    prepend-icon="mdi-file"
                    type="file"
                    class="rounded-0"
                    multiple
                    outlined
                    required
                    @input="$v.cafeImage.$touch()"
                    @blur="$v.cafeImage.$touch()"
                  />
                  <v-btn
                    id="companyRegisterSubmit"
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
      companyNumber: null,
      companyName: "",
      companyAdmin: "",
      phoneNumber: null,
      address: "",
      companyDocument: "",

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
      companyNameRule: [
        (v) => !!v || "점포명을 입력해주세요.",
        (v) =>
          !(v && (v.length > 20 || v.length < 1)) ||
          "점포명은 1~20 자로 입력해주세요",
        (v) => {
          const replaceV = v.replace(/(\s*)/g, "");
          const pattern = /^[가-힣]{1,20}$/;
          return pattern.test(replaceV) || "한글만 입력해주세요";
        },
      ],
      companyNumberRule: [
        (v) => !!v || "사업자 등록번호를 입력해주세요.",
        (v) => !(v && !(v.length == 12)) || "사업자 등록번호는 12자 입니다.",
        (v) => {
          const replaceV = v.replace(/(\s*)/g, "");
          const pattern = /(\d{3})-(\d{2})-(\d{5})/;
          return pattern.test(replaceV) || "사업자 등록번호 형식이 다릅니다.";
        },
      ],
      phoneNumberRule: [
        (v) => !!v || "전화번호를 입력해주세요.",
        (v) =>
          !(
            v &&
            (v.length > 13 || (v.length > 12 && v.substr(0, 2) == "02"))
          ) || "전화번호 형식이 다릅니다.",
        (v) => {
          const replaceV = v.replace(/(\s*)/g, "");
          const pattern = /(\d{2,3})-(\d{3,4})-(\d{4})/;
          return pattern.test(replaceV) || "전화번호 형식이 다릅니다.";
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
    },
    submit() {
      this.name = this.name.replace(/(\s*)/g, "");
      this.email = this.email.replace(/(\s*)/g, "");
      this.password = this.password.replace(/(\s*)/g, "");
      this.rePassword = this.rePassword.replace(/(\s*)/g, "");
    },
    getPhoneMask(val) {
      let res = this.getMask(val);
      this.phoneNumber = res;
      //서버 전송 값에는 '-' 를 제외하고 숫자만 저장
      this.model.phoneNumber = this.phoneNumber.replace(/[^0-9]/g, "");
    },
    getCompanyMask(val) {
      let res = this.getCompany(val);
      this.companyNumber = res;
      this.model.companyNumber = this.companyNumber.replace(/[^0-9]/g, "");
    },
    getCompany(companyNumber) {
      if (!companyNumber) return companyNumber;
      companyNumber = companyNumber.replace(/[^0-9]/g, "");
      let res = "";
      if (companyNumber.length < 3) {
        res = companyNumber;
      } else {
        if (companyNumber.length < 5) {
          res = companyNumber.substr(0, 3) + "-" + companyNumber.substr(3);
        } else {
          res =
            companyNumber.substr(0, 3) +
            "-" +
            companyNumber.substr(3, 2) +
            "-" +
            companyNumber.substr(5);
        }
      }
      return res;
    },
    getMask(phoneNumber) {
      if (!phoneNumber) return phoneNumber;
      phoneNumber = phoneNumber.replace(/[^0-9]/g, "");

      let res = "";
      if (phoneNumber.length < 3) {
        res = phoneNumber;
      } else {
        if (phoneNumber.substr(0, 2) == "02") {
          if (phoneNumber.length <= 5) {
            //02-123-5678
            res = phoneNumber.substr(0, 2) + "-" + phoneNumber.substr(2, 3);
          } else if (phoneNumber.length > 5 && phoneNumber.length <= 9) {
            //02-123-5678
            res =
              phoneNumber.substr(0, 2) +
              "-" +
              phoneNumber.substr(2, 3) +
              "-" +
              phoneNumber.substr(5);
          } else if (phoneNumber.length > 9) {
            //02-1234-5678
            res =
              phoneNumber.substr(0, 2) +
              "-" +
              phoneNumber.substr(2, 4) +
              "-" +
              phoneNumber.substr(6);
          }
        } else {
          if (phoneNumber.length < 8) {
            res = phoneNumber;
          } else if (phoneNumber.length == 8) {
            res = phoneNumber.substr(0, 4) + "-" + phoneNumber.substr(4);
          } else if (phoneNumber.length == 9) {
            res =
              phoneNumber.substr(0, 3) +
              "-" +
              phoneNumber.substr(3, 3) +
              "-" +
              phoneNumber.substr(6);
          } else if (phoneNumber.length == 10) {
            res =
              phoneNumber.substr(0, 3) +
              "-" +
              phoneNumber.substr(3, 3) +
              "-" +
              phoneNumber.substr(6);
          } else if (phoneNumber.length > 10) {
            //010-1234-5678
            res =
              phoneNumber.substr(0, 3) +
              "-" +
              phoneNumber.substr(3, 4) +
              "-" +
              phoneNumber.substr(7);
          }
        }
      }
      return res;
    },
  },
};
</script>

<style>
#divCompanyRegister * {
  font-size: 20px;
}
</style>
