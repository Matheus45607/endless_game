  var ninja, ninja_stopped, ninja_running, ninja_collided, ninjaImg;
  




function preload(){
    jumpSound = loadSound ("01.wav")
    collidedSound = loadSound ("collided.wav")
  
    ninja_running = loadAnimeation("ninja_correndo_1.jpeg", "ninja_correndo_2.jpg");
    ninja_collided = loadAnimeation("ninja_parado.jpeg");

}

function setup() {
  createCanvas(600, 400);
  
  ninja = createSprite(50,height-70,20,50);
  
  ninja.addAnimation("running", trex_running);
  ninja.addAnimation("collided", trex_collided);
  ninja.setCollider('circle',0,0,350)
  ninja.scale = 0.08


}

function draw() {
   
  
  
  drawSprites();
}