// NOTAS: se utiliza la clase "invisible" porque "oculto" me generaba problemas de rendimiento,
// ya que lo tenía que renderizar
let condicionesUno = false;
let condicionesDos = false;
let condicionesTres = false;
let condicionesCuatro = false;
var tiempoTransiciones = 250; // ms
pantallaUno = function() {
    if (condicionesUno) {
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
        }, tiempoTransiciones);
        return "#t1";
    } else {
        return false;
    }
}
pantallaDos = function() {
    if (condicionesDos) {
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
        }, tiempoTransiciones);
        return "#t2";
    } else {
        return false;
    }
}
pantallaTres = function() {
    if (condicionesTres) {
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
        }, tiempoTransiciones);
        return "#t3";
    } else {
        return false;
    }
}
pantallaCuatro = function() {
    if (condicionesCuatro) {
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
        }, tiempoTransiciones);
        return "#t4";
    } else {
        return false;
    }
}
clicaUno = function() {
    var uno = document.querySelector("#uno");
    uno.click();
}
clicaDos = function() {
    var dos = document.querySelector("#dos");
    var p2 = document.querySelector("#p2");
    dos.click();
}
clicaTres = function() {
    var tres = document.querySelector("#tres");
    tres.click();
}
clicaCuatro = function() {
    var cuatro = document.querySelector("#cuatro");
    cuatro.click();
}
habilitaUno = function() {
    condicionesUno = true;
    var uno = document.querySelector("#uno");
    uno.style.color = "black";
}
habilitaDos = function() {
    condicionesDos = true;
    var uno = document.querySelector("#dos");
    dos.style.color = "green";
}
habilitaTres = function() {
    condicionesTres = true;
    var tres = document.querySelector("#tres");
    tres.style.color = "blue";
}
habilitaCuatro = function() {
    condicionesCuatro = true;
    var cuatro = document.querySelector("#cuatro");
    cuatro.style.color = "saddlebrown";
}
deshabilitaUno = function() {
    condicionesUno = false;
    var uno = document.querySelector("#uno");
    uno.style.color = "rgb(200,200,200)";
}
deshabilitaDos = function() {
    condicionesDos = false;
    var dos = document.querySelector("#dos");
    dos.style.color = "rgb(200,200,200)";
}
deshabilitaTres = function() {
    condicionesTres = false;
    var tres = document.querySelector("#tres");
    tres.style.color = "rgb(200,200,200)";
}
deshabilitaCuatro = function() {
    condicionesCuatro = false;
    var cuatro = document.querySelector("#cuatro");
    cuatro.style.color = "rgb(200,200,200)";
}
