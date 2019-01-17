var play = 0;
var death;
var speed_div=1;
var isDead = false;
var start, Res_Cur_level, foodCollide, info, back;
var score = 0;
var selected,foodCollide2;
var change=false;
var food, player,monster,monster2,level2,level3,food2,ContLevel,level1,r,g,b,k,question_mark,Play_B,Back_B,Cont_same,Cont_other,Can_y,Canv_x;
Canv_x=1000;
Can_y=600;
var que_sh_strW=5, black_stroke=0, noStr=0 , que_x=Math.trunc((Canv_x*4)/5), que_y=Math.trunc(Can_y/30), que_w=80, que_h=que_w, gray_r=170,gray_g=gray_r , gray_b=gray_r;
var que_t_size=80, que_t_x=que_x+10, que_t_y=que_y+que_h/2+que_h/3, que_str=1;
var Play_s=75 ,b_w=140, b_h=80,b_x=Canv_x-b_w-(b_w/2), b_y=Can_y/2+Can_y/4, bT_x=b_x+10, bT_y=b_y+b_h/2+10, bT_size=55 , b_sh_str=5, b_t_str=1;    
var bl_text=0,blue_r=10 ,blue_g=160 ,blue_b=190, Play_w=200 , Play_h=100, Play_x=Math.trunc(Canv_x/2-(Play_w/2)), Play_y=Math.trunc((Can_y/2)-(Play_h/2)), Play_tx=Play_x+10, Play_ty=Play_y+(Play_h/2)+10;
var Con_sh_st=3, Con_w=220, Con_h=70,Con_x=Canv_x/3, Con_y=Can_y/3, Con_t_size=20, Con_t_x=Con_x+2, Con_t_y=Con_y+Con_h/2;
var Con2_sh_St=Con_sh_st,Con2_h=Con_h,Con2_w=Con_w,Con2_x=Con_x, Con2_y=Con_y+Con_h+Can_y/20, Con2_t_size=19, Con2_t_x=Con_t_x+2, Con2_t_y=Con2_y+Con2_h/2;
var rang_x=Canv_x-10, rang_y=Can_y-10; 
var mon_x=-20 , mon_y=-29, mon_h=40, mon_w=35, mon_speed=1, mon_sh="ellipse", mon_col="red";
var player_x=Math.trunc(Canv_x/3), player_y=Math.trunc(Can_y/3),  player_w=20,player_h=player_w,pl_col="orange" ,pl_sh="circle";
var mon2_x=mon_x+10, mon2_y=mon_y+10, mon2_sh="ellipse",mon2_col="pink", mon2_sp=mon_speed*2,mon2_w=45,mon2_h=30;   
var food2_w=13;
level2=false; level3=false; level1=false; ContLevel=false; selected=false; 
r=255;
g=255;
b=255;

var tex_x=Canv_x/10, tex_y=Can_y/2;
var totalScore_y=Can_y/20+10, Levels_y=Can_y/10+13;
var level_x=Canv_x/4, level_y=Can_y/2;
var textDead_x=Canv_x/3, textDead_y=Can_y/4;
var ins_x=Canv_x/4, ins_y=Can_y/10;
var textIns_x=Can_y/20,textIns_y=ins_y+Canv_x/20;

