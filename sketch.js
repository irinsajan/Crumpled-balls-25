
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground, box1, box2, box3, paper1;

var dustbinImage;

function preload(){
	dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,height-20,width,20);

	box1 = new Box(600,height-40,200,20);
	box2 = new Box(700,height-90,20,100);
	box3 = new Box(500,height-90,20,100);

	paper1 = new Paper(100,height-40,35);	
  
}


function draw() {

	background(220);
	Engine.update(engine);

	ground.display();

	box1.display();
	box2.display();
	box3.display();

	paper1.display();

	image(dustbinImage,600,height-138,255,220);
  
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Body.applyForce(paper1.body,paper1.body.position,{x:190,y:-210});
	}
}



