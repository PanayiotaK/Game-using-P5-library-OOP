class Players extends Foods{
    constructor(x,y,h,w,sh,colour,sp){
		super(x,y,h,w,sh,colour);
		this.Startspeed=sp || 20;
		this.speed=sp || 20; }
	
	 
	 getCalspeed(){
		 return this.speed;
	 }
	 setCalSpeed(v){
		this.speed=this.Startspeed+score /v;	    
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