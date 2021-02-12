const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
//preload the images here
backgroundImg = loadImage("images/GamingBackground.png");
}

function setup() {
createCanvas(900, 400);

engine=Engine.create();
world=engine.world;
//create bodies here
ground = new Ground(220,400,600,5);
superhero = new Superhero(400,3,100,100);
attach = new Throw(superhero.body,{x:100,y:465});
block1 = new Block(280,350,30,40);
block2 = new Block(310,350,30,40);
block3 = new Block(340,350,30,40);
block4 = new Block(370,350,30,40);
block5 = new Block(400,350,30,40);
block6 = new Block(430,350,30,40);
block7 = new Block(460,350,30,40);
block8 = new Block(490,315,30,40);
block9 = new Block(310,315,30,40);
block10 = new Block(340,315,30,40);
block11 = new Block(370,315,30,40);
block12 = new Block(400,315,30,40);
block13 = new Block(430,315,30,40);
block14 = new Block(460,315,30,40);
monster = new Monster(490,350,30,40);

Engine.run(engine);
}
function draw() {
rectMode(CENTER);
background("backgroundImg");

superhero.display();
ground.display();
stroke(15);
fill("red");
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
monster.display();
}

function mouseDragged(){
Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY});    
}

function mouseReleased(){
attach.fly();    
}