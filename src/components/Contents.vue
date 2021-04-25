<template>
  <div class="contents-wrap">
    <h1>LNB, 우측 Info 레이아웃 구현</h1>
    <span @click="showInfo('cssInfo')" class="info-btn">css Info</span><br />
    <span @click="showInfo('jsInfo')" class="info-btn">js Info</span><br />
    <span @click="showInfo('vueInfo')" class="info-btn">vue Info</span><br />
    <p>여기에 메인 내용이 노출됩니다</p>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["SET_INFO_DATA", "SET_SHOW_INFO"]),
    showInfo(info) {
      this.SET_INFO_DATA(info);
      this.SET_SHOW_INFO(true);
    },
  },
  created() {
    // info 초깃값 셋팅
    this.SET_INFO_DATA("cssInfo");
  },
};
</script>

<style>
.contents-wrap {
  width: 100%;
  padding: 15px;
}
.info-btn {
  color: #ffc045;
  cursor: pointer;
}
</style>
