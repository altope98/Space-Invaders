class Marciano{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
}

class Nave{
    constructor(x, y,velb){
        this.x= x;
        this.y= y;
        this.velb=velb;
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