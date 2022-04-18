// ME SERVÍA POR SI CAMBIABA EL NOMBRE DEL PROYECTO EN ONE TO DRIVE
function getParentFolder() {
    var scripts = document.getElementsByTagName("script");
    var currentUrl = scripts[scripts.length-1];
    var folderLevels = currentUrl.baseURI.split("/");
    return folderLevels[folderLevels.length-2]; //Para cuando cambio el nombre de Trivial para actualizar la caché
}
// DEL EXCEL
function filasTraducidas(numColumnas) {
    var columna;
    var contTraducciones;
    var contTraduccionesValidas;
    // Añado las filas, con al menos 1 campo relleno, en colecFilasPreguntables.
    // Si no encuentro campos rellenos, salgo de la función porque se ha acabado la tabla
    for (var fila = 1; fila < tablaTraducciones.length; fila ++) {
        columna = 0;
        contTraducciones = 0;
        contTraduccionesValidas = 0;
        while (columna < numColumnas) {
            // Registra cada campo válido
            if (leerTablaTraducciones(fila, columna) != ""
            && contTraducciones > 0 // Porque la primera que encuentre será "Word" o "Expression"
            && colecEncabezadosSeleccionados.includes(leerTablaTraducciones(filaEncabezado, columna))) {
                // En cuanto hay una, ya sabemos que esa fila es traducible
                colecFilasPreguntables.push(fila);
                break;
            }
            // Registra cada campo, para poder salir de la tabla si no encuentra ninguna
            if (leerTablaTraducciones(fila, columna) != "") {
                contTraducciones ++;
            }
            columna ++;
        }
        // Si se acaba la tabla sale del bucle
        if (tabla = 0) {
            return;
        }    
    }
    alert(`colecFilasPreguntables contiene ${colecFilasPreguntables.length} elementos`);
}