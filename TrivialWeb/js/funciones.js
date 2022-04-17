// ME SERVÍA POR SI CAMBIABA EL NOMBRE DEL PROYECTO EN ONE TO DRIVE
function getParentFolder() {
    var scripts = document.getElementsByTagName("script");
    var currentUrl = scripts[scripts.length-1];
    var folderLevels = currentUrl.baseURI.split("/");
    return folderLevels[folderLevels.length-2]; //Para cuando cambio el nombre de Trivial para actualizar la caché
}
// DEL EXCEL
function filasTraducidas(numColumnas) {
    var fila;
    var columna;
    var contTraducciones;
    var contTraduccionesValidas;
    // Añado las filas con más de 1 campo relleno en colecFilasPreguntables, pero si no encuentro campos rellenos, salgo
    fila = 1;
    while (true) {
        columna = 0;
        contTraducciones = 0;
        contTraduccionesValidas = 0;
        while (columna < numColumnas) {
            // Registra cada campo válido
            if (leerTablaTraducciones(fila, columna) != ""
            && contTraducciones > 0
            && colecEncabezadosSeleccionados.includes(leerTablaTraducciones(fila, columna))) {
                contTraduccionesValidas += 1;
            }
            // Registra cada campo
            if (leerTablaTraducciones(fila, columna) != "") {
                contTraducciones += 1;
            }
            // En cuanto hay dos, ya sabemos que esa fila es traducible
            if (contTraduccionesValidas > 0) {
                colecFilasPreguntables.push(fila);
            }
            // VOY POR AQUÍ!!!!!!!!!!!!!!!!!!
        }
    }
}