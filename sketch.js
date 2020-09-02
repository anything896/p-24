
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var papper,ground;
var bin1,bin2,bin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400,650,800,20);
	papper=new Papper (50,350,10)
	bin1=new Bin (650,625,100,20)
	bin2=new Bin (600,595,20,80)
	bin3=new Bin (700,595,20,80)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  papper.display();
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  drawSprites();
 
}
function KeyPressed(){
	if(KeyCode === UP_ARROW){
		Matter.Body.applyForce(papper.body,papper.body.position,{x:85,y:-85})
	}
}



