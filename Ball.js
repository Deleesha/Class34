class Ball{

    constructor(a,b,c,d){
        var options = {
            restitution:0.8,
            frictionAir:0.005,
            density:1
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
        ellipseMode(RADIUS);
        fill("red");
        ellipse(0,0, this.width, this.height);
        pop()
    }
}