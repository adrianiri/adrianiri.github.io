let datos = [];
var totalTraducciones = 0;
function actualizaBarra(i){
    var progreso = document.getElementById('progreso');
    var barraProgreso = progreso.getElementsByClassName('progress-bar')[0];
    console.log(`${i},${totalTraducciones}`)
    barraProgreso.style.width = `${100*i/totalTraducciones}%`;
    barraProgreso.style.backgroundColor = `rgb(${barraCargaRojo(i/totalTraducciones)},
                                                ${barraCargaVerde(i/totalTraducciones)},
                                                ${barraCargaAzul(i/totalTraducciones)})`;
} 
function generaTabla() {
    var body = document.querySelector("body");
    body.innerHTML += `
        <div id="div_title">
            <h2>TRIVIAL</h2>
        </div>
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
        <div class="container">
            <div class="progress" id="progreso">
                <div class="progress-bar"><p>LOADING...</p></div>
            </div>
        </div>
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
        actualizaBarra(i);
        if (i == totalTraducciones - 1) {
            containerBarra.classList.add("oculto");
            header.classList.remove("oculto");
            tabla.classList.remove("oculto");
            crono.clearInterval;
        }
        i++;
    }, 0) //Esta jugada sustituye a un for() para poder actualizar la UI y mostrar la barra de progreso
}
function leerJSON() {
    var ajax = new XMLHttpRequest();
    cargando = true;
    ajax.onload = generaTabla;
    ajax.open("GET", url);
    ajax.send();
}