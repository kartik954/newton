class Roof{
    constructor(x, y, width, height){
        var property = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y ,width, height, property);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        fill("black");
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}