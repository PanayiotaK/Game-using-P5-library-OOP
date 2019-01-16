class Foods{
    constructor(x,y,h,w,sh,colour){
        this.x=x || 20;
        this.y=y || 20;
        this.height=h || 10;
        this.width=w || 10;
		this.shape=sh ||"circle";
		this.colour=colour || "black";
    }
    setColour(colour){
        if(typeof colour=="string"){
            this.colour = colour;}
    }
    getColour(){
        return this.colour;
    }
    setShape(shape){
        if(typeof colour=="string"){
            this.shape=shape;}
    }
    getShape(){
        return this.shape;
    }

    setX(val_x){
        if(typeof val_x=="number"){
            this.x=val_x;}
    }
    setY(val_y){
        if(typeof val_y=="number"){
            this.y=val_y;}
    }
    getX(){
        return this.x ;
    }
    getY(){
        return this.y;                                                             
    }
    
    draw(k){
        strokeWeight(1);
        //stroke(0);
        if(k){
            k.fill(this.colour);
        }
        else{
            fill(this.colour);
        }
        if(this.shape=="ellipse" || this.shape== "circle" ){  
            if(k){          
                k.ellipse(this.x,this.y,this.width,this.height);}
            else{
                ellipse(this.x,this.y,this.width,this.height);}

        }                     
        
        else if(this.shape=="rectangle"|| this.shape=="square"){
            if(k){
                k.rect(this.x,this.y, this.width,this.height);
            }
            else{
                rect(this.x,this.y, this.width,this.height);}
        }
       
        else if(this.shape=="triangle"){
            if(k){
                k. triangle(this.x, this.y,this.x+this.width,this.y, this.x,this.y+this.height);
            }
            else{
                triangle(this.x, this.y,this.x+this.width,this.y, this.x,this.y+this.height);;}
           
        }
	}

}

class buttons{
    constructor(sh_strW,sh_strok,x,y,h,w,sh_r,sh_g,sh_b,tex_s,tex,Tx,Ty,strW,strok,Col_tex){
        this.sh_strW=sh_strW 
        this.sh_strok=sh_strok 
        this.x=x;
        this.y=y;
        this.h=h;
        this.w=w;
        this.sh_r=sh_r;
        this.sh_g=sh_g;
        this.sh_b=sh_b;        
        this.tex_s=tex_s;
        this.tex=tex;
        this.Tx=Tx;
        this.Ty=Ty;        
        this.strW=strW 
        this.strok=strok 
        this.Col_tex=Col_tex 

    }

    draw(k){
        if(k){
            k.strokeWeight(this.sh_strW);
            k.stroke(this.sh_strok);
            k.fill(this.sh_r, this.sh_g, this.sh_b);
            k.rect(this.x,this.y, this.w,this.h);
            k.strokeWeight(this.strW);
            k.stroke(this.strok);
            k.fill(this.Col_tex);
            k.textSize(this.tex_s);
            k.text(this.tex,this.Tx,this.Ty);
        }
        else{
            strokeWeight(this.sh_strW);
            stroke(this.sh_strok);
            fill(this.sh_r,this.sh_g,this.sh_b);
            rect(this.x,this.y, this.h,this.w);
            strokeWeight(this.strW);
            stroke(this.strok);
            fill(this.Col_tex);
            textSize(this.tex_s);
            text(this.tex,this.Tx,this.Ty);
        }

    }

}

class Players extends Foods{
    constructor(x,y,h,w,sh,colour,sp){
		super(x,y,h,w,sh,colour);
		this.Startspeed=sp || 20;
		this.speed=sp || 20; }
		 
	 getCalspeed(){
		 return this.speed;
	 }
	 setCalSpeed(v){
        if(typeof v=="number"){
		    this.speed=this.Startspeed+score /v;}   
	 }
	
	 
	move(val1,val2,val3,val4){
		if(this.x>val1){
			this.x-=1;
		}
		if(this.x<val2){
			this.x+=1;
		}
		if(this.y>val3){
			this.y-=1;
		}
		if(this.y<val4){
			this.y+=1;
		}
	}
	
	
}


	
   
