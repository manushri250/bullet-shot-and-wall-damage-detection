var bullet,wall;
var weight , speed , thickness;

function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);
  speed = random(55,90);
  weight = random(400,1200);


  bullet = createSprite(70,random(50,350),60,10);
  bullet.shapeColor = "white";
  bullet.velocityX = 50;

  wall = createSprite(1200,200,40,350);
  wall.width = thickness;
  wall.shapeColor = "80,80,80";
  
  
}

function draw() {
  background(0);  

if (hascollided(bullet,wall)){

  bullet.velocityX = 0;
  var deformation = 0.5 * weight * speed * speed / (thickness*thickness*thickness);
  
    
    if(deformation < 10){
      wall.shapeColor = "yellow";
    }
    

    if (deformation > 10){
      wall.shapeColor = "red";
    }
}



  drawSprites();
}

function hascollided (bullet,wall){

bulletrightedge = bullet.x + bullet.width;
wallleftedge = wall.x;
if (bulletrightedge >= wallleftedge){

return true;
}
 
else {
  return false;
     }
}