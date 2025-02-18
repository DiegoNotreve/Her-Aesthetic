const heroBg = document.getElementById("hero-bg");
        let index = 0;
        const totalImages = 4; 

        function slideImages() {
            index = (index + 1) % totalImages; 
            heroBg.style.transform = `translateX(-${index * 100}vw)`;
        }
        
        setInterval(slideImages, 4000); 