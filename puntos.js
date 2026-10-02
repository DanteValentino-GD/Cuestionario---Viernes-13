let boton = document.getElementById("btn");
let puntos = 0;
let R1, R2, R3, R4, R5,R6,R7,R8,R9,R10;
console.log(boton)
boton.addEventListener('click',()=>{
     R1 = document.getElementById("punto1").checked;
     R2 = document.getElementById("punto2").checked;
     R3 = document.getElementById("punto3").checked;
     R4 = document.getElementById("punto4").checked;
     R5 = document.getElementById("punto5").checked;
     R6 = document.getElementById("punto6").checked;
     R7 = document.getElementById("punto7").checked;
     R8 = document.getElementById("punto8").checked;
     R9 = document.getElementById("punto9").checked;
     R10 = document.getElementById("punto10").checked;

    if (R1 == true) {
        puntos++;
    }
    if (R2 == true) {
        puntos++;
    }
    if (R3 == true) {
        puntos++;
    }
    if (R4 == true) {
        puntos++;
    }
    if (R5 == true) {
        puntos++;
    }
    if (R6 == true) {
        puntos++;
    }
    if (R7 == true) {
        puntos++;
    }
    if (R8 == true) {
        puntos++;
    }
    if (R9 == true) {
        puntos++;
    }
    if (R10 == true) {
        puntos++;
    }
    localStorage.setItem("total", puntos);
    window.location.href = "Fin.html"
})




