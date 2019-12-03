import { Marciano, Nave, Disparo, Juego } from './juego_marcianos.js';

var juego;
var condicion;
var disparo;
var puntuacion = 0;

function movimiento(evento) {

    if (evento.keyCode == 32) {
        condicion = true;
        let x = juego.nave.x + (50 / 2);
        let y = juego.nave.y;
        disparo = new Disparo(x, y, juego.marcianos);
    }
    if (evento.keyCode == 37) {
        juego.nave.mover("-");
    }
    if (evento.keyCode == 39) {
        juego.nave.mover("+");
    }
}

window.onload = () => {
    juego = new Juego();
    juego.dibujar();
    let div = document.getElementById("puntuacion");
    let h1 = document.createElement("h1");
    h1.textContent = puntuacion;
    h1.style.marginLeft = "250px";
    div.appendChild(h1);
    document.body.addEventListener("keyup", movimiento);

    var intervalo = setInterval(() => {
        juego.moverMarcianos();

        if (juego.perdida) {
            clearInterval(intervalo);
            console.log("Has perdido");
        }
        if (condicion) {
            if (disparo.impacto()) {
                condicion = false;
                puntuacion++;
                h1.textContent = puntuacion;
            }
            disparo.dibujar();
        }
    }, 100);
}




