export class Marciano{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    dibujar(){
        this.mar=document.createElementNS("http://www.w3.org/2000/svg","rect");
            this.mar.setAttribute("width","40");
            this.mar.setAttribute("fill", "green");
            this.mar.setAttribute("height","40");
            this.mar.setAttribute("x", this.x);
            this.mar.setAttribute("y", this.y);
    }
}

export class Nave{
    constructor(){
        this.x= 500/2;
        this.velx=20;
        this.tag = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.tag.setAttribute("fill", "blue");
        this.tag.setAttribute("x", this.x);
        this.tag.setAttribute("y", 400);
        this.tag.setAttribute("width", 50);
        this.tag.setAttribute("height", 20);
    }
    mover(direccion) {
        //console.log(this.largo);
        if(direccion=="-"){
            this.x = this.x - this.velx;
        }else{
            this.x = this.x + this.velx;
        }
        if (this.x <= 0){
            this.x=5;
        }
        if(this.x  >= 450) {
            this.x=450-5;
        }

        this.dibujar();
    }

    dibujar() {
        this.tag.setAttribute("x", this.x);
    }
    
}

export class Disparo{

}

export class Juego{
    constructor(){
        this.marcianos=[];
        let x=0;
        let y=10;
        for (let i = 1; i <= 16; i++) {
            x+=100;
            if(x>=500){
                y+=60;
                x=100;
            }
            this.marcianos.push(new Marciano(x,y));
        }
        this.nave=new Nave();
    }

    dibujar(){
        let cont=0;
        let div=document.getElementById("juego");
        let svg=document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute("width","500");
            svg.setAttribute("height","500");
        for (this.marciano of this.marcianos){   ///CAMBIAR EL PINTADO PARA QUE CUANDO DESAPAREZCA DEL ARRAY NO PINTE NADA EN ESA POSICION CON UN IF
            this.marciano.dibujar();
            this.marciano.mar.setAttribute("id", cont);
            cont++;
            svg.appendChild(this.marciano.mar);
        }
        this.nave.dibujar();
        svg.appendChild(this.nave.tag);

        div.appendChild(svg);
    }
}


//MOVIMIENTOS DE MARCIANO Y LAS BOMBAS