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
  $("main, footer").click(function () {
    $("#navToggle").removeClass("active");
    $(".header__authorization, .menu").removeClass("open");
    $("body").removeClass("locked");
  });
  $(".header__enter").click(function () {
    $(this).toggleClass("open");
  });
  //---------------------------------------------------------------------------
  $(".btn--comment").click(function () {
    $('.feedback__comment').toggleClass("open");
  });

  //---------------------------------------------------------------------------
  
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
