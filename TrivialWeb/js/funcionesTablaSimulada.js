// SIMULO UNA TABLA
function insertarPrimeraFila() {
    tablaTraducciones = `[["Word","Expression","Meaning","Synonyms","Antonyms","Palabra","Expresión","Sinónimos","Antónimos"],`
}
function insertarFilaIntermedia(arrTraduccionesJSON_i) {
    tablaTraducciones += `["${arrTraduccionesJSON_i.Word}","${arrTraduccionesJSON_i.Expression}","${arrTraduccionesJSON_i.Meaning}","${arrTraduccionesJSON_i.Synonyms}","${arrTraduccionesJSON_i.Antonyms}","${arrTraduccionesJSON_i.Palabra}","${arrTraduccionesJSON_i.Expresión}","${arrTraduccionesJSON_i.Sinónimos}","${arrTraduccionesJSON_i.Antónimos}"],`
}
function insertarUltimaFila(arrTraduccionesJSON_i) {
    tablaTraducciones += `["${arrTraduccionesJSON_i.Word}","${arrTraduccionesJSON_i.Expression}","${arrTraduccionesJSON_i.Meaning}","${arrTraduccionesJSON_i.Synonyms}","${arrTraduccionesJSON_i.Antonyms}","${arrTraduccionesJSON_i.Palabra}","${arrTraduccionesJSON_i.Expresión}","${arrTraduccionesJSON_i.Sinónimos}","${arrTraduccionesJSON_i.Antónimos}"]]`
}
function generarTablaTraducciones() {
    tablaTraducciones = JSON.parse(tablaTraducciones);
}
function leerTablaTraducciones(fila,columna) {
    var arrayFila = tablaTraducciones[fila];
    return arrayFila[columna];
}