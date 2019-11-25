class Marciano{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
}

class Nave{
    constructor(x,velb){
        this.x= x;
        this.velb=velb;
    }
    mover(direccion) {
        console.log(this.largo);
        if(direccion=="-"){
            this.x = this.x - this.velx;
        }else{
            this.x = this.x + this.velx;
        }
        if (this.x <= 0){
            this.x=5;
           
        }
        if(this.x  >= this.largo) {
            this.x=this.largo-5;
           
        }
    }
    
}

class Disparo{

}

class Juego{
    constructor(){
        this.marcianos=[];
        for (let i = 1; i <= 5; i++) {
            x+=10;
            this.marcianos.push(new Marciano(x,10));
        }
        
    }


}
