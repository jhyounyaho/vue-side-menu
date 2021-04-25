<template>
  <div class="left-bar-wrap">
    <!-- 내용 표시 -->
    <div v-show="viewContent" class="lnb-wrap">
      <header>LNB MENU</header>
      중분류 1
      <ul>
        <li><a href="#">첫번째 메뉴</a></li>
        <li><a href="#">두번째 메뉴</a></li>
        <li><a href="#">세번째 메뉴</a></li>
      </ul>
      중분류 2
      <ul>
        <li><a href="#">첫번째 메뉴</a></li>
        <li><a href="#">두번째 메뉴</a></li>
        <li><a href="#">세번째 메뉴</a></li>
      </ul>
    </div>

    <!-- 메뉴 버튼 -->
    <nav class="nav-wrap">
      <span @click="viewLnb()">
        <ion-icon class="menu-icon" name="menu-outline"></ion-icon>
      </span>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      viewContent: true,
    };
  },
  methods: {
    viewLnb() {
      this.viewContent = !this.viewContent;
    },
  },
};
</script>

<style>
.left-bar-wrap {
  display: flex;
}
.nav-wrap {
  width: 40px;
  height: 100%;
}
.lnb-wrap {
  width: 200px;
  height: 100%;
  background: #f1f3f5;
  padding: 15px;
}
header {
  cursor: pointer;
  margin-bottom: 10px;
  font-weight: 700;
}
header:hover {
  color: #ffc045;
}
.menu-icon {
  cursor: pointer;
  font-size: x-large;
  margin: 10px 0 0 10px;
}
</style>
