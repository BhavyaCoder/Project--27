class Ground
{
constructor(x,y,width,height)
{
    var options=
    {
        isStatic:true,
        restitution:0.3,
        friction:0.5,
        density:1.2,
    
    }
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height
    this.ground=Bodies.rectangle(x,y,width,height,options)
    World.add(world,this.ground);
}
display () 
{
var groundpos=this.ground.position;


rectMode(CENTER)
strokeWeight(3);
fill(255,0,255)
rect(groundpos.x,groundpos.y,this.width,this.height);
}

}