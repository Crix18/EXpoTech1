var images = ["ow1.png", "ow2.png", "ow3.png"];
var currentImageIndex = 0;
var imgElement = document.querySelector(".carousel img");
var cuadro = document.querySelector(".cuadro"); 

function changeImage() {
  imgElement.src = images[currentImageIndex];

  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }

  setTimeout(changeImage, 3000);
}

window.addEventListener("load", changeImage);
var themeButton = document.querySelector(".theme-button");
var body = document.body;

themeButton.addEventListener("click", function() {
  body.classList.toggle("dark-theme");
  cuadro.classList.toggle("dark-theme"); 
  if (body.classList.contains("dark-theme")) {
    themeButton.textContent = "Modo Claro";
  } else {
    themeButton.textContent = "Modo Oscuro";
  }
});
