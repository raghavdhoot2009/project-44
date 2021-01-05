const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;

var target1,target2,target3;

var tree1,tree2,tree3;

var fire,shoot;

function preload(){
targetimg=loadImage("target.png");
fire=loadImage("Fire.png");
}


function setup() {
  createCanvas(2500,1350);
  engine=Engine.create();
  world=engine.world;

  tree1=new tree(200,400,10,10); 
  target1=new target(225,550,20,20)
  
  tree2=new tree(600,400,10,10);
  target2=new target(625,550,20,20)

  tree3=new tree(1000,400,10,10);
  target3=new target(1025,550,20,20)

}

function draw() {
Engine.update(engine);
background(0);
tree1.display();
tree2.display();
tree3.display();

target1.display();
target2.display();
target3.display();

drawSprites();
}