function mousePressed() { 
    start=collidePointRect(mouseX, mouseY,Play_x, Play_y,Play_w,Play_h);
    if (play===0 && start===true){
        play=1;
    }
    ContLevel=collidePointRect(mouseX, mouseY,Con_x,Con_y,Con_w,Con_h);
    Res_Cur_level=collidePointRect(mouseX, mouseY,Con2_x,Con2_y,Con2_w,Con2_h);
    if (play===2 && ContLevel===true && level2===true){
        player.Reset_properties(200,300,"orange");    
        monster.Reset_properties(-20,-29,"red");    
        monster2.Reset_properties(-10,-10,"pink");    
        food.reset(random(10,rang_x),random(10,rang_y));
        level1=false;   
        level3=false;
        play=1;
        score=0;
        level2=true;        
    }
    else if (play===2 && ContLevel===true && level3===true){        
        player.Reset_properties(200,300,"orange");    
        monster.Reset_properties(-20,-29,"yellow");    
        monster2.Reset_properties(-10,-10,"pink");    
        food.reset(random(10,rang_x),random(10,rang_y));    
        food2.reset(random(20,rang_x),random(20,rang_y));   
        level1=false;
        level2=false;       
        play=1;
        score=0;
        level3=true;
                                        
    }
    
    else if (play===2 && ContLevel===true && level1===true){
        player.Reset_properties(200,300,"orange");    
        monster.Reset_properties(-20,-29,"red");    
        monster2.Reset_properties(-10,-10,"pink");    
        food.reset(random(10,rang_x),random(10,rang_y));    
        food2.reset(random(20,rang_x),random(20,rang_y));        
        level2=false;       
        play=1;
        score=0;
        level3=false; 
        level1=true;
    }
    if (play===2 &&  Res_Cur_level===true){
        player.Reset_properties(200,300,"orange");    
        monster.Reset_properties(-20,-29,"red");    
        monster2.Reset_properties(-10,-10,"pink");    
        food.reset(random(10,rang_x),random(10,rang_y));    
        food2.reset(random(20,rang_x),random(20,rang_y));        
        level2=false;       
        play=1;
        score=0;
        level3=false;  
        level1=false;
        selected=false;
    }
    info=collidePointRect(mouseX, mouseY,que_x, que_y, que_w, que_h);
    if(play===0 && info===true){
        play=3;
    }
    back=collidePointRect(mouseX, mouseY,b_x,b_y,b_w,b_h);
    if (play===3 && back===true) {
        play=0;
    }    	
}


function setup() {         
    createCanvas(Canv_x,Can_y);     
    var Food_x=random(10,rang_x), Food_y=random(20,rang_y);
    var food2_x=random(20,rang_x) ,food2_y=Food_y ,food2_h=food2_w, food2_sh="triangle";      
    food=new Foods(Food_x,Food_y);
    monster= new Players(mon_x,mon_y,mon_w,mon_h,mon_sh,mon_col,mon_speed);
    player= new Players(player_x,player_y,player_w,player_h,pl_sh,pl_col);
    monster2=new Players(mon2_x,mon2_y,mon2_w,mon2_h,mon2_sh,mon2_col,mon2_sp);
    food2=new Foods(food2_x,food2_y,food2_w,food2_h,food2_sh);   
    question_mark=new buttons(que_sh_strW,black_stroke,que_x, que_y, que_w, que_h,gray_r,gray_g,gray_b,que_t_size,"?",que_t_x,que_t_y,que_str,black_stroke,bl_text);
    Play_B=new buttons(noStr,black_stroke,Play_x, Play_y,Play_w,Play_h,blue_r,blue_g,blue_b,Play_s,"Play!",Play_tx,Play_ty,noStr,black_stroke,bl_text);
    Back_B=new buttons (b_sh_str,black_stroke,b_x,b_y,b_w,b_h,gray_r,gray_g,gray_b,bT_size,"Back",bT_x,bT_y,b_t_str,black_stroke,bl_text);
    Cont_same=new buttons(Con_sh_st,black_stroke,Con_x,Con_y,Con_w,Con_h,blue_r,blue_g,blue_b,Con_t_size,"Restart with this level",Con_t_x,Con_t_y,noStr,black_stroke,bl_text);
    Cont_other=new buttons(Con2_sh_St,black_stroke,Con2_x,Con2_y,Con2_w,Con2_h,blue_r,blue_g,blue_b,Con2_t_size,"Restart with another level",Con2_t_x,Con2_t_y,noStr,black_stroke,bl_text);
    Name=new Text(1,0,25,50,"Please enter your name to start ",tex_x,tex_y);
    Level_t=new Text(1,0,25,50,"Please select another level ",level_x,level_y);
    Dead_t=new Text(3,"red",50,0,"You are dead... ",textDead_x,textDead_y);
    instructions= new Text(5,255,50,0,"Instructions:",ins_x,ins_y);
    text_int=new Text(0,0,20,0,"You are the orange dot and you need to avoid the evil monsters(s). \nTo do this you need to move your mouse, but don't go too fast. \nCollect the black dots(Food) to earn points. Triangles worth 2 \n points .But, the more points that you have the faster that the \n game will let you move and the faster that the evil dot(s) will move.",textIns_x,textIns_y);
    
}

