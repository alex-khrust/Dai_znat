// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

// import $ from 'jquery'; window.jQuery = $; window.$ = $;
// require('~/app/libs/imageuploadify/imageuploadify.m;in.js');
// import imageuploadify from 'libs/imageuploadify/imageuploadify.min.js'; window.imageuploadify = imageuploadify

// import Vue from 'vue'
// import vSelect from 'vue-select'


document.addEventListener('DOMContentLoaded', () => {
  
  // Preloader
  $(window).on('load', function () {
    $('body').addClass('loaded_hiding');
    window.setTimeout(function () {
      $('body').addClass('loaded');
      $('body').removeClass('loaded_hiding');
    }, 500);
  });

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

  // Прокрутка к выбранному пункту меню ------------------------------
  $('nav ul li a').click(function(e) {
    
    e.preventDefault();
    
    var menuLink = $(this).attr('href');
    var sectionDist = $(menuLink).offset().top;
    var header = $("header").outerHeight(true);
    var sectionDist = $(menuLink).offset().top;
    
    $('html, body').animate({scrollTop: sectionDist}, 1000);
  });
  //-----------------------------------------------------------------------
  // Добавление класса active пунктам меню --------------------------------
  $('nav ul li a').click(function(){
    $("nav ul li a").removeClass('active');
    $(this).addClass('active');
    $('nav').removeClass('open');
    $('.hamburger').toggleClass('active');
  });
  //-------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  $(".btn--comment").click(function () {
    $('.feedback__comment').toggleClass("open");
  });
  //---------------------------------------------------------------------------
  // $(':radio:not(:checked)').attr('disabled', true);
  //---------------------------------------------------------------------------
  $(".btn--popup").on("click", function (e) {
    e.preventDefault();
    var popup__name = $('.' + $(this).attr("rel"));
    $(popup__name).addClass("open");
    $("body").addClass("locked");
  });
  $(".overlay, .btn--close").on("click", function () {
    $(".popup").removeClass("open");
    $("body").removeClass("locked");
  });
  //---------------------------------------------------------------------------
  $("button[rel='dropdown'], button[rel='dropmenu'], div[rel='dropdown'], .btn--menu").on("click", function () {
    $(this).closest('li, .tags, .status').find('.dropmenu, .dropdown').addClass("open");

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




  
  // SELECT ----------------------------------------------------------------

  $('.select>.custom-select').on('click', function(){
    $(this).toggleClass('active');
    $(this).closest('.select').find('.custom-select-items').slideToggle();
  });
  
  $('select').each(function(index){
  
    var sel = $(this);
    
    // MAKE CUSTOM SELECT ELEMENTS
    // index here used to identify select element if more
    // than one in the page
    sel.wrap('<div class="wrap-select wrap-select-' + index + '"></div>');
    var $wrap_sel= $('.wrap-select-' + index);
    
    $wrap_sel.append('<div class="custom-select">YAY</div>');
    $wrap_sel.append('<ul class="custom-select-items"></ul>');
    var $custom_select = $wrap_sel.find('.custom-select'),
        $sel_items = $wrap_sel.find('.custom-select-items');
    
    //Popolate the custom options
    sel.children('option').each(function(index){
     //Separation between placeholder and select items
     if($(this).val() === 'default'){
      $custom_select.text($(this).text());
     }
     else{
      $sel_items.append('<li>' + $(this).text() +'</li>');
     }
    });
    
    
    //DISPLAY CUSTOM OPTIONS HANDLER
    $custom_select.on('click', function(){
     $(this).toggleClass('active');
     $sel_items.slideToggle();
    });
    
    
    //ITEM SELECTION
    $sel_items.children('li').on('click', function(){
      var itemVal = $(this).text();
      $custom_select.text(itemVal).removeClass('active');
      $sel_items.children('li').removeClass('active');
      $(this).addClass('active');
      $sel_items.slideUp();
   
      //set the original select option item for post data
      sel.children('option').each(function(index){
       if($(this).text() === itemVal){
         $(this).attr('selected', 'selected');
       }
      });
    });
    
   // End select each loop 
   });
   
  //-----------------------------------------------------------------------
  $(function() {

    var $el, leftPos, newWidth,
        $pagination = $(".pagination");
    
    $pagination.append("<li class='bar'></li>");
    var $magicLine = $(".bar");
    
    $magicLine
        .width($(".pagination .active").width())
        .css("left", $(".active a").position().left)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());
        
    $(".pagination li a").hover(function() {
        $el = $(this);
        leftPos = $el.position().left;
        newWidth = $el.parent().width();
        $magicLine.stop().animate({
            left: leftPos,
            width: newWidth
        });
    }, function() {
        $magicLine.stop().animate({
            left: $magicLine.data("origLeft"),
            width: $magicLine.data("origWidth")
        });    
    });
  });
  // =======================================================================
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
