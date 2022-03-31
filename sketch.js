
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1,block2,block3;

var papel;

var cesta1,cesta2;
	

function preload()
{
	
}

function setup() {
	createCanvas(1300, 1000);
	engine = Engine.create();
	world = engine.world;
	
	//Crie os Corpos Aqui.
	

	
	var papel_options = {
		isStatic : false,
		restitution: 0.3,
		friction:0 ,
		frictionAir:1.2
	}
	
	var block_options1 = {
		restitution: 0.5,
		friction:0.2,
		frictionAir:0
	}
	
	var block_options2 = {
		restitution: 0.7,
		friction:0.1,
		frictionAir:0.1
	}
	var block_options3 = {
		restitution: 0.01,
		friction:2,
		frictionAir:0.3
	}

	var ground_options={
		isStatic : true
	}

	Engine.run(engine);
  
	papel= Bodies.circle(100,20,10,papel_options);
	World.add(world,papel);
	
	block1 = Bodies.circle(220,10,10,block_option1s);
	World.add(world,block1);

	block2 = Bodies.rectangle(110,50,10,10,block_options2);
	World.add(world,block2);

	block3 = Bodies.rectangle(350,50,10,10,block_options3);
	World.add(world,block3);

	ground = Bodies.rectangle(350,50,400,20,block_options3);
	World.add(world,ground);

	groundObj=new ground(width/2,670,width,20);
	leftSide = new ground(1100,600,20,120);

	fill();
	rectMode(CENTER);
	ellipseMode(RADIUS);

}


function draw() {
  //rectMode(CENTER); não entedemos porque
  background(0,0,0);
  ellipse(block1.position.x,block1.position.y,20);
  ellipse(block2.position.x,block2.position.y,20);
  ellipse(block3.position.x,block3.position.y,20);
	groundObj.display();
  rect(ground.position.x,ground.position.y,400,20)
  Engine.update(engine);
  drawSprites();
 
}

function keyPreesed(){
	if(keyCode === UP_ARROW){
		Matter.body.aplyForce(papel,{x:0,y:0},{x:0.05,y:0});
		Matter.body.aplyForce(papel,{x:0,y:0},{x:0,y:-0.05});

	}
}



