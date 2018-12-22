var play = 0;
var death;
var speed_div=1;
var isDead = false;
var start, respawn, foodCollide, info, back;
var score = 0;
var newscore=0;
var selected=false;
var food, player,monster,monster2;
food=new Foods(0,0,10,10,"ellipse","black");
monster= new Players(-20,-20,35,40,"ellipse","red",1);
player= new Players(300,200,20,20,"circle","orange",20);
monster2=new Players(10,10,45,30,"ellipse","pink",3);

var resetPos = function() {
	player.y = 200;
	player.x = 300;
	monster.x = -20;
    monster.y = -29;
    monster2.x = 20;
	monster2.y = 20;
	food.x = random(10, 990);
	food.y = random(10, 690);
	player.Calspeed = 20;
    monster.Calspeed = 1;
    monster2.CalSpeed=3;
}


function mousePressed() {
	start = collidePointRect(mouseX, mouseY,450, 240, 200, 100)
	if (play === 0 && start === true) {
		play = 1;

	}
	respawn = collidePointRect(mouseX, mouseY, 340, 270, 220, 70);
	if (play === 2 && respawn === true) {
		play = 1;
		score = 0;

	}
	info = collidePointRect(mouseX, mouseY, 840, 20, 80, 80);
	if (play === 0 && info === true) {
		play = 3;
	
	}
	back = collidePointRect(mouseX, mouseY,800, 600, 140, 80);
	if (play === 3 && back === true) {
		play = 0;
	}
	
}

function setup() {
	createCanvas(1000, 700);
	food.x = random(10, 990);
	food.y = random(10, 690);
}

function draw() {
	background(255);
	stroke(100);
	strokeWeight(10);
    fill(255);

    rect(0, 0, 1000, 700);
    
    
      //this is what happens when the player and the dot of death hit eachother
	if (isDead === true) {
		play = 2;
		isDead = false;
		resetPos(); 
	}

	if (play === 1 && selected===true) {
		fill("orange");
		strokeWeight(1);
        
		//keeps it's X equal with mouse X
		for (var i = 0; i < player.speed; i++) {
			//first thing checks to see if the dot dies
            death = collideCircleCircle(monster.x, monster.y, 40, player.x, player.y, 20) || collideCircleCircle(monster2.x, monster2.y, 40, player.x, player.y, 20);
			if (death === true) {
				isDead = true;
			}

			// this is some stuff about the dot.
			food.draw();

			// if the player hits the food...
			foodCollide = collideCircleCircle(player.x, player.y, 20, food.x, food.y, 10);
			if (foodCollide === true) {
				food.x = random(10, 990);
				food.y = random(10, 690);
                score += 1;
                 
				
			}
			
			player.move(mouseX,mouseY);
		}

		fill("orange");
		textSize(30);
        text("Score: " + score, 10, 30);
        player.draw();
		//the evil dot... moves the monster
		for (var q = 0; q < monster.speed; q++) {	
            monster.move(player.x,player.y);}
        for (var q = 0; q < monster2.speed; q++) {
            monster2.move(player.x,player.y);
            


		}
		strokeWeight(4);
        stroke(163, 31, 31);
        monster.draw();
        monster2.draw();
        
		
	}
        
	//---------------------------------------------------------------------------
	
        if (play === 0 && selected===true) {
            fill(66, 244, 95);
            strokeWeight(1);
            noStroke();
            rect(450, 240, 200, 100);
            stroke(0);
            fill(0);
            textSize(75);
            text("Play!", 450, 300);
            textSize(30);
            //text("Info: Keep your mouse inside of the box! \nRun away from the monster (The red dot).", 10, 30);
            text("Coded By Adin Jura! 			                           										 v[1.9]", 10, 650);
            //the info box
            strokeWeight(5);
            fill(170);
            rect(840, 20, 80, 80);
            textSize(80);
            text("?", 850, 87);
            
        }
            
        if (play === 2) {
            textSize(50);
            strokeWeight(3);
            fill('red');
            text("U is ded... ", 330, 250);
            //restart button..
            fill(7, 186, 61);
            rect(330, 270, 220, 70);
            fill("blue");
            textSize(50);
            text("Restart.", 340, 320);
            
            //shows how many points that you got
            fill("black");
            textSize(30);
            noStroke();
            text("You got: " + score + " point(s)", 330, 400)
    
        }
        
        if (play === 3) {
            textSize(50);
            text("Instructions:", 230, 60);
            //the text below...
            textSize(20);
            noStroke();
            fill('black');
            text("You are the orange dot and you need to avoid the evil red dot. \nTo do this you need to move your mouse, but don't go too fast. \nCollect the rainbow dots to earn points, but the more points that \nyou have the faster that the game will let you move and the \nfaster that the evil dot will move.", 30, 100);
            //the back button
            stroke(0);
            strokeWeight(5);
            fill(172);
            rect(800, 600, 140, 80);
            noStroke();
            fill(0);
            textSize(55);
            text("Back", 810, 645);
        }
        player.CalSpeed(speed_div);
        monster.CalSpeed(speed_div); 
        monster2.CalSpeed(speed_div); 
        
        console.log("to speed to player eiani "+ player.speed);

    }
    //this will set the speed of the dot and the player related to the points
   
document.addEventListener("DOMContentLoaded", function(){
   var L1 = document.getElementById("Level1");
    function Game1(){
         speed_div=5;
         selected=true;

    }
    L1.addEventListener("click",Game1);
    var L2=document.getElementById("Level2");
    function Game2(){
        speed_div=3;
        monster.shape="rectangle";
        selected=true;
        
    }
     L2.addEventListener("click",Game2);

    var cf1 = document.getElementById("level1_form");

    cf1.addEventListener("submit", function (event){
    event.preventDefault()});

    var cf2 = document.getElementById("level2_form");

    cf2.addEventListener("submit", function (event){
    event.preventDefault()});

});