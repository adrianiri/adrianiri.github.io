function inicializarNivel() {
    var pregunta = document.querySelector("#pregunta");
    var encabezado = document.querySelector("#encabezado");
    var div_respuestas = document.querySelector("#div_respuestas");
    pregunta.innerHTML = `Pregunta x de y:<br><br><span style="font-weight:bold;">Pregunta?</span>`;
    encabezado.innerHTML = `<span style="font-style:italic;">Encabezado...</span>`;
    div_respuestas.innerHTML = `<label class"anchisimo">
                                    <input type="radio" name="respuestas" id="respuesta0" class"" value="respuesta0">
                                    <label for="respuesta0"> Respuesta 0</label><br>
                                </label>
                                <br>
                                <label class"anchisimo">
                                    <input type="radio" name="respuestas" id="respuesta1" value="respuesta1">
                                    <label for="respuesta1"> Respuesta 1</label><br>
                                </label>
                                <br>
                                <label class"anchisimo">
                                    <input type="radio" name="respuestas" id="respuesta2" value="respuesta2">
                                    <label for="respuesta2"> Respuesta 2</label><br>
                                </label>
                                <br>
                                <label class"anchisimo">
                                    <input type="radio" name="respuestas" id="respuesta3" value="respuesta3">
                                    <label for="respuesta3"> Respuesta 3</label><br>
                                </label>
    `
}
function extraerNivel() {
    var colecRespuestas = [];
    ///////////////////////// pregunta.textContent /////////////////////////
    pregunta.innerHTML = `Pregunta ${numPregunta} de ${numPreguntas}:<br><br><span style="font-weight:bold;">${colecNiveles[0].getPregunta()}?</span>`;
    /////////////////////////////////////////////////////////////////////////
    ///////////////////////// encabezado.textContent ////////////////////////
    encabezado.innerHTML = `<span style="font-style:italic;">${colecNiveles[0].getEncabezado()}</span>`;
    /////////////////////////////////////////////////////////////////////////
    ///////////////////////// respuestas.textContent ////////////////////////
    colecRespuestas = colecNiveles[0].getColecRespuestas();
    div_respuestas.innerHTML = `<label class"anchisimo">
                                    <input type="radio" name="respuestas" id="respuesta0" value="${colecRespuestas[0]}">
                                    <label for="respuesta0"> ${colecRespuestas[0]}</label><br>
                                </label>
                                <br>
                                <label class"anchisimo">
                                    <input type="radio" name="respuestas" id="respuesta1" value="${colecRespuestas[1]}">
                                    <label for="respuesta1"> ${colecRespuestas[1]}</label><br>
                                </label>
                                <br>
                                <label class"anchisimo">
                                    <input type="radio" name="respuestas" id="respuesta2" value="${colecRespuestas[2]}">
                                    <label for="respuesta2"> ${colecRespuestas[2]}</label><br>
                                </label>
                                <br>
                                <label class"anchisimo">
                                    <input type="radio" name="respuestas" id="respuesta3" value="${colecRespuestas[3]}">
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
