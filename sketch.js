const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1, bob2, bob3, bob4, bob5, rope1, rope2, rope3, rope4, rope5, con
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	bob1 = Bodies.circle(430,350,25)
	World.add(world,bob1)
	bob2 = Bodies.circle(400,350,25)
	World.add(world,bob2)	
	bob3 = Bodies.circle(460,350,25)
	World.add(world,bob3)	
	bob4 = Bodies.circle(370,350,25)
	World.add(world,bob4)	
	bob5 = Bodies.circle(340,350,25)
	World.add(world,bob5)
	Engine.run(engine);
	var ball_opt = {isStatic: true}
	
	rope1 = new Rope(bob1, roof,-30,0,ball_opt)
	rope2 = new Rope(bob2, roof,-50,0,ball_opt)
	rope3 = new Rope(bob3, roof,-10,0,ball_opt)
	rope4 = new Rope(bob4, roof,-70,0,ball_opt)
	rope5 = new Rope(bob5, roof,-90,0,ball_opt)


  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
	rope1.display()
	rope2.display()
	rope3.display()
	rope4.display()
	rope5.display()

  
  //create ellipse shape for multiple bobs here
	ellipse(bob1.position.x, bob1.position.y,25,25)
	ellipse(bob2.position.x, bob2.position.y,25,25)
	ellipse(bob3.position.x, bob3.position.y,25,25)
	ellipse(bob4.position.x, bob4.position.y,25,25)
	ellipse(bob5.position.x, bob5.position.y,25,25)
	
	force()
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function force() {
	if (keyIsDown(UP_ARROW)){
		Matter.Body.applyForce(bob3,bob3.position,{x:-0.01,y:-0.01});
	}
}