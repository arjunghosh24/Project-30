class Block 
{
  constructor(x, y, width, height) 
  {
      var options = 
      {
          density: 0.001,
          friction: 1
      }
      this.visibility = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
  }
  display() 
  {
      push();
      if (this.body.speed < 3) 
      {
          var angle = this.body.angle;
          rectMode(CENTER);
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          fill("cyan");
          stroke("black");
          strokeWeight(4);
          rect(0, 0, this.width, this.height);
          pop();
      }
      else 
      {
          World.remove(world, this.body);
          push();
          this.visibility = this.visibility - 5;
          tint(255, this.visibility);
          pop();
      }
  }
}
