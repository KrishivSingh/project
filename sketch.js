const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ball;
var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
   
    var option_ball ={
        restitution: 0.5 
    }

    ball = Bodies.circle(200,200,20,option_ball); 
    World.add(world,ball);


    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

     ellipseMode(RADIUS);
     ellipse(ball.position.x,ball.position.y,20,20);

}