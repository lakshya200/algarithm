var fr,mr;
var g1,g2,g3,g4,o1,o2;


function setup() {
  createCanvas(800,400);
  fr=createSprite(200, 200, 50, 80);
  fr.velocityY=5
  fr.velocityX=5

  mr=createSprite(400, 200, 80, 30);
  mr.velocityY=-5
  mr.velocityX=-5
  fr.shapeColor="green"
  mr.shapeColor="green"
  g1=createSprite(100,100,50,50);
  g1.shapeColor="green"
  g2=createSprite(200,100,50,50);
  g2.shapeColor="green"
  g3=createSprite(300,100,50,50);
  g3.shapeColor="green"
  g4=createSprite(400,100,50,50);
  g4.shapeColor="green"
}

function draw() {
  background(0,0,0);  
  bounceOff(mr,g4)
   
    
    
  drawSprites();
  }
function bounceOff(o1,o2) {
  if(o1.y-o2.y<o2.height/2+o1.height/2&&o2.y-o1.y<o2.height/2+o1.height/2){
   o1.velocityY=-(o1.velocityY)
   o2.velocityY=-(o2.velocityY)
  }
  if(o1.x-o2.x<o2.width/2+o1.width/2&&o2.x-o1.x<o2.width/2+o1.width/2){
    o1.velocityX=-(o1.velocityX)
    o2.velocityX=-(o2.velocityX)
   }
}