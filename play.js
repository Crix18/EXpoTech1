document.addEventListener("DOMContentLoaded", function() {
    var mensaje = document.getElementById("mensaje");
    var cuadro = document.getElementById("cuadro");

    // Almacena las posiciones iniciales del cuadro
    var cuadroInicialTop = 50;
    var cuadroInicialLeft = 50;

    mensaje.style.position = "absolute";
    mensaje.style.top = "50%";
    mensaje.style.left = "50%";
    mensaje.style.transform = "translate(-50%, -50%)";
    mensaje.style.zIndex = "1";

    // Establece las propiedades del cuadro con las psoiciones ya definidas
    cuadro.style.position = "absolute";
    //las posiciones no se fijan porque se van a mover
    cuadro.style.top = cuadroInicialTop + "%"; 
    cuadro.style.left = cuadroInicialLeft + "%";
    cuadro.style.transform = "translate(-50%, -50%)";
    cuadro.style.width = "100px";
    cuadro.style.height = "100px";
    cuadro.style.backgroundColor = "#3498db";
    cuadro.style.zIndex = "0";

    var step = 5;

    function handleKeyDown(event) {
        const cuadroTop = parseInt(cuadro.style.top) || cuadroInicialTop;
        const cuadroLeft = parseInt(cuadro.style.left) || cuadroInicialLeft;
//movimiento del cuadro
        if (event.key === "ArrowUp" && cuadroTop > 0) {
            cuadro.style.top = (cuadroTop - step) + "%";
        } else if (event.key === "ArrowDown" && cuadroTop < window.innerHeight - step) {
            cuadro.style.top = (cuadroTop + step) + "%";
        } else if (event.key === "ArrowLeft" && cuadroLeft > 0) {
            cuadro.style.left = (cuadroLeft - step) + "%";
        } else if (event.key === "ArrowRight" && cuadroLeft < window.innerWidth - step) {
            cuadro.style.left = (cuadroLeft + step) + "%";
        }
//funcion de cuando se toca un circulo        
        var cuadroRect = cuadro.getBoundingClientRect();
var verdeRect = document.querySelector(".circulo-verde").getBoundingClientRect();
var amarilloRect = document.querySelector(".circulo-amarillo").getBoundingClientRect();
var negroRect = document.querySelector(".circulo-negro").getBoundingClientRect();
var rojoRect = document.querySelector(".circulo-rojo").getBoundingClientRect();
if (
    cuadroRect.right > verdeRect.left &&
    cuadroRect.left < verdeRect.right &&
    cuadroRect.bottom > verdeRect.top &&
    cuadroRect.top < verdeRect.bottom
) {
    window.open("bachiller_en_ciencias.html", "_blank");
} else if (
    cuadroRect.right > amarilloRect.left &&
    cuadroRect.left < amarilloRect.right &&
    cuadroRect.bottom > amarilloRect.top &&
    cuadroRect.top < amarilloRect.bottom
) {
   
    window.open("bachiller_en_agropecuaria.html", "_blank");
} else if (
    cuadroRect.right > negroRect.left &&
    cuadroRect.left < negroRect.right &&
    cuadroRect.bottom > negroRect.top &&
    cuadroRect.top < negroRect.bottom
) {
   
    window.open("bachiller_en_informatica.html", "_blank");
} else if (
    cuadroRect.right > rojoRect.left &&
    cuadroRect.left < rojoRect.right &&
    cuadroRect.bottom > rojoRect.top &&
    cuadroRect.top < rojoRect.bottom
) {
   
    window.open("bachiller_en_comercio.html", "_blank");
}
}
    

    document.addEventListener("keydown", handleKeyDown);
//funcion al presionar enter en el mensaje 
    function quitarMensaje(event) {
        if (event.key === "Enter") {
            mensaje.style.display = "none";
            document.removeEventListener("keydown", quitarMensaje);
        }
    }

    document.addEventListener("keydown", quitarMensaje);
});