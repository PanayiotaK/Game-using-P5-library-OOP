var play = 0;
var death;
var speed_div=1;
var isDead = false;
var start, respawn, foodCollide, info, back;
var score = 0;
var newscore=0;
var select;
var change=false;
var food, player,monster,monster2,level2,level3,food2,ContLevel,level1,r,g,b,submit_but;
level2=false; level3=false; level1=false; ContLevel=false; selected=false,submit_but=false;
r=255;
g=255;
b=255;


var resetPos = function() {
    player.setX(200);
    player.setY(300);
    monster.setX(-20);
    monster.setY(-29);
    monster2.setX(-10);
    monster2.setY(-10);
    food.setX(random(10,990));
    food.setY(random(10, 590));
    food2.setX(random(20, 990));
    food2.setY(random(20, 590)) ;
    player.Calspeed = 20;
    monster.Calspeed = 1;
    monster2.Calspeed=2;
    player.setColour("orange");
    monster.setColour("red");
    monster2.setColour("pink");
    level1=false;
    level2=false;
    level3=false;
    play=1;
    score=0;
}

function mousePressed() {
	start = collidePointRect(mouseX, mouseY,400, 240, 200, 100)
	 if (play === 0 && start === true){
          play=1;
    }
    ContLevel= collidePointRect(mouseX, mouseY, 330, 250, 220, 70);
	respawn = collidePointRect(mouseX, mouseY, 330, 350, 220, 70);
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
	back = collidePointRect(mouseX, mouseY,800, 500, 140, 80);
	if (play === 3 && back === true) {
		play = 0;
    }
    
	
}

function setup() {
	createCanvas(1000, 600);
      
food=new Foods(random(10, 990),random(20, 590),10,10,"ellipse","black");
monster= new Players(-20,-29,35,40,"ellipse","red",1);
player= new Players(300,200,20,20,"circle","orange",20);
monster2=new Players(-10,-10,45,30,"ellipse","pink",2);
food2=new Foods(random(20, 990),random(20, 590),13,13,"triangle","black");
 
}

