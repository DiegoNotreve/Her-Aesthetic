

var swiper = new Swiper(".mySwiper", {

    lopp:true,
    grabCursos: true,


      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    425: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    1188: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
  });