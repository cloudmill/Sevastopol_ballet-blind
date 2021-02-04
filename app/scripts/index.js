import $, { event } from "jquery";
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
  search();
  close();
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

function search(){
  let searchOn = $('.header__search');
  let searchOff = $('.search-close');
  let searchBl = $('.search');

  searchOn.on('click', function(){
    searchBl.addClass('search--active');
  });
  searchOff.on('click', function(){
    searchBl.removeClass('search--active');
  });
}

close = function(){
  let searchBl = $('.search');
  $(window).on('click', function(event){
    if (searchBl.hasClass('search--active') && event.pageY > 155){
      searchBl.removeClass('search--active');
    }
  });

  $(document).on('keydown',function(event){
    if ( event.keyCode == 27 ){
      searchBl.removeClass('search--active');
    }
  });
}


function headerScroll() {

  var 
      header = $('header'),
      prevScroll = 0,
      total = 0;
  $(window).on('scroll', function(){
    let winScroll = $(this).scrollTop();
    total = winScroll - prevScroll;
    prevScroll = winScroll;
    
    if ($(this).scrollTop() <= 200){
      header.removeClass('header--active');
      header.removeClass('header--top');
      $('.white').css('display', 'none');
      $('.black').css('display', 'block');
      $('.link-b').css('color', 'black');
    }else{
      if ((total < 0) && ($(this).scrollTop() !== 0)){
        header.addClass('header--active');
        $('.white').css('display', 'block');
        $('.black').css('display', 'none');
        $('.link-b').css('color', 'white');
      }else{
        header.addClass('header--top');
        header.removeClass('header--active');
        $('.white').css('display', 'none');
        $('.black').css('display', 'block');
        $('.link-b').css('color', 'black');
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