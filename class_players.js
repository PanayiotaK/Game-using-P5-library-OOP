class Players extends Foods{
    constructor(x,y,h,w,sh,colour,sp){
		super(x,y,h,w,sh,colour);
		this.Startspeed=sp;
		this.speed=sp; }
	
	 set Calspeed(value){
		 this.speed=value;
	 }
	 get Calspeed(){
		 return this.speed;
	 }
	 CalSpeed(v){
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