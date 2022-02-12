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
          no-gutters
          width="100%"
        >
          <v-col>
            <v-card
              class=""
              color=""
              outlined
              style="border: none"
            >
              <v-btn
                text
                width="100%"
                :color="listmenu_colors[0]"
                @click="setMenuColor(0)"
              >
                전체
              </v-btn>
            </v-card>
          </v-col>
          <v-col width="100%">
            <v-card
              class=""
              color=""
              outlined
              style="border: none"
            >
              <v-btn
                text
                width="100%"
                :color="listmenu_colors[1]"
                @click="setMenuColor(1)"
              >
                공지사항
              </v-btn>
            </v-card>
          </v-col>
          <v-col width="100%">
            <v-card
              class=""
              color=""
              outlined
              style="border: none"
            >
              <v-btn
                text
                width="100%"
                :color="listmenu_colors[2]"
                @click="setMenuColor(2)"
              >
                이벤트
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-toolbar>

      <v-list>
        <v-list-group
          v-for="item in items"
          :key="item.question"
          v-model="item.active"
          :prepend-icon="item.icon"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title
                class="questionTitle text-h6"
                v-text="item.question"
              />
              <v-list-item-subtitle v-text="item.date" />
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
      pages: [
        { title: "예약", to: "/reservation" },
        { title: "자주묻는 질문", to: "FaQ" },
        { title: "1:1 문의", to: "/Inquiry" },
        { title: "공지사항", to: "/Notice" },
      ],
      listmenu_colors: ["#d55e2d", "#2f5d8c", "#2f5d8c"],
      items: [
        {
          icon: "공지사항",
          date: "2021-12-29",
          question: "2021년부터 서비스를 시작합니다.",
          context: [{ answer: "우리의 서비스는~~~~~~~~~" }],
        },
        {
          icon: "이벤트 ",
          date: "2021-12-30",
          question: "친구에게 공유하면 아메리카노 한잔!",
          context: [{ answer: "친구들에게 공유하고 커피 한잔 어떠세요 " }],
        },
      ],
    };
  },
  methods: {
    setMenuColor(number) {
      if (this.listmenu_colors[number] == "#d55e2d") {
        //현재 강조된 버튼을 다시 클릭했을 경우
        return;
      }

      if (this.listmenu_colors[number] == "#2f5d8c") {
        for (let i = 0; i < this.listmenu_colors.length; i++) {
          this.listmenu_colors.splice(i, 1, "#2f5d8c"); // 전체 기본 색상으로 변경후
        }
        this.listmenu_colors.splice(number, 1, "#d55e2d"); // 클릭한 버튼 1개만 강조 색상으로 변경
      } else {
        this.listmenu_colors.splice(number, 1, "#2f5d8c"); // 다시 1번 클릭시 기본 색상으로 변경
      }
    },
    goTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>
<style lang="">
</style>
