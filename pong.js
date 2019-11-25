var ancho=1000;//parseInt(prompt("Introduce ancho"));
var largo=500;//parseInt(prompt("Introduce largo"));

class Barra {
    constructor(x, y, width, height, vely, color) {
        this.x = x;
        this.y = y;
        this.width=width;
        this.height=height;
        this.color = color;
        this.vely = vely;
        this.tag = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.tag.setAttribute("fill", this.color);
        this.tag.setAttribute("x", this.x);
        this.tag.setAttribute("y", this.y);
        this.tag.setAttribute("width", this.width);
        this.tag.setAttribute("height", this.height);
    }
1
    mover(direccion) {
        console.log(this.largo);
        if(direccion=="-"){
            this.y = this.y - this.vely;
        }else{
            this.y = this.y + this.vely;
        }
        if (this.y <= 0){
            this.y=5;
            //this.vely=0;
        }
        if(this.y  >= this.largo) {
            this.y=this.largo-5;
            //this.vely=0;
        }
    }

    dibujar() {
        this.tag.setAttribute("y", this.y);
    }
}

class Juego {
    constructor(ancho, largo, arraybarras) {
        this.ancho = ancho;
        this.largo = largo;
        this.barras=arraybarras;
        this.div = document.getElementById("juego");

        this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        this.div.setAttribute("height", this.largo);
        this.div.setAttribute("width", this.ancho);
        this.svg.setAttribute("height", this.largo);
        this.svg.setAttribute("width", this.ancho);

        this.div.appendChild(this.svg);
        for (this.barra of this.barras){
            this.svg.appendChild(this.barra.tag);

            this.barra.dibujar();
        }
    }
}

var array=[];

window.onload = () => {
    array=[new Barra(50, 60, 20,40, 5, "red"),new Barra(800, 60, 20,40, 5, "blue")];
    
    var juego=new Juego(ancho,largo, array);
    document.body.addEventListener("keyup",movimiento);
}

function movimiento(event){
    if(event.keyCode==87){
        this.barra=array[0];
        this.barra.mover("-");
        this.barra.dibujar();
    }
    if(event.keyCode==83){
        this.barra=array[0];
        this.barra.mover("+");
        this.barra.dibujar();
    }
    if(event.keyCode==38){
        this.barra=array[1];
        this.barra.mover("-");
        this.barra.dibujar();
    }
    if(event.keyCode==40){
        this.barra=array[1];
        this.barra.mover("+");
        this.barra.dibujar();
    }
}