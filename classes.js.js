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
        this.colour = colour;
    }
    getColour(){
        return this.colour;
    }
    setShape(shape){
        this.shape=shape;
    }
    getShape(){
        return this.shape;
    }

    setX(val_x){
        this.x=val_x;
    }
    setY(val_y){
        this.y=val_y;
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
        fill(this.colour);
        if(this.shape=="ellipse" || this.shape== "circle" ){  
            if(k){
                k.ellipse(this.x,this.y,this.width,this.height);}
            else{
                ellipse(this.x,this.y,this.width,this.height);
            }          
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


	
   
