var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play";

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup(){
  createCanvas(600,500);
  tower =createSprite(300,300)
tower.addImage("tower",towerImg);
tower.velocityY=2;
ghost=createSprite(200,200,50,50)
  ghost.addImage(ghostImg);
  ghost.scale=0.5
  doorsGroup=new Group();
  climbersGroup=new Group();
  invisibleBlockGroup=new Group();
spookySound.loop();  
}


function draw(){
  background(0);
  if(gameState==="play"){
  if(tower.y>400) {
    tower.y=300
  
  }
  if(climbersGroup.isTouching(ghost)) {
    ghost.velocityY=0
  }
  if(keyDown("left_arrow")){
    ghost.x=ghost.x-3
    
  }
  if(keyDown("right_arrow")){
    ghost.x=ghost.x+3
  }
   if(keyDown("space")){
    ghost.velocityY=-5   
     
  }
  ghost.velocityY=ghost.velocityY+0.8;
  if(invisibleBlockGroup.isTouching(ghost)||ghost.y>600){
    ghost.destroy();
    gameState="end";
    
  }
  spawnDoors();
  
drawSprites();
}
if(gameState==="end"){
  textSize(30);
  stroke("orange")
  fill("orange")
  text("game Over",230,250);
}
}

function spawnDoors() {
  if(frameCount%240===0) {
  door=createSprite(200,0);
  door.addImage(doorImg);
    climber=createSprite(200,50);
  climber.addImage(climberImg);
     invisibleBlock=createSprite(200,65)
    invisibleBlock.width=climber.width
    invisibleBlock.height=2
  door.velocityY=2;
  door.x=Math.round(random(120,400))
    climber.x=door.x
    invisibleBlock.x=door.x
    invisibleBlock.velocityY=2;
    invisibleBlock.debug=true
    climber.velocityY=2;
    ghost.depth=door.depth
    ghost.depth+=1
  door.lifetime=450
    doorsGroup.add(door);
    climber.lifetime=450
    climbersGroup.add(climber);
     invisibleBlockGroup.add(invisibleBlock);
  }
  
}














