var alien;
var parts2
var health;
var parts;
var scavenger;
var ship;
var gun;
var mars;
var robot;
var king;
var sneaky;
var astronaut;
var guard;
var alienImg;
var partsImg;
var scavengerImg;
var shipImg;
var gunImg;
var marsImg;
var robotImg;
var kingImg;
var sneakyImg;
var astronautImg;
var parts2Img
var guardImg;
var alienGroup;
var kingGroup;
var guardGroup;
var scavengerGroup;
var sneakyGroup;
var partsGroup;
var health;
var partsCount;

function preload(){
    alienImg = loadImage("sl/alien.png");
    partsImg = loadImage("sl/parts.png");
    parts2Img = loadImage("sl/parts.png");
    scavengerImg = loadImage("sl/scavenger.png");
    shipImg = loadImage("sl/ship.png");
    gunImg = loadImage("sl/gun.png");
    marsImg = loadImage("sl/mars.jpg");
    robotImg = loadImage("sl/robot.png");
    kingImg = loadImage("sl/king.png");
    sneakyImg = loadImage("sl/sneaky.png");
    astronautImg = loadImage("sl/astronaut.png");
    guardImg = loadImage("sl/guard.png");
}

function setup() {
    createCanvas(1925,925);

    mars = createSprite(displayWidth/2-20,displayHeight/1.8-40)
    mars.addImage(marsImg)
    mars.scale = 3.3

    ship = createSprite(300,600)
    ship.addImage(shipImg)
    ship.scale = 0.75

    astronaut = createSprite(500,750)
    astronaut.addImage(astronautImg)
    astronaut.scale = 0.6

    parts = createSprite(550,25)
    parts.addImage(partsImg)
    parts.scale = 0.1
    parts.depth = astronaut.depth

    robot = createSprite(150,750)
    robot.addImage(robotImg)
    robot.scale = 0.5
    robot.depth = astronaut.depth

    gun = createSprite(astronaut.x + 165,astronaut.y - 70)
    gun.addImage(gunImg)
    gun.scale = 0.3

   alienGroup = new Group();
   kingGroup = new Group();
   scavengerGroup = new Group();
   sneakyGroup = new Group();
   guardGroup = new Group();
   partsGroup = new Group();

   health = 100
   partsCount = 0

   health.depth = gun.depth
   partsCount.depth = gun.depth
}

