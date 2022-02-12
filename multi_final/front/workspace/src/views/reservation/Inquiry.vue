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
            1대1 문의 내역
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

      <v-card
        v-if="seen"
        width="100%"
      >
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-card-title id="font36">
            1대1 문의 유형
          </v-card-title>
          <v-card-text>
            <v-chip-group
              v-model="selection"
              active-class="orange darken-4 white--text"
              column
            >
              <v-chip> 회원서비스 </v-chip>
              <v-chip>이벤트</v-chip>
              <v-chip>수정사항</v-chip>
              <v-chip>예약 관련 문의</v-chip>
            </v-chip-group>
          </v-card-text>

          <v-text-field
            v-model.trim="title"
            class="ma-8 titleText"
            :rules="titleRules"
            label="문의 제목"
            required
          />

          <v-textarea
            v-model.trim="textarea"
            height="124px"
            class="mx-4 mt-4 inquiryText"
            solo
            name="input"
            background-color="amber lighten-4"
            no-resize
            label="의견을 남겨주세요."
            :rules="textAreaRule"
            required
          />
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
                    소중한 의견 감사드립니다. 남겨주신 내용 확인 후
                    답변드리겠습니다. 문의하신 내역은 1대1 문의 내역에서
                    확인하실수 있습니다.
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
    </div>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      pages: [
        { title: "예약", to: "/reservation" },
        { title: "자주묻는 질문", to: "FaQ" },
        { title: "1:1 문의", to: "/Inquiry" },
        { title: "공지사항", to: "/Notice" },
      ],
      listSize: 2000, //1대1 문의 리스트 창 크기 조절 변수
      btn_name: "1대1 문의 작성",
      btn_color: "#2f5d8c",

      seen: false, // 1대1문의 작성폼 디스플레이 여부
      valid: false,
      selection: 0,
      title: "",
      titleRules: [
        (v) => !!v || "제목을 작성해주세요.",
        (v) => {
          const replaceV = v.replace(/(\s*)/g, "");
          return replaceV.length >= 1 || "제목을 작성해주세요.";
        },
      ],
      textarea: "",
      textAreaRule: [
        (v) => !!v || "의견을 작성해주세요.",
        (v) => {
          const replaceV = v.replace(/(\s*)/g, "");
          return replaceV.length >= 1 || "의견을 작성해주세요";
        },
      ],
      dialog: false, //팝업메시지창 버튼

      items: [
        {
          action: "mdi-alpha-q-box-outline", //답변이 아직 안달린 항목 아이콘
          title: "질문이있는데요.. [아직 답변되지 않은 문의]",
          list: [
            {
              content:
                "문의 내용: 하나의 메일로 회원가입을 다시 할 수 있나요??????",
            },
          ],
        },
        {
          action: "mdi-alpha-q-box", // 답변이 완료된 항목 아이콘
          title: "이벤트 문의 드려요",
          list: [
            { content: "문의 내용: 이번에 하는 이벤트 언제까지인가요???" },
            { content: "답변 내용: 이번에 12월30일 까지 진행됩니다." },
          ],
        },
      ],
    };
  },
  methods: {
    write() {
      if (this.btn_name === "1대1 문의 작성") {
        this.listSize = "500";
        this.btn_name = "작성 취소";
        this.seen = true;
        this.btn_color = "#d55e2d";
      } else {
        this.seen = false;
        this.listSize = "2000";
        this.btn_name = "1대1 문의 작성";
        this.btn_color = "#2f5d8c";
      }
    },
    finished() {
      this.dialog = false;
      this.seen = false;
      this.listSize = "2000";
      this.btn_name = "1대1 문의 작성";
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
