//---------MOVING SPRITE ASSIGNMENT----------\\

var gameScreen = document.getElementById("gameServer");
//transfers gamescreen var from html
var ctx = gameScreen.getContext('2d');


//------------BACKGROUND FUNCTION-------------\\
var backgroundImage = new Image();		//variable for background image
	
function drawBackground() {		//function that puts a background image in canvas
	//variables for background image
	if (level == -2){			//changes background based on level
		ctx.beginPath();
		ctx.fillStyle = "black";
		ctx.rect(0, 0, gameScreen.width, gameScreen.width);
		ctx.closePath();
		ctx.fill();
		writeTitle();
		numPlatform = 0;
		
		portalX = -100;
		userX = -100;

		if(spacePressed){
			level++;
			userX = gameScreen.width/2-70;		//sets user starting X coord
			userY = foregroundY;				//sets user starting Y coord
		}
	}//end of if stm
	if (level == -1){			//changes background based on level
		backgroundImage.src = 'D:\\VideoGameGraphics\\pixelSpace1.jpg';
		ctx.drawImage(backgroundImage, 0, 0, gameScreen.width, gameScreen.height);	
	}//end of if stm
	if (level == 0){			//changes background based on level
		backgroundImage.src = 'D:\\VideoGameGraphics\\planetLandscapeBackground2.png';
		ctx.drawImage(backgroundImage, 0, 0, gameScreen.width, gameScreen.height);	
			
	}//end of if stm
	else if(level == 1){		//changes background based on level
		backgroundImage.src = 'D:\\VideoGameGraphics\\planetLandscapeBackground3.png';
		ctx.drawImage(backgroundImage, 0, 0, gameScreen.width, gameScreen.height);	
	}//end of if stm
	else if(level == 2){		//changes background based on level
		backgroundImage.src = 'D:\\VideoGameGraphics\\planetLandscapeBackground4.png';
		ctx.drawImage(backgroundImage, 0, 0, gameScreen.width, gameScreen.height);	
	}//end of if stm
	else if(level == 3) {		//changes background based on level
		backgroundImage.src = 'D:\\VideoGameGraphics\\planetLandscapeBackground5Copy.png';
		ctx.drawImage(backgroundImage, 0, 0, gameScreen.width, gameScreen.height);	
	}//end of if stm
	else if(level == 4) {		//changes background based on level
		backgroundImage.src = 'D:\\VideoGameGraphics\\planetLandscapeBackground2.png';
		ctx.drawImage(backgroundImage, 0, 0, gameScreen.width, gameScreen.height);	
	}//end of if stm
	else if(level == 5) {
		backgroundImage.src = 'D:\\VideoGameGraphics\\planetLandscapeBackground4.png';
		ctx.drawImage(backgroundImage, 0, 0, gameScreen.width, gameScreen.height);	
	}
	else if(level == 6) {		//changes background based on level
		backgroundImage.src = 'D:\\VideoGameGraphics\\planetLandscapeBackgroundMc8.png';
		ctx.drawImage(backgroundImage, 0, 0, gameScreen.width, gameScreen.height);	
	}//end of if stm
	//draws the background image
}//end of function drawBackground()

var foregroundY = 430;		//variable for the ground y coord 


//---------VARIABLES FOR MOVEMENT AND KEYS----------\\

//variables that change depending on if the arrow keys are pushed down or up
var rightPressed = false;		//variable for right arrow key
var leftPressed = false;		//variable for left arrow key
var spacePressed = false;		//variable for space bar

//---------------VARIABLES----------------\\

//user variables
var userX = gameScreen.width/2-70;		//sets user starting X coord
var userY = foregroundY;				//sets user starting Y coord
var userWidth = 54.4;					//sets user width
var userHeight = 76.8;					//sets user height
var playerFrameX = 0;					//sets sprite frame x
var playerFrameY = 0;					//sets sprite frame y
var playerWidth = 32;					//variable to divide picture into grid
var playerHeight = 48;					//variable to divide picture into grid
var playerSpeed = 6;					//variable to set player variable
var maskOn = false;						//variable to control whether player mask on or not
var playerMove = false;					//variable that determines if the user has moved yet


