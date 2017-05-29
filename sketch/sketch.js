var foods = [];
var poisons = [];
var bg, movementSpeed, healthDecline, foodAmount, foodSpeed, poisonAmount, poisonSpeed, faster;
faster = 0;
function setup() {
  bg = loadImage("sketch/img/TcuVAiK.jpg");
  createCanvas(windowWidth, windowHeight);
  
  rectMode(CENTER);
  
// Settings
  movementSpeed = 5;
  healthDecline = 0.02;
  dificultyIncrement = 0.01;
  foodAmount = 10;
  foodSpeed = 2.5;
  poisonAmount = 10;
  poisonSpeed = 2.5;
  
// Dude  
  dude = new Dude();
  
// Init Foods Array
  for (i = 0; i < foodAmount; i++) {
    foods.push(new Food());
  }
// Init Poisons Array
  for (i = 0; i < poisonAmount; i++) {
    poisons.push(new Poison());
  }

}

function getFaster(){
  faster += 0.05;
}
setInterval(getFaster, 20000);

function draw() {
  background(bg);
  
// Testing  
  //text("Poisons: " + poisons.length, width/2, height/2);
  //text("Foods: " + foods.length, width/2, height/2+100);
  //text("healthDecline: " + dude.healthDecline, width/2, height/2+100);
  //text(faster, width/2, height/2+100);
  
  
  
// Instructions
  push();
  fill(100);
  strokeWeight(3);
  stroke(5);
  textSize(25);
  text("Use W,A,S,D to move around and Spacebar to talk shit.",width/2-300, 25);
  pop();
  push();
  fill(100);
  strokeWeight(3);
  stroke(5);
  textSize(25);
  text("            Eat ", width/2-300, 75);
  pop();
  push();
  fill(255);
  strokeWeight(3);
  stroke(5);
  textSize(25);
  text("Food", width/2-170, 75);
  pop();
  push();
  fill(100);
  strokeWeight(3);
  stroke(5);
  textSize(25);
  text(" to stay alive or ", width/2-115, 75);
  pop();
  push();
  fill(255, 0, 0);
  strokeWeight(3);
  stroke(5);
  textSize(25);
  text("Poison",  width/2+60, 75);
  pop();
  push();
  fill(100);
  strokeWeight(3);
  stroke(5);
  textSize(25);
  text(" to Die.",  width/2+135, 75);
  pop();
// Dude
  dude.stats();
  dude.show();
  dude.move(movementSpeed+(faster*40));
  dude.decHealth(healthDecline+(faster/2));
  dude.death();

//Foods Array
  for (i = 0; i < foods.length; i++) {
    var food = foods[i];
    food.show(foodSpeed);
    food.pnoise();
// collision detection
    if (food.eat(foods[i])) {
      food.eaten();
    }
  }
// Remove Eaten Food
  for (var i = foods.length-1; i >= 0; i--) {
    if (foods[i].toDelete === true) {
      foods.splice(i, 1);
    }
  }

  
//Poisons Array
  for (i = 0; i < poisons.length; i++) {
    var poison = poisons[i];
    poison.show(poisonSpeed);
    
// collision detection
    if (poison.eat(poisons[i])) {
      poison.eaten();
    }
  }
// Remove Eaten Food
  for (var i = poisons.length-1; i >= 0; i--) {
    if (poisons[i].toDelete === true) {
      poisons.splice(i, 1);
    }
  }
  
// Refill Food and Poison Arrays
  refill(food, foods.length);
  refill(poison, poisons.length);
  
// Refill Arrays Function
  function refill(arrayType, arraylength){
    if(arrayType === food){
      var foodConsumed = foodAmount - arraylength;
      if(foodConsumed < foodAmount){
        for (i = 0; i < foodConsumed; i++){
          foods.push(new Food(random(0, width), 0));
        }
      }  
    }else if(arrayType === poison){
      var poisonConsumed = poisonAmount - arraylength;
      if(poisonConsumed < poisonAmount){
        for (i = 0; i < poisonConsumed; i++){
          poisons.push(new Poison(random(0, width), 0));
        }
      }
    }
  }
}
function keyReleased() {
  if (dude.rightEye === 20) {
    dude.rightEye = 10;
  } 
  return false; // prevent any default behavior
}