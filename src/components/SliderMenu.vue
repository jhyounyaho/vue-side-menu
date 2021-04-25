<template>
  <div>
    <input id="hamburger" type="checkbox" /><label for="hamburger"
      >&equiv;</label
    >
    <nav>
      <header>메뉴</header>
      <ul>
        <li><a href="#">첫번째</a></li>
        <li><a href="#">두번째</a></li>
        <li><a href="#">세번째</a></li>
      </ul>
    </nav>

    <div
      id="contents"
      style="border: 1px solid #666; margin-left: 50px; margin-right: 50px;"
    >
      <h1>CSS 슬라이드 메뉴 예제</h1>
      <div style="background:#666; width: 100%">
        여기는 내용이 노출됩니다!!!. 여기는 내용이 노출됩니다!!!. 여기는 내용이
        노출됩니다!!!. 여기는 내용이 노출됩니다!!!. 여기는 내용이 노출됩니다!!!.
        여기는 내용이 노출됩니다!!!. 여기는 내용이 노출됩니다!!!. 여기는 내용이
        노출됩니다!!!. 여기는 내용이 노출됩니다!!!. 여기는 내용이 노출됩니다!!!.
        여기는 내용이 노출됩니다!!!. 여기는 내용이 노출됩니다!!!. 여기는 내용이
        노출됩니다!!!. 여기는 내용이 노출됩니다!!!. 여기는 내용이 노출됩니다!!!.
        여기는 내용이 노출됩니다!!!. 여기는 내용이 노출됩니다!!!. 여기는 내용이
        노출됩니다!!!. 여기는 내용이 노출됩니다!!!. 여기는 내용이 노출됩니다!!!.
        여기는 내용이 노출됩니다!!!.
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#hamburger {
  display: none;
}
#hamburger ~ * {
  position: absolute;
  transition: transform 0.4s;
}
#hamburger:checked ~ * {
  transform: translate3d(200px, 0, 0);
}
#hamburger ~ label {
  font-size: 54px;
  top: -16px;
  left: 8px;
  cursor: pointer;
  z-index: 1;
}
#hamburger ~ nav {
  background: black;
  width: 200px;
  left: -200px;
  height: 100%;
}
#hamburger ~ nav * {
  margin: 0;
  padding: 0;
  color: white;
}
#hamburger ~ nav header {
  background: teal;
  padding: 1em;
}
#hamburger ~ nav a {
  display: block;
  text-decoration: none;
  padding: 1em;
}
#hamburger ~ nav a:hover {
  background: gray;
}
#content {
  position: relative;
  padding: 2.6em 1em 1em;
  width: 100%;
  background: #666;
}
</style>
