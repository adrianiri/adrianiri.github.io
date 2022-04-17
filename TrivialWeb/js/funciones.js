// ME SERVÍA POR SI CAMBIABA EL NOMBRE DEL PROYECTO EN ONE TO DRIVE
function getParentFolder() {
    var scripts = document.getElementsByTagName("script");
    var currentUrl = scripts[scripts.length-1];
    var folderLevels = currentUrl.baseURI.split("/");
    return folderLevels[folderLevels.length-2]; //Para cuando cambio el nombre de Trivial para actualizar la caché
}
function visibilidadUno() {
    var p1 = document.querySelector("#p1");
    var p2 = document.querySelector("#p2");
    var p3 = document.querySelector("#p3");
    var p4 = document.querySelector("#p4");
    p1.classList.remove("invisible");
    p2.classList.remove("invisible");
    p3.classList.remove("invisible");
    p4.classList.remove("invisible");
    var crono = setTimeout(function() {
        p1.classList.remove("invisible");
        p2.classList.add("invisible");
        p3.classList.add("invisible");
        p4.classList.add("invisible");
    }, 500);
}
function visibilidadDos() {
    var p1 = document.querySelector("#p1");
    var p2 = document.querySelector("#p2");
    var p3 = document.querySelector("#p3");
    var p4 = document.querySelector("#p4");
    p1.classList.remove("invisible");
    p2.classList.remove("invisible");
    p3.classList.remove("invisible");
    p4.classList.remove("invisible");
    var crono = setTimeout(function() {
        p1.classList.remove("invisible");
        p2.classList.remove("invisible");
        p3.classList.add("invisible");
        p4.classList.add("invisible");
    }, 500);
  }
  function visibilidadTres() {
    var p1 = document.querySelector("#p1");
    var p2 = document.querySelector("#p2");
    var p3 = document.querySelector("#p3");
    var p4 = document.querySelector("#p4");
    p1.classList.remove("invisible");
    p2.classList.remove("invisible");
    p3.classList.remove("invisible");
    p4.classList.remove("invisible");
    var crono = setTimeout(function() {
        p1.classList.remove("invisible");
        p2.classList.add("invisible");
        p3.classList.remove("invisible");
        p4.classList.add("invisible");
    }, 500);
  }
  function visibilidadCuatro() {
    var p1 = document.querySelector("#p1");
    var p2 = document.querySelector("#p2");
    var p3 = document.querySelector("#p3");
    var p4 = document.querySelector("#p4");
    p1.classList.remove("invisible");
    p2.classList.remove("invisible");
    p3.classList.remove("invisible");
    p4.classList.remove("invisible");
    var crono = setTimeout(function() {
        p1.classList.remove("invisible");
        p2.classList.add("invisible");
        p3.classList.add("invisible");
        p4.classList.remove("invisible");
    }, 500);
  }