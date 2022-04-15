let esServidorLocal;
let url = "http://127.0.0.1:8000/remoto0_Local1.php";
async function generarURL() {
    try {
        const res = await fetch(url);
        const text = await res.text();
        if (text == "1") {
            esServidorLocal = true;
            url = "http://127.0.0.1:8000/leerTraducciones.php";
            leerJSON();
        }
    } catch (err) {
        esServidorLocal = false;
        /*Se cambia de nombre de carpeta a menudo para que DriveToCloud actualice su caché*/
        /* url = "https://trivialproficiencyadrian.on.drv.tw/Proficiency/2022/" + getParentFolder() + "/data/traduccionesJSON.json"; */
        url = "data/traduccionesJSON.json";
        console.log (url);
        leerJSON();
    } finally {
        if (esServidorLocal) {
            console.log("SERVIDOR LOCAL");
        } else {
            console.log("SERVIDOR REMOTO");
        }
    }
}
generarURL();