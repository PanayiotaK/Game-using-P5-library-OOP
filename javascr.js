var play = 0;
var death;
var isDead = false;
var start, respawn, foodCollide, info, back;
var score = 0;
var newscore=0;

class Foods{
    constructor(x,y,h,w,sh,colour){
        this.x=x;
        this.y=y;
        this.height=h;
        this.width=w;
		this.shape=sh;
		this.colour=colour;
		
    }
    
    draw(){
	
        if(this.shape=="ellipse" || this.shape== "circle" ){
           fill(this.colour);
		    strokeWeight(1);
            ellipse(this.x,this.y,this.width,this.height);
          
        }
        else if(this.shape=="rectangle"|| this.shape=="square"){
			fill(this.colour);
            rect(this.x,this.y, this.width,this.height);
        }
        else if(this.shape=="flower"){
			fill(this.colour);
            translate(this.x,this.y);
         }
	}

	
}


class Players extends Foods{
    constructor(x,y,h,w,sh,colour,sp){
		super(x,y,h,w,sh,colour);
		this.Startspeed=sp;
		this.speed=sp;     
}
    get CalSpeed(){
		this.speed=this.Startspeed+score /4;
	    return this.speed;
       }
    set CalSpeed(Newspeed){
		this.speed=Newspeed;	
    }
   
}

food=new Foods(0,0,10,10,"ellipse","black");
monster= new Players(-20,-20,35,40,"ellipse","red",1);
player= new Players(300,200,20,20,"circle","orange",20);

var resetPos = function() {
	player.y = 200;
	player.x = 300;
	monster.x = -20;
	monster.y = -29;
	food.x = random(10, 990);
	food.y = random(10, 690);
	player.Calspeed = 20;
	monster.Calspeed = 1;
}

//----------------------------------------------

function mousePressed() {
	start = collidePointRect(mouseX, mouseY,450, 240, 200, 100)
	if (play === 0 && start === true) {
		play = 1;

	}
	respawn = collidePointRect(mouseX, mouseY, 330, 270, 220, 70);
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

//-----------------------------------------------

function draw() {
	background(255);
	stroke(0);
	strokeWeight(10);
	fill(255);
	rect(0, 0, 1000, 700);
	//this will set the speed of the dot and the player related to the points
	monster.CalSpeed;
    // console.log("to speed tou monster einai "+monster.speed);
	player.CalSpeed;
	//console.log("to speed tou player einai " +player.speed);
    
	
	//this is what happens when the player and the dot of death hit eachother
	if (isDead === true) {
		play = 2;
		isDead = false;
		resetPos(); 
	}

	if (play === 1) {
		fill("orange");
		strokeWeight(1);
        
		//keeps it's X equal with mouse X
		for (var i = 0; i < player.speed; i++) {
			//first thing checks to see if the dot dies
			death = collideCircleCircle(monster.x, monster.y, 40, player.x, player.y, 20);
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
			
			//moves the player

			if (player.x > mouseX) {
				player.x -= 1
			}
			if (player.x < mouseX) {
				player.x += 1
			}

			//keeps it's Y equal with mouse Y
			if (player.y > mouseY) {
				player.y -= 1
			}
			if (player.y < mouseY) {
				player.y += 1
			}
		}

		fill("orange");
		textSize(30);
        text("Score: " + score, 10, 30);
        player.draw();
		//the evil dot... moves the monster
		for (var q = 0; q < monster.speed; q++) {

			if (monster.x > player.x) {
				monster.x -= 1;

			}
			if (monster.x < player.x) {
				monster.x += 1;

			}
			if (monster.y > player.y) {
				monster.y -= 1;

			}
			if (monster.y < player.y) {
				monster.y += 1;

			}

		}
		strokeWeight(4);
        stroke(163, 31, 31);
        monster.draw();
		
	}

	//---------------------------------------------------------------------------

	if (play === 0) {
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

	//--------------------------------------------------------------------------------

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

}