function draw() {
  background(0); 

  textSize(30)
  text("Health: "+ health, 650,30);
  text("Parts: "+ partsCount, 350,30);

  if(keyDown(UP_ARROW)){
    astronaut.y = astronaut.y - 12
    gun.y = gun.y - 12
  }

  if(keyDown(DOWN_ARROW)){
    astronaut.y = astronaut.y + 8
    gun.y = gun.y + 8
  }

  if(keyDown(LEFT_ARROW)){
    astronaut.x = astronaut.x - 7
    gun.x = gun.x - 7
  }
  if(keyDown(RIGHT_ARROW)){
    astronaut.x = astronaut.x + 7
    gun.x = gun.x + 7
  }

  if(partsGroup.isTouching(astronaut)){
    for(var i=0;i<partsGroup.length;i++){     
     if(partsGroup[i].isTouching(astronaut)){
          partsGroup[i].destroy()
          } 
    }
    partsCount = partsCount + 10
   }

  if(alienGroup.isTouching(gun)){
    for(var i=0;i<alienGroup.length;i++){     
     if(alienGroup[i].isTouching(gun)){
          alienGroup[i].destroy()
          } 
    }
    partsSpawn();
    parts2.scale = 0.05
    alien.velocityX = alien.velocityX - 0.5
   }

   if(guardGroup.isTouching(gun)){
    for(var i=0;i<guardGroup.length;i++){     
     if(guardGroup[i].isTouching(gun)){
          guardGroup[i].destroy()
          } 
    }
    partsSpawn();
    parts2.scale = 0.2
    guard.velocityX = guard.velocityX - 0.5
   }

   if(scavengerGroup.isTouching(gun)){
    for(var i=0;i<scavengerGroup.length;i++){     
     if(scavengerGroup[i].isTouching(gun)){
          scavengerGroup[i].destroy()
          } 
    }
    partsSpawn();
    parts2.scale = 0.1
    parts2.lifetime = parts2.lifetime + 45
    scavenger.velocityX = scavenger.velocityX + 0.5
   }

   if(kingGroup.isTouching(gun)){
    for(var i=0;i<kingGroup.length;i++){     
     if(kingGroup[i].isTouching(gun)){
          kingGroup[i].destroy()
          } 
    }
    partsSpawn();
    parts2.scale = 0.25
    parts2.lifetime = parts2.lifetime + 25
    king.velocityX = king.velocityX - 0.5
   }

   if(sneakyGroup.isTouching(gun)){
    for(var i=0;i<sneakyGroup.length;i++){     
     if(sneakyGroup[i].isTouching(gun)){
          sneakyGroup[i].destroy()
          } 
    }
    partsSpawn();
    parts2.scale = 0.15
    sneaky.velocityX = sneaky.velocityX + 0.5
    sneaky.velocityY = sneaky.velocityY + 0.5
   }
   
  if(alienGroup.isTouching(astronaut)){
    health = health - 10

    for(var i=0;i<alienGroup.length;i++){     
      if(alienGroup[i].isTouching(astronaut)){
           alienGroup[i].destroy()
           } 
     }
   }

   if(guardGroup.isTouching(astronaut)){
    health = health - 25

    for(var i=0;i<guardGroup.length;i++){     
      if(guardGroup[i].isTouching(astronaut)){
           guardGroup[i].destroy()
           } 
     }
   }

   if(scavengerGroup.isTouching(astronaut)){
    parts2.lifetime = parts2.lifetime - 10
    partsCount = partsCount - 30

    for(var i=0;i<scavengerGroup.length;i++){     
      if(scavengerGroup[i].isTouching(astronaut)){
           scavengerGroup[i].destroy()
           } 
     }
   }

   if(kingGroup.isTouching(astronaut)){
    health = health - 50
    parts2.lifetime = parts2.lifetime - 35
    partsCount = partsCount - 20

    for(var i=0;i<kingGroup.length;i++){     
      if(kingGroup[i].isTouching(astronaut)){
           kingGroup[i].destroy()
           } 
     }
   }

   if(sneakyGroup.isTouching(astronaut)){
    health = health - 5

    for(var i=0;i<sneakyGroup.length;i++){     
      if(sneakyGroup[i].isTouching(astronaut)){
           sneakyGroup[i].destroy()
           } 
     }
   }

   if(health === 0){
    textSize(150);
    fill("red")
    text("Game Over! You Lose!",250,500)
     astronaut.remove();
     gun.remove();
     mars.remove();
     parts.remove();
     partsGroup.remove();
     sneakyGroup.remove();
     kingGroup.remove();
     guardGroup.remove();
     scavengerGroup.remove();
     robot.remove();
     ship.remove();
     alienGroup.remove();
   }

   if(partsCount === 1000){
     textSize(85);
     fill("yellow");
     text("Congratulations! It's time to go home!",150,500);
     astronaut.remove();
     gun.remove();
     mars.remove();
     parts.remove();
     partsGroup.remove();
     sneakyGroup.remove();
     kingGroup.remove();
     guardGroup.remove();
     scavengerGroup.remove();
     robot.remove();
     alienGroup.remove();
   }

  alienSpawn();
  guardSpawn();
  kingSpawn();
  sneakySpawn();
  scavengerSpawn();

  drawSprites();
}

function partsSpawn(){
  parts2 = createSprite(robot.x + 100,robot.y + 150)
  parts2.addImage(parts2Img)
  parts2.scale = 0.1
  parts2.depth = astronaut.depth
 
  parts2.lifetime = 200
  partsGroup.add(parts2)
}

 function alienSpawn(){
 if(frameCount%150===0){
    alien = createSprite(random(1600,1650),random(450,750))
    alien.addImage(alienImg)
    alien.scale = 0.3
    alien.velocityX = - 1
    alien.depth = astronaut.depth
   
    alien.lifetime = 1000
    alienGroup.add(alien)
  }
}

 function kingSpawn(){
  if(frameCount%600===0){
     king = createSprite(random(1550,1800),random(450,750))
     king.addImage(kingImg)
     king.scale = 0.3
     king.velocityX = - 1
     king.depth = astronaut.depth
    
     king.lifetime = 1000
     kingGroup.add(king)
   }
}

 function guardSpawn(){
  if(frameCount%500===0){
     guard = createSprite(random(1700,1800),random(450,750))
     guard.addImage(guardImg)
     guard.scale = 0.35
     guard.velocityX = - 1
     guard.depth = astronaut.depth
    
     guard.lifetime = 1000
     guardGroup.add(guard)
   }
}

 function scavengerSpawn(){
  if(frameCount%1000===0){
     scavenger = createSprite(random(-1000,-900),random(600,750))
     scavenger.addImage(scavengerImg)
     scavenger.scale = 0.45
     scavenger.velocityX = 1
     scavenger.depth = astronaut.depth
    
     scavenger.lifetime = 2500
     scavengerGroup.add(scavenger)
   }
}

 function sneakySpawn(){
  if(frameCount%150===0){
     sneaky = createSprite(random(100,450),random(40,350))
     sneaky.addImage(sneakyImg)
     sneaky.scale = 0.3
     sneaky.velocityX = 1
     sneaky.velocityY = 1
     sneaky.depth = astronaut.depth
    
     sneaky.lifetime = 1000
     sneakyGroup.add(sneaky)
   }
}