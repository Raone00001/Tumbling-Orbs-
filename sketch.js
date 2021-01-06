var player, playerIMG;

var backgroundIMG;

var orbs, oIMG;
var orbGroup;

var darkOrbs, doIMG;
var doGroup;

var score = 0;
var goal = 3000;
var sc, mn, hr;

var border1, border2;

var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){

	backgroundIMG = loadImage("Images/BG.jpg");

	oIMG = loadImage("Images/Normal Energy Orb.png");
	doIMG = loadImage("Images/Dark Energy Orb.png");

	playerIMG = loadImage("Images/Player.png");
	
}

function setup() {
	createCanvas(1100, 600);

		player = createSprite(600, 550, 100, 10);
		player.addImage("player", playerIMG);
		player.scale = 0.3;

        border1 = createSprite(1080, 300, 2, 500);
        border1.shapeColor = "White";
        border2 = createSprite(20, 300, 2, 500);
		border2.shapeColor = "White";
		
		orbGroup = new Group();
		doGroup = new Group();

}


function draw() {
  background(backgroundIMG);

	sc = second();
	mn = minute();
	hr = hour();

	fill("white");
	textSize(25);
	textFont("Cinzel");
	text("Goal: " + goal, 10, 25);
	text("Score: " + score, 900, 590);
	fill(0);
	noStroke();
	text("Time: ", 10, 590);
	text("HR:" + hr, 83, 590);
	text("MN:" + mn, 160, 590);
	text("SC:" + sc, 244, 590);
	
	if (gameState === PLAY){

		spawnOrbs();
		spawnDarkOrbs();
    
		if (keyDown(LEFT_ARROW)){

			player.x = player.x-20;

		} else if (keyDown(RIGHT_ARROW)){

			player.x = player.x+20;

		}

		if (orbGroup.isTouching(player)){

			orbGroup.destroyEach();
			score = score+80;

		} else if (doGroup.isTouching(player)){

			gameState = END;

			//stroke("red");
			textSize(40);
			text("Game Over!", 550, 250);

			stroke("red");
			score = "Game Over";
			goal = 0;
			doGroup.destroyEach();
			player.destroy();
			orbGroup.destroyEach();

		}

		if (score >= 3000){

			gameState = END;

			textSize(40);
			text("You Win!", 550, 250);

			score = "You Win!";
			goal = 0;
			doGroup.destroyEach();
			player.destroy();
			orbGroup.destroyEach();

		}

	
	}
  
  	drawSprites();

}

function spawnOrbs(){

	if (frameCount % 3 === 0){

		orbs = createSprite(600, 0, 10, 10);
		orbs.x = Math.round(random(0,1100));
		orbs.addImage("orbs", oIMG);

		//orbs.debug = true;
		orbs.setCollider("rectangle", 0, 0, 20, 20);

		orbs.scale = 0.05;
		orbs.velocityY = (15 + 2*score/100);

		orbGroup.add(orbs);

	}

}

function spawnDarkOrbs(){

	if (frameCount % 90 === 0){

		darkOrbs = createSprite(600, 0, 10, 10);
		darkOrbs.x = Math.round(random(0,1100));
		darkOrbs.addImage("dark orbs", doIMG);

		//darkOrbs.debug = true;
		darkOrbs.setCollider("rectangle", 0, 0, 20, 20);

		darkOrbs.scale = 0.05;
		darkOrbs.velocityY = (15 + 2*score/100);

		doGroup.add(darkOrbs);

	}

}