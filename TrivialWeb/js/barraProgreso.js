// CÁLCULO DE LA BARRA DE PROGRESO
function actualizaBarraProgreso(i,totalTraducciones){
    var progreso = document.getElementById('progreso');
    var barraProgreso = progreso.getElementsByClassName('progress-bar')[0];
    barraProgreso.style.width = `${100*i/totalTraducciones}%`;
    barraProgreso.style.backgroundColor = `rgb(${barraCargaRojo(i/totalTraducciones)},
                                                ${barraCargaVerde(i/totalTraducciones)},
                                                ${barraCargaAzul(i/totalTraducciones)})`;
}
// FORMATO BARRA DE PROGRESO
function barraCargaRojo(porcentaje) {
    if (porcentaje <= 0.5 ) {
        return 255;
    } else {
        return 2 * (1 - porcentaje) * 255;
    }
}
function barraCargaVerde(porcentaje) {
    if (porcentaje <= 0.5 ) {
        return 2 * porcentaje * 255;
    } else {
        return 255;
    }
}
function barraCargaAzul(porcentaje) {
    return 0;
}