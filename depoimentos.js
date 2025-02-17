document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const carrosselWrapper = document.querySelector(".carrossel-wrapper");
    const slides = document.querySelectorAll(".slide");

    let currentIndex = 0;

    function updateCarousel() {
        const slideWidth = slides[0].offsetWidth;
        carrosselWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    nextBtn.addEventListener("click", function () {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Volta ao primeiro slide
        }
        updateCarousel();
    });

    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1; // Vai para o último slide
        }
        updateCarousel();
    });
});
