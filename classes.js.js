class Foods{
    constructor(x,y,h,w,sh,colour){
        this.x=x;
        this.y=y;
        this.height=h;
        this.width=w;
		this.shape=sh;
		this.colour=colour;
		
    }
    setColour(colour){
        this.colour = colour;
    }
    setShape(shape){
        this.shape=shape;
    }
    setX_Y(val_x,val_y){
        this.x=val_x;
        this.y=val_y;
    }

    
    draw(){
        fill(this.colour);
        strokeWeight(1);
        if(this.shape=="ellipse" || this.shape== "circle" ){           	    
            ellipse(this.x,this.y,this.width,this.height);
          
        }
        else if(this.shape=="rectangle"|| this.shape=="square"){
            rect(this.x,this.y, this.width,this.height);
        }
       
        else if(this.shape=="triangle"){
            triangle(this.x, this.y,this.x+this.width,this.y, this.x,this.y+this.height);
        }
	}


	
}


	
   
