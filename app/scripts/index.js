import $ from "jquery";
import App from "./main.js";
import Swiper from 'swiper';

$(document).ready(function() {
  let app = new App();
  burger();
  parallax();
  indexSlider();
  institSlider();
  gallery();
  mediaSlider();
  performSlider();
  headerScroll();
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
      'transform': 'translate(0%, ' +  - scroll / 4 + '%)'
    });
  });
}

function headerScroll() {

  var 
      header = $('.header-white'),
      prevScroll = 0,
      total = 0;
  $(window).on('scroll', function(){
    let winScroll = $(this).scrollTop();
    total = winScroll - prevScroll;
    prevScroll = winScroll;
    
    if ($(this).scrollTop() == 0){
      header.removeClass('header-white--active');
      header.removeClass('header-white--top');
    }else{
      if ((total < 0) && ($(this).scrollTop() !== 0)){
        header.addClass('header-white--active');
      }else{
        header.addClass('header-white--top');
        header.removeClass('header-white--active');
      }
    }
    

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

function institSlider() {
  var institSlide = new Swiper('.index__instit-slider', {
    slidesPerView: 'auto',
    centerSlides: true,
    pagination: {
      el: '.index__instit-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.instit__next',
      prevEl: '.instit__prev',
    },
  });
}

function gallery() {
  var gallerySlide = new Swiper('.index__gallery-conteiner', {
    // effect: 'coverflow',
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: 'auto',

    breakpoints: {

      990: {
        centeredSlides: true,
      }

    },
    // coverflowEffect: {
    //   rotate: 0,
    //   stretch: 0,
    //   depth: 1000,
    //   modifier: 1,
    //   slideShadows: false,
    // },
    navigation: {
      nextEl: '.gallery-next',
      prevEl: '.gallery-prev',
    },
  });
}

function mediaSlider() {
  var institSlide = new Swiper('.index__media-conteiner', {
    slidesPerView: 'auto',
    centerSlides: true,
    navigation: {
      nextEl: '.media-prev',
      prevEl: '.media-next',
    },
  });
}

function performSlider() {
  var performSlide = new Swiper('.perfom__picture-slider-conteiner', {
    slidesPerView: 'auto',
    centerSlides: true,
    pagination: {
      el: '.perfom__picture-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.perform__next',
      prevEl: '.perform__prev',
    },
  });
}