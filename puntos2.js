let tp = document.querySelector(".puntos")
let puntaje = localStorage.getItem("total");
console.log(`Tu puntaje fue:${puntaje}`);
tp.textContent = puntaje

