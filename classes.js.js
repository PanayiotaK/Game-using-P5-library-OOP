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


	
   
