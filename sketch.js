const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperIMG , dustIMG
var paper,dustbin,groundObj,leftSide,rightSide;
var world;
var radius = 70;


function preload(){


	dustbin= createImg('dustbin.png');
dustbin.position(1070,330);
dustbin.size =(50,50)


paper= createImg('paper.png');
paper.position(260,495);



}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var paper_options={
		isStatic:false,
		restitution:0.3,
		density:0.4
	}
var dustbin_options={
	isStatic:true
}
	paper = Bodies.circle(260,100,radius/2.6,paper_options);
	World.add(world,paper);
    dustbin = Bodies.rectangle(1185,570,200,200,dustbin_options)
    World.add(world,dustbin);


	ground=new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,10,120);
	rightSide = new Ground(1270,600,10,120);
	bottomSide = new Ground(1185,650,150,20);
    
	Engine.run(engine);
  
}


function draw() {
	background(200);
	rectMode(CENTER);
//rect(dustbin.position.x,dustbin.position.y, 200,200);

	ground.display();
	leftSide.display();  
	rightSide.display();
	bottomSide.display();
   
//ellipseMode(RADIUS);

//ellipse(paper.position.x,paper.position.y,200);
//image(dustbin.position.x,dustbin.position.y, 200,200);
	

}

function keyDown() {
  	if (keyCode=== UP_ARROW) 
	  {
 
		Matter.Body.applyForce(paper.position.x,paper.position.y,{x: 0,y:0},{x:85,y:-85});
    
  	}
}





