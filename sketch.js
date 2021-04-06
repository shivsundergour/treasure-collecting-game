var path,boy,cash,diamonds,jwellery,sword;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg,
    boycimg,goimg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;
var gamestate,go ;
function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("runner1.png","runner2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("gameOver.png");
  boycimg = loadAnimation("runner1.png");
  goimg = loadImage("gameOver.png")
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);
// Moving background
path=createSprite(width / 2,200);
path.addImage(pathImg);
path.velocityY = 4;
gamestate = 0 ;
score = 0 ;
//creating boy running
boy = createSprite(width / 2,height - 20,20,20);
 boy.addAnimation("S",boyImg);
boy.scale=0.08;
 go =  createSprite(width /2,height/2,20,20)
  go.addImage(goimg);
  boy.setCollider("circle",-10,200,500)
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

}

function draw() {

  background(0);
  if(gamestate === 0){
    
  go.visible = false ;
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  //code to reset the background
  if(path.y > height ){
    path.y = height/2;
  }
  
    createCash();
    createDiamonds();
    createJwellery();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
    treasureCollection =treasureCollection + 100 ;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondsG.destroyEach();
 treasureCollection =  treasureCollection  + 200 ;
      
    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection  = treasureCollection  + 300 ;
    }else{
      if(swordGroup.isTouching(boy)) {
        swordGroup.destroyEach();
        gamestate = 1 ;
    }
  }}
if (gamestate === 1 ){
  path.velocityY = 0 ;
  boy.addAnimation("S",boycimg);
  cashG.destroyEach();
  jwelleryG.destroyEach();
  diamondsG.destroyEach();
   go.visible = true ;
}
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,width - 490,height - 450);

}

function createCash() {
  if (World.frameCount % 50 == 0) {
  var cash = createSprite(Math.round(random(50,width - 50),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 80 == 0) {
  var diamonds = createSprite(Math.round(random(50,width - 50),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 80 == 0) {
  var jwellery = createSprite(Math.round(random(50,width - 50),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
}

function createSword(){
  if (World.frameCount % 150 == 0) {
  var sword = createSprite(Math.round(random(50,width - 50),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
}