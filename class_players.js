class Players extends Foods{
    constructor(x,y,h,w,sh,colour,sp){
		super(x,y,h,w,sh,colour);
		this.Startspeed=sp;
		this.speed=sp; }
	
	
	CalSpeed(v){
		this.speed=this.Startspeed+score /v;	    
	 }
	 
	move(val1,val2){
		if(this.x>val1){
			this.x-=1;
		}
		if(this.x<val1){
			this.x+=1;
		}
		if(this.y>val2){
			this.y-=1;
		}
		if(this.y<val2){
			this.y+=1;
		}
    }
}