var road, car, leftBoundary, rightBoundary, diamond, vilan
var carrunning, roadImg, diamondImg, vilanImg
var diamondG,vilanG

var state;
state=Start()

function preload() {
    car_running = loadAnimation("car1.png", "car2.png", "car3.png");
    roadImg = loadImage("Road.png")
    vilanImg = loadImage("vilan1.png")
    diamondImg= loadImage("diamond2.jpg")
   
}

function setup() {
    createCanvas(400,600)
    road = createSprite(200, 200)
    road.addImage("road", roadImg)
    road.scale = 1.2
    road.velocityY = 4

    car = createSprite(70, 500, 30, 30)
    car.addAnimation("running", car_running)
    car.scale = 0.09

  
  

    


}



function draw() {
    background(0)
   


    if (keyDown("left_arrow")) {
        car.x = car.x - 4

    }
    if (keyDown("right_arrow")) {
        car.x = car.x + 4

    }
    
    edges= createEdgeSprites();
  car.collide(edges);

    if (road.y > 400) {
        road.y = height / 2;
    }

  
      
  


 
drawSprites()

}




function createVilan() {
    if (frameCount % 200 == 0)
    vilan = Math.round(random(50, 350), 40, 10, 10);
   vilan.addImage(vilanImg);
    vilan.scale = 0.09;
    vilan.velocityY = 3;
   vilan.lifetime = 150;
  
  }

    
function createDiamond() {
    if (frameCount % 300 == 0)
    diamond =  Math.round(random(50, 350), 40, 10, 10);
  diamond.addImage(diamondImg);
   diamond.scale = 0.05;
   diamond.velocityY = 3;
   diamond.lifetime = 150;
  
  }



