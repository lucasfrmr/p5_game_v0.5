function Food(){
  this.y = random(0, -height);
  this.x = random(0, width);
  this.t = random(0, width);
  this.toDelete = false;
  
  this.show = function(speed){
    this.speed = speed;
  	rect(this.x, this.y, 10, 10);
    this.y += this.speed;
    if (this.y > height){
      this.y = height - height;
      this.x = random(0, width);
    }
  }
// Noise on the X axis  
  this.pnoise = function (){
    this.t += 0.005;
    this.x = noise(this.t);
    this.x = map(this.x, 0, 1, 0, width);
  }
  
  this.eat = function(food) {
    var d = dist(this.x, this.y, dude.x, dude.y);
    if (d < 35) {
      this.toDelete = true;
      dude.amountEaten += 1;
      dude.health += 1;
    } else {
      this.toDelete = false;
    }
  }
  
  this.eaten = function() {
    this.toDelete = true;
  }


}