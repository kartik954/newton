const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bobobject1, bobobject2, bobobject3, bobobject4, bobobject5;
var rope1, rope2, rope3, rope4, rope5;
var centerX = 400;
var centerY = 400;
var bobDia = 60;
function preload()
{
	
}

function setup(){
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400, 20, 400, 20);

	bobobject1 = new Bob(centerX, centerY, bobDia);
	rope1 = new Rope(bobobject1.body, roof.body, 0, 0);

	bobobject2 = new Bob(centerX+bobDia, centerY, bobDia);
	rope2 = new Rope(bobobject2.body, roof.body, bobDia, 0);

	bobobject3 = new Bob(centerX+(bobDia*2), centerY, bobDia);
	rope3 = new Rope(bobobject3.body, roof.body, bobDia*2, 0);

	bobobject4 = new Bob(centerX-bobDia, centerY, bobDia);
	rope4 = new Rope(bobobject4.body, roof.body, -bobDia, 0);

	bobobject5 = new Bob(centerX-(bobDia*2), centerY, bobDia);
	rope5 = new Rope(bobobject5.body, roof.body, -bobDia*2, 0);

	//Create the Bodies Here.


	Engine.run(engine);
  

}

function draw() {
  rectMode(CENTER);
  background("grey");
  roof.display();
  bobobject1.display();
  rope1.display();
  bobobject2.display();
  rope2.display();
  bobobject3.display();
  rope3.display();
  bobobject4.display();
  rope4.display();
  bobobject5.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode ==  UP_ARROW){
	  Matter.Body.applyForce(bobobject5.body, bobobject5.body.position, {x: -50, y: -40});
	}
  }
