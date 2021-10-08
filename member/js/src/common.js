// $(function() {
// 	var height=$("header").height();
// 	$(".site-content").css("margin-top", height);//10pxだけ余裕をもたせる
//
//   var width=$("aside").width();
// 	$(".cd-content-wrapper").css("margin-left", width);//10pxだけ余裕をもたせる
// });

$(document).ready(function () {



});


$('#hamburger_menu').on('click', function () {

  $(this).toggleClass('cross');
  $(".main-side-nav-sp").toggleClass("open");

});

$('.sp-menu-mypage').on('click', function () {
  $(".sp-menu-mypage-sub").slideToggle();
});


// mypage-select
var $list = $('.select-options');
var $listItems = $('.select-options').children('li');
var $styledSelect = $('.select-styled');
$styledSelect.click(function (e) {
  e.stopPropagation();
  $('div.select-styled.active').not(this).each(function () {
    $(this).removeClass('active').next('ul.select-options').hide();
  });
  $(this).toggleClass('active').next('ul.select-options').toggle();
});

$listItems.click(function (e) {
  e.stopPropagation();
  $styledSelect.removeClass('active');
  $list.hide();
});

$(document).click(function () {
  $styledSelect.removeClass('active');
  $list.hide();
});
