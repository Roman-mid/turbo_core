


$('.spoilers__title').click( function ()  {
  $(this).toggleClass('active').next().slideToggle(300);
});


const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click' , e => {
    e.preventDefault();
    const blockId = anchor.getAttribute('href')
    document.querySelector('' + blockId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};


let btnRegestration = document.querySelector('.login__regestration');
let btnEnter = document.querySelector('.login__enter');
let form = document.querySelectorAll('.form');
let formRegestration = document.querySelector('.form_regestration');
let formEnter = document.querySelector('.form_enter');
let menu = document.querySelector('.menu');
let mobMenu = document.querySelector('.mobile-menu');
let overlay = document.querySelector('.overlay');
let modalWindow = document.querySelector('.modal-window');
let body = document.querySelector('body');


btnRegestration.addEventListener('click' , () => {
  formEnter.classList.remove('active');
  menu.classList.remove('active');
  mobMenu.classList.remove('active');
  overlay.classList.add('active');
  formRegestration.classList.add('active');
  body.classList.add('lock');

})


btnEnter.addEventListener('click' , () => {
  formRegestration.classList.remove('active');
  menu.classList.remove('active');
  mobMenu.classList.remove('active');
  overlay.classList.add('active');
  formEnter.classList.add('active');
  body.classList.add('lock');

})




mobMenu.addEventListener('click' , () => {
  if(mobMenu.classList.contains('active')) {
    overlay.classList.remove('active')
    menu.classList.remove('active')
    mobMenu.classList.remove('active')
    body.classList.remove('lock');
  }else {

    formRegestration.classList.remove('active');
    formEnter.classList.remove('active');
    menu.classList.toggle('active');
    mobMenu.classList.toggle('active');
    overlay.classList.add('active');
    body.classList.add('lock');
  }
  

})



modalWindow.addEventListener('click' , () => {
  overlay.classList.remove('active');
  menu.classList.remove('active');
  mobMenu.classList.remove('active');
  overlay.classList.remove('active');
  body.classList.remove('lock');
  
})


window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  header.classList.toggle("color", window.scrollY > 100);
});



const mySwiper = new Swiper('.swiper', {

  navigation: {
    nextEl: '.button-wrap__next',
    prevEl: '.button-wrap__back ',
  },
  
  direction : 'horizontal',
  breakpoints: {

    767: {
      slidesPerView: 1,

    },
    // when window width is >= 720px
    991 : {
        slidesPerView: 2,
        spaceBetween: 15,

    },
      },
      loop : true,
      stopOnLastSlide : false,
      autoHeight: true,
      autoplay : {
        delay : 3000,
      },


   
});
