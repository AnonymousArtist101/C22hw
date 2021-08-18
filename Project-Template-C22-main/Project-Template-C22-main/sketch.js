const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball1, ball2, ball3, ball4;
var con, con2;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	ellipseMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var ball_options={
		restitution: .5
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	ball1 = Bodies.circle(300, 250, 50, ball_options);
	World.add(world, ball1);

	ball2 = Bodies.circle(350, 250, 50, ball_options);
	World.add(world, ball2);

	ball3 = Bodies.circle(400, 250, 50, ball_options);
	World.add(world, ball3);

	ball4 = Bodies.circle(400, 250, 50, ball_options);
	World.add(world, ball4);

	con = Matter.Constraint.create({
		bodyA:ball1,
		pointA:{x:0, y:0},
		bodyB:roof,
		pointB:{x:0,y:0},
		length:250,
		stiffness:0.1
});
	World.add(world,con);

	con2 = Matter.Constraint.create({
		bodyA:ball2,
		pointA:{x:0, y:0},
		bodyB:roof,
		pointB:{x:0,y:0},
		length:250,
		stiffness:0.1
});
	World.add(world,con2);

	Engine.run(engine);

	con3 = Matter.Constraint.create({
		bodyA:ball3,
		pointA:{x:0, y:0},
		bodyB:roof,
		pointB:{x:0,y:0},
		length:250,
		stiffness:0.1
});
	World.add(world,con3);

	con4 = Matter.Constraint.create({
		bodyA:ball4,
		pointA:{x:0, y:0},
		bodyB:roof,
		pointB:{x:0,y:0},
		length:250,
		stiffness:0.1
});
	World.add(world,con4);

	Engine.run(engine);

	Engine.run(engine);


	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);
  ellipse(ball1.position.x, ball1.position.y, 50, 50);
  ellipse(ball2.position.x, ball2.position.y, 50, 50);
  ellipse(ball3.position.x, ball3.position.y, 50, 50);
  ellipse(ball4.position.x, ball4.position.y, 50, 50);
  
  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed()
{
  if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(ball1,{x:0,y:0},{x:-0.7 ,y:0});
    }
}
