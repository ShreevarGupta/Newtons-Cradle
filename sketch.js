const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var bobObject1, bobOject2, bobOject3, bobOject4, bobOject5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function preload() {


}


function setup() {

	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobOject1 = new Bob(220, 500, 40);
	bobOject2 = new Bob(300, 500, 40);
	bobOject3 = new Bob(380, 500, 40);
	bobOject4 = new Bob(460, 500, 40);
	bobOject5 = new Bob(540, 500, 40);

	roof = new Roof(390, 200, 450, 40);

	rope1 = new Rope(bobObject1.body, roof.body, 30, 0);


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  Engine.update(engine);
  background("grey");
  

  bobOject1.display();
  bobOject2.display();
  bobOject3.display();
  bobOject4.display();
  bobOject5.display();

  roof.display();

  rope1.display();

  drawSprites();
 
}



