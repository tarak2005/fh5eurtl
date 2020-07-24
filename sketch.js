
const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world;
var base;
var side1;
var side2;
var slingshot;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  //Create the Bodies Here.
  
	ball1= new Box(500,600,50,50);
  ball2= new Box(450,600,50,50);
  ball3= new Box(550,600,50,50);
  ball4= new Box(600,600,50,50);
  ball5= new Box(475,575,50,50);
  ball6= new Box(525,575,50,50);
  ball7= new Box(575,575,50,50);
  ball8= new Box(500,550,50,50);
  ball9= new Box(550,550,50,50);
  ball0= new Box(525,525,50,50);
  ball= new Ball(300,400,50,50);
  ball11= new Box(500,350,50,50);
  ball12= new Box(550,350,50,50);
  ball13= new Box(450,350,50,50);
  ball14= new Box(475,325,50,50);
  ball15= new Box(525,325,50,50);
  ball16= new Box(500,300,50,50);
  
  ball.shapeColor=color(149,49,230);
  
  ground = new Ground(525,650,300,20);
  ground2 = new Ground(500,400,200,20);
  
  slingshot = new SlingShot(ball.body,{x:200,y:300});

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ball1.display();
 ball2.display();
 ball3.display();
 ball4.display();
 ball5.display();
 ball6.display();
 ball7.display();
 ball8.display();
 ball9.display();
ball0.display();
ball.display();
ball11.display();
ball12.display();
ball13.display();
ball14.display();
ball15.display();
ball16.display();
 ground.display();
 slingshot.display();
 ground2.display();

}

function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  //}
}

function mouseReleased(){
  slingshot.fly();


}

function keyPressed(){
  if(keyCode === 32 && ball.body.speed<1){
     slingshot.attach(ball.body);
      ball.trajectory=[];
      Matter.Body.setPosition(ball.body,{x:200,y:50})
      Matter.Body.setAngle(ball.body,0);
  }
}

