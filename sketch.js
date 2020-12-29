
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0
var invisibleground
var survivaltime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
 monkey  = createSprite(30,315)
 monkey.addAnimation("m0n" , monkey_running)
 monkey.scale = 0.1
  
  ground = createSprite(400,350,900,15)
  ground.velocityX = -4
  ground.x = ground.width/2
  
   invisibleground = createSprite(0,350,400,10);
  invisibleground.visible = false ;
  FoodGroup = createGroup()
  obstacleGroup = createGroup()
}


function draw() {
background("black")
  stroke("white")
  textSize(20)
  fill("white")
  text("Score  = "      +     score ,500 ,50)
  
  stroke("red")
  textSize(20)
  fill("red")
  survivaltime = Math.ceil(frameCount/frameRate())
  text("SURVIVAL TIME =" + survivaltime , 50 ,50)
  
  if(keyDown("space") && monkey.y > 250)
  {
    monkey.velocityY = -10            
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  if (ground.x < 300){
      ground.x = ground.width/2;
    }
  monkey.collide(invisibleground)
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach()
    score = score + 1
  }
  
  foodSpawn()
  spawnobstacle()
  
  drawSprites()
}
 function foodSpawn(){
    if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.2
    banana.velocityX = -3;
    banana.lifetime = 200;
      FoodGroup.add(banana)
 }
 }
function spawnobstacle(){
   if (frameCount % 300 === 0) {
    var obstacle = createSprite(600,120,40,10);
    obstacle.y = Math.round(random(120,200));
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.2
    obstacle.velocityX = -5;
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle)
   }
}



