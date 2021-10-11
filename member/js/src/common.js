// $(function() {
// 	var height=$("header").height();
// 	$(".site-content").css("margin-top", height);//10pxだけ余裕をもたせる
//
//   var width=$("aside").width();
// 	$(".cd-content-wrapper").css("margin-left", width);//10pxだけ余裕をもたせる
// });

$(document).ready(function () {

  // first child to active tab
  changeTab('1');
  initDropdown();

});


$('#hamburger_menu').on('click', function () {

  $(this).toggleClass('cross');
  $(".main-side-nav-sp").toggleClass("open");

});

$('.sp-menu-mypage').on('click', function () {
  $(".sp-menu-mypage-sub").slideToggle();
});

// mypage-tabs change
$('.tab-menu').on('click', function () {

  changeTab($(this));

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
  var txt = $(this).html();
  var data = $(this).attr('data-tab');
});

$listItems.click(function (e) {
  e.stopPropagation();
});

$(document).click(function () {
  $styledSelect.removeClass('active');
  $list.hide();
});

// change the tab
function changeTab(tab) {

  var clickedTab = '';
  if (tab == '1') {
    tab = $('.tab-list').children(":first");
    clickedTab = $(tab).attr('data-tab');
  } else {
    clickedTab = $(tab).attr('data-tab');
    $('.tab-menu').removeClass('tab-active');
  }

  $('.tab-content').addClass('tab-hide');
  $('.tab-content').removeClass('tabcontent-active');
  $('section[data-tabcontent="' + clickedTab + '"]').removeClass('tab-hide');
  $('section[data-tabcontent="' + clickedTab + '"]').addClass('tabcontent-active');
  $('li.tab-menu[data-tab="' + clickedTab + '"]').addClass('tab-active');

  openAndSelectDropdown($('li.tab-menu[data-tab="' + clickedTab + '"]'));

}

// open the dropdown and select item
function openAndSelectDropdown(li) {

  $styledSelect.removeClass('active');
  $list.hide();
  var txtNew = $(li).html();
  var dataNew = $(li).attr('data-tab');
  $styledSelect.html(txtNew);
  $styledSelect.attr('data-tab', dataNew);
}


// init dropdown
function initDropdown() {
  $styledSelect.attr('data-index', 0);
  $list.each(function (index, ele) {
    $(ele).attr('data-index', index);
  });
}