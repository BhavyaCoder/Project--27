
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint


function preload()
{

}

function setup() {
	createCanvas(1000,1000);


	engine = Engine.create();
	world = engine.world;
	roof=new Ground(500,500,600,30)

	

bobObject1= new bob(420,900,80)



bobObject2 = new bob(500,900,80)
bobObject3 = new bob(340,900,80)
bobObject4 = new bob(580,900,80)
bobObject5 = new bob(660,900,80)

	//Create the Bodies Here.
	line1 = new Rope(bobObject1.body,roof.body,-80,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //Engine.update(engine)
  roof.display();  
  line1.display();
bobObject1.display();
bobObject2.display();
bobObject3.display();
bobObject4.display();
bobObject5.display();
  

 
}



