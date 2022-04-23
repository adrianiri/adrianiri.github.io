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
    var p3 = document.querySelector("#p3 > div > section");
    p3.innerHTML = `
        <div id="div_header_resumen">
            <table  id="header_resumen">
                <tr>
                    <th>PREGUNTA</th>
                    <th>ENCABEZADO</th>
                    <th>RESPUESTA USUARIO</th>
                    <th>RESPUESTA CORRECTA</th>
                </tr>
            </table>
        </div>
    `;
}
function generacionTablaResumen() {
    var p3 = document.querySelector("#p3 > div > section")
    p3.innerHTML = `
        <div id="div_table_resumen">
            <table id="table_resumen"></table>
        </div>
    `
    var tabla = document.querySelector("#table_resumen");
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
        tabla.innerHTML += nuevaFila;
    }
}