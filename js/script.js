const navParent = document.querySelector('.nav__parent');
const navSublist = document.querySelector('.nav__sublist');
navParent.addEventListener("mouseenter", function(e){
    this.classList.add('active');
});
navParent.addEventListener("mouseleave", function(e){
  this.classList.remove('active');
});



const setFixed = 600;
const fixed = document.querySelector('.header');
const fix = document.querySelector('.baners');


const getTop = () => window.pageYOsetFixed  || document.documentElement.scrollTop;

const updateDashoffsett = () => {};

// onscroll
window.addEventListener('scroll', () => {
  if (getTop() > setFixed ) {
    fixed.classList.add ('fixed');
	  fix.classList.add('fix');

  } else {
    fixed.classList.remove ('fixed');
	fix.classList.remove('fix');
  }

});



var swiper1 = new Swiper('.baners__container', {
  slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiper2 = new Swiper('.news__slide', {
    slidesPerView: 3,
    spaceBetween: 54,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    mousewheel: false,
    keyboard: true,
  });
  var swiper3 = new Swiper('.abaut-slider__container', {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    keyboard: true,
  });
  var swiper4 = new Swiper('.galery-video__slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    keyboard: true,
  });    