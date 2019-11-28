import {Marciano, Nave, Disparo, Juego} from './juego_marcianos.js';



function movimiento(evento) {

    if(evento.keyCode==32){

        let x=juego.nave.x+(50/2);
        let y=juego.nave.y;
        let disparo= new Disparo(x,y);
    }
    if(evento.keyCode==37){
        juego.nave.mover("-");
    }
    if(evento.keyCode==39){
        juego.nave.mover("+");
    }
}
var juego;
var izquierda;
var derecha=false;
window.onload=() => {
    juego =new Juego();
    juego.dibujar();
    document.body.addEventListener("keyup",movimiento);
    setInterval(()=>{
        for ( let marciano of juego.marcianos) {
           /*  if(this.marciano.x<= 450){
                this.marciano.x+=10;
            }
            if(this.marciano.x?= 0){
                this.marciano.x+=10;
            } */


            /*if (this.marciano.x <= 0){
                this.marciano.mover("+");
            }*/
            if(marciano.x  > 490) {
                derecha=true;
                if(derecha)
                marciano.mover("-");
            }else{
                derecha=false;
                marciano.mover("+");
            }
        }
    },1000);
}




