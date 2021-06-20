
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var kid, coin, bag;
var kidimg, coinimg, bagimg;
var bgimg, bg;
var fish,fishimg1,fishimg;

var img;
var angle = 0;
var x = 0;
var y = 0;
var sg, sganime;

function preload() {
 
  sganime=loadAnimation("images/seagull1.gif");
 // sganime=loadAnimation("images/seagull.gif");
  bgimg=loadAnimation("images/bgimproved.gif");
  fishimg=loadImage("images/fish.png");
  fishimg1=loadImage("images/fishd.png");
  kidimg = loadImage("images/kid.png");
 
}

function setup() {
  createCanvas(1000, 500);
  engine = Engine.create();
	world = engine.world;
  
  bg=createSprite(500,250,1000,500)
  bg.addAnimation("bgl",bgimg);
  bg.scale=2;

  kid=createSprite(50,260,20,20);
  kid.addImage(kidimg);
  kid.scale=0.8;
  
  Engine.run(engine);
  
}

function draw() {



  background(0);
  
  

 drawSprites();
 spawnseagulls()



}

function spawnseagulls(){
  if(frameCount%500===0){
    sg=createSprite(1100,random(50,100),316,300);
    sg.scale=0.09;
    sg.addAnimation("sgrunning",sganime);
    sg.lifetime=900;
    sg.velocityX=-2;

    sg.depth=kid.depth;
    kid.depth=kid.depth+1;
  }
}



