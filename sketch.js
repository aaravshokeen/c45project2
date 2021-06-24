var bg,bgImage;
var player,playerImage;
var boatSound;
var fish,fishImage;
var leftfence,rightfence;
var leftimg,rightimg;



function preload(){
  bgImage=loadImage("bg1.png");
  playerImage=loadImage("boat.png")
  fishImage=loadAnimation("fish1.png","fish2.png")
  leftimg=loadImage("leftfence.png");
  rightimg=loadImage("rightfence.png");
  boatSound=loadSound("boatsound.mp3");
}

function setup() {
  createCanvas(1000,700);

  bg=createSprite(500,300,1000,600);
  bg.addImage(bgImage);
  bg.scale=1.5;
  bg.velocityY=5;
  
  player=createSprite(500,600,50,50);
  player.addImage(playerImage);
  player.scale=0.65;

  leftfence=createSprite(970,350,30,1000);
  leftfence.addImage(rightimg);
  rightfence=createSprite(30,350,30,1000);
  rightfence.addImage(leftimg);
}

function draw() {
  background(0);

  
  if(bg.y>600){
    bg.y=300;

  }  

  if(keyDown("left")){
    player.x=player.x-5
  }

  if(keyDown("right")){
    player.x=player.x+5
  }
  if(keyDown("up")){
    //boatSound.play();
    player.y=player.y-5
  }
  if(keyDown("down")){
    player.y=player.y+5
  }
  spawnFish();
  drawSprites();
}

  function spawnFish(){
    if(frameCount%150===0){
      fish=createSprite(500,0,10,40);
      fish.addAnimation("1",fishImage);
      fish.scale=0.25;
      fish.x=random(50,950)
      fish.velocityY=5;
    }
  }