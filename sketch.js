var path, runner,leftBoundary,rightBoundary;
var pathImage,runnerImage
var invisiblePath
function preload(){
  //pre-load images
  pathImage=loadImage("path.png")
  runnerImage=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  background(0)
  //create sprites here
  path=createSprite(200,180)
  path.addImage(pathImage)
  path.velocityY=4
  path.scale=1.2
runner= createSprite(200,280,30,30)
runner.addAnimation("Runner-1.png","Runner-2.png","Runner-1.png","Runner-1.png")
runner.scale=0.10
leftBoundary=createSprite(0,0,100,800)
leftBoundary.visible=false;

rightBoundary=createSprite(410,0,100,800)
rightBoundary.visible=false
}
invisiblePath=createSprite(400,400)
invisiblePath.visible=false
function draw() {
  
  background(0);
  if(path.y>400){
    path.y=height/2
  }
  runner.x=World.mouseX
  drawSprites()
}