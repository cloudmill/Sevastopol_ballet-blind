import $, { event } from "jquery";
import App from "./main.js";
import Swiper from 'swiper';
// import AOS from 'aos';

$(document).ready(function() {
  let app = new App();
  // inAos();
  noAnim();
  burger();
  // parallax();
  indexSlider();
  institSlider();
  gallery();
  mediaSlider();
  performSlider();
  headerScroll();
  search();
  close();
  indexTooltip();
  infoScroll();
  greetingInit()
  // initSlider();
  youtube();
  modal();
  eye();
  configGallery();
  galSlider();
  // indSlider();
  // perSlider();
});

function inAos() {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 50, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
}

function burger() {
  $('.burger-btn').on('click', function(){
    $('.burger-btn').toggleClass('burger-btn--active');
    $('.burger-menu').toggleClass('burger-menu--active');
  });
}

// function parallax() {
//   $(window).on('scroll', function(){
//     let scroll = $(this).scrollTop();

//     $('.parallax').css({
//       'transform': 'translate(0%, ' +  - scroll / 5 + '%)'
//     });
//     $('.index__start-phone').css({
//       'transform': 'translate(-50%, ' + ( -50 + scroll / 80) + '%)'
//     });
//   });
// }

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

function noAnim() {
  $('[data-aos=fade-up]').css('opacity', 1);
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

function indexTooltip(){

  // $('.sup-img').on('mouseenter', function(){
  //     $('.tooltip').addClass('tooltip--active');
  // });
  // $('.sup-img').on('mouseleave', function(){
  //   $('.tooltip').removeClass('tooltip--active');
  // });

  $('.sup-img').on('click', function(){
    $('.tooltip').toggleClass('tooltip--active');
  });
}

function infoScroll() {
  
  $('.index__start-mouse').on('click', function(){
    if ($('#info').length){
    let top = $('#info').offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
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
    
    if ($(this).scrollTop() <= 150){
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
    // effect: 'fade',
    // slidesPerColumn: 1,
    grabCursor: true,
    loop: true,
		speed: 1000,
		loopAdditionalSlides: 10,
    watchSlidesProgress: true,
    pagination: {
      el: '.index__slider-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.index__next',
      prevEl: '.index__prev',
    },
    on: {
			init: function () {
			},
			imagesReady: function () {
			},
			progress: function () {
				const swiper = this;
				for (let i = 0; i < swiper.slides.length; i++) {
					const slideProgress = swiper.slides[i].progress;
					const innerOffset = swiper.width * 0.5;
					const innerTranslate = slideProgress * innerOffset;

					swiper.slides[i].querySelector('.slide-bgimg').style.transform =
						'translateX(' + innerTranslate + 'px)';
				}
			},
			touchStart: function () {
				const swiper = this;
				for (let i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = '';
				}
			},
			setTransition: function () {
				const swiper = this;
				for (let i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = 1000 + 'ms';
					swiper.slides[i].querySelector('.slide-bgimg').style.transition =
						1000 + 'ms';
				}
			}
		}
  });
}

function institSlider() {
  var institSlide = new Swiper('.index__instit-slider', {
    slidesPerView: 'auto',
    centerSlides: true,
    grabCursor: true,
    loop: true,
		speed: 1000,
		loopAdditionalSlides: 10,
    watchSlidesProgress: true,
    pagination: {
      el: '.index__instit-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.instit__next',
      prevEl: '.instit__prev',
    },
    on: {
			init: function () {
			},
			imagesReady: function () {
			},
			progress: function () {
				const swiper = this;
				for (let i = 0; i < swiper.slides.length; i++) {
					const slideProgress = swiper.slides[i].progress;
					const innerOffset = swiper.width * 0.5;
					const innerTranslate = slideProgress * innerOffset;
          console.log(innerTranslate);

					swiper.slides[i].querySelector('.slide-bgimg').style.transform =
						'translateX(' + innerTranslate + 'px)';
				}
			},
			touchStart: function () {
				const swiper = this;
				for (let i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = '';
				}
			},
			setTransition: function () {
				const swiper = this;
				for (let i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = 1000 + 'ms';
					swiper.slides[i].querySelector('.slide-bgimg').style.transition =
						1000 + 'ms';
				}
			}
		}
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
    loop: true,
		speed: 1000,
		loopAdditionalSlides: 10,
		grabCursor: true,
		watchSlidesProgress: true,
    pagination: {
      el: '.perfom__picture-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.perform__next',
      prevEl: '.perform__prev',
    },
    on: {
			init: function () {
			},
			imagesReady: function () {
			},
			progress: function () {
				const swiper = this;
				for (let i = 0; i < swiper.slides.length; i++) {
					const slideProgress = swiper.slides[i].progress;
					const innerOffset = swiper.width * 0.5;
					const innerTranslate = slideProgress * innerOffset;
          console.log(innerTranslate);

					swiper.slides[i].querySelector('.slide-bgimg').style.transform =
						'translateX(' + innerTranslate + 'px)';
				}
			},
			touchStart: function () {
				const swiper = this;
				for (let i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = '';
				}
			},
			setTransition: function () {
				const swiper = this;
				for (let i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = 1000 + 'ms';
					swiper.slides[i].querySelector('.slide-bgimg').style.transition =
						1000 + 'ms';
				}
			},
		}
  });
}


function greetingSlider() {
  var greetSlide = new Swiper('.index__greeting-wrap', {
    slidesPerView: 'auto',
    centerSlides: true,
    pagination: {
      el: '.perfom__picture-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.greeting__next',
      prevEl: '.greeting__prev',
    },
  });
}

function greetingInit() {
  let count = 0;
  $('.index__greeting-wrap').find('.swiper-slide').each(function(){
    count = count + 1;
  });
  if (count <= 1){
    $('.grear-btn').css('display', 'none');
  }else{
    greetingSlider();
  }
}

function modal() {
  $('.js--modal').on('click', function(){
    let data = $(this).data('name');
    // $('.modal').each(function(){
    //   if ( $(this).data('name') == data){
    //     $(this).addClass('modal--active');
    //   }
    // });
    $('.modal').addClass('modal--active');
  });

  $('.modal__wrapper-close').on('click', function(){
    $('.modal').removeClass('modal--active');
  });

  $(document).on('keydown',function(event){
    if ( (event.keyCode == 27) && $('.modal').hasClass('modal--active') ){
      $('.modal').removeClass('modal--active');
    }
  });
}

function youtube() {
  $('.index__video-play').on('click', function(){
    $('.video').addClass('video--active');
  });
  $('.video-close').on('click', function(){
    $('.video').removeClass('video--active');
  });
  $(document).on('keydown',function(event){
    if ( (event.keyCode == 27) && $('.video').hasClass('video--active') ){
      $('.video').removeClass('video--active');
    }
  });
}

// function initSlider() {

//   $('.js--modal').on('click', function(){
//     let data = $('.js--modal').data('name');

//     switch(data){
//       case 'gallery-gal':
//         galSlider()
//         break;
          
//       case 'index-gal':
//         indSlider();
//         break;

//       case 'performance-gal':
//         perSlider();
//         break;
//     }
//   });
  
// }

function galSlider() {
  var galThumbs = new Swiper('.gal-bottom', {
    spaceBetween: 10,
    observer: true,
    observeParents: true,
    slidesPerView: 'auto',
    
  });
  
  var galSlide = new Swiper('.gal-top', {
    slidesPerView: 'auto',
    centerSlides: true,
    observer: true,
    observeParents: true,
    // spaceBetween: 50,
    navigation: {
      nextEl: '.gal-next',
      prevEl: '.gal-prev',
    },
    thumbs: {
      swiper: galThumbs
    },
  });
}

// function perSlider() {
//   var perThumbs = new Swiper('.per-bottom', {
//     spaceBetween: 10,
//     observer: true,
//     observeParents: true,
//     slidesPerView: 'auto',
    
//   });
  
//   var perSlide = new Swiper('.per-top', {
//     slidesPerView: 'auto',
//     centerSlides: true,
//     spaceBetween: 50,
//     observer: true,
//     observeParents: true,
//     navigation: {
//       nextEl: '.per-next',
//       prevEl: '.per-perv',
//     },
//     thumbs: {
//       swiper: perThumbs
//     },
//   });
// }
// function indSlider() {
//   var indThumbs = new Swiper('.ind-bottom', {
//     spaceBetween: 10,
//     observer: true,
//     observeParents: true,
//     slidesPerView: 'auto',
    
//   });
  
//   var indSlide = new Swiper('.ind-top', {
//     slidesPerView: 'auto',
//     centerSlides: true,
//     spaceBetween: 50,
//     observer: true,
//     observeParents: true,
//     navigation: {
//       nextEl: '.ind-next',
//       prevEl: '.ind-prev',
//     },
//     thumbs: {
//       swiper: indThumbs
//     },
//   });
// }

function eye() {

  $('.specialButton').on('click', function(){
    $('#specialButton').click();
  });

  $('#specialButton').on('click', function(){
  });


  // let cloneMob = $('.btn-mob').clone();
  // let cloneNmob = $('.btn-nmob').clone();

  // $('.btn-mob').remove();
  // $('.btn-nmob').remove();

  
  // if ($(window).width() >= '1150'){
  //   $('.nmob').append(cloneNmob);
  // }else{
  //   $('.mob').append(cloneMob);
  // }

    // if ($(this).attr('id') !== 'specialButton'){
    //   $(this).attr('id', 'specialButton');
    // }
}

function configGallery() {

  $('.js--modal').on('click', function(){
    let way = $(this).data('way');
    let description = $(this).data('description');

    let arrayWays = way.split(';');
    
    if ($('.top').has('.swiper-slide') || $('.bottom').has('.swiper-slide')){
      $('.top').empty();
      $('.bottom').empty();
    }

    for (let i = 0; i < arrayWays.length; i++){
      $('.modal').find('.top').append(`<div class="swiper-slide gallery-top-slide"> <div class="img-contein"> <img src="./images/${arrayWays[i]}"/> </div> <p class="text text--regal24-14">${description}</p> </div>`);
      $('.modal').find('.bottom').append(`<div class="swiper-slide"> <div class="find"></div> <img src="./images/${arrayWays[i]}"/> </div>`);
    }
  });

}