class Ball {
    constructor(x, y, radius) {
      var options = {
        restitution:0.3,
        friction:0.5,
        density:1.2
      }
      this.x= x;
      this.y = y;
      this.radius=radius;
      this.body = Bodies.circle(this.x,this. y, this.radius, options);
     this.image=loadImage("polygon.jpg");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
     // rotate(angle);
      //fill("purple");
      //ellipseMode(RADIUS);
     // ellipse(0, 0, this.radius,this.radius);
     imageMode(CENTER);
     image(this.image,0,0,this.radius,this.radius);
      pop();
    }
  }