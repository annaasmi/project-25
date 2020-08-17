
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,dustbin1,dustbin2,dustbin3,paper,dustbin,dustbinImg;

function preload()
{
	dustbinImg = loadImage("images/dustbingreen.png")
}

function setup() {
	createCanvas(1600, 700);
  
  dustbin = createSprite(1400,510,200,150);
  dustbin.addImage("dustbin",dustbinImg);
  
	engine = Engine.create();
	world = engine.world;

	  ground = new Ground(800,690,1600,20);
    dustbin1 = new Trash(1315,580,20,200);
    dustbin2 = new Trash(1400,670,200,20);
    dustbin3 = new Trash(1480,580,20,200);
    paper = new Paper(150,600,50);
   console.log(paper.x);
   console.log(paper.y);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);

  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  keyPressed();

  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:75,y:-75});
}
}

