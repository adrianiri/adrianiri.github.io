// VARIABLES
var url = "http://127.0.0.1:8000/remoto0_Local1.php";
// INTENTO ACCEDER AL SERVIDOR LOCAL, SI NO PUEDO ES QUE ESTOY EN LA WEB (O QUE EL SERVIDOR NO ESTÁ ARRANCADO)
async function generarURL(url) {
    var esServidorLocal;
    try { // LOCAL
        const res = await fetch(url);
        const text = await res.text();
        if (text == "1") {
            esServidorLocal = true;
            url = "http://127.0.0.1:8000/leerTraducciones.php";
            generaContenidoInicial(url);
        }
    } catch (err) { // WEB
        esServidorLocal = false;
        /* One to drive: lento, problemas con la caché (no actualizaba el json) y sin gestor de cambios */
        /* url = "https://trivialproficiencyadrian.on.drv.tw/Proficiency/2022/" + getParentFolder() + "/data/traduccionesJSON.json"; */
        url = "data/traduccionesJSON.json";
        generaContenidoInicial(url);
    } finally { // SIEMPRE (LO PONGO PARA RECORDAR EL FINALLY, BÁSICAMENTE)
        if (esServidorLocal) {
            console.log("SERVIDOR LOCAL");
        } else {
            console.log("SERVIDOR REMOTO");
        }
    }
}
generarURL(url); // Esta función es la primera que se ejecuta