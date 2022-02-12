<template>
  <v-container id="board_body">
    <!----본문--->

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

    <!---게시글 리스트----->
    <v-card
      class="mx-auto"
      full-width
    >
      <v-toolbar>
        <v-row
          id="listMenu"
          class="d-flex flex-row justify-center"
        >
          <v-btn
            class="ma-2 faqsort"
            outlined
            :color="colors[0]"
            @click="setAccentColor(0)"
          >
            #예약 취소
          </v-btn>
          <v-btn
            class="ma-2 faqsort"
            outlined
            :color="colors[1]"
            @click="setAccentColor(1)"
          >
            #예약 신청 방법
          </v-btn>
          <v-btn
            class="ma-2 faqsort"
            outlined
            :color="colors[2]"
            @click="setAccentColor(2)"
          >
            #천문대 이용 시간
          </v-btn>
          <v-btn
            class="ma-2 faqsort"
            outlined
            :color="colors[3]"
            @click="setAccentColor(3)"
          >
            #숙박 유무
          </v-btn>
        </v-row>
      </v-toolbar>

      <v-list>
        <v-list-group
          v-for="item in items"
          :key="item.question"
          :prepend-icon="item.icon"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title
                class="questionTitle text-h6"
                v-text="item.question"
              />
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="child in item.context"
            :key="child.answer"
          >
            <v-list-item-content>
              <v-list-item-title
                class="text-subtitle-2"
                v-text="child.answer"
              />
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-card>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      colors: ["black", "black", "black", "black"],

      pages: [
        { title: "예약", to: "/reservation" },
        { title: "자주묻는 질문", to: "FaQ" },
        { title: "1:1 문의", to: "/Inquiry" },
        { title: "공지사항", to: "/Notice" },
      ],
      items: [
        {
          icon: "Q",
          question: "[숙박 유무] 숙박 가능한 천문대가 있나요?",
          context: [
            {answer: "현재 숙박이 가능한 천문대는 아래와 같습니다." },
            {answer: "서울에 있는 천문대" },
            {answer: "OO 천문대" },
            {answer: "" },
            {answer: "강원도에 있는 천문대" },
            {answer: "OO 천문대" },
            {answer: "" },
            {answer: "경기도에 있는 천문대" },
            {answer: "OO 천문대" },
            {answer: "" },
            {answer: "충청도에 있는 천문대" },
            {answer: "OO 천문대" },
            {answer: "" },
            {answer: "전라도에 있는 천문대" },
            {answer: "OO 천문대" },
            {answer: "" },
            {answer: "경상도에 있는 천문대" },
            {answer: "OO 천문대" },
          
          ],
        },
        {
          icon: "Q",
          question: "[예약 취소] 예약 취소는 어떻게 하나요?",
          context: [{ answer: "예약 취소는 ~~~ 방법으로 하시면 됩니다." }],
        },

        {
          icon: "Q",
          question: "[천문대 이용 시간] 천문대 이용 시간은 어떻게 되나요?",
          context: [
            {answer: "서울에 있는 천문대" },
            {answer: "OO 천문대 : 00:00~00:00" },
            {answer: "" },
            {answer: "강원도에 있는 천문대" },
            {answer: "OO 천문대 : 00:00~00:00" },
            {answer: "" },
            {answer: "경기도에 있는 천문대" },
            {answer: "OO 천문대 : 00:00~00:00" },
            {answer: "" },
            {answer: "충청도에 있는 천문대" },
            {answer: "OO 천문대 : 00:00~00:00" },
            {answer: "" },
            {answer: "전라도에 있는 천문대" },
            {answer: "OO 천문대 : 00:00~00:00" },
            {answer: "" },
            {answer: "경상도에 있는 천문대" },
            {answer: "OO 천문대 : 00:00~00:00" },
          ],
        },
        {
          icon: "Q",
          question: "[회원 서비스] 비밀번호가 기억나지 않아요. ",
          context: [
            {
              answer: "비밀번호 찾기 서비스를 이용해주세요.",
            },
          ],
        },
        {
          icon: "Q",
          question: "[회원 서비스] 인증메일이 오지 않았어요.",
          context: [
            {
              answer:
                "각 메일 서비스에 따라 메일 도착 시간이 조금 지연될 수 있습니다. 메일이 도착하지 않을 경우 스팸메일함을 확인해주세요.",
            },
          ],
        },
        {
          icon: "Q",
          question: "[회원서비스] 탈퇴하면 개인정보는 모두 삭제되나요?",
          context: [
            {
              answer: "회원탈퇴와 함께 고객님의 개인정보는 완전 삭제됩니다. ",
            },
          ],
        },
        {
          icon: "Q",
          question: "[이벤트 문의] 이벤트는 회원만 참여할 수 있나요?",
          context: [{ answer: "네. 이벤트는 회원만 참여할 수 있습니다. " }],
        },
      ],
    };
  },
  methods: {
    setAccentColor(number) {
      if (this.colors[number] == "black") {
        for (let i = 0; i < this.colors.length; i++) {
          this.colors.splice(i, 1, "black"); // 전체 기본 색상으로 변경후
        }
        this.colors.splice(number, 1, "#F08080"); // 클릭한 버튼 1개만 강조 색상으로 변경
      } else {
        this.colors.splice(number, 1, "black"); // 다시 1번 클릭시 기본 색상으로 변경
      }
    },
  },
};
</script>
<style>
#board_body {
  margin-top: 20px;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}

/*화면 하단 '위로' 버튼*/
.right_bar_menu {
  position: fixed;
  right: 32px;
  bottom: 40px;
  padding: 4px;
}
/*검색바*/
.searchbar {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  height: 100px;
  width: 100%;
}
.searchbar_menu {
  display: flex;
  background-color: aliceblue;
  padding: 8px;
  border-radius: 4px;
  width: 100%;
}

/* 돋보기 호버 : 손가락모양*/
div.searchbar > div > div > div.v-input__append-outer:hover {
  cursor: pointer;
}
</style>
