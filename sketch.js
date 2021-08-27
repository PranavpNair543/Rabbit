var garden,rabbit;
var gardenImg,rabbitImg;
var apple
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  grassImg=loadImage("grass.png") 
  redImg=loadImage("leaf.png") 
  appleImg=loadImage("apple.png") 
  //redImg=loadImage("redImage.png") 
  orangeImg=loadImage("orangeLeaf.png") 
 
}

function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
//Add image to apple sprite
apple.addImage(appleImg);

//Scale the sprite if requried
apple.scale = 0.07;

//Gice the velocity so that the apples move downloads
apple.velocityY = +4;

apple.lifetime=150
}

function red1() {
  var red = createSprite(random(50, 350),40, 10, 10);
  //Add image to apple sprite
  red.addImage(redImg);
  
  //Scale the sprite if requried
  red.scale = 0.07;
  
  //Gice the velocity so that the apples move downloads
  red.velocityY = +4;

  red.lifetime=150
  }

  function orange1() {
    var orange = createSprite(random(50, 350),40, 10, 10);
    //Add image to apple sprite
    orange.addImage(orangeImg);
    
    //Scale the sprite if requried
    orange.scale = 0.07;
    
    //Gice the velocity so that the apples move downloads
    orange.velocityY = +4;

    orange.lifetime=150
    }

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(180);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
rabbit.x=World.mouseX
  drawSprites();
  var select_sprites = Math.round(random(1,3));

if (frameCount % 80 == 0) {
  if (select_sprites == 1) {
    //call createApples function
    createApples()
  }
  else if(select_sprites == 2){
    //call createLeaves function
    red1();
  }
  else{
    orange1();
  }
}
}