class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
    var options={
        bodyA: bodyA,
        bodyB: bodyB,
        pointB: {x: offsetX, y: offsetY}
    }
    this.rope = Constraint.create(options);
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    World.add(world, this.rope);
    }
    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        var anchorBX = pointB.x + this.offsetX;
        var anchorBY = pointB.y + this.offsetY;
        strokeWeight(4);
        stroke("blue");
        line(pointA.x,pointA.y,anchorBX, anchorBY);
        noStroke();
    }
};
    