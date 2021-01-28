import $ from "jquery";
import App from "./main.js";
import Swiper from 'swiper';

$(document).ready(function() {
  let app = new App();
  burger();
  parallax();
  indexSlider();
});

function burger() {
  $('.burger-btn').on('click', function(){
    $('.burger-btn').toggleClass('burger-btn--active');
    $('.burger-menu').toggleClass('burger-menu--active');
  });
}

function parallax() {
  $(window).on('scroll', function(){
    let scroll = $(this).scrollTop();

    $('.parallax').css({
      'transform': 'translate(0%, ' +  - scroll / 4 + '%'
    });
  });
}

function indexSlider() {
  var indexSlide = new Swiper('.index__slider-conteiner', {
    slidesPerView: 'auto',
    centerSlides: true,
    pagination: {
      el: '.index__slider-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.index__next',
      prevEl: '.index__prev',
    },
  });
}