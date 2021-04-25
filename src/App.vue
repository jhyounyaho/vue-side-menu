<template>
  <div id="app">
    <LeftBar></LeftBar>
    <Contents></Contents>
    <RightBar :showInfo="showInfo"></RightBar>
  </div>
</template>

<script>
import LeftBar from "./components/LeftBar";
import Contents from "./components/Contents";
import RightBar from "./components/RightBar";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    LeftBar,
    Contents,
    RightBar,
  },
  computed: {
    ...mapState({
      showInfo: "showInfo",
    }),
  },
  data() {
    return {};
  },
};
</script>

<style>
html,
body {
  margin: 0;
  height: 100%;
}
ul,
li {
  list-style: none;
}
#app {
  display: flex;
  height: 100%;
}
</style>
