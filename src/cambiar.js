
document.addEventListener("DOMContentLoaded", function() {
    
    const parrafo = document.getElementById("miParrafo");
    const botonCambioEstilo = document.getElementById("cambiarEstiloBtn");

    //  evento de clic al botón
    botonCambioEstilo.addEventListener("click", function() {
        // Cambia el color de fondo o el estilo de fuente del párrafo
        cambiarEstilo(parrafo);
    });
});

// Función para cambiar el estilo del párrafo
function cambiarEstilo(elemento) {
    
    const coloresFondo = ["#ff9999", "#99ff99", "#9999ff", "#ffff99"];
    const nuevoColorFondo = coloresFondo[Math.floor(Math.random() * coloresFondo.length)];

    // Cambia el color de fondo del párrafo
    elemento.style.backgroundColor = nuevoColorFondo;
}
