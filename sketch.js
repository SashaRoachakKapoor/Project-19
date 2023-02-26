var bella
var bellaImg , bellaRun
var scene , sceneImg
var daisy
var daisyImg 
var score
var bone
var ball
var gameState = PLAY
var PLAY = 1
var END = 0




function preload(){
bellaImg = loadImage("Dog 3.png")
sceneImg = loadImage("scene garden.png")
bellaRun = loadAnimation("Dog 3.png" , "Dog 2.png" , "Dog 1.png");
ball = loadImage("ball.png")
bone = loadImage("bone.png")

}

function setup() {
createCanvas(windowWidth,windowHeight)

scene = createSprite(width/2,height/2)
scene.addImage(sceneImg)
scene.scale = 0.24

bella = createSprite(width/11,height-210,20,20)
bella.addImage(bellaImg)
bella.scale = 1.2



}

function draw() {



  

drawSprites();

text("Score: "+ score, width/11,height/14);
  
if(mouseIsPressed){
    gameState = PLAY
}

if(gameState == PLAY){
    scene.velocityX = -10
    bella.addAnimation("running" , bellaRun)
    score = score+5

if (scene.x < 0){
    scene.x = scene.width/10;
  }




}






}

