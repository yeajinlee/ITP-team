<template>
  <v-container id="board_body">
    <v-toolbar
      dark
    >
      <template>
        <v-tabs
          v-model="tabs"
          centered
        >
          <v-tab :to="pages[0].to">
            {{ pages[0].title }}
          </v-tab>
          <v-tab :to="pages[1].to">
            {{ pages[1].title }}
          </v-tab>
          <v-tab :to="pages[2].to">
            {{ pages[2].title }}
          </v-tab>
          <v-tab :to="pages[3].to">
            {{ pages[3].title }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <!--1대1문의 본문-->
    <div class="d-flex justify-end">
      <v-row
        align="center"
        justify="space-around"
      >
        <v-spacer />
        <v-btn
          class="ma-10"
          large
        
          @click="write"
        >
          <v-icon left>
            mdi-pencil
          </v-icon>
          {{ btn_name }}
        </v-btn>
      </v-row>
    </div>

    <div class="d-flex justify-start">
      <v-card
        class="ma-1"
        width="100%"
        :max-width="listSize"
      >
        <v-toolbar>
          <v-toolbar-title id="font36">
            예약 내역
          </v-toolbar-title>
          <v-spacer />
        </v-toolbar>

        <v-list>
          <v-list-group
            v-for="item in items"
            :key="item.title"
            v-model="item.active"
            no-action
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title
                  id="font28"
                  v-text="item.title"
                />
              </v-list-item-content>
            </template>
            <v-icon
              slot="prependIcon"
              large
              color="black"
            >
              {{ item.action }}
            </v-icon>

            <v-list-item
              v-for="child in item.list"
              :key="child.content"
            >
              <v-list-item-content>
                <v-list-item-title
                  id="font28"
                  v-text="child.content"
                />
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-card>
      <!-- 예약 신청 폼 -->
      <v-card
        v-if="seen"
        width="100%"
      >
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-card-text>
            <v-card>
              <v-toolbar
                color="cyan"
                dark
                flat
              >
                <v-toolbar-title>예약 신청</v-toolbar-title>



                <template v-slot:extension>
                  <v-tabs
                    v-model="model"
                    centered
                    slider-color="black"
                  >
                    <v-tab
                      :key="1"
                      :href="`#tab-${1}`"
                    >
                      개인
                    </v-tab>
                    <v-tab
                      :key="2"
                      :href="`#tab-${2}`"
                    >
                      단체
                    </v-tab>
                  </v-tabs>
                </template>
              </v-toolbar>
              <!-- ---------------------------- 개인 시작 ---------------------------- -->
              <v-tabs-items v-model="model">
                <v-tab-item
                  v-for="i in 1"
                  :key="i"
                  :value="`tab-${1}`"
                >
                  <v-text-field
                    v-model.trim="title"
                    prepend-inner-icon="mdi-account"
                    class="ma-8 titleText"
                    :rules="nameRule"
                    label="이름"
                    required
                  />
                  <v-text-field
                    v-model.trim="phone"
                    prepend-inner-icon="mdi-cellphone"
                    class="ma-8 titleText"
                    :rules="phoneRule"
                    label="핸드폰 번호"
                    required
                  />
                  <v-text-field
                    v-model.trim="email"
                    prepend-inner-icon="mdi-mail"
                    class="ma-8 titleText"
                    :rules="emailRule"
                    label="이메일 주소"
                    required
                  />          
                  
                  <v-row align="center">
                    <p class="d-flex mx-auto" />
                    <!--                     <v-col
                      class="d-flex"
                      cols="4"
                      sm="2"
                    >
                      <v-select
                        key="koreaArea1"
                        v-model="koreaArea"
                        :items="area"
                        label="지역"
                        required 
                      /> 
                    </v-col> -->
                    <v-col
                      class="d-flex"
                      cols="10"
                      sm="5"
                    >
                      <v-select
                        v-model="koreaObservatory"
                        :items="observatory"
                        label="천문대"
                        required
                      />
                    </v-col>

                    <p class="d-flex mx-auto" />
                  </v-row>
                  <v-textarea
                    v-model.trim="textarea"
                    height="62px"
                    class="mx-4 mt-4 inquiryText"
                    solo
                    name="input"
                    background-color="amber lighten-4"
                    no-resize
                    label="기타 사항을 남겨주세요."
                    :rules="textAreaRule"
                    required
                  />
                  
                  <v-card flat>
                    <v-card-text v-text="text" />
                  </v-card>
                </v-tab-item>
                            
                <!-- ---------------------------- 개인 끝 ---------------------------- -->


                <!-- ---------------------------- 단체 시작 ---------------------------- -->
                <v-tab-item
                  v-for="i in 1"
                  :key="i"
                  :value="`tab-${2}`"
                >
                  <v-text-field
                    v-model.trim="title"
                    prepend-inner-icon="mdi-account"
                    class="ma-8 titleText"
                    :rules="nameRule"
                    label="이름"
                    required
                  />
                  <v-text-field
                    v-model.trim="phone"
                    prepend-inner-icon="mdi-cellphone"
                    class="ma-8 titleText"
                    :rules="phoneRule"
                    label="핸드폰 번호"
                    required
                  />
                  <v-text-field
                    v-model.trim="email"
                    prepend-inner-icon="mdi-mail"
                    class="ma-8 titleText"
                    :rules="emailRule"
                    label="이메일 주소"
                    required
                  />
                  <v-text-field
                    v-model.trim="company"
                    prepend-inner-icon="mdi-store"
                    class="ma-8 titleText"
                    :rules="companyRule"
                    label="단체명"
                    required
                  />                   
                  <v-row align="center">
                    <p class="d-flex mx-auto" />
                    <!--                     <v-col
                      class="d-flex"
                      cols="4"
                      sm="2"
                    >
                      <v-select
                        v-model="koreaArea"
                        :items="area"
                        label="지역"
                        required
                      />
                    </v-col> -->
                    <v-col
                      class="d-flex"
                      cols="10"
                      sm="5"
                    >
                      <v-select
                        v-model="koreaObservatory"
                        :items="observatory"
                        label="천문대"
                        required
                      />
                    </v-col>

                    <p class="d-flex mx-auto" />
                  </v-row>
                  <v-textarea
                    v-model.trim="textarea"
                    height="62px"
                    class="mx-4 mt-4 inquiryText"
                    solo
                    name="input"
                    background-color="amber lighten-4"
                    no-resize
                    label="기타 사항을 남겨주세요."
                    :rules="textAreaRule"
                    required
                  /> 

                  <!-- ---------------------------- 단체 끝 ---------------------------- -->
                  <v-card flat>
                    <v-card-text v-text="text" />
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-card>
          </v-card-text>

          <v-card-actions class="d-flex justify-space-around">
            <div class="text-center">
              <v-dialog
                v-model="dialog"
                persistent
                width="500"
              >
                <template v-slot:activator="{ valid }">
                  <v-btn
                    color="#2f5d8c"
                    dark
                    v-bind="valid"
                    @click="validate"
                  >
                    보내기
                  </v-btn>
                </template>

                <v-card>
                  <v-card-text class="text-h6 pa-4">
                    예약 신청해주셔서 감사합니다.<br>
                    내용 확인 후 연락드리겠습니다.
                  </v-card-text>

                  <v-card-actions>
                    <v-btn
                      color="#2f5d8c"
                      class="white--text"
                      @click="finished"
                    >
                      확인
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </v-card-actions>
        </v-form>
      </v-card>
      <!-- 예약 신청폼 끝 -->
    </div>
  </v-container>
</template>
<script>

export default {
  data() {
    return {
      /* area : ['서울', '강원도', '경기도', '충청도', '전라도', '경상도'], */
      observatory : ['------------- 서울 -------------',
        '테코천문대',
        '한국우주전파관측망 연세대학교천문대',
        '창동청소년문화의집(옥상천문대)',
        '노원우주학교',
        '국립서울과학관',
        '광진청소년수련관',
        '서울과학전시관 천문대',
        '------------- 강원도 -------------',
        '화천청소년수련관 (광덕산그린천문대)',
        '횡성우리별천문대',
        '양구국토정중앙천문대',
        '평창청소년수련원(은하수천문대)',
        '횡성천문인마을',
        '영월별마로천문대',
        '------------- 경기도 -------------',

        '------------- 충청도 -------------',

        '------------- 전라도 -------------',

        '------------- 경상도 -------------',
        
      ],
      pages: [
        { title: "예약", to: "/reservation" },
        { title: "자주묻는 질문", to: "FaQ" },
        { title: "1:1 문의", to: "/Inquiry" },
        { title: "공지사항", to: "/Notice" },
      ],
      model: 'tab-2',
      text: '',
      
      listSize: 2000, //1대1 문의 리스트 창 크기 조절 변수
      btn_name: "예약 신청",
      btn_color: "#2f5d8c",

      seen: false, // 1대1문의 작성폼 디스플레이 여부
      valid: false,
      selection: 0,
      name: "",
      nameRule: [
        (v) => !!v || "이름을 입력해주세요",
        (v) => {
          const replaceV = v.replace(/(\s*)/g, "");
          const pattern =
            /^[ㄱ-ㅎ|가-힣|a-z|A-Z|]+$/;
          return pattern.test(replaceV) || "이름을 입력해주세요";
        },
      ],
      textarea: "",
      textAreaRule: [
        (v) => !!v || "의견을 작성해주세요.",
        (v) => {
          const replaceV = v.replace(/(\s*)/g, "");
          return replaceV.length >= 1 || "기타 사항을 작성해주세요";
        },
      ],
      phoneNumber: "",
      phoneRule: [
        (v) => !!v || "핸드폰 번호를 입력해주세요",
        (v) => {
          const replaceV = v.replace(/(\s*)/g, "");
          const pattern = /^\d{3}-\d{3,4}-\d{4}$/;
          return pattern.test(replaceV) || "핸드폰 번호를 입력해주세요";
        },
      ],
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
      company: "",
      companyRule: [
        (v) => !!v || "단체명을 입력해주세요",
        (v) => {
          const replaceV = v.replace(/(\s*)/g, "");
          const pattern =
          /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|!?@#$%^&*():;+-=~{}<>\_\[\]\|\\\"\'\,\.\/\`\₩]/g;

          return pattern.test(replaceV) || "단체명을 입력해주세요";
        },
      ],

      dialog: false, //팝업메시지창 버튼

      items: [
        {
          action: "mdi-alpha-q-box-outline", 
          title: "천문대 관측 예약하고 싶습니다.",
          list: [
            { content: "이름 : OOO " },
            { content: "핸드폰 번호 : 010-1234-5678 " },
            { content: "이메일 주소 : asd@gmail.com " },
            { content: "단체명 : OO대학교 " },
          ],
        },
        
      ],
    };
  },

  methods: {

    write() {
      if (this.btn_name === "예약 신청") {
        this.listSize = "500";
        this.btn_name = "작성 취소";
        this.seen = true;
        this.btn_color = "#d55e2d";
      } else {
        this.seen = false;
        this.listSize = "2000";
        this.btn_name = "예약 신청";
        this.btn_color = "#2f5d8c";
      }
    },
    finished() {
      this.dialog = false;
      this.seen = false;
      this.listSize = "2000";
      this.btn_name = "예약 신청";
      this.btn_color = "#2f5d8c";
    },
    
    validate() {
      this.valid = this.$refs.form.validate();
      console.log(this.valid, this.$refs.form.validate());
      if (this.$refs.form.validate()) {
        this.$refs.form.reset(); //폼 리셋
        this.dialog = true;
        this.valid = false;
        this.title = "";
        this.textarea = "";
      }
    },
  },
};

</script>
<style>
.titleText label {
  font-size: 24px;
}
.titleText input {
  font-size: 24px;
}
.titleText .v-messages__message {
  font-size: 20px;
}
#font36 {
  font-size: 36px;
}
#font28 {
  font-size: 28px;
}
#font20 {
  font-size: 20px;
}
.inquiryText textarea {
  font-size: 20px;
}
</style>
