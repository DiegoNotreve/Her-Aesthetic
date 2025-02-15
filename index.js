const heroBg = document.getElementById("hero-bg");
        let index = 0;
        const totalImages = 4; // Agora temos 4 imagens

        function slideImages() {
            index = (index + 1) % totalImages; // Alterna entre 0, 1, 2 e 3
            heroBg.style.transform = `translateX(-${index * 100}vw)`;
        }
        
        setInterval(slideImages, 4000); // Troca a cada 4 segundos