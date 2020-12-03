const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var a;
var circles=[];
function setup() {
  createCanvas(800,800);
  stroke(255)
  
  obj1 = new Ground(200,200,30,30);
  ground = new Ground(700,400,800,30);

  box1 = new Box(330,235,30,40)
  box2 = new Box(360,235,30,40)
  box3 = new Box(390,235,30,40)
  box4 = new Box(420,235,30,40)
  box5 = new Box(450,235,30,40)
  box6 = new Box(360,195,30,40)
  box7 = new Box(390,195,30,40)
  box8 = new Box(420,195,30,40)
  box9 = new Box(390,155,30,40)

  polygon = Bodies.circle(50,200,20)
  imageMode(CENTRE)
  image("polygon.png",polygon.position.x,polygon.position.y,40,40);
  World.add(world,polygon)
  
   
  slingshot = new SlingShot(this.polygon,{x:100,y:200})

  a=height;
  circles.push(width/2)
}

function draw() {

  background(0);  
  
  
  a=a-1;

 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}

 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingShot.attach(this.polygon);
  }
}
