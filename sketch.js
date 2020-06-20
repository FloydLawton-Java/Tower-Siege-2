const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block8;
var slingShot;

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
    //img= loadImage("polygon.jpg");
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;


    ground1 = new Ground(700,600,250,20);
    ground2 = new Ground(400, 400, 250, 15);
/*
    block1= new Block()
  */
 // first row
 block1= new Block(300, 175, 30, 40);
 block2= new Block(330, 175, 30, 40);
 block3= new Block(360, 175, 30, 40);
 block4= new Block(390, 175, 30, 40);
 block5= new Block(420, 175, 30, 40);
 block6= new Block(450, 175, 30, 40);
 block7= new Block(480, 175, 30, 40);
 // second row
  block8= new Block(330, 135, 30, 40);
  block9= new Block(360, 135, 30, 40);
  block10= new Block(390, 135, 30, 40);
  block11= new Block(420, 135, 30, 40);
  block12= new Block(450, 135, 30, 40);
// third row
  block13= new Block(360, 95, 30, 40);
  block14= new Block(390, 95, 30, 40);
  block15= new Block(420, 95, 30, 40);
// top
  block16= new Block(390, 55, 30, 40);
  // extra
  
  block1a= new Block(690, 355, 30, 40);

 block2a= new Block(660, 395, 30, 40);
 block3a= new Block(690, 395, 30, 40);
 block4a= new Block(720, 395, 30, 40);
 
 block5a= new Block(630, 435, 30, 40);
 block6a= new Block(660, 435, 30, 40);
 block7a= new Block(690, 435, 30, 40);
 block8a= new Block(720, 435, 30, 40);
 block9a= new Block(750, 435, 30, 40);

 polygon= new Ball(50, 400, 20);

   slingshot = new Slingshot(polygon.body,{x:200, y:200});
}

function draw(){
    background(0);
    ground1.display();
    ground2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    
    block1a.display();
    block2a.display();
    block3a.display();
    block4a.display();
    block5a.display();
    block6a.display();
    block7a.display();
    block8a.display();
    block9a.display();
    
   // block8.display();

   slingshot.display();
polygon.display();

 

    Engine.update(engine);
    strokeWeight(4);
    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
  if(keyCode === 32){
     // bird.trajectory=[];
      Matter.Body.setPosition(polygon.body, {x:200, y:200});
     slingshot.attach(polygon.body);
  }
}