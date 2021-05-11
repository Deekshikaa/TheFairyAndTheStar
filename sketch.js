var starImg,bgImg;
var star, starBody;
var fairy, fairyImage;
var music;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImage = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png");
	music =loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	music.play();

	fairy = createSprite(150, 550, 50, 50);
	fairy.addAnimation("fairy", fairyImage);
	fairy.scale = 0.3;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);
  
  keyPressed();
  if(starBody.position.y > 510 && star.y > 510){
	Matter.Body.setStatic(starBody, true);
  }

  drawSprites();

}

function keyPressed() {

	
	if (keyDown("left")){
		fairy.x = fairy.x-2
	}
	
	if (keyDown("right")){
		fairy.x = fairy.x+2;
	}
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
}
