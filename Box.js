class Box{

    constructor(a,b,c,d){
        var options = {
            restitution:0.8,
            friction:1,
            density:0.04
        }
        this.body = Bodies.rectangle(a,b,c,d,options);
        this.width = c;
        this.height =d;
        World.add(myworld,this.body);
    }

    display(){
        var pos =this.body.position;
        var angle= this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("purple");
        rect(0,0, this.width, this.height);
        pop()
    }
}