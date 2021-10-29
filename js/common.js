// 顶部header
Vue.component('header-box', {
  props: {
    current: {},
  },
  data: function () {
    return {
      navListData: [{
          name: "作品",
          path: "index.html"
        },
        {
          name: "关于我",
          path: "about.html"
        },
        {
          name: "简历下载",
          path: "upload/myResume.pdf",
          download: "张晓林的简历"
        }
      ]
    }
  },
  template: `
    <div class="navBar-Box">
      <div class="navBarCnt">
        <a href="index.html" class="left-Box">
          <img src="img/LOGO.png" alt="" class="logo">
        </a>
        <div class="right-Box">
          <a v-for="(item, index) in navListData" :href="item.path" :download="item.download"
            :class="current==index?\'current\':\'\'">{{item.name}}</a>
        </div>
      </div>
    </div>
  `
})

// 底部栏
Vue.component('footer-box', {
  props: {},
  data: function () {
    return {}
  },
  template: `
  <div class="bottomBar-Box">
    <div class="bottomBarCnt">
      <div class="bottomBarLeft">
        <p class="text1">嘿！</p>
        <p class="text2">感谢您到达本页底部。如果您想了解有关我的更多信息，右侧的内容将为您提供很多帮助。</p>
        <p class="text3">或者下载<a href="upload/myResume.pdf" download="张晓林的简历">我的简历</a></p>
      </div>
      <div class="bottomBarRight">
        <div class="telGroup">
          <div class="telGroupTitle">联系方式<img src="img/tel-icon.svg"  class="tel-icon"></div>
          <p class="tel">18539590922</p>
          <a class="email" href="mailto:wangyekai512@163.com">648735466@qq.com</a>
        </div>
        <div class="otherGroup">
          <div class="otherGroupTitle">其他联系方式</div>
          <p class="wx">微信<img src="img/wxCode.png" alt="" class="wxCode"></p>
          <p class="mm">脉脉<img src="img/mmCode.png" alt="" class="mmCode"></p>
        </div>
      </div>
      <span class="copyright">©张晓林(ZHANG XIAOLIN) 2021</span>
    </div>
  </div>
  `
})

// 返回顶部按钮
Vue.component('topbtn-box', {
  props: {},
  data: function () {
    return {}
  },
  template: `
    <div class="topBtn-Box">
      <img src="img/Top-icon.svg" alt="" class="Top-icon">
    </div>
  `
})


var header = new Vue({
  el: "#headerPC"
})

var footer = new Vue({
  el: "#footerPC"
})

var topBtn = new Vue({
  el: "#topBtnPC"
})

// 点击返回顶部
$(function () {
  $(window).scroll(function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log("滚动高度2:" + scrollTop);
    if (scrollTop >= 400) {
      $(".topBtn-Box").css("opacity", "100%")
    } else {
      $(".topBtn-Box").css("opacity", "0")
    }
  })
  $('.topBtn-Box').on('click', function () {
    $('html,body').animate({
      scrollTop: 0
    }, 500);
  })
})