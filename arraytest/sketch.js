// Interactive Scene
// Blake Allin
// 9/27/21
//
// Extra for Experts:
// The 




let ballArray = [];
let bSpeed = 8;

let a;
let x, y, tankGT, missile, tankGB, bx, by, type;
// let radius = 1;
let tRadius = 25;

let pos = 75;
let theta = 0;
let speed = 1;

function preload() {
  tankGT = loadImage("assets/tankG-T.png");
  missile = loadImage("assets/missile.png");
  tankGB = loadImage("assets/tankG-B.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  push();
  x = width/2;
  y = height/2;
  translate(x, y);
  pop();
}

function draw() {
  background(0, 150, 50);
  shoot();
  tankBottom();
  tankTop();
  move();
  displayBall();
  moveBall();
  ammoSelectionSquare();
}

//------------------------------------------------------------------------------------------------------------------------------------------------


function mousePressed() {   //Shoot                         
  push();
  spawnBall();
  ballArray[ballArray.length-1].bx = x;
  ballArray[ballArray.length-1].by = y;
  pop();
}

function spawnBall() {    //Ball
  push();
  translate (x, y);
  let newBall = {
    bx: 0,
    by: 0,
    radius: 5,
    ballColor: "grey",
    changeX : cos(a) * bSpeed,
    changeY : sin(a) * bSpeed,
  };
  ballArray.push(newBall);    
  pop();
}

function displayBall() {
  for (let ball of ballArray) {
    fill(ball.ballColor);
    circle(ball.bx, ball.by, ball.radius);
  }
}

function moveBall() {
  for (let theBall of ballArray) {
    theBall.bx += theBall.changeX;
    theBall.by += theBall.changeY;
  }
}

function shoot() {
  push();
  if (keyIsDown(32)) {
    push();
    spawnBall();
    ballArray[ballArray.length-1].bx = x;
    ballArray[ballArray.length-1].by = y;
    pop();
  }
}



function tankTop() {    //Display tank
  push();
  translate(x, y);
  a = atan2(mouseY-y , mouseX-x );
  rotate(a);
  imageMode(CENTER);
  image(tankGT, 0, 0, tRadius * 2, tRadius * 2);
  pop();
}

function tankBottom(){
  push();
  translate(x, y);
  rotate(theta);
  imageMode(CENTER);
  image(tankGB, 0, 0, tRadius * 2, tRadius * 2);
  pop();

}

function move() {   //Tank Movement
  if (keyIsDown(68)) {
    theta += 2.5;
  }
  if (keyIsDown(65)) {
    theta -= 2.5;
  }
  if (keyIsDown(87)) {
    x += cos(theta) * speed;
    y += sin(theta) * speed;
  }
  if (keyIsDown(83)) {
    x -= cos(theta) * speed;
    y -= sin(theta) * speed;
  }

}



function ammoSelectionSquare() {    // Ammo Selection
  rectMode(CENTER);
  imageMode(CENTER);
  noFill();
  for (let i = 1; i < 6; i++) {
    square(width - 50, i * 75, 50);
  }
  square(width - 50, pos, 50);
  beginShape();
  vertex(width - 20, pos - 20);
  vertex(width - 20, pos + 20);
  endShape();
  image(missile, width - 50, 150, 50, 10);
}

function mouseWheel(event) {    // Ammo Selection (Scroll Wheel Input)
  if (pos > 50 && pos < height - 50) {
    if (event.delta > 0){
      pos += event.delta - 25;
    }
    if(event.delta < 0){
      pos += event.delta + 25;
    }
    if (pos < 50) {
      pos = 75;
    }
    if (pos > height - 350) {
      pos = 975;
    }
  }
  type = pos / 75;
}