class Bob{
    constructor(x,y,radius){
        var options = { 
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 0.5
        };
        this.body = Bodies.circle(x,y,radius/2,options);
        this.radius = radius;
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        var angle = this.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill(255, 99, 71);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
};