//jumping variables
var jumpPower = -6;						//variable to set jump power for player
var gravityConstant = 0.2;				//variable to set gravity force
var gravityPower = 10;					//variable to set gravity power
var jumpVelocity = 0;					//variable to determine jump velocity
var jumpingTrue = false;				//variable that determines if player is jumping or not

//platform variables
var platformX = [];									//platform location X
var platformY = [];									//platform location Y
var platformWidth = [];								//determines platform width
var platformHeight = [20,20,20,20,20,20,20,20,20,20];		//determines platform height
var numPlatform = 4;								//variable for number of squares

//wall variables
var wallX = [];							//wall location x
var wallY = [];							//wall location y
var wallWidth = [];						//wall width
var wallHeight = [];					//wall height
var numWall = 0;						//variable for number of walls

//coin variables
var coinX = [];							//array to determine each coin's X
var coinY = [];							//array to determine each coin's Y
var numCoin = 5;						//variable for number of coins
var coinAlive = [];						//variable that determines if a coin has been collected or not
var coinFrameX = 0;						//variable for coin animation frame
var coinWidth = 53;						//sets the coin width in pixels
var coinHeight = 159;					//sets the coin height in pixels
var coinsCollected = 0;					//variable to keep track of how many coins have been collected/score

//portal variables
var portalX = 50;						//variable to determine portal X
var portalY = 23;						//variable to determine portal Y
var portalFrameX = 0;					//variable for portal animation
var portalWidth = 205;					//sets portal width in pixels
var portalHeight = 460;					//sets portal height in pixels

//space ship variables
var spaceShipX = -300;					//sets spaceship starting X coord
var spaceShipY = 50;					//sets spaceship starting Y coord

//variables for levels
var numLevel = 10;						//variable for number of levels
var level = -2;							//variable that keeps track of current level
var message = 0;						//variable for what message if any should be displayed on screen

//sound variables
var myCoinSound = new Audio('D:\\DEV\\Video Game Sound Effects\\coinCollection.wav');
var myJumpSound = new Audio('D:\\DEV\\Video Game Sound Effects\\quickJumpSound.wav');
var myPortalSound = new Audio('D:\\DEV\\Video Game Sound Effects\\portalSound.wav');
var myGameMusic = new Audio('D:\\DEV\\Video Game Sound Effects\\platformerMusic.mp3');

//Speedrun Timer Variables 
var milliseconds = 0;
var seconds = 0;
var minutes = 0;
//------------------INITIALIZATION FUNCTIONS-----------------\\

