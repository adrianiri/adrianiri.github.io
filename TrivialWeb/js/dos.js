function inicializarDos() {
    // De momento no hay botón de "seleccionar todos"
    // No es necesario calcular cuántas columnas hay, de momento es más manual
    // Mucho menos generarlo dinámicamente
}
function comenzarJuego() {
    var txtNumPreguntas = document.querySelector("#txtNumPreguntas");
    if (txtNumPreguntas.value != "") {
        // Se preparan variables globales
        // *************************** txtNumPreguntas.value *****************************
        numPreguntas = txtNumPreguntas.Value                                            //
        // *******************************************************************************
    } else {
        alert("Debe especificar un número de preguntas");
    }
}