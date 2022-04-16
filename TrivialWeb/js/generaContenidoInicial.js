// VARIABLES
let datos = [];
var totalTraducciones = 0;
// ELEMENTOS CONTENIDO INICIAL
function generacionCabecera() {
    var body = document.querySelector("body");
    body.innerHTML += `
        <div id="div_header">
            <table  id="header" style="table-layout:fixed">
                <tr>
                    <th class="letra-verde">WORD</th>
                    <th class="letra-verde">EXPRESSION</th>
                    <th class="letra-verde">MEANING</th>
                    <th class="letra-verde">SYNONYMS</th>
                    <th class="letra-verde">ANTONYMS</th>
                    <th class="letra-azul">PALABRA</th>
                    <th class="letra-azul">EXPRESIÓN</th>
                    <th class="letra-azul">SINÓNIMOS</th>
                    <th class="letra-azul">ANTÓNIMOS</th>
                </tr>
            </table>
        </div>
    `;
}
function generacionBarraProgreso(textoCarga) {
    var body = document.querySelector("body");
    body.innerHTML += `
    <div class="container">
        <div class="progress" id="progreso">
            <div class="progress-bar"><p>${textoCarga}</p></div>
        </div>
    </div>
    `
}
function generaTabla() {
    var body = document.querySelector("body");
    body.innerHTML += `
        <div id="div_table">
            <table id="table"></table>
        </div>
    `
    var header = document.querySelector("#div_header");
    var tabla = document.querySelector("#div_table");
    header.classList.add("oculto");
    tabla.classList.add("oculto");
    var arrTraduccionesJSON = JSON.parse(this.responseText);
    var containerBarra = document.querySelector(".container");
    totalTraducciones = Object.keys(arrTraduccionesJSON).length;
    var i = 0;
    var crono = setInterval(function() { 
        datos.push(arrTraduccionesJSON[i]); //Mete dato al final de la variable datos
        new Fila(
            arrTraduccionesJSON[i].Word,
            arrTraduccionesJSON[i].Expression,
            arrTraduccionesJSON[i].Meaning,
            arrTraduccionesJSON[i].Synonyms,
            arrTraduccionesJSON[i].Antonyms,
            arrTraduccionesJSON[i].Palabra,
            arrTraduccionesJSON[i].Expresión,
            arrTraduccionesJSON[i].Sinónimos,
            arrTraduccionesJSON[i].Antónimos
        );
        actualizaBarraProgreso(i,totalTraducciones);
        if (i == totalTraducciones - 1) {
            containerBarra.classList.add("oculto");
            //header.classList.remove("oculto");
            //tabla.classList.remove("oculto");
            clearInterval(crono);
        }
        i++;
    }, 0) //Esta jugada sustituye a un for() para poder actualizar la UI y mostrar la barra de progreso
}
// AJAX
function leerJSON(url) {
    var ajax = new XMLHttpRequest();
    cargando = true;
    ajax.onload = generaTabla;
    ajax.open("GET", url);
    ajax.send();
}
// LLAMADAS
function generaContenidoInicial(url) {
    generacionCabecera();
    generacionBarraProgreso("LOADING...");
    leerJSON(url);
}