function initPlatform(){	  //initailizes platforms, assigns values to array for location
	if(level == 0){
		numPlatform = 4;
		platformX[0] = 200;
		platformY[0] = 350;
		platformX[1] = 600;
		platformY[1] = 430;
		platformX[2] = 500;
		platformY[2] = 250;
		platformX[3] = 30;
		platformY[3] = 150;
		platformWidth[0] = 200;
		platformWidth[1] = 250;
		platformWidth[2] = 300;
		platformWidth[3] = 350;
		portalX = 50;
		portalY = 23;
	}//end of if stm
	if(level == 1){
		numPlatform = 6;
		platformX[0] = 450;
		platformY[0] = 350;
		platformX[1] = 750;
		platformY[1] = 430;
		platformX[2] = 100;
		platformY[2] = 330;
		platformX[3] = 0;
		platformY[3] = 230;
		platformX[4] = 300;
		platformY[4] = 200;
		platformX[5] = 705;
		platformY[5] = 130;
		platformWidth[0] = 100;
		platformWidth[1] = 150;
		platformWidth[2] = 100;
		platformWidth[3] = 100;
		platformWidth[4] = 200;
		platformWidth[5] = 20;
		platformHeight[5] = 100;
		portalX = 800;
		portalY = 20;
	}//end of if stm
	if(level == 2){
		numPlatform = 6;
		platformX[0] = 200;
		platformY[0] = 350;
		platformX[1] = 300;
		platformY[1] = 430;
		platformX[2] = 600;
		platformY[2] = 300;
		platformX[3] = 100;
		platformY[3] = 250;
		platformX[4] = 250;
		platformY[4] = 160;
		platformX[5] = 580;
		platformY[5] = 80;
		platformWidth[0] = 100;
		platformWidth[1] = 200;
		platformWidth[2] = 230;
		platformWidth[3] = 100;
		platformWidth[4] = 100;
		platformWidth[5] = 100;
		platformHeight[0] = 20;
		platformHeight[1] = 20;
		platformHeight[2] = 20;
		platformHeight[3] = 20;
		platformHeight[4] = 20;
		platformHeight[5] = 20;
		portalX = 650;
		portalY = 390;
	}//end of if stm
	if(level == 3){
		numPlatform = 9;
		platformX[0] = 330;
		platformY[0] = 300;
		platformX[1] = 50;
		platformY[1] = 430;
		platformX[2] = 770;
		platformY[2] = 410;
		platformX[3] = 10;
		platformY[3] = 340;
		platformX[4] = 600;
		platformY[4] = 200;
		platformX[5] = 200;
		platformY[5] = 210;
		platformX[6] = 500;
		platformY[6] = 251;
		platformX[7] = 110;
		platformY[7] = 105;
		platformX[8] = 0;
		platformY[8] = 240;
		platformWidth[0] = 130;
		platformWidth[1] = 150;
		platformWidth[2] = 100;
		platformWidth[3] = 70;
		platformWidth[4] = 70;
		platformWidth[5] = 250;
		platformWidth[6] = 200;
		platformWidth[7] = 100;
		platformWidth[8] = 100;
		portalX = 540;
		portalY = 390;
	}//end of if stm
	if(level == 4){
		portalY = 6;
		portalX = 500;
		numPlatform = 9;
		platformWidth[0] = 100;
		platformWidth[1] = 100;
		platformWidth[2] = 100;
		platformWidth[3] = 250;
		platformWidth[4] = 100;
		platformWidth[5] = 100;
		platformWidth[6] = 50;
		platformWidth[7] = 100;
		platformWidth[8] = 100;
		platformWidth[9] = 100;
		platformX[0] = 700;
		platformY[0] = 400;
		platformX[1] = 750;
		platformY[1] = 300;
		platformX[2] = 800;
		platformY[2] = 200;
		platformX[3] = 450 ;
		platformY[3] = 100;
		platformX[4] = 300;
		platformY[4] = 290;
		platformX[5] = 0;
		platformY[5] = 410;
		platformX[6] = 0;
		platformY[6] = 320;
		platformX[7] = 100;
		platformY[7] = 199;
		platformX[8] = 0;
		platformY[8] = 99;
	}//end of if stm
	if(level == 5){
		numPlatform = 4;
		platformWidth[0] = 100;
		platformWidth[3] = 100;
		if(level == 5){
			//console.log(platformX[0]);
			platformX[0] = platformX[0] + 2;	
			if(platformX[0] == gameScreen.width+platformWidth[0]){
				platformX[0] = -100;
			}	
			platformX[3] = platformX[3] - 2;	
			if(platformX[3] == -platformWidth[0]){
				platformX[3] = gameScreen.width+platformWidth[3];
			}	
		}
		platformY[0] = 350;
		platformX[1] = 50;
		platformY[1] = 430;
		platformX[2] = 770;
		platformY[2] = 250;
		platformY[3] = 150;
		platformWidth[1] = 100;
		platformWidth[2] = 100;
		portalX = 10;
	}//end of if stm
	if(level == 6){
		numPlatform = 6;
		platformX[0] = 200;
		platformY[0] = 400;
		platformX[1] = 600;
		platformY[1] = 350;
		platformX[2] = 200;
		platformY[2] = 290;
		platformX[3] = 600;
		platformY[3] = 240;
		platformX[4] = 200;
		platformY[4] = 180;
		platformX[5] = 600;
		platformY[5] = 120;
		platformWidth[0] = 100;
		platformWidth[1] = 100;
		platformWidth[2] = 100;
		platformWidth[3] = 100;
		platformWidth[4] = 100;
		platformWidth[5] = 100;
		portalY = 10;
		portalX = 630;
	}//end of if stm
	if(level == 7){
		numPlatform = 0;
		numWall = 0;
		numCoin = 0;
		portalX = 1000
		ctx.beginPath();
		ctx.fillStyle = "black";
		ctx.rect(0, 0, gameScreen.width, gameScreen.width);
		ctx.closePath();
		ctx.fill();
		writeScore();//deals with end sceen
	}//end of if stm
		
	//platformX[] = ;
	//platformY[] = ;
}//end of function initPlatform()

