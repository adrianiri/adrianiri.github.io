function inicializarJuego() {
    colecResumenNiveles = [];
}
function extraerNivel() {
    var colecRespuestas = [];
    var encabezadoPreguntas = document.querySelector("#p4 > div > header");
    var pregunta = document.querySelector("#pregunta");
    var encabezado = document.querySelector("#encabezado");
    var div_respuestas = document.querySelector("#div_respuestas");
    encabezadoPreguntas.textContent = `PREGUNTAS (${numPregunta}/${numPreguntas})`;
    ///////////////////////// pregunta.textContent /////////////////////////
    pregunta.innerHTML = `<span style="font-weight:bold;">${colecNiveles[0].getPregunta()}</span>`;
    /////////////////////////////////////////////////////////////////////////
    ///////////////////////// encabezado.textContent ////////////////////////
    encabezado.innerHTML = `<span style="font-style:italic;">${colecNiveles[0].getEncabezado()}</span>`;
    /////////////////////////////////////////////////////////////////////////
    ///////////////////////// respuestas.textContent ////////////////////////
    colecRespuestas = colecNiveles[0].getColecRespuestas();
    div_respuestas.innerHTML = `<label>
                                    <input type="radio" name="respuestas" id="respuesta0" value="${colecRespuestas[0]}" checked>
                                    <label for="respuesta0"> ${colecRespuestas[0]}</label>
                                </label>
                                <br><br>
                                <label>
                                    <input type="radio" name="respuestas" id="respuesta1" value="${colecRespuestas[1]}">
                                    <label for="respuesta1"> ${colecRespuestas[1]}</label>
                                </label>
                                <br><br>
                                <label>
                                    <input type="radio" name="respuestas" id="respuesta2" value="${colecRespuestas[2]}">
                                    <label for="respuesta2"> ${colecRespuestas[2]}</label>
                                </label>
                                <br><br>
                                <label>
                                    <input type="radio" name="respuestas" id="respuesta3" value="${colecRespuestas[3]}">
                                    <label for="respuesta3"> ${colecRespuestas[3]}</label>
                                </label>
    `
    /////////////////////////////////////////////////////////////////////////
    ///////////////////////// respuestaCorrecta /////////////////////////////
    respuestaCorrecta = colecNiveles[0].getRespuestaCorrecta();
    /////////////////////////////////////////////////////////////////////////
    // Se elimina de la colección
    colecNiveles.shift();
}
function siguienteNivel() {
    // Devolvemos el resultado
    if (!respuesta0.checked && !respuesta1.checked && !respuesta2.checked && !respuesta3.checked) {
        alert("Debe seleccionar una opción");
        return;
    } else { // Si selecciona una respuesta
        if (respuesta0.checked) respuestaUsuario = respuesta0.value;
        if (respuesta1.checked) respuestaUsuario = respuesta1.value;
        if (respuesta2.checked) respuestaUsuario = respuesta2.value;
        if (respuesta3.checked) respuestaUsuario = respuesta3.value;
        if (respuestaUsuario == respuestaCorrecta) {
            mensaje = "CORRECTO ;)";
            numCorrectas += 1;
        } else {
            mensaje = `INCORRECTO :( --> La respuesta correcta era: ${respuestaCorrecta}`;
        }
        mandarNivelAResumen(respuestaUsuario);
    }
    // alert (mensaje);
    if (numPregunta < numPreguntas) {
        numPregunta += 1;
        extraerNivel();
        clicaCuatro();
    } else {
        clicaTres(); // Manda a la pantalla resumen
        generacionPuntuacion();
        generacionCabeceraResumen();
        generacionTablaResumen();
    }
}
function mandarNivelAResumen(respuestaUsuario) {
    var resumenNivel = new Nivel();
    var pregunta = document.querySelector("#pregunta");
    var encabezado = document.querySelector("#encabezado");
    // Se guarda la información del nivel actual en el objeto nivel
    resumenNivel.setPregunta(pregunta.textContent);
    resumenNivel.setEncabezado(encabezado.textContent);
    resumenNivel.setRespuestaUsuario(respuestaUsuario);
    resumenNivel.setRespuestaCorrecta(respuestaCorrecta);
    // Se añade dicho objeto en la colección
    colecResumenNiveles.push(resumenNivel);
}
