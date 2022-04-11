var shooter;
var standingImg, shootingImg;
var bg, bgImg;
var zombie,zombieImg;
var zombieGroup;
var count =0;

function preload(){
standingImg=loadImage("assets/shooter_2.png");
shootingImg=loadImage("assets/shooter_3.png");
bgImg= loadImage("assets/bg.jpeg");
zombie1Img=loadImage("assets/zombie.png");
zombie2Img=loadImage("assets/zombie2.png");
heartsimg = loadImage("assets/heart_1.png"); 
}

function setup(){
createCanvas (windowWidth, windowHeight);
bg= createSprite(width/2, displayHeight/2+100);
bg.addImage(bgImg);
bg.scale=1.09;

shooter= createSprite(width/4+600, height/2);
 shooter.addImage(standingImg);
 shooter.scale = 0.3;

 zombieGroup= new Group();
 bulletGroup = new Group();

heart1 = createSprite (50,50);
heart1.addImage(heartsimg);
heart1.scale = 0.4
  
heart2 = createSprite (130,50);
heart2.addImage(heartsimg);
heart2.scale = 0.4
  
heart3 = createSprite (220,50);
heart3.addImage(heartsimg);
heart3.scale = 0.4
}

function draw(){
  background("grey");

  if(keyDown("UP_ARROW")){
   shooter.y = shooter.y-12;
  }

  if(keyDown("DOWN_ARROW")){
    shooter.y= shooter.y+12;
  }

if(keyWentDown("SPACE")){
  shooter.addImage(shootingImg);
  var bullet = createSprite(shooter.x+20, shooter.y-25, 10,5);
  bullet.velocityX= 7;
  bulletGroup.add(bullet)
}
else if(keyWentUp ("SPACE")){
 shooter.addImage(standingImg);
}

if(bulletGroup.isTouching(zombieGroup)){
  zombie.destroy()

}

if(shooter.isTouching(zombieGroup)){
  zombieGroup.destroyEach()
  count=count+1
  console.log(count)
}
  
if(count ==1 ){
  heart1.visible = false;
}

if(count ==2){
  heart2.visible = false;
}

if(count==3){
    heart3.visible = false;
}
zombies()

drawSprites();
}

function zombies(){
  if( frameCount%150===0  ){
  zombie = createSprite(width, height/2+60);
  var rand = Math.round(1,2)
  switch(rand){
  case 1: zombie.addImage(zombie1Img)
  break;
  case 2: zombie.addImage(zombie2Img)
   break;
   default :break
  }
  zombie.scale= 0.25;
  zombie.velocityX = -5;
  zombieGroup.add (zombie);
}
}
