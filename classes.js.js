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
        if(k){
            k.fill(this.colour);
        }
        else{
            fill(this.colour);
        }
        if(this.shape=="ellipse" || this.shape== "circle" ){            
             ellipse(this.x,this.y,this.width,this.height);
                     
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
    constructor(x,y,h,w,colour,tex_s,tex,Tx,Ty,strW,strok,Col_tex){
        this.x=x;
        this.y=y;
        this.h=h;
        this.w=w;
        this.colour=colour;
        this.strW=strW;
        this.strok=strok;
        this.Col_tex=Col_tex;
        this.tex_s=tex_s;
        this.tex=tex;
        this.Tx=Tx;
        this.Ty=Ty;

    }

    draw(k){
        if(k){
            k.fill(this.colour);
            k.rect(this.x,this.y, this.width,this.height);
            k.strokeWeight(this.strW);
            k.stroke(this.strok);
            k.fill(Col_tex);
            k.textsize(this.tex_s);
            k.tex(this.tex,this.Tx,this.Ty);
        }
        else{
            fill(this.colour);
            rect(this.x,this.y, this.width,this.height);
            strokeWeight(this.strW);
            stroke(this.strok);
            fill(Col_tex);
            textsize(this.tex_s);
            tex(this.tex,this.Tx,this.Ty);
        }

    }

}


	
   
