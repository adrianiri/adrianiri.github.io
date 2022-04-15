class Fila { 
    _word = "";
    _expression = "";
    _meaning = "";
    _synonyms = "";
    _antonyms = "";
    _palabra = "";
    _expresion = "";
    _sinonimos = "";
    _antonimos = "";
    constructor(word = "", expression = "", meaning = "", synonyms = "", antonyms = "", palabra = "", expresion = "", sinonimos = "", antonimos= "") {
        var mensaje = "";
        if (word != "" & expresion != "") {
            //mensaje = `la columna "word" y "expression" no se pueden rellenar al mismo tiempo (traducción ` + String(super.i) + `)`
        } else if (word != "" & expression != "") {
            //mensaje = `la columna "word" o "expression" deben ser rellenadas, pero no las dos (traducción ` + String(super.i) + `)`
        }
        if (mensaje != "") {
            alert(mensaje)
            //throw new Error(mensaje);
        }
        //Pasamos las variables al objeto
        this._word = word;
        this._expression = expression;
        this._meaning = meaning;
        this._synonyms = synonyms;
        this._antonyms = antonyms;
        this._palabra = palabra;
        this._expresion = expresion;
        this._sinonimos = sinonimos;
        this._antonimos = antonimos;
        //La insertamos en la tabla
        this.insertar();
    }
    insertar() {
        var nuevaFila = `
                        <tr>
                            <td class="letra-verde word">${this._word}</td>
                            <td class="letra-verde expression">${this._expression}</td>
                            <td class="letra-verde meaning">${this._meaning}</td>
                            <td class="letra-verde synonyms">${this._synonyms}</td>
                            <td class="letra-verde antonyms">${this._antonyms}</td>
                            <td class="letra-azul palabra">${this._palabra}</td>
                            <td class="letra-azul expresion">${this._expresion}</td>
                            <td class="letra-azul sinonimos">${this._sinonimos}</td>
                            <td class="letra-azul antonimos">${this._antonimos}</td>
                        </tr>`;
        var tabla = document.querySelector("#table");
        tabla.innerHTML += nuevaFila;
    }
}