class Ball{
    constructor(x, y, radius) {
        var options = {
            restitution :0.4,
            friction :0.4,
            density : 1,
           
        }
        
        this.body = Bodies.circle(x,y,radius,options);
        this.x = x
        this.y = y
        this.radius = radius
        rock_img = loadImage("rock.png");
        World.add(world, this.body);
      }
      display(){
        
        push();
        imageMode[CENTER];
        image(rock_img,this.body.position.x,this.body.position.y,40,40);
        
        pop();
      }
  }