function Dude(){
  this.x = width/2;
  this.y = height/2;
  this.leftEye = 20;
  this.rightEye = 10;
  this.mouth = 10;
  this.red = 255;
  this.green = 255;
  this.blue = 255;


  this.health = 100;
  this.amountEaten = 0;
  this.isDead = false;

  
//Stats  
  this.stats = function(){
    push();
    this.statPosX = width/2 - 50;
    this.statPosY = height - height + 120;
    fill(255);
    textSize(25);
    text("Health: " + Math.floor(this.health), this.statPosX, this.statPosY);
    text("Score: " + this.amountEaten, this.statPosX, this.statPosY + 50);
    pop();
  }
//Dude
  this.show = function(){
    push();
    fill(this.red, this.green, this.blue);
    strokeWeight(3);
    stroke(5);
    textSize(15);
    //text("James", this.x - 21, this.y - 35); // name
    rect(this.x, this.y, 55, 55); // head
    fill(5);
    ellipse(this.x - 15, this.y - 10, this.leftEye, this.leftEye); // left eye
    this.leftEye = random(7, 15);
    ellipse(this.x + 15, this.y - 10, this.rightEye, this.rightEye); // right eye
    rect(this.x , this.y + 15, 45, this.mouth); // mouth
    pop();
    if(this.x < 0){this.x = width};
    if(this.x > width){this.x = 0};
    if(this.y < 0){this.y = height};
    if(this.y > height){this.y = 0};
 // Gradient Coloring
    if (this.health > 90) {
        this.red = 255;
        this.green = 255;
        this.blue = 255;
    } else if (this.health > 80 && this.health < 90) {
        this.red = 248;
        this.green = 229;
        this.blue = 229;
    } else if (this.health > 70 && this.health < 80) {
        this.red = 242;
        this.green = 204;
        this.blue = 204;
    } else if (this.health > 60 && this.health < 70) {
        this.red = 235;
        this.green = 178;
        this.blue = 179;
    } else if (this.health > 50 && this.health < 60) {
          this.red = 229;
          this.green = 153;
          this.blue = 153;
    } else if (this.health > 40 && this.health < 50) {
          this.red = 223;
          this.green = 127;
          this.blue = 128;
    } else if (this.health > 30 && this.health < 40) {
          this.red = 216;
          this.green = 102;
          this.blue = 103;
    } else if (this.health > 20 && this.health < 30) {
          this.red = 210;
          this.green = 76;
          this.blue = 77;
    } else if (this.health > 10 && this.health < 20) {
          this.red = 203;
          this.green = 51;
          this.blue = 52;
    } else if (this.health > 0 && this.health < 10) {
          this.red = 197;
          this.green = 25;
          this.blue = 27;
    }
  }
//Decrement Health
  this.decHealth = function(healthDecline){
    this.healthDecline = healthDecline;

    //this.healthDecline += 0.05;
    this.health -= this.healthDecline;
    //text("healthDecline: " + dude.healthDecline, width/2, height/2+100);
  }
  this.death = function(){
    
    if(this.health < 0){
      this.isDead = true;
      push();
      pixelDensity(random(0.1, 0.9));
      textSize(100);
      fill(random(0, 255));
      text("GAME OVER!!!", width/2-330, height/2);
      text("Score: " + this.amountEaten, width/2-180, height/2+100);
      pop();
      push();
      textSize(50);
      text("Press the F5 key or refresh the page to retry.", width/2-475, height/2+200);
      //noLoop();
      pop();
    }
  }
//Movement Controls
  this.move = function(movementSpeed){
    this.moveSpeed = movementSpeed;
    if (keyIsDown(65))
      this.x-=this.moveSpeed;
    if (keyIsDown(68))
      this.x+=this.moveSpeed;
    if (keyIsDown(87))
      this.y-=this.moveSpeed;
    if (keyIsDown(83))
      this.y+=this.moveSpeed;
    if (keyIsDown(32)) //mouth 
      this.mouth = 10;
    if (keyIsDown(32)) //left eye
      this.leftEye = 10;
    if (keyIsDown(32)) // right eye
      this.rightEye = 20;

// mouth movement
    this.mouth -= 1;          
    if (this.mouth > 10){
      this.mouth -= 1;
    }else if (this.mouth < 3){
      this.mouth += 1;
    }
  }
}