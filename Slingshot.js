class Rope{

        constructor(bodyA,pointB){
            var options = {
                bodyA:bodyA,
                pointB:pointB,
                stiffness:1.2,
                length:250
            }

            this.rope=Constraint.create(options);
            this.pointB=pointB;
            World.add(myworld,this.rope);
        }

        display(){
            var pointA =this.rope.bodyA.position;
            var pointB= this.pointB;
            push()
            fill("black");
            line(pointA.x,pointA.y, pointB.x,pointB.y);
            pop()
        }
}