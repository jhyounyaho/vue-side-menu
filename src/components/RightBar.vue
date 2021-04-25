<template>
  <div class="right-bar-wrap">
    <!-- i 표시 -->
    <aside v-if="!showInfo" class="aside-wrap">
      <span @click="setShowInfo(true)">
        <ion-icon
          name="information-circle-outline"
          class="info-icon"
        ></ion-icon>
      </span>
    </aside>

    <!-- 내용 표시 -->
    <div v-else class="info-wrap">
      <span @click="setShowInfo(false)">
        <ion-icon class="close-icon" name="close-outline"></ion-icon>
      </span>
      <div class="info-title">INFO</div>
      <div class="info-content">
        {{ this.info }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: {},
  computed: {
    ...mapState({
      info: "info",
      showInfo: "showInfo",
    }),
  },
  data() {
    return {
      infoData: "",
    };
  },
  created() {},
  methods: {
    ...mapMutations(["SET_SHOW_INFO"]),
    setShowInfo(show) {
      this.SET_SHOW_INFO(show);
    },
  },
  components: {},
};
</script>

<style>
.aside-wrap {
  width: 40px;
  height: 100%;
}
.info-wrap {
  width: 200px;
  height: 100%;
  background: #f1f3f5;
  padding: 15px;
}
.info-title {
  cursor: pointer;
  margin-bottom: 10px;
  font-weight: 700;
  padding-right: 10px;
}
.info-title:hover {
  color: #ffc045;
}
.info-icon {
  cursor: pointer;
  margin: 10px 0 0 10px;
  font-size: x-large;
}
.close-icon {
  position: absolute;
  cursor: pointer;
  font-size: x-large;
  right: 10px;
  margin-right: 10px;
}
</style>
