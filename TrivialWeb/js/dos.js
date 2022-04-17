function inicializarDos() {
    // De momento no hay botón de "seleccionar todos"
    // No es necesario calcular cuántas columnas hay, de momento es más manual
    // Mucho menos generarlo dinámicamente
}
function comenzarJuego() {
    var numPreguntas = document.querySelector("#numPreguntas");
    if (numPreguntas.value != "") {

    } else {
        alert("Debe especificar un número de preguntas");
    }
}