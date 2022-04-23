function inicializarNivel() {
    var pregunta = document.querySelector("#pregunta");
    var encabezado = document.querySelector("#encabezado");
    var div_respuestas = document.querySelector("#div_respuestas");
    pregunta.textContent = "Pregunta";
    encabezado.textContent = "Encabezado...";
    div_respuestas.innerHTML = `<label class"anchisimo">
                                    <input type="radio" name="respuestas" id="respuesta0" class"" value="">
                                    <label for="respuesta0"> Respuesta 0</label><br>
                                </label>
                                <label class"anchisimo">
                                    <input type="radio" name="respuestas" id="respuesta1" value="">
                                    <label for="respuesta1"> Respuesta 1</label><br>
                                </label>
                                <label class"anchisimo">
                                    <input type="radio" name="respuestas" id="respuesta2" value="">
                                    <label for="respuesta2"> Respuesta 2</label><br>
                                </label>
                                <label class"anchisimo">
                                    <input type="radio" name="respuestas" id="respuesta3" value="">
                                    <label for="respuesta3"> Respuesta 3</label><br>
                                </label>
    `
}
function extraerNivel() {
    var colecRespuestas = [];
    ///////////////////////// pregunta.textContent /////////////////////////
    pregunta.innerHTML = `Pregunta ${numPregunta} de ${numPreguntas}:<br><br>${colecNiveles[0].getPregunta()}?`;
    /////////////////////////////////////////////////////////////////////////
    ///////////////////////// encabezado.textContent ////////////////////////
    encabezado.textContent = `${colecNiveles[0].getEncabezado()}`;
    /////////////////////////////////////////////////////////////////////////
    ///////////////////////// respuestas.textContent ////////////////////////
    colecRespuestas = colecNiveles[0].getColecRespuestas();
    div_respuestas.innerHTML = `<label class"anchisimo">
                                    <input type="radio" name="respuestas" id="respuesta0" value="${colecRespuestas[0]}">
                                    <label for="respuesta0"> ${colecRespuestas[0]}</label><br>
                                </label>
                                <label class"anchisimo">
                                    <input type="radio" name="respuestas" id="respuesta0" value="${colecRespuestas[1]}">
                                    <label for="respuesta1"> ${colecRespuestas[1]}</label><br>
                                </label>
                                <label class"anchisimo">
                                    <input type="radio" name="respuestas" id="respuesta0" value="${colecRespuestas[2]}">
                                    <label for="respuesta2"> ${colecRespuestas[2]}</label><br>
                                </label>
                                <label class"anchisimo">
                                    <input type="radio" name="respuestas" id="respuesta0" value="${colecRespuestas[3]}">
                                    <label for="respuesta3"> ${colecRespuestas[3]}</label><br>
                                </label>
    `
    /////////////////////////////////////////////////////////////////////////
    ///////////////////////// respuestaCorrecta /////////////////////////////
    respuestaCorrecta = colecNiveles[0].getRespuestaCorrecta();
    /////////////////////////////////////////////////////////////////////////
    // Se elimina de la colección
    colecNiveles.shift();
}