function initWall(){	//initializes wall locations, size, and proportions
	if(level == 2){
		numWall = 2;
		wallX[0] = 600;
		wallY[0] = 320;
		wallHeight[0] = 190;
		wallWidth[0] = 30;
		wallX[1] = 800;
		wallY[1] = 150;
		wallHeight[1] = 150;
		wallWidth[1] = 30;
	}//end of if stm
	else if(level == 3){
		numWall = 6;
		wallX[0] = 420;
		wallY[0] = 80;
		wallHeight[0] = 130;
		wallWidth[0] = 30;
		wallX[1] = 300;
		wallY[1] = 230;
		wallHeight[1] = 190;
		wallWidth[1] = 30;
		wallX[2] = 800;
		wallY[2] = 390;
		wallHeight[2] = 120;
		wallWidth[2] = 30;
		wallX[3] = 700;
		wallY[3] = 252;
		wallHeight[3] = 120;
		wallWidth[3] = 30;
		wallX[4] = 600;
		wallY[4] = 420;
		wallHeight[4] = 80;
		wallWidth[4] = 30;
		wallX[5] = 500;
		wallY[5] = 270;
		wallHeight[5] = 230;
		wallWidth[5] = 30;
	}//end of if stm
	else if(level == 4){
		numWall = 2;
		wallX[0] = 600;
		wallY[0] = 0;
		wallHeight[0] = 100;
		wallWidth[0] = 30;
		wallX[1] = 300;
		wallY[1] = 310;
		wallHeight[1] = 200;
		wallWidth[1] = 30;
	}//end of if stm
	else{
		numWall = 0;
	}//end of if stm
}//end of functiom initWall()

function levelCoin(){			//determines coin locations based on current level
	if(level == 0){
		coinX[0] = 550;
		coinY[0] = 160;
		coinX[1] = 100;
		coinY[1] = 200;
		coinX[2] = 300;
		coinY[2] = 400;
		coinX[3] = 700;
		coinY[3] = 350;
		coinX[4] = 200;
		coinY[4] = 20;		
	}//end of if stm
	if(level == 1){
		coinX[0] = 800;
		coinY[0] = 330;
		coinX[1] = 20;
		coinY[1] = 110;
		coinX[2] = 290;
		coinY[2] = 220;
		coinX[3] = 380;
		coinY[3] = 100;
		coinX[4] = 700;
		coinY[4] = 20;
	}//end of if stm
	if(level == 2){
		numCoin = 5;
		coinX[0] = 700;
		coinY[0] = 200;
		coinX[1] = 230;
		coinY[1] = 250;
		coinX[2] = 100;
		coinY[2] = 400;
		coinX[3] = 800;
		coinY[3] = 400;
		coinX[4] = 120;
		coinY[4] = 150;
	}//end of if stm
	if(level == 3){
		numCoin = 5;
		coinX[0] = 830;
		coinY[0] = 400;
		coinX[1] = 350;
		coinY[1] = 200;
		coinX[2] = 100;
		coinY[2] = 320;
		coinX[3] = 700;
		coinY[3] = 400;
		coinX[4] = 120;
		coinY[4] = 150;
	}//end of if stm
	if(level == 4){
		numCoin = 5;
		coinX[0] = 830;
		coinY[0] = 400;
		coinX[1] = 20;
		coinY[1] = 400;
		coinX[2] = 650;
		coinY[2] = 10;
		coinX[3] = 330;
		coinY[3] = 200;
		coinX[4] = 150;
		coinY[4] = 100;
	}//end of if stm
	if(level == 5){
		numCoin = 5;
		coinX[0] = 100;
		coinY[0] = 350;
		coinX[1] = 750;
		coinY[1] = 400;
		coinX[2] = 170;
		coinY[2] = 0;
		coinX[3] = 800;
		coinY[3] = 160;
		coinX[4] = 300;
		coinY[4] = 220;
	}//end of if stm
	if(level == 6){
		numCoin = 5;
		coinX[0] = 240;
		coinY[0] = 300;
		coinX[1] = 240;
		coinY[1] = 200;
		coinX[2] = 240;
		coinY[2] = 100;
		coinX[3] = 640;
		coinY[3] = 250;
		coinX[4] = 640;
		coinY[4] = 140;
	}//end of if stm
/*
coinX[] = ;
coinY[] = ;
*/
}//end of function levelCoin()

