

var swiper = new Swiper(".mySwiper", {

    lopp:true,
    grabCursos: true,


      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

 
  breakpoints: {
   
    450: {
      slidesPerView: 1,
      spaceBetween: 20
    },
   
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
   
    1024: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  }
  });