const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var ground;
var box1,box2,box3,box4,box5,box6,box7,box8;
var ball;
var rope;






function setup() {
  createCanvas(1000,800);
  engine=Engine.create();
  world=engine.world;

  ground=new Ground(500,750,1000,20);
  box1=new Box(700,100,70,70);
  box2=new Box(700,100,70,70);
  box3=new Box(700,100,70,70);
  box4=new Box(700,100,70,70);
  box5=new Box(700,100,70,70);
  box6=new Box(700,100,70,70);
  box7=new Box(700,100,70,70);
  box8=new Box(700,100,70,70);
  ball=new Ball(200,200,90,90);
  rope=new Rope(ball.body,{x:300,y:50});


}

function draw() {
  Engine.update(engine);
  background(0);  
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  ball.display();
  rope.display();



}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}