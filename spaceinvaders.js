import {Marciano, Nave, Disparo, Juego} from './juego_marcianos.js';

function disparar(event){

}

function moverNave(event){
    console.log(event.screenX);

    
}

window.onload=() => {
    document.body.addEventListener("keyup",disparar);
    document.body.addEventListener("onclick",moverNave); ///CAMBIAR A TECLADO
    var juego=new Juego();
    console.log(juego.marcianos);
    juego.dibujar();
}




