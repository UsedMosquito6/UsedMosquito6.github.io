// Ball oop


let ballArray = [];
let myBall;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for (let i = 0; i<ballArray.length; i++){
    for (let j = 0; j < ballArray.length; j++){
      if ( i !== j){
        ballArray[i].checkColisionWith(ballArray[j]);
      }
    }
    ballArray[i].display();
    ballArray[i].move();
  }
}

function mousePressed(){
  let myBall = new Ball(mouseX, mouseY);
  ballArray.push(myBall);
}

function keyPressed(){
  let myBall = new Ball(mouseX, mouseY);
  ballArray.push(myBall);
}

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = random(10, 30);
    this.theColor = color(random(255), random(255), random(255), random(255));
    this.dx = random(-5, 5);
    this.dy = random(-5, 5);
  }
  display() {
    noStroke();
    fill(this.theColor);
    circle(this.x, this.y, this.radius*2);
  }
  move(){
    this.x += this.dx;
    this.y -= this.dy;
    //check for edge bounce
    if (this.x < 0  + this.radius || this.x > width - this.radius){
      this.dx *= -1;
    }
    if (this.y < 0  + this.radius || this.y > height - this.radius){
      this.dy *= -1;
    }
  }
  checkColisionWith(otherBall){
    let distanceBetween = dist(this.x, this.y, otherBall.x, otherBall.y);
    let radiSum = this.radius + otherBall.radius;
    if (distanceBetween < radiSum){
      //ball hit eachother
      this.thecolor = "red";
      otherBall.theColor = "red";

      let tempDx = this.dx;
      let tempDy = this.dy;
      this.dx = otherBall.dx;
      this.dy = otherBall.dy;
      otherBall.dx = tempDx;
      otherBall.dy = tempDy;
    }

  }
}