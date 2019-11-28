export class Marciano{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.mar=document.createElementNS("http://www.w3.org/2000/svg","rect");
            this.mar.setAttribute("width","40");
            this.mar.setAttribute("fill", "green");
            this.mar.setAttribute("height","40");
            this.mar.setAttribute("x", this.x);
            this.mar.setAttribute("y", this.y);
    }
    dibujar(){
        this.mar.setAttribute("x", this.x);
    }
    mover(direccion) {
            if(direccion=="-"){
                this.x = this.x - 10;
            }else{
                this.x = this.x + 10;
            }
            this.dibujar();
    }
}

export class Nave{
    constructor(){
        this.x= 500/2;
        this.velx=20;
        this.y=400;
        this.tag = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.tag.setAttribute("fill", "blue");
        this.tag.setAttribute("x", this.x);
        this.tag.setAttribute("y", this.y);
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
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.shot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        this.shot.setAttribute("fill", "red");
        this.shot.setAttribute("r", "10");
        this.shot.setAttribute("cx", this.x);
        this.shot.setAttribute("cy", this.y);

        this.svg=document.getElementById("svg1");
        this.div=document.getElementById("juego");

        this.svg.appendChild(this.shot);
        this.div.appendChild(this.svg);

        this.mover();

    }

    mover() {
        
        do{
        setInterval(()=>{
            
                this.shot.setAttribute("cy", this.y-=10);
                
        },100);
    }while(0>=this.y)
            
        
            
        
        
    }




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
            svg.setAttribute("id","svg1");
        for (this.marciano of this.marcianos){   ///CAMBIAR EL PINTADO PARA QUE CUANDO DESAPAREZCA DEL ARRAY NO PINTE NADA EN ESA POSICION CON UN IF
            //this.marciano.dibujar();
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