class Nivel {
    // VARIABLES
    _pregunta = "";
    _encabezado = "";
    _colecRespuestas = "";
    _respuestaUsuario = "";
    _respuestaCorrecta = "";
    // CONSTRUCTOR (no hace falta porque le meto el objeto como parámetro)
    constructor() {}
    // MÉTODOS
    esCorrecto() {
        if (this._respuestaCorrecta = this._respuestaUsuario) {
            return true;
        } else {
            return false;
        }
    }
    // GETTER/SETTER
    // - pregunta:
    getPregunta() {
        return this._pregunta;
    }
    setPregunta(pregunta) {
        this._pregunta = pregunta;
    }
    // - encabezado:
    getEncabezado() {
        return this._encabezado;
    }
    setEncabezado(encabezado) {
        this._encabezado = encabezado;
    }
    // - colecRespuestas:
    getColecRespuestas() {
        return this._colecRespuestas;
    }
    setColecRespuestas(colecRespuestas) {
        this._colecRespuestas = colecRespuestas;
    }
    // - respuestaUsuario:
    getRespuestaUsuario() {
        return this._respuestaUsuario;
    }
    setRespuestaUsuario(respuestaUsuario) {
        this._respuestaUsuario = respuestaUsuario;
    }
    // - respuestaCorrecta:
    getRespuestaCorrecta() {
        return this._respuestaCorrecta;
    }
    setRespuestaCorrecta(respuestaCorrecta) {
        this._respuestaCorrecta = respuestaCorrecta;
    }
}