function initCoin(){			//resets coin life on a new level
	for(var i = 0; i < numCoin; i++){
		coinAlive[i] = true;
	}//end of for loop
}//end of function initCoin()

function score(){	//used to display coins collected
	var scare = document.getElementById("scoreBoard").innerHTML = "SCORE: " +coinsCollected;
}//end of function score()



//----------------DRAW FUNCTIONS------------------\\

function writeScore() {	//function to write score on screen at the end of the game
	ctx.font = "30px Arial";
	ctx.fillStyle = "white";
	ctx.textAlign = "center";
	ctx.fillText("SCORE- "+ coinsCollected, gameScreen.width/2, gameScreen.height/2);
	ctx.fillText("YOU WIN!", gameScreen.width/2, gameScreen.height/2-50);
	if(seconds < 10){
		ctx.fillText("Time("+minutes+":"+"0"+seconds+":"+milliseconds+")", gameScreen.width/2, gameScreen.height/2-100);
	}
	else{
		ctx.fillText("Time("+minutes+":"+seconds+":"+milliseconds+")", gameScreen.width/2, gameScreen.height/2-100);
	}
	
}//end of function writeScore()

function writeTitle() {	//function that rights the title on the screen
	ctx.font = "50px Arial";
	ctx.fillStyle = "white";
	ctx.textAlign = "center";
	ctx.fillText("WELCOME TO GRATE VIDIO GAYM", gameScreen.width/2, gameScreen.height/2-50);
	ctx.font = "30px Visitor";
	ctx.fillStyle = "green";
	ctx.textAlign = "center";
	ctx.fillText("PRESS SPACE TO START", gameScreen.width/2, gameScreen.height/2+30);
}//end of function writeTitle()

//draws the user
function drawUser() {					//draws the player
	var playerImage = new Image();		//variable for player image
	//defines direct path to image
	if(!(level == 7)){
		if(maskOn){
			playerImage.src = 'D:\\VideoGameGraphics\\starlord_mask.png';
			myGameMusic.play();
		}//end of if stm
		else{
			playerImage.src = 'D:\\VideoGameGraphics\\starlordSpriteSheet.png';
			myGameMusic.pause();
		}//end of if stm
	}
	
	var dx = playerFrameX * playerWidth;						//sets picture fragment x
	var dy = playerFrameY * playerHeight;						//sets picture fragment y]
	//draws player
	if(!(level == -1)){
		ctx.drawImage(playerImage, dx, dy, playerWidth, playerHeight, userX, userY, userWidth, userHeight);
	}//end of if stm
}//end function drawUser();

function drawSpeechBubble(){						//draws the speech bubble
	if(level == 0 && !(playerMove)){
		var speechBubbleImage = new Image();		//variable for speech bubble image
		//defines direct path to image
		speechBubbleImage.src = 'D:\\VideoGameGraphics\\speechBubble2.png';
		ctx.drawImage(speechBubbleImage, 200, 350, 700, 90);
	}//end of if stm
}//end of function drawSpeechBubble()

