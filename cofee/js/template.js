////////////////////////////////////////
//ナビゲーション・コピーライト一括管理
////////////////////////////////////////

//ナビゲーション部分
Vue.component("navigation-template", {
  template: `
<ul>
<li><a href="index.html">HOME</a></li>
<li><a href="ko-hi.html">珈琲の淹れ方</a></li>
<li><a href="ko-hi.html">珈琲の効果</a></li>
<li><a href="ko-hi.html">世界の珈琲豆</a></li>
<li><a href="ko-hi.html">このサイトについて</a></li>
</ul>
  `,
});

new Vue({
  el: "#main-navigation",
});

new Vue({
  el: "#footer-navigation",
});

//コピーライト部分
Vue.component("copyright-template", {
  template: `
  <small>&copy; 2023 珈琲豆知識</small>
  `,
});

new Vue({
  el: "#copyright",
});
