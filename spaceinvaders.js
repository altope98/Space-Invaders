import { Marciano, Nave, Disparo, Juego } from './juego_marcianos.js';
var direccion = "+";
var juego;
var condicion;
var disparo;
var puntuacion=0;


function movimiento(evento) {

    if (evento.keyCode == 32) {
        condicion=true;
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
    let h1=document.createElement("h1");
    h1.textContent=puntuacion;
    h1.style.marginLeft="250px";
    div.appendChild(h1);
    document.body.addEventListener("keyup", movimiento);
    setInterval(() => {
        for (let marciano of juego.marcianos) {

            if (marciano != null) {
                marciano.mover(direccion);
                if (marciano.x == 490) {
                    direccion = "-";
                    marciano.mover(direccion);
                    marciano.y += 10;
                }
                if (marciano.x == 0) {
                    direccion = "+";
                    marciano.mover(direccion);
                    marciano.y += 10;
                }
            }


        }

        if(condicion){
            
            if(disparo.impacto()){
                condicion=false;
                puntuacion++;
                h1.textContent=puntuacion;

            }
            disparo.dibujar();
            //disparo.impacto();
            
        }
    }, 100);
}




