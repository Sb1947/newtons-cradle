class Bob
{
    constructor(x,y,radius) 
    {
        var options = 
        {
            isStatic: false,
            restitution:1,
            friction:0.5,
            density:1.2
        }
        this.x=x
        this.y=y
        this.r=radius;
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world, this.body);
      }
      display()
      {
        var bobpos = this.body.position
        push()
        translate(bobpos.x,bobpos.y)
        ellipseMode(CENTER)
        strokeWeight(3)
        fill(255,0,255)
        ellipse(0,0,this.r,this.r)
        pop()
        }

}