class DarkOrbs {

    constructor(x, y, radius) {

        var options = {
            
          'restitution': 0.005
  
        }
  
        this.r = radius;
  
        this.body = Bodies.circle(x, y, this.r, options);
        this.color = color(199, 36, 177);
        World.add(world, this.body);
  
      }
  
      display(){
  
        var pos =this.body.position;
        var angle = this.body.angle;
  
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r, this.r);
        pop();
                                                                                  
      }

}