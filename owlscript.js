// Cambio de imagenes  //
document.addEventListener("DOMContentLoaded", function () {
  var imageContainer = document.getElementById("imageContainer");
  var images = document.querySelectorAll(".infoimage");
  var currentImageIndex = 0;
  var intervalId;

  function changeImage(index) {
    images[currentImageIndex].style.display = "none";
    currentImageIndex = index;
    images[currentImageIndex].style.display = "block";
  }

  function autoChangeImage() {
    changeImage((currentImageIndex + 1) % images.length);
  }

  function startAutoChange() {
    intervalId = setInterval(autoChangeImage, 7000);
  }

  function stopAutoChange() {
    clearInterval(intervalId);
  }

  document.getElementById("btnImage1").addEventListener("click", function () {
    stopAutoChange();
    changeImage(0);
  });

  document.getElementById("btnImage2").addEventListener("click", function () {
    stopAutoChange();
    changeImage(1);
  });

  startAutoChange();
});




document.addEventListener('DOMContentLoaded', () => {
  const searchBar = document.getElementById('search-bar');

  searchBar.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
          const query = searchBar.value.toLowerCase().trim(); // Palabra ingresada
          if (query) {
              // Buscar elementos que contengan el texto
              const elements = document.querySelectorAll('body *');
              let found = false;

              elements.forEach((element) => {
                  if (element.textContent.toLowerCase().includes(query)) {
                      // Encontrar el elemento y desplazarse hacia él
                      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      element.style.backgroundColor = '#ffff00'; // Destacar el texto
                      setTimeout(() => {
                          element.style.backgroundColor = ''; // Restaurar fondo después de 3s
                      }, 3000);
                      found = true;
                      return; // Detener la búsqueda después del primer resultado
                  }
              });

              if (!found) {
                  alert(`La palabra "${query}" no se encontró en la página.`);
              }
          }
      }
  });
});