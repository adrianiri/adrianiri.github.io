function inicializarDos() {
    // De momento no hay botón de "seleccionar todos"
    // No es necesario calcular cuántas columnas hay, de momento es más manual
    // Mucho menos generarlo dinámicamente
}
function comenzarJuego() {
    var txtNumPreguntas = document.querySelector("#txtNumPreguntas");
    var errores = "";
    if (txtNumPreguntas.value == "") {
        errores = "- Debe especificar un número de preguntas\n";
    }
    if (colecEncabezadosSeleccionados.length == 0) {
        errores += "- Debe seleccionar al menos un tipo de pregunta\n";
    }
    if (errores == "") {
        // Se preparan variables globales
        ///////////////////////// txtNumPreguntas.value /////////////////////////
        numPreguntas = parseInt(txtNumPreguntas.value);
        /////////////////////////////////////////////////////////////////////////
        numPregunta = 1;
        numCorrectas = 0;
        // Se genera la colección de filas preguntables
        filaEncabezado = 0;
        numColumnas = tablaTraducciones[filaEncabezado].length;
        colecFilasPreguntables = [];
        colecFilasPreguntablesCopia = [];
        filasTraducidas(numColumnas); // Genera la colección colecFilasPreguntables
        // Se clona la colecFilasPreguntables en colecFilasPreguntablesCopia:
        // - Para poder generar las respuestas sin que afecte que se hayan ido quitando filas preguntables.
        // - Es interesante por el filtro inicial, mejor que recorrer toda la tabla.
        colecFilasPreguntablesCopia = colecFilasPreguntables;
        // Chequeo
        if (colecFilasPreguntables.length < numPreguntas) {
            alert(`- Actualmente no se pueden generar más de ${colecFilasPreguntables.length} preguntas con esa selección`);
            return;
        }
        // Se genera la colección completa de preguntas
        for (var i = 0; i < numPreguntas; i++) {
            colecNiveles.push(generarNivel());
            // En caso de que no hubiera suficientes respuestas, te echa
            if (colecNiveles(indice) == "") {
                return;
            }
        }
        clicaCuatro(); // Manda a la pantalla del juego
    } else {
        alert(errores);
        return;
    }
}