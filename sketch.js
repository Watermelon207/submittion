var Runner , RunnerIMG
var Background , BackgroundIMG , Runner2 , RunnerIMG2 ,Runner3 ,RunnerIMG3
var gameState 
var PLAY=1
var PLAY2=2
var PLAY3=3

function preload(){
  RunnerIMG3 = loadAnimation("Runner-1.png","Runner-2.png");
  RunnerIMG2 = loadAnimation("Runner-1.png","Runner-2.png");
  RunnerIMG = loadAnimation("Runner-1.png","Runner-2.png");
  BackgroundIMG=loadImage("path.png")
  //pre-load images
}

function setup(){
  createCanvas(400,500);
  //create sprites here
  Runner=createSprite(200,350,10,10);
  Runner.addAnimation("Runner",RunnerIMG);
  Runner.scale= 0.1

  gameState=PLAY

  Runner2=createSprite(100,350,10,10);
  Runner2.addAnimation("Runner2",RunnerIMG2);
  Runner2.scale= 0.1

  Runner3=createSprite(300,350,10,10);
  Runner3.addAnimation("Runner3",RunnerIMG3);
  Runner3.scale= 0.1

  Background=createSprite(200,200,400,400);
  Background.addImage("path",BackgroundIMG);
}

function draw() {
  background("black");
  Background.depth = Runner.depth;
  Runner.depth = Runner.depth + 1;
  Runner3.depth = Runner.depth;
  Runner2.depth = Runner.depth;
  Runner.visible =true
  Runner2.visible =false
  Runner3.visible =false

  Background.velocityY = 4;
  
  if (Background.y>400){
    Background.y = Background.height/20;
  }

  if(gameState === PLAY){


    if(keyDown("Left"))
    {
      Runner.visible =false
      Runner2.visible =true
      Runner3.visible =false
    } 
  
    if(keyDown("Right"))
    {
      Runner.visible =false
      Runner2.visible =false
      Runner3.visible =true
    }  
  }



  
  drawSprites()
}
