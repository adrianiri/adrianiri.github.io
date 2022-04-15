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
    var arrTraduccionesJSON = JSON.parse(this.responseText);
    totalTraducciones = Object.keys(arrTraduccionesJSON).length;
    var header = document.querySelector("#div_header");
    var tabla = document.querySelector("#div_table");
    var containerBarra = document.querySelector(".container");
    header.classList.add("oculto");
    tabla.classList.add("oculto");
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