
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Bob1,Bob2,Bob3,Bob4,Bob5
var Roof;
var Rope1,Rope2,Rope3,Rope4,Rope5;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    Bob1 = new Bob(300,400)
	Bob2 = new Bob(352,400)
	Bob3 = new Bob(403,400)
	Bob4 = new Bob(456,400)
	Bob5 = new Bob(507,400)

	Roof = new Ground(400,200,300,40)
	Rope1 = new chain(Bob1,Roof)
  Rope2 = new chain(Bob2,Roof)
  Rope3 = new chain(Bob3,Roof)
  Rope4 = new chain(Bob4,Roof)
  Rope5 = new chain(Bob5,Roof)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  drawSprites();


  Bob1.display()
  Bob2.display()
  Bob3.display()
  Bob4.display()
  Bob5.display()

  Roof.display()
  Rope1.display()
 
}



