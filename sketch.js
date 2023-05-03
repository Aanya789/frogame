var bgImg, frogImg, frog

function preload() {
   bgImg = loadImage("assets/bg sky.jpeg")
   frogImg = loadAnimation("assets/frog1.png","assets/frog2.png","assets/frog3.png")
obtacleImg= loadImage("assets/flower.png")

}
function setup() {
  createCanvas(1200, 1200);
  frog = createSprite(100,500,20,50)
  frog.addAnimation("jumping",frogImg)
  obstacleGroup = new Group ()
}
function draw() {
  background(220);
  image(bgImg,0, 0, 1200, 800)
  spawnObstacles()
  drawSprites()
}

function spawnObstacles(){
  if (frameCount % 60 === 0 ){
    obstacle = createSprite(600, 600, 20, 20)
    obstacle.addImage(obstacleImg)
    obstacle.y = Math.round(random(100,600))
    obstacle.velocityX=-3
    obstacleGroup.add(obstacle)
  }
}