function drawSpaceShip(){							//function to draw spaceship
	var spaceShipImage = new Image();				//variable for spaceship image
	//defines direct path to image
	spaceShipImage.src = 'D:\\VideoGameGraphics\\Milano.png';
	var speechBubbleImage = new Image();			//variable for speech bubble on level -1
	//defines direct path to image
	speechBubbleImage.src = 'D:\\VideoGameGraphics\\mayday2.png';
	if(level == -1){
		ctx.drawImage(spaceShipImage, spaceShipX, spaceShipY, 200, 200)  
		if(spaceShipX <1000){
			spaceShipX = spaceShipX +7;
		}//end of if stm
		if(spaceShipX < 900 && spaceShipX > 50){
			ctx.drawImage(speechBubbleImage, 200, 100, 700, 90);
		}//end of if stm
		if(spaceShipY <700){
			spaceShipY = spaceShipY + 3;
		}//end of if stm
		else if (spaceShipY> 700){
			if(level == -1){
				level = 0;	

			}//end of if stm
			message = 0;
		}//end of if stm
	}//end of if stm
}//end of function drawSpaceShip

function drawPlatform(){				//function to draw platforms
	for(var i = 0;i < numPlatform; i++){
		ctx.beginPath();
		ctx.fillStyle = "brown";
		ctx.rect(platformX[i], platformY[i], platformWidth[i], platformHeight[i]);
		ctx.closePath();
		ctx.fill();
		ctx.strokeStyle = "black";
		ctx.lineWidth = 1;
		ctx.stroke();
	}//end for
}//end function drawPlatform()

function drawWall(){				//function to draw platforms
	for(var i = 0;i < numWall; i++){
		ctx.beginPath();
		ctx.fillStyle = "gray";
		ctx.rect(wallX[i], wallY[i], wallWidth[i], wallHeight[i]);
		ctx.closePath();
		ctx.fill();
		ctx.strokeStyle = "black";
		ctx.lineWidth = 1;
		ctx.stroke();
	}//end for
}//end function drawPlatform()

function drawCoin() {					//function to draw coins
	var coinImage = new Image();		//variable for coin image
	coinImage.src = 'D:\\VideoGameGraphics\\coinSprite2.png';
	var dx = coinFrameX * coinWidth;
	var dy = coinWidth - 157;	
	for(var i = 0; i < numCoin; i++){
		if(coinAlive[i]){
			ctx.drawImage(coinImage, dx, dy, coinWidth, coinHeight, coinX[i], coinY[i], 30, 60);	
		}//end of if stm
	}//end of for loop
}//end of funtion drawCoin()

function drawPortal() {					//function to draw portal
	var portalImage = new Image();		//variable for portal image
	portalImage.src = 'D:\\VideoGameGraphics\\portal2.png';
	var dx = portalFrameX * portalWidth;
	var dy = portalHeight - 485;
	if(!(level == -1)){
		ctx.drawImage(portalImage, dx, dy, portalWidth, portalHeight, portalX, portalY, 50, 100);
	}//end of if stm
}//end of function drawPortal()

function updateSprite(){				//function to update player sprite animation
	if(rightPressed || leftPressed){
	playerFrameX++;	
		if(playerFrameX == 4){
			playerFrameX = 0;
		}//end if stm
	}//end if stm
	else{
		playerFrameX = 0;
	}//end if stm
}//end of function updateSprite()

function updateObjects(){				//function to update object sprite animation
	coinFrameX++;
	if(coinFrameX == 6){
		coinFrameX = 0;
	}//end of if stm//end of if stm
	portalFrameX++;
	if(portalFrameX == 4){
		portalFrameX = 0;
	}//end of if stm
}//end of function updateObjects()

//-----------DOCUMENT LISTENERS AND KEY FUNCTIONS-----------------\\

//1st argument identifies what event is being listened for
//2nd argument identifies function to call when event is triggered
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

