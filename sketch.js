var car, wall;
var speed, weight;
var deform;

function setup() {
  createCanvas(1050,400);
  
  
  car = createSprite(50, 200, 50, 50);
  car.shapeColor = "red";

  wall = createSprite(950,200,60,height/2); 
  wall.shapeColor = "green"; 

  speed = random(55,90);
  weight = random(400,1500);
  
  car.velocityX = speed;

  deform = ( (0.5) * weight * speed * speed ) / 22500;
}

function draw() {
  background("black");
  
  if(deform<100) {
    car.shapeColor = color(0,255,0);
  } else if(deform>= 100 && deform<180) {
    car.shapeColor = color(230,230,0);
  } else if(deform>=180){
    car.shapeColor = color(255,0,0);
  }

  car.collide(wall);

  drawSprites();
}

