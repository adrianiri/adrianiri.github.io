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