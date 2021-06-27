const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraints = Matter.Constraints;
var bob1, bob2, bob3, bob4, bob5;

var rope1, rope2, rope3, rope4, rope5;

var roof
function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(350, 100, 300, 20);

	bob1 = new Bob(250, 300);
	bob2 = new Bob(350, 300);
	bob3 = new Bob(400, 300);
	bob4 = new Bob(450, 300);

	rope1 = new Rope(bob1.body, roof.body, -100, 0);
	World(world, rope1);

	rope2 = new Rope(bob2.body, roof.body, -50, 0);
	World(world, rope2);

	rope3 = new Rope(bob3.body, roof.body, 0, 0);
	World(world, rope3);

	rope4 = new Rope(bob4.body, roof.body, +50, 0);
	World(world, rope4);

	rope5 = new Rope(bob5.body, roof.body, +100, 0);
	World(world, rope5);
	Engine.run(engine);
  
	
}


function draw() {
	rectMode(CENTER);
	
	background(0);
	
	drawSprites();
	
//Bob	
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
//Rope
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
};



