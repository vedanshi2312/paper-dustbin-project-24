class paper{
   
  constructor(x,y,r){

    var options={
    'isStanic' : false,
    'restitution' :0.3,
    'friction' :0.5,
    'density' :1.2

    }

    this.X=x;
    this.Y=y;
    this.body = Bodies.circle(x,y,r/2,options)
    World.add(world,this.body);
  }  
    
    display(){
     
    var paperpos = this.body.postion;
    push();
    translate (paperpos.x , paperpos.y);
    rectmode(CENTER)
    strokeWeight(3);
    fill("blue");
    ellipse(0,0,this.r,this.r);
    pop();    


    
    }   


}