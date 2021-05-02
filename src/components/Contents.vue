<template>
  <div class="contents-wrap">
    <Splitpanes class="default-theme" horizontal>
      <Pane :size="topSize">
        <div>
          <h1>LNB, 우측 Info 레이아웃 구현</h1>
          <span @click="showInfo('cssInfo')" class="info-btn">css Info</span
          ><br />
          <span @click="showInfo('jsInfo')" class="info-btn">js Info</span
          ><br />
          <span @click="showInfo('vueInfo')" class="info-btn">vue Info</span
          ><br />
          <p>여기에 메인 내용이 노출됩니다</p>
        </div>
      </Pane>

      <Pane min-size="30" max-size="70" :size="bottomSize">
        <div>
          <div>
            <button @click="resizeBottom(30)">30%</button>
            <button @click="resizeBottom(50)">50%</button>
            <button @click="resizeBottom(70)">70%</button>
          </div>
          <div>
            Splitpanes 을 사용하여 '30%', '50%', '70%' 버튼 클릭시 화면 비율
            변경 및 드래그로 화면의 비율을 변경 할 수 있습니다.
          </div>
        </div>
      </Pane>
    </Splitpanes>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";

export default {
  data() {
    return {
      topSize: 50,
      bottomSize: 50,
    };
  },
  components: { Splitpanes, Pane },
  methods: {
    ...mapMutations(["SET_INFO_DATA", "SET_SHOW_INFO"]),
    showInfo(info) {
      this.SET_INFO_DATA(info);
      this.SET_SHOW_INFO(true);
    },
    resizeBottom(size) {
      console.log("size : ", size);
      this.bottomSize = size;
      this.topSize = 100 - size;
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
.splitpanes.default-theme .splitpanes__pane {
  background: #ffffff;
}
</style>
