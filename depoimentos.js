document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.querySelector('.swiper-button-prev');
    const nextButton = document.querySelector('.swiper-button-next');
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const slides = document.querySelectorAll('.swiper-slide');
    
    let currentIndex = 0;
    const slidesToShow = 3; // Número de slides visíveis
    const slideWidth = slides[0].offsetWidth + 20; // 20px é o espaço entre os slides

    function updateCarousel() {
        swiperWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    // Navegar para o próximo slide
    nextButton.addEventListener('click', function () {
        if (currentIndex < slides.length - slidesToShow) {
            currentIndex++; // Avança para o próximo slide
        } else {
            currentIndex = 0; // Se chegar ao último slide, volta para o primeiro
        }
        updateCarousel();
    });

    // Navegar para o slide anterior
    prevButton.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--; // Volta para o slide anterior
        } else {
            currentIndex = slides.length - slidesToShow; // Vai para o último slide
        }
        updateCarousel();
    });

    // Inicializa o carrossel
    updateCarousel();
});