function draw() {  
    background(255);
    stroke(0);
    strokeWeight(10);
    fill(r,g,b);
    rect(0,0,Canv_x,Can_y);          
    //this is what happens when the player and the dot of death hit eachother
    if (isDead===true) {
        play=2;
        isDead=false;		
    }
            
    if (play===1 && selected===true){                     
        for (var i = 0; i < player.speed; i++) {
            //first thing checks to see if the dot dies
            death=collideCircleCircle(monster2.getX(),monster2.getY(),mon2_w,player.getX(),player.getY(),player_w)||collideCircleCircle(monster.getX(),monster.getY(),mon_w,player.getX(),player.getY(),player_w);
            if (death===true) {
                isDead=true;                
            }
            // this is some stuff about the dot.
            food.draw();
            if(level3===true){
                food2.draw(k);
                foodCollide2=collideCircleCircle(player.getX(),player.getY(),player_w, food2.getX(),food2.getY(),food2_w);
                if (foodCollide2===true) {
                    food2.reset(random(20,rang_x),random(20,rang_y));                   
                    score += 2; 
                }      
            }
            // if the player hits the food...
            foodCollide = collideCircleCircle(player.getX(),player.getY(),player_w,food.getX(),food.getY(),10);
            if (foodCollide===true) {
                food.reset(random(10,rang_x),random(10,rang_y));                
                score += 1;              				
            }
		
            player.move(mouseX,mouseX,mouseY,mouseY);
            player.move(10,rang_x,10,rang_y);
        }
        fill("orange");
        textSize(30);       
        text("Score: " + score, 10,totalScore_y); 
            
        fill("Black");
        textSize(25);
        if(level1===true){             
            text("Level 1",10,Levels_y);
        }
        if(level2===true){             
            text("Level 2",10,Levels_y);
        }
        if(level3===true){             
            text("Level 3",10,Levels_y);
        }
    
        player.draw();
        //the evil dot... moves the monster
        for (var q=0; q<monster.speed; q++) {	
            monster.move(player.getX(),player.getX(),player.getY(),player.getY());
                    
        }
        

        if(level2===true || level3===true){
            for (q=0; q < monster2.speed; q++) {
                monster2.move(player.getX(),player.getX(),player.getY(),player.getY());                
            }
            
            monster2.draw();
                
        }       
        monster.draw();
       
    }	
            
    //---------------------------------------------------------------------------
    if ( Res_Cur_level===true && selected===false) {
        Level_t.draw();
       
    }
    if (play===0 && selected===true && change===true) {        
        question_mark.draw(); 
        Play_B.draw();                   
    }
    if (play===0 && change===false){
        question_mark.draw(); 
        Name.draw();

    }
     
    if (play===2) {           
        Dead_t.draw();
        //restart buttons..
        Cont_same.draw();        
        Cont_other.draw();           
        //shows how many points that you got
        fill("black");
        textSize(30);
        noStroke();
        var score_x=Canv_x/3, score_y=(Can_y*4)/5 + 10;
        text("You got: " + score + " point(s)",score_x,score_y);
       
    }

    if (play===3) {           
        instructions.draw();
        //the text below...
        text_int.draw();
        //the back button
        Back_B.draw();
        
    }
    player.setCalSpeed(speed_div);
    monster.setCalSpeed(speed_div); 
    monster2.setCalSpeed(speed_div); 
        
    

}    

   
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
        event.preventDefault();
    });

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
        event.preventDefault();
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
        event2.preventDefault();
    });    
});


