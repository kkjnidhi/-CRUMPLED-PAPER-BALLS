
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground,left,right
function preload()
{
	
}

function setup() {
	createCanvas(1300,500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	var ball_options = {
		isStatic:false,
		restitution:  0.3,
		fricition:0,
		density:1.2
	  }
	ball = Bodies.circle(200,300,30,ball_options);

	World.add(world,ball);
	ground =new Ground(650,488,1300,20);
	left =new Ground(750,450,20,200);
	right =new Ground(900,450,20,200);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,30);
  ground.show()
  left.show()
  right.show()
  Keypressed();
  drawSprites();

}
function Keypressed(){
	if (keyCode=== UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:9.5,y:-11.8});}
	
		
}
