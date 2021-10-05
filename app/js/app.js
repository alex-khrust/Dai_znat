// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

// import $ from 'jquery'; window.jQuery = $; window.$ = $;
// require('~/app/libs/imageuploadify/imageuploadify.m;in.js');
// import imageuploadify from 'libs/imageuploadify/imageuploadify.min.js'; window.imageuploadify = imageuploadify

// import Vue from 'vue'
// import vSelect from 'vue-select'


document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
	$('.input-images').imageUploader();
	

	//------------ menu hamburger ----------------------------------
  $("#navToggle").click(function () {
    $(this).toggleClass("active");
    $(".header__authorization, .menu").toggleClass("open");
    $("body").toggleClass("locked");
  });
  // $(document).mouseup(function (e) {
  //   var container = $("header");
  //   if (container.has(e.target).length === 0){
  //     $("#navToggle").removeClass("active");
  //     $(".header__authorization, .menu").removeClass("open");
  //     $("body").removeClass("locked");
  //   }
  // });
  $(".header__enter").click(function () {
    $(this).toggleClass("open");
  });
  //---------------------------------------------------------------------------
  $(".btn--comment").click(function () {
    $('.feedback__comment').toggleClass("open");
  });
  //---------------------------------------------------------------------------
  // $(':radio:not(:checked)').attr('disabled', true);
  //---------------------------------------------------------------------------
  $(".overlay, .btn--close").on("click", function () {
    var popup__name = $('.' + $(this).attr("rel"));
    $(popup__name).addClass("open");
    $("body").addClass("locked");
  });
  $(".overlay, .btn--close").on("click", function () {
    $(".popup").removeClass("open");
    $("body").removeClass("locked");
  });
  //---------------------------------------------------------------------------
  $("button[rel='dropdown'], button[rel='dropmenu'], div[rel='dropdown']").on("click", function () {
    var dropmenu__name = $('.' + $(this).attr("rel"));
    $(this).closest('li, .tags, .status').find('.dropmenu, .dropdown').addClass("open");

    var pos = $(this).offset();
    $(this).closest('.comments').find('.dropdown').addClass("open");
  });

  $(".btn--label").on("click", function () {
    var dropmenu__name = $('.' + $(this).attr("rel"));
    $(dropmenu__name).addClass("open");
  });

  $(document).mouseup(function (e) {
    var container = $(".dropmenu, .dropdown, .popup");
    if (container.has(e.target).length === 0){
      $(container).removeClass("open");
    }
  });


  
});


// VUE ----------------------------------------------------------------------
// Vue.component('v-select', VueSelect.VueSelect)

// new Vue({
//   el: '#local',
//   // data: {
//   //   options: [
//   //     'foo',
//   //     'bar',
//   //     'baz'
//   //   ]
//   // }
// });