//function for when user presses down key
function keyDownHandler(e){		//handles all keys when pressed down
	if(e.key == "Right" || e.key == "ArrowRight"){
		rightPressed = true;
		playerFrameY = 2;
		playerMove = true;
	}//end of if stm
	else if(e.key == "Left" || e.key == "ArrowLeft"){
		leftPressed = true;
		playerFrameY = 1;
		playerMove = true;
	}//end of else if stm
	
	else if (e.key == " " || e.key == "SpaceBar") {
       spacePressed = true;
       playerMove = true;

	}//end of else if stm
	if(e.key == "d" || e.key == "d"){
		rightPressed = true;
		playerFrameY = 2;
		playerMove = true;
	}//end of if stm
	else if(e.key == "a" || e.key == "a"){
		leftPressed = true;
		playerFrameY = 1;
		playerMove = true;
	}//end of else if stm
	
	else if (e.key == "e" || e.key == "e") {
       if(maskOn){
       	maskOn = false;
       }
       else {
       	maskOn = true;
       }
	}//end of else if stm
}//end of function keyDownHandler()

//function to respond to when the arrow keys are up
function keyUpHandler(e){		//handles all keys when unpressed
	if(e.key == "Right" || e.key == "ArrowRight"){
		rightPressed = false;
		playerFrameY = 0;
	}//end of if stm
	else if(e.key == "Left" || e.key == "ArrowLeft"){
		leftPressed = false;
		playerFrameY = 0;
	}//end of else if stm
	else if (e.key == " " || e.key == "SpaceBar") {
    	spacePressed = false;
	}//end of else if stm
	if(e.key == "d" || e.key == "d"){
		rightPressed = false;
		playerFrameY = 0;
	}//end of if stm
	else if(e.key == "a" || e.key == "a"){
		leftPressed = false;
		playerFrameY = 0;
	}//end of else if stm
}//end of function keyUpHandler()

//---------FUNCTIONS TO CHANGE USER LOCATION---------\\
var deltaY = 0;

//changes userX
function deltaX(){		//changes user location X
	if(rightPressed && userX < gameScreen.width-48){
		userX=userX+playerSpeed;
	}//end of if stm
	else if(leftPressed && userX>-8){
		userX=userX-playerSpeed;
	}//end of if stm

}//end of function deltaX()
//changes userY

function checkJump() {
	if (spacePressed == true && jumpingTrue == false) {
		jumpingTrue = true;
		jumpVelocity = jumpPower;
		myJumpSound.play();
	}
	if (jumpingTrue == true) {
		deltaY = jumpVelocity;
		userY = userY + deltaY;

	}

}

function onSurface() {
	var hitboxBottom = userY + userHeight/16;

	if (hitboxBottom >= foregroundY) {
		touchingFloorTrue = true;
		jumpingTrue = false;
	}
}

