$(function () {

  // Header slider
  $('.header__slider').slick({
    infinite: true,
    fade: true,
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="next slide">',
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="prev slide">',
    asNavFor: '.slider-dotshead',
  });

  $('.slider-dotshead').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
  });

  // Surf slider
  $('.surf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="next slide">',
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="prev slide">',
    asNavFor: '.slider-map',

  })

  // Surf map slider
  $('.slider-map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf-slider',
    focusOnSelect: true,
  })

  // Travel slider
  $('.travel__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    fade: true,
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="next slide">',
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="prev slide">',
  })

  // Sleep slider
  $('.sleep__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    fade: true,
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="next slide">',
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="prev slide">',
  })

  // Shop slider
  $('.shop__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    fade: true,
    nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="next slide">',
    prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="prev slide">',
  })


});