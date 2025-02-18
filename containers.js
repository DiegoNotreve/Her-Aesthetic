document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll(".servicos-container");
  const menuItems = document.querySelectorAll(".menu-servicos .sub-title");
  let currentIndex = 0;

  function showContainer(index) {
      if (index === currentIndex) return; 

      const oldContainer = containers[currentIndex];
      const newContainer = containers[index];

      oldContainer.classList.remove("show");

    
      setTimeout(() => {
          oldContainer.style.position = "absolute";
          oldContainer.style.visibility = "hidden";

        
          newContainer.style.position = "relative";
          newContainer.style.visibility = "visible";
          newContainer.classList.add("show");
      }, 500); 

      currentIndex = index;
  }

  function goToContainer(index) {
      if (index >= 0 && index < containers.length) {
          showContainer(index);
      }
  }

  containers[currentIndex].classList.add("show");
  containers[currentIndex].style.position = "relative";
  containers[currentIndex].style.visibility = "visible";

 
  menuItems.forEach((item, index) => {
      item.addEventListener("click", function (event) {
          event.preventDefault();
          goToContainer(index);
      });
  });
});


// aqui é o efeito de smooth para servicos, pois no css n funcionou
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


