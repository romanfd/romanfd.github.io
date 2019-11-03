$(function () {

  // Intro - Slick slider
  $('.reviews').slick({
    infinite: true,
    prevArrow: '<div class="reviews__arrow reviews__arrow--prev"></div>',
    nextArrow: '<div class="reviews__arrow reviews__arrow--next"></div>'
  });

  $('.intro-slider').slick({
    asNavFor: '.intro-slider-dots',
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    arrows: false,
    accessibility: false,
    fade: true
  });

  $('.intro-slider-dots').slick({
    asNavFor: '.intro-slider',
    focusOnSelect: true,
    draggable: false,
    slidesToShow: 4,
    slidesToScroll: 1
  });

  // Active - Burger menu + Mobile navigation
  $('.burger-toggle').click(function () {
    $('.burger-toggle').toggleClass('burger-toggle--active');
    $('.mobile-nav').toggleClass('mobile-nav--active');
  })

  // Accordion in section Services-two
  $('.accordion__header').click(function () {
    $('.accordion__content').not($(this).next()).slideUp();
    $(this).next().slideToggle();
  });

  // Back to Top Button with Smooth Scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#scroll').fadeIn();
    } else {
      $('#scroll').fadeOut();
    }
  });
  $('#scroll').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });

  // Header background color
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.header').addClass('header--active');
    } else {
      $('.header').removeClass('header--active');
    }
  });

});
