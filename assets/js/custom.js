/*global jQuery:false */
jQuery(document).ready(function($) {

  // social network icon tooltip
  $('.social li a').tooltip();

  //scroll to top
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });
  $('.scrollup').click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

  $('#liSomos').click(function() {
    $("html, body").animate({
      scrollTop: $("#divSomos").offset().top
    }, 800);
    return false;
  });
  $('#liAreasTrabajo').click(function() {
    $("html, body").animate({
      scrollTop: $("#divAreasTrabajo").offset().top
    }, 1000);
    return false;
  });
  $('#liContacto').click(function() {
    $("html, body").animate({
      scrollTop: $("#divContacto").offset().top
    }, 1200);
    return false;
  });


  // accordion
  $('#accordionVer').on('show', function(e) {
    var btnVer = $(e.currentTarget.ownerDocument).find("#btnVer");
    btnVer.html(btnVer.html().replace("más", "menos"));
    // if (btnVer.text() === "Ver más"){
    //   btnVer.text("Ver menos");
    // } else {
    //   btnVer.text("Ver más");
    // }    
    // $(e.target).prev('.accordion-heading').find('.accordion-toggle').addClass('active');
    // $(e.target).prev('.accordion-heading').find('.accordion-toggle i').removeClass('icon-plus');
    // $(e.target).prev('.accordion-heading').find('.accordion-toggle i').addClass('icon-minus');
  });

  $('#accordionVer').on('hide', function(e) {    
    var btnVer = $(e.currentTarget.ownerDocument).find("#btnVer");
    btnVer.html(btnVer.html().replace("menos", "más"));
    //btnVer.text("Ver más");
    // $(this).find('.accordion-toggle').not($(e.target)).removeClass('active');
    // $(this).find('.accordion-toggle i').not($(e.target)).removeClass('icon-minus');
    // $(this).find('.accordion-toggle i').not($(e.target)).addClass('icon-plus');
  });


  // accordion
  $('.accordion').on('show', function(e) {
    console.log('Accordion', e);
    $(e.target).prev('.accordion-heading').find('.accordion-toggle').addClass('active');
    $(e.target).prev('.accordion-heading').find('.accordion-toggle i').removeClass('icon-plus');
    $(e.target).prev('.accordion-heading').find('.accordion-toggle i').addClass('icon-minus');
  });

  $('.accordion').on('hide', function(e) {
    $(this).find('.accordion-toggle').not($(e.target)).removeClass('active');
    $(this).find('.accordion-toggle i').not($(e.target)).removeClass('icon-minus');
    $(this).find('.accordion-toggle i').not($(e.target)).addClass('icon-plus');
  });


  // add animation effect on call action area
  $(".call-action").hover(
    function() {
      $('.cta a').addClass("animated tada");
    },
    function() {
      $('.cta a').removeClass("animated tada");
    }
  );


  // Create the dropdown base
  $("<select />").appendTo("nav");
  // Create default option "Go to..."
  $("<option />", {
    "selected": "selected",
    "value": "",
    "text": "Ir a..."
  }).appendTo("nav select");

  // Populate dropdown with menu items
  $("nav li").each(function() {
    var el = $(this);
    $("<option />", {
      "value": el.attr("href"),
      "text": el.text()
    }).appendTo("nav select");
    //el.click();
    //console.log("ID: ", el.attr("id"));
  });

  // To make dropdown actually work
  // To make more unobtrusive: http://css-tricks.com/4064-unobtrusive-page-changer/
  $("nav select").change(function() {
    window.location = $(this).find("option:selected").val();
  });

  $('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn();
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut();
  });

  //prettyPhoto
  $("a[data-pretty^='prettyPhoto']").prettyPhoto();

  //portfolio hover
  $('ul.da-thumbs > li').hoverdir();

  //add effect on box
  $(".box").hover(
    function() {
      $(this).find('.icon').addClass("animated fadeInDown");
      $(this).find('h4').addClass("animated fadeInUp");
    },
    function() {
      $(this).find('.icon').removeClass("animated fadeInDown");
      $(this).find('h4').removeClass("animated fadeInUp");
    }
  );

  // flexslider
  $('.flexslider').flexslider({
    animation: "fade",
    controlNav: false
  });


});
