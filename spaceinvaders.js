import {Marciano, Nave, Disparo, Juego} from './juego_marcianos.js';




function movimiento(evento) {

    if(evento.keyCode==32){
        //disparar();
    }
    if(evento.keyCode==37){
        blas.nave.mover("-");
    }
    if(evento.keyCode==39){
        blas.nave.mover("+");
    }
}
var blas;
window.onload=() => {
    //document.body.addEventListener("keyup",movimiento);
    blas =new Juego();
    blas.dibujar();
    document.body.addEventListener("keyup",movimiento);
}




