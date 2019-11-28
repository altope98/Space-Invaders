import {Marciano, Nave, Disparo, Juego} from './juego_marcianos.js';

function moverMarciano(){

}


function movimiento(evento) {

    if(evento.keyCode==32){
        //disparar();
    }
    if(evento.keyCode==37){
        juego.nave.mover("-");
    }
    if(evento.keyCode==39){
        juego.nave.mover("+");
    }
}
var juego;
window.onload=() => {
    //document.body.addEventListener("keyup",movimiento);
    juego =new Juego();
    juego.dibujar();
    document.body.addEventListener("keyup",movimiento);
    setInterval(()=>{
        for ( this.marciano of juego.marcianos) {
            if(this.marciano.x<= 450){
                this.marciano.x+=10;
            }
            if(this.marciano.x?= 0){
                this.marciano.x+=10;
            }

            

            
        }
    },1000);
}




