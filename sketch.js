const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygonImage,polygon;
var slingshot;
var box;
var score=0;

function preload() {
   polygonImage = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(600,400,1200,10);
    stand1=new Ground(390,300,250,10);
    stand2=new Ground(700,200,200,10);
    box1=new Box(300,275,30,40);
    box2=new Box(330,275,30,40);
    box3=new Box(360,275,30,40);
    box4=new Box(390,275,30,40);
    box5=new Box(420,275,30,40);
    box6=new Box(450,275,30,40);
    box7=new Box(480,275,30,40);

        box8=new Box(330,235,30,40);
        box9=new Box(360,235,30,40);
        box10=new Box(390,235,30,40);
        box11=new Box(410,235,30,40);
        box12=new Box(440,235,30,40);

        // box13=new Box(370,195,30,40);
            box14=new Box(360,195,30,40);
            box15=new Box(390,195,30,40);
            box16=new Box(410,195,30,40);



    box17=new Box(620,175,30,40);
    box18=new Box(650,175,30,40);  
    box19=new Box(680,175,30,40);
    box20=new Box(710,175,30,40);
    box21=new Box(735,175,30,40);
    box22=new Box(770,175,30,40); 
    //box23=new Box(800,175,30,40);
        
        box24=new Box(635,150,30,40);
        box25=new Box(665,150,30,40);
        box26=new Box(695,150,30,40);
        box27=new Box(715,150,30,40);
        box28=new Box(745,150,30,40); 
        
            box29=new Box(650,120,30,40);
            box30=new Box(680,120,30,40);
            box31=new Box(710,120,30,40); 
            box32=new Box(740,120,30,40);
        
    

 polygon=Bodies.circle(200,250,10);
 World.add(world,polygon);

 slingshot=new Slingshot(this.polygon,{x:150,y:200});


}

function draw(){
    background(1);
    Engine.update(engine);
    drawSprites();
    ground.display();
    stand1.display();
    stand2.display(); 
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
 //   box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
  //  box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    imageMode(CENTER);
    image(polygonImage,polygon.position.x,polygon.position.y,40,40)
    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
