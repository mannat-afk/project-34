class Monster{

constructor (x,y,width,height){
var options= {
isStatic:true,
resitution:0.5,
friction:1.0,   
}

this.width=width;
this.height;
this.image=loadImage("images/Monster-01.png");
this.body= Bodies.circle(this.x,this.y,(this.r)/2,options);
World.add(world,this.body);
}
display(){
push();
translate(this.body.position.x,this.body.position.y);
imageMode(CENTER);
image(this.image,0,0,this.width,this.height);
pop();
}

}