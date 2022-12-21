function Poison(){
  this.y = random(0, -height);
  this.x = random(0, width);
 
  this.toDelete = false;
  
  this.show = function(speed){
    push();
    this.speed = speed;
    fill(255, 0, 0);
  	rect(this.x, this.y, 10, 10);
    this.y += this.speed;
    if (this.y > height){
      this.y = height - height;
      this.x = random(0, width);
    }
    pop();
  }
  
  this.eat = function(poison) {
    var d = dist(this.x, this.y, dude.x, dude.y);
    if (d < 35) {
      this.toDelete = true;
      dude.amountEaten -= 1;
      dude.health -= 1;
    } else {
      this.toDelete = false;
    }
  }
  
  this.eaten = function() {
    this.toDelete = true;
  }

}