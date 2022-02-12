<template>
  <div class="card text-center m-3">
    <h3 class="card-header">Vue.js Pagination Tutorial & Example</h3>
    <div class="card-body">
      <Item
        v-for="item in pageOfItems"
        :key="item.id"
        :profile-icon="item.icon"
        :title="item.title"
        :user-name="item.name"
        :texts="item.texts"
        :cafe-image="item.cafe"
        :tags="item.tags"
      />
    </div>
    <div class="card-footer pb-0 pt-3">
      <jw-pagination :items="exampleItems" @changePage="onChangePage" />
    </div>
  </div>
</template>

<script>
import Item from "@/components/community/Item.vue";
// an example array of items to be paged
const exampleItems = [
  {
    id: 1,
    icon: require("@/assets/community/profileIcon.png"),
    name: "홍길동",
    title: "스타벅스",
    texts: [
      { textId: 1, text: "안뇽" },
      { textId: 2, text: "헬로" },
      { textId: 3, text: "하와이" },
    ],
    cafe: require("@/assets/community/starbucks.png"),
    tags: [
      { id: 1, tag: "클래식" },
      { id: 2, tag: "깔끔한" },
    ],
  },
  {
    id: 2,
    icon: require("@/assets/community/profileIcon.png"),
    name: "이순신",
    title: "탐앤탐스",
    cafe: require("@/assets/community/tomntoms.png"),
  },
  {
    id: 3,
    icon: require("@/assets/community/profileIcon.png"),
    name: "유관순",
    title: "앤젤리너스",
    cafe: require("@/assets/community/angelinus.png"),
  },
  {
    id: 4,
    icon: require("@/assets/community/profileIcon.png"),
    name: "강감찬",
    title: "할리스",
    cafe: require("@/assets/community/hollys.png"),
  },
  {
    id: 5,
    icon: require("@/assets/community/profileIcon.png"),
    name: "김구",
    title: "이디야",
    cafe: require("@/assets/community/ediya.png"),
  },
  {
    id: 6,
    icon: require("@/assets/community/profileIcon.png"),
    name: "홍길동",
    title: "스타벅스",
    texts: [
      { textId: 1, text: "안뇽" },
      { textId: 2, text: "헬로" },
      { textId: 3, text: "하와이" },
    ],
    cafe: require("@/assets/community/starbucks.png"),
    tags: [
      { id: 1, tag: "클래식" },
      { id: 2, tag: "깔끔한" },
    ],
  },
  {
    id: 7,
    icon: require("@/assets/community/profileIcon.png"),
    name: "이순신",
    title: "탐앤탐스",
    cafe: require("@/assets/community/tomntoms.png"),
  },
  {
    id: 8,
    icon: require("@/assets/community/profileIcon.png"),
    name: "유관순",
    title: "앤젤리너스",
    cafe: require("@/assets/community/angelinus.png"),
  },
  {
    id: 9,
    icon: require("@/assets/community/profileIcon.png"),
    name: "강감찬",
    title: "할리스",
    cafe: require("@/assets/community/hollys.png"),
  },
  {
    id: 10,
    icon: require("@/assets/community/profileIcon.png"),
    name: "김구",
    title: "이디야",
    cafe: require("@/assets/community/ediya.png"),
  },
  {
    id: 11,
    icon: require("@/assets/community/profileIcon.png"),
    name: "관우",
    title: "스타벅스",
    texts: [
      { textId: 1, text: "안뇽" },
      { textId: 2, text: "헬로" },
      { textId: 3, text: "하와이" },
    ],
    cafe: require("@/assets/community/starbucks.png"),
    tags: [
      { id: 1, tag: "클래식" },
      { id: 2, tag: "깔끔한" },
    ],
  },
  {
    id: 12,
    icon: require("@/assets/community/profileIcon.png"),
    name: "장비",
    title: "탐앤탐스",
    cafe: require("@/assets/community/tomntoms.png"),
  },
  {
    id: 13,
    icon: require("@/assets/community/profileIcon.png"),
    name: "유비",
    title: "앤젤리너스",
    cafe: require("@/assets/community/angelinus.png"),
  },
  {
    id: 14,
    icon: require("@/assets/community/profileIcon.png"),
    name: "조조",
    title: "할리스",
    cafe: require("@/assets/community/hollys.png"),
  },
  {
    id: 15,
    icon: require("@/assets/community/profileIcon.png"),
    name: "사마의",
    title: "이디야",
    cafe: require("@/assets/community/ediya.png"),
  },
];

export default {
  components: {
    Item,
  },
  data() {
    return {
      exampleItems,
      pageOfItems: [],
    };
  },
  methods: {
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
    },
  },
};
</script>
