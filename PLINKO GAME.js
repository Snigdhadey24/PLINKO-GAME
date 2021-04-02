const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var divisionHeight = 250;

var borderLeft, borderRight, borderUp, borderDown;

var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
  createCanvas(400,600);

  engine = Engine.create();
  world = engine.world;

  //top border
  borderUp = createSprite(200,5,400,10);
  borderUp.shapeColor = "red";

  //bottom border
  borderDown = createSprite(200,595,400,10);
  borderDown.shapeColor = "red";

  //left border
  borderLeft = createSprite(5,300,10,600);
  borderLeft.shapeColor = "red";

  //right border
  borderRight = createSprite(395,300,10,600);
  borderRight.shapeColor = "red";

  //ground
  ground1 = new Ground(200,587,400,10);

  pillar1 = new Ground(-7,300,10,600);
  pillar2 = new Ground(412,300,10,600);

  //Divisions
  for(var k = 0; k<=width; k = k + 79){

    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));

  }


  for(var j = 28; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,75, 10));
  }


  for (var j = 50; j <=width-10;j = j + 50){
    plinkos.push(new Plinko(j,260, 10));
  }

  
  for(var j = 28; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,200, 10));
  }


  for (var j = 50; j <=width-10;j = j + 50){
    plinkos.push(new Plinko(j,135, 10));
  }


  

}

function draw() {
  background(0,0,0);  

  canvas.style = "position:absolute; left: 50%; width: 400px; margin-left: -200px;";

  Engine.update(engine);

  for(var a = 0; a < particles.length; a++){
    particles[a].display();
  }

  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }

  for (var j = 0; j < plinkos.length; j++) {
     
    plinkos[j].display();
  }

  if(frameCount%30===0){
    particles.push(new Particle(random(10,390), -1, 10))
  }

  ground1.display();

  pillar1.display();
  pillar2.display();

  drawSprites();

  

}
