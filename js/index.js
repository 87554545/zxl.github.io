const learning = new Vue({
  el: "#learningVue",
  data: {},
  methods: {
    open3() {
      this.$message({
        message: '技能还在冷却中...',
        type: 'warning',
        offset: 70,
        showClose: true
      });
    },
    open4() {
      this.$message({
        message: '该技能还未被激活！',
        type: 'error',
        offset: 70,
        showClose: true
      });
    }
  },
})

// 下滑跳转到作品集
$('.arrowBottomGroup').click(function () {
  var current = $('.Portfolio-Box').offset().top;
  // 页面滚动
  $('body, html').stop().animate({
    scrollTop: current
  });
})
var flag = false;
// 进度条加载
$(function () {
  $(window).scroll(function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log("滚动高度1:   " + scrollTop);
    if (scrollTop >= 1890 && !flag) {
      $(".lineCnt").css("width", "25%");
      $(".num").numScroll();
      flag = true;
      $(".symbol").css("display", "flex")
    }
  })
})

// bigsur显示
$('.bigsur').click(function () {
  $('.mask').fadeIn()
  $('.bigsurCnt').fadeIn()
  $('html,body').addClass('ovfHiden'); 
})
$('.mask').click(function () {
  $('.mask').fadeOut()
  $('.bigsurCnt').fadeOut()
  $('html,body').removeClass('ovfHiden'); 
})

// icon组件库显示
$('.iconComponent').click(function () {
  $('.mask').fadeIn()
  $('.iconComponentCnt').fadeIn()
  $('html,body').addClass('ovfHiden'); 
})
$('.mask').click(function () {
  $('.mask').fadeOut()
  $('.iconComponentCnt').fadeOut()
  $('html,body').removeClass('ovfHiden'); 
})