function generacionPuntuacion() {
    var aciertos = 0;
    var puntuacion = "";
    var encabezadoResumen = document.querySelector("#p3 > div > header");
    for (var nivel in colecResumenNiveles) {
        if (colecResumenNiveles[nivel].getRespuestaUsuario() == colecResumenNiveles[nivel].getRespuestaCorrecta()) aciertos += 1;
    }
    puntuacion = `RESUMEN (${aciertos}/${numPreguntas}: ${(100*aciertos/numPreguntas).toFixed(2)}%)`
    encabezadoResumen.textContent = puntuacion;
}
function generacionCabeceraResumen() {
    var header_resumen = document.querySelector("#header_resumen");
    header_resumen.innerHTML = `
        <tr>
            <th>PREGUNTA</th>
            <th>ENCABEZADO</th>
            <th>RESPUESTA USUARIO</th>
            <th>RESPUESTA CORRECTA</th>
        </tr>
    `;
}
function generacionTablaResumen() {
    var table_resumen = document.querySelector("#table_resumen");
    table_resumen.innerHTML = "";
    var nuevaFila;
    for (var nivel in colecResumenNiveles) {
        nuevaFila = `
            <tr>
                <td class="pregunta">${colecResumenNiveles[nivel].getPregunta()}</td>
                <td class="encabezado">${colecResumenNiveles[nivel].getEncabezado()}</td>
        `;
        if (colecResumenNiveles[nivel].getRespuestaUsuario() == colecResumenNiveles[nivel].getRespuestaCorrecta()) {
            nuevaFila += `
                    <td class="letra-verde respuestaUsuario">${colecResumenNiveles[nivel].getRespuestaUsuario()}</td>
                    <td class="respuestaCorrecta"></td>
                </tr>
            `;
        } else {
            nuevaFila += `
                    <td class="letra-roja respuestaUsuario">${colecResumenNiveles[nivel].getRespuestaUsuario()}</td>
                    <td class="respuestaCorrecta">${colecResumenNiveles[nivel].getRespuestaCorrecta()}</td>
                </tr>
            `;
        }
        table_resumen.innerHTML += nuevaFila;
    }
}