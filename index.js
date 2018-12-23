var play = 0;
var death;
var speed_div=1;
var isDead = false;
var start, respawn, foodCollide, info, back;
var score = 0;
var newscore=0;
var select;
var food, player,monster,monster2,level2,level3,food2,ContLevel,level1;
level2=false; level3=false; level1=false; ContLevel=false; selected=false;

food=new Foods(0,0,10,10,"ellipse","black");
monster= new Players(-20,-20,35,40,"ellipse","red",1);
player= new Players(300,200,20,20,"circle","orange",20);
monster2=new Players(10,10,45,30,"ellipse","pink",3);
food2=new Foods(20,20,13,13,"triangle","black");

var resetPos = function() {
	player.setX_Y(200,300);
	monster.setX_Y(-20,-29);
    monster2.setX_Y(20,20);
	food.setX_Y(random(10,990),random(10, 690));
    food2.setX_Y(random(20, 990),random(20, 690)) ;
    player.Calspeed = 20;
    monster.Calspeed = 1;
    monster2.Calspeed=3;
    player.setColour("orange");
    monster.setColour("red");
    monster2.setColour("pink");
    level2=false;
    level3=false;
    play=1;
    score=0;
}


function mousePressed() {
	start = collidePointRect(mouseX, mouseY,450, 240, 200, 100)
	 if (play === 0 && start === true){
          play=1;
    }

    ContLevel= collidePointRect(mouseX, mouseY, 330, 270, 220, 70);
	respawn = collidePointRect(mouseX, mouseY, 330, 370, 220, 70);
	if (play === 2 && ContLevel === true && level2===true) {
        resetPos();
        level2=true;        
    }
    else if (play === 2 && ContLevel === true && level3===true){        
        resetPos();
        level3=true;
        monster.setColour("yellow");                                 //for reset in this level button
    }
    
    else if (play === 2 && ContLevel === true && level3===false && level2===false){
          resetPos();
    }
    if (play===2 && respawn===true ){
        resetPos();
        selected=false;
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
	food.setX_Y(random(10, 990),random(10, 690)) ;
    food2.setX_Y(random(20, 990),random(20, 990)) ;
}

function draw() {
 
	background(255);
	stroke(0);
	strokeWeight(10);
    fill(255);
    rect(0, 0, 1000, 700);
       
      //this is what happens when the player and the dot of death hit eachother
	if (isDead === true) {
        play = 2;
		isDead = false;
		//resetPos(); 
	}

	if (play === 1 && selected===true) {
         fill("orange");
		strokeWeight(1);
        //keeps it's X equal with mouse X
		for (var i = 0; i < player.speed; i++) {
			//first thing checks to see if the dot dies
            death = collideCircleCircle(monster.x, monster.y, 40, player.x, player.y, 20) || collideCircleCircle(monster2.x, monster2.y, 30, player.x, player.y, 20);
			if (death === true) {
				isDead = true;
			}
			// this is some stuff about the dot.
			food.draw();
            if(level3===true){
                food2.draw();
                foodCollide2 = collideCircleCircle(player.x, player.y, 20, food2.x, food2.y, 10);
			    if (foodCollide2 === true) {
				    food2.setX_Y(random(20, 990),random(20, 690)) ;
                    score += 2; 
                 }      
            }
			// if the player hits the food...
			foodCollide = collideCircleCircle(player.x, player.y, 20, food.x, food.y, 10);
			if (foodCollide === true) {
				food.setX_Y(random(10,990),random(10, 690));
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
            monster.move(player.x,player.y);
        }

        if(level2===true || level3===true){
            for (var q = 0; q < monster2.speed; q++) {
                 monster2.move(player.x,player.y);
             }
        strokeWeight(4);
        stroke(163, 31, 31)  
        monster2.draw();
        
		}
		strokeWeight(4);
        stroke(163, 31, 31);
        monster.draw();
       
		
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
            text("Coded By Adin Jura! 			                                   										 v[1.9]", 10, 650);
        }
         if (play === 0 ){
            strokeWeight(5);
            fill(170);
            rect(840, 20, 80, 80);
            textSize(80);
            text("?", 850, 87);
        }
     
        if (play === 2) {
           
            textSize(50);
            strokeWeight(1);
            fill('red');
            text("U is dead... ", 330, 250);
            //restart button..
            fill(7, 186, 61);
             rect(330, 270, 220, 70);
            fill("blue");
            textSize(20);
            text("Restart with this level.", 340, 305);
            fill(7, 186, 61);
            rect(330, 370, 220, 70);
            fill("blue");
            textSize(19);
            text("Restart with another level", 335, 405);
            
            //shows how many points that you got
            fill("black");
            textSize(30);
            noStroke();
            text("You got: " + score + " point(s)", 330, 500)
    
        }
        
        if (play === 3) {
           
            textSize(50);
            text("Instructions:", 230, 60);
            //the text below...
            textSize(20);
            noStroke();
            fill('black');
            text("You are the orange dot and you need to avoid the evil dot(s). \nTo do this you need to move your mouse, but don't go too fast. \nCollect the black dots(Food) to earn points. Triangles worth 2 \n points .But, the more points that you have the faster that the \n game will let you move and the faster that the evil dot(s) will move.", 30, 100);
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
    var username=document.getElementById("username");
    function name(){       
        let val=document.getElementById("username").value;
        alert("hello  "+ val +"  please select level to continue");
        
    }
    
    username.addEventListener("change",name);
    var cf = document.getElementById("level1_form");

    cf.addEventListener("submit", function (event){
        event.preventDefault()});


   var L1 = document.getElementById("Level1");
    function Game1(){
        
         speed_div=5;
         selected=true;
         monster.shape="ellipse";
         level1=true;

    }
    L1.addEventListener("click",Game1);

    var L2=document.getElementById("Level2");
    function Game2(){
        
        speed_div=3;
        monster.shape="rectangle";
        selected=true;
        level2=true;   
    }
    L2.addEventListener("click",Game2);

    var L3=document.getElementById("Level3");
    function Game3(){
        speed_div=2;
        
        monster.setShape("square");
        monster.setColour("yellow");
        selected=true;
        level3=true;       
    }
    L3.addEventListener("click",Game3);
   

    var cf1 = document.getElementById("level2_form");
    cf1.addEventListener("submit", function (event){
        event.preventDefault()
    });
    
    
});