function draw() {
 	background(255);
	stroke(0);
	strokeWeight(10);
    fill(r,g,b);
    rect(0, 0, 1000,600);
     //this is what happens when the player and the dot of death hit eachother
	if (isDead === true) {
        play = 2;
		isDead = false;
		
    }
    
        
	if (play === 1 && selected===true ) {
       
       // fill("orange");
		strokeWeight(1);
    
		for (var i = 0; i < player.speed; i++) {
            //first thing checks to see if the dot dies
            death = collideCircleCircle(monster2.getX(), monster2.getY(), 45, player.getX(), player.getY(), 20)||collideCircleCircle(monster.getX(), monster.getY(), 35, player.getX(), player.getY(), 20);
            if (death === true) {
                isDead = true;                
			}
			// this is some stuff about the dot.
			food.draw();
            if(level3===true){
                food2.draw();
                foodCollide2 = collideCircleCircle(player.getX(), player.getY(), 20, food2.getX(), food2.getY(), 10);
			    if (foodCollide2 === true) {
                    food2.setX(random(20, 990));
                    food2.setY(random(20, 590)) ;
                    score += 2; 
                 }      
            }
			// if the player hits the food...
			foodCollide = collideCircleCircle(player.getX(), player.getY(), 20, food.getX(), food.getY(), 10);
			if (foodCollide === true) {
                food.setX(random(10,990));
                food.setY(random(10, 590));
                score += 1;              				
			}
		
        player.move(mouseX,mouseX,mouseY,mouseY);
        player.move(10,990,10,590);
        }
		fill("orange");
		textSize(30);
        text("Score: " + score, 10, 30);
        fill("Black");
        textSize(25);
        if(level1===true){             
            text("Level 1", 10, 60);
        }
        if(level2===true){             
            text("Level 2", 10, 60);
        }
        if(level3===true){             
            text("Level 3", 10, 60);
        }

    
        player.draw();
		//the evil dot... moves the monster
		for (var q = 0; q < monster.speed; q++) {	
            monster.move(player.getX(),player.getX(),player.getY(),player.getY());
            
        }

        if(level2===true || level3===true){
            for (var q = 0; q < monster2.Calspeed; q++) {
                 monster2.move(player.getX(),player.getX(),player.getY(),player.getY());
                 //monster2.move(10,990,10,600);
             }
         
        monster2.draw();
                
        }	
		
        monster.draw();
       
    }	
    
        
    //---------------------------------------------------------------------------
    if (respawn===true && selected===false) {
        strokeWeight(1);
        stroke(50);
        fill(0);
        textSize(35);
        text("Please select another level ",300,300);
       
    }
    if (play === 0 && selected===true && change===true) {
            strokeWeight(5);
            fill(170);
            rect(840, 20, 80, 80);
            textSize(80);
            text("?", 850, 87);
            fill(10,160,190);
            strokeWeight(1);
            noStroke();
            rect(400, 240, 200, 100);
            stroke(0);
            fill(0);
            textSize(75);
            text("Play!", 410, 300);
            textSize(30);
            //text("Info: Keep your mouse inside of the box! \nRun away from the monster (The red dot).", 10, 30);
            text("Coded By Adin Jura! 			                                   										 v[1.9]", 10, 620);
        }
    if (play === 0 && change===false){
            strokeWeight(5);
            fill(170);
            rect(840, 20, 80, 80);
            textSize(80);
            text("?", 850, 87);
            strokeWeight(1);
            stroke(50);
            fill(0);
            textSize(35)
            text("Please enter your name to the box, at the top to start ", 100, 300);
        }
     
        if (play === 2) {
           
            textSize(50);
            strokeWeight(3);
            stroke(0);
            fill('red');
            text("You are dead... ", 300, 230);
            //restart button..
            strokeWeight(3);
            stroke(0);
            fill(10,160,190);
            rect(330, 250, 220, 70);
            noStroke();
            fill("black");
            textSize(20);
            text("Restart with this level.", 340, 285);
            strokeWeight(3);
            stroke(0);
            fill(10,160,190);
            rect(330, 350, 220, 70);
            noStroke();
            fill("black");
            textSize(19);
            text("Restart with another level", 332, 385);
            
            //shows how many points that you got
            fill("black");
            textSize(30);
            noStroke();
            text("You got: " + score + " point(s)", 330, 480)
    
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
            rect(800, 500, 140, 80);
            noStroke();
            fill(0);
            textSize(55);
            text("Back", 810, 560);
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
        change=true;
        
      }
    username.addEventListener("change",name);

    var cf = document.getElementById("level1_form");

    cf.addEventListener("submit", function (event){
        event.preventDefault()});


   var L1 = document.getElementById("Level1");
    function Game1(){
        
         speed_div=5;
         selected=true;
         monster.setShape("ellipse");
         level1=true;

    }
    L1.addEventListener("click",Game1);

    var L2=document.getElementById("Level2");
    function Game2(){
        
        speed_div=3;
        monster.setShape("rectangle");
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


    var yel=document.getElementById("Yellow");
    function ColourY(){
        r=255;
        g=254;
        b=160;    
    }
    yel.addEventListener("click",ColourY);
   
    var blue=document.getElementById("Blue");
    function ColourB(){
        r=100;
        g=240;
        b=200;    
    }
    blue.addEventListener("click",ColourB);

    var green=document.getElementById("Green");
    function ColourG(){
        r=150;
        g=240;
        b=150;    
    }
    green.addEventListener("click",ColourG);
    var white=document.getElementById("White");
    function ColourW(){
        r=255;
        g=255;
        b=255;    
    }
    white.addEventListener("click",ColourW);

    var cf2 = document.getElementById("level3_form");
    cf2.addEventListener("submit", function (event2){
        event2.preventDefault()
    });
    
});