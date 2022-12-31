var bg,bgImg;
var player, shooterImgLeft, shooterImgRight, shooter_shooting_right, shooter_shooting_left;
var rightKeyActive= false


function preload(){
  //creating the images for the shooter walking
  shooterImgRight = loadImage("assets/shooter_1_right.png");
  shooterImgLeft = loadImage("assets/shooter_1_left.png");

  //creating the images for the shooter to shoot
  shooter_shooting_right = loadImage("assets/shooter_3_right.png");
  shooter_shooting_left = loadImage("assets/shooter_3_left.png");

  //uploading the image for the background
  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {
  //creating the canvas
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
  bg.addImage(bgImg);
  bg.scale = 1.1;
  
  //creating the player sprite
    player = createSprite(displayWidth/2, displayHeight-300, 50, 50);
    player.addImage("right", shooterImgRight);
    player.addImage("left",shooterImgLeft);
    player.addImage("shootRight",shooter_shooting_right);
    player.addImage("shootLeft", shooter_shooting_left);
    player.changeImage("right");
    player.scale = 0.3;
    player.debug = true;
    player.setCollider("rectangle",0,0,300,300);
}

function draw() {
  //Creating the background colour (nothing)
  background(0); 
  
  //moving the player up and down and making the game mobile compatible using touches
  if(keyDown("UP_ARROW")||touches.length>0){
    player.y = player.y-30
  }

  if(keyDown("DOWN_ARROW")||touches.length>0){
  player.y = player.y+30
  }
  
  if(keyDown("RIGHT_ARROW")||touches.length>0){
    rightKeyActive=true
    player.x = player.x+20
    player.changeImage("right")
  }

  if(keyDown("LEFT_ARROW")||touches.length>0){
    rightKeyActive=false
    player.x = player.x-20
    player.changeImage("left")
  }

  //Shooting to the left side
  if(keyWentDown("space") && rightKeyActive === false) {
    player.changeImage("shootLeft")
  }

  else if(keyWentUp("space") && rightKeyActive === false) {
    player.changeImage("left")
  }

  //Shooting to the right side
  if(keyWentDown("space") && rightKeyActive === true){
    player.changeImage("shootRight");
  }

  else if(keyWentUp("space") && rightKeyActive === true){
    player.changeImage("right");
  }

  drawSprites();
}