function doGravity() {
	
	if (jumpingTrue == true) {
		jumpVelocity = jumpVelocity + gravityConstant;

	}
	else {
		gravityPower = gravityPower + gravityConstant;
		if (onPlatform || touchingFloorTrue) {
			gravityPower = 0;
		}
		else if(userY<=350 && !(onPlatform)){
			userY = userY + gravityPower;
		}
	}
}
var onPlatform = false;
function collide() {
	var conditionsMet = false;
	for(var j = 0; j < numPlatform; j++){
		//checks for collision for each square
		
		if(userX >= platformX[j]-userWidth/2 && (userX <= (platformX[j]+ platformWidth[j]-userWidth/2)) &&
			userY + userHeight>=platformY[j] && (userY+userHeight+1 <= (platformY[j]+platformHeight[j]))) {
				jumpingTrue = false;
				onPlatform = true;
				userY = platformY[j] - (userHeight-3);
				conditionsMet = true;
				j = numPlatform;

		}//end of if
		

		else if(userX <= platformX[j]-userWidth+25 || (userX >= (platformX[j]+ platformWidth[j]-userWidth+25))){
			if(userY == platformY[j] - (userHeight-3)){
				conditionsMet = false;
				jumpingTrue = true;
				j = numPlatform;
			}
		}//end of if
		else if(!(jumpingTrue)&& userY< foregroundY&&!(onPlatform)){
			onPlatform = false;
			userY = foregroundY;
		}
		
	}//end of for loop
	
	for(var i=0; i<numCoin; i++){
		//checks for collision for each coin
		
		if(coinAlive[i]){
			if( (userX >= coinX[i]-30) && (userX <= coinX[i]+coinWidth-20)) {
				if( (userY >= coinY[i]-30) && (userY <= coinY[i]+coinWidth-20)){
					coinAlive[i] = false;
					coinsCollected++;
					myCoinSound.play();
				}//end of if
			}//end of if
		}//end of if
	}//end of for loop
	if((userX >= portalX) && (userX <= portalX+50)) {
		if( (userY >= portalY) && (userY <= portalY+100)){
			myPortalSound.play();
			level++;
			initCoin();
			userX = 350;
			userY = foregroundY;	
			if(level == 5){
				platformX[0] = -100;
				platformX[3] = gameScreen.width+100;
				userX = 600;
			}
		}//end of if
	}//end of if
	for(var l = 0; l < numWall; l++){

		if((userX + userWidth-5 >= wallX[l] && userY+userHeight > wallY[l])&&
		userX <= wallX[l]-userWidth/2 && userY < wallY[l]+wallHeight[l]){
			rightPressed = false;
		}
		else if((userX <= wallX[l]+wallWidth[l] && userY+userHeight > wallY[l])&&
		userX >= wallX[l] && userY < wallY[l]+wallHeight[l]){
			console.log("true");
			leftPressed = false;
		}
	if(userX+userWidth/2 >= wallX[l] && userY < wallY[l] + wallHeight[l] && 
			userX + userWidth+5 <= wallX[l]+userWidth && userY >= wallY[l]-userHeight){
			console.log("on wall");
			jumpingTrue = false;
			onPlatform = true;
			userY = wallY[l]-userHeight+3;
		}
		else if(userX <= wallX[l]-userWidth+25 || (userX >= (wallX[l]+ wallWidth[l]-userWidth+25))){
			if(userY == wallY[l] - (userHeight-3)){
				conditionsMet = false;
				jumpingTrue = true;
				l = numWall;
			}
		}
		
	}
}//end of function

function speedrunTimer(){
	
	var seco0 = "0";
	if(-1<level && level <7){
		milliseconds= milliseconds+5;
	}
	if(milliseconds == 1000){
		milliseconds = 0;
		seconds++;
	}
	if(seconds == 60){
		seconds = 0;
		minutes++;
	}

	if(seconds < 10){
		document.getElementById("Timer").innerHTML = "Time("+minutes+":"+"0"+seconds+":"+milliseconds+")";
	}
	else if(seconds >= 10){
		document.getElementById("Timer").innerHTML = "Time("+minutes+":"+seconds+":"+milliseconds+")";
	}
}



//----------------GAME LOOP-----------------\\

function gameLoop() {
	//clears the screen
	ctx.clearRect(0,0,gameScreen.width, gameScreen.height)

	initPlatform();
	initWall();
	levelCoin();
	
	//changes the x
	collide();
	deltaX();
	onSurface();
	
	//checks if spaceBar is pressed
	checkJump();
	score();	
	//function to control gravity
	doGravity();
	//draws background
	drawBackground();
	//controls platforms
	drawPlatform();
	drawWall();
	drawPortal();
	drawCoin();
	//draws the user
	drawUser();
	drawSpaceShip();
	drawSpeechBubble();	
	//repeats gameLoop
	requestAnimationFrame(gameLoop);
}//end of function

//initPlatform();
initWall();
initCoin();
//initializes gameLoop()
gameLoop();

window.onload = setInterval(updateSprite, 60);

window.onload = setInterval(updateObjects, 120);
	
window.onload = setInterval(speedrunTimer, 1);