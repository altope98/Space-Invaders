import {Marciano, Nave, Disparo, Juego} from './juego_marcianos.js';

function moverMarciano(){

}


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
var juego;
window.onload=() => {
    //document.body.addEventListener("keyup",movimiento);
    juego =new Juego();
    jurgo.dibujar();
    document.body.addEventListener("keyup",movimiento);
    
}




