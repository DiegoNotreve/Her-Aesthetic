document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll(".servicos-container");
  const menuItems = document.querySelectorAll(".menu-servicos .sub-title");
  let currentIndex = 0;

  function showContainer(index) {
      if (index === currentIndex) return; // Evita transições repetidas

      const oldContainer = containers[currentIndex];
      const newContainer = containers[index];

      // Faz o container antigo sumir com fade-out
      oldContainer.classList.remove("show");

      // Aguarda o tempo da transição antes de exibir o novo container
      setTimeout(() => {
          oldContainer.style.position = "absolute";
          oldContainer.style.visibility = "hidden";

          // Mostra o novo container com fade-in
          newContainer.style.position = "relative";
          newContainer.style.visibility = "visible";
          newContainer.classList.add("show");
      }, 500); // Tempo do fade-out antes do fade-in

      currentIndex = index;
  }

  function goToContainer(index) {
      if (index >= 0 && index < containers.length) {
          showContainer(index);
      }
  }

  // Inicializa mostrando o primeiro container
  containers[currentIndex].classList.add("show");
  containers[currentIndex].style.position = "relative";
  containers[currentIndex].style.visibility = "visible";

  // Adiciona eventos de clique às ancoras do menu
  menuItems.forEach((item, index) => {
      item.addEventListener("click", function (event) {
          event.preventDefault();
          goToContainer(index);
      });
  });
});
