function inicializarDos() {
    // De momento no hay botón de "seleccionar todos"
    // No es necesario calcular cuántas columnas hay, de momento es más manual
    // Mucho menos generarlo dinámicamente
}
function comenzarJuego() {
    var txtNumPreguntas = document.querySelector("#txtNumPreguntas");
    colecEncabezadosSeleccionados = [];
    var meaning = document.querySelector("#meaning");
    var synonyms = document.querySelector("#synonyms");
    var antonyms = document.querySelector("#antonyms");
    var palabra = document.querySelector("#palabra");
    var expresion = document.querySelector("#expresion");
    var sinonimos = document.querySelector("#sinonimos");
    var antonimos = document.querySelector("#antonimos");
    var errores = "";
    var nivel;
    if (txtNumPreguntas.value == "") {
        errores = "- Debe especificar un número de preguntas\n";
    }
    if (meaning.checked) colecEncabezadosSeleccionados.push("Meaning");
    if (synonyms.checked) colecEncabezadosSeleccionados.push("Synonyms");
    if (antonyms.checked) colecEncabezadosSeleccionados.push("Antonyms");
    if (palabra.checked) {colecEncabezadosSeleccionados.push("Palabra");}
    if (expresion.checked) colecEncabezadosSeleccionados.push("Expresión");
    if (sinonimos.checked) colecEncabezadosSeleccionados.push("Sinónimos");
    if (antonimos.checked) colecEncabezadosSeleccionados.push("Antónimos");
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
        colecNiveles = [];
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
            nivel = generarNivel();
            if (nivel) {
                colecNiveles.push(nivel);
            } else {
                return;
            }
        }
        // Preparo la pantalla del juego
        inicializarJuego();
        extraerNivel();
        habilitaCuatro();
        // Ya no se puede volver a la pantalla resumen porque haría referencia a otra partida
        deshabilitaTres();
        // Manda a la pantalla del juego
        clicaCuatro();
    } else {
        alert(errores);
        return;
    }
}
function generarNivel() {
    var fila;
    var filaAleatoria;
    var itemAleatorio;
    var traduccionAleatoria;
    var colEncabezado;
    var colecEncabezados = []; //Encabezados dentro de una misma fila
    var colecEncabezadosColumnas = []; //Guarda el número de columna de cada encabezado
    var colecTraducciones = []; //Traducciones dentro de una misma fila
    var colecRespuestas = [];
    var nivel = new Nivel();

    filaEncabezado = 0;
    // Elijo una fila aleatoria y será la que pregunte, la borro para que no vuelva a salir
    itemAleatorio = generarAleatorio(colecFilasPreguntables.length);
    filaAleatoria = colecFilasPreguntables[itemAleatorio];
    // miArray.splice(3, 1) quita desde el elemento[3] 1 elemento
    colecFilasPreguntables.splice(itemAleatorio,1);
    // Relleno 3 colecciones relacionadas con la fila aleatoria calculada:
    //  - Traducciones          (string):   para mostrar el texto entre las respuestas.
    //  - Encabezados           (string):   para mostrar la categoría de respuestas.
    //  - EncabezadosColumnas   (integer):  para calcular aleatorio, entre sus traducciones.
    for (var columna = 0; columna < numColumnas; columna++) {
        if (leerTablaTraducciones(filaAleatoria, columna) != "" &&
        (colecEncabezadosSeleccionados.includes(leerTablaTraducciones(filaEncabezado, columna)) ||
        columna < 3)) { // Las 2 primeras forman parte de la pregunta
            colecTraducciones.push(leerTablaTraducciones(filaAleatoria, columna));
            colecEncabezados.push(leerTablaTraducciones(filaEncabezado, columna));
            colecEncabezadosColumnas.push(columna);
        }
    }
    // Escribo la pregunta y la elimino de la colección
    // NOTA: la pregunta siempre es el primer elemento encontrado en la fila
    ///////////////////////// nivel.pregunta /////////////////////////      
    nivel.setPregunta(colecTraducciones[0]);
    //////////////////////////////////////////////////////////////////
    colecTraducciones.shift();
    colecEncabezados.shift();
    colecEncabezadosColumnas.shift();
    // Elijo aleatoriamente una de sus traducciones
    traduccionAleatoria = generarAleatorio(colecTraducciones.length);
    respuestaCorrecta = colecTraducciones[traduccionAleatoria];
    ///////////////////////// nivel.respuestaCorrecta /////////////////////////
    nivel.setRespuestaCorrecta(respuestaCorrecta);
    ///////////////////////////////////////////////////////////////////////////
    // Genero una colección con las respuestas, donde la primera es la correcta
    colecRespuestas.push(respuestaCorrecta);
    ///////////////////////// nivel.encabezado /////////////////////////
    nivel.setEncabezado(`${colecEncabezados[traduccionAleatoria]}...`);
    ////////////////////////////////////////////////////////////////////
    // Se guarda la columna para buscar otras 3 respuestas incorrectas de la misma categoría
    colEncabezado = colecEncabezadosColumnas[traduccionAleatoria];
    // Se borra colección de traducciones para usarla verticalmente
    colecTraducciones = [];
    // El resto son aleatorias:
    // Creo que está mal: fila = filaEncabezado + 1;
    for (var i = 0; i < colecFilasPreguntablesCopia.length; i++) {
        fila = colecFilasPreguntablesCopia[i];
        if (fila != filaAleatoria) { // Esa está utilizada ya (con la respuesta correcta)
            if (leerTablaTraducciones(fila, colEncabezado) != "")  {
                colecTraducciones.push(leerTablaTraducciones(fila, colEncabezado));
            }
        }
    }
    // Si no hay suficientes respuestas te echa de la función
    if (colecTraducciones.length < 3) { // Mínimo 3 (+ la respuesta correcta aparte)
        alert(`Al generar la pregunta número ${colecNiveles.length + 1} no se encuentran suficientes respuestas para la categoría ${colecEncabezados[traduccionAleatoria]} --> Volver a probar`);
        return false;
    }
    // Va escribiendo las respuestas
    while (colecRespuestas.length < 4) {
        traduccionAleatoria = generarAleatorio(colecTraducciones.length);
        colecRespuestas.push(colecTraducciones[traduccionAleatoria]);
        colecTraducciones.splice(traduccionAleatoria,1); // Para no repetir
    }
    // Reordeno las respuestas alfabeticamente
    colecRespuestas = colecRespuestas.sort();
    ///////////////////////// nivel.colecRespuestas /////////////////////////
    nivel.setColecRespuestas(colecRespuestas);
    /////////////////////////////////////////////////////////////////////////
    return nivel;
}