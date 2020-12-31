class Plinko{

    constructor(x, y, r){

        var properties = {

            isStatic: true

        }

        this.r = r;

        this.body = Bodies.circle(x, y, this.r, properties);

        World.add(world, this.body);

    }

    display(){

        var pos = this.body.position;

        push();

        translate(pos.x, pos.y);

        ellipseMode(RADIUS);

        fill("white");

        ellipse(0, 0, this.r, this.r);

        pop();

    }

}