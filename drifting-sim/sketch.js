// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x, y, ay;
let theta = 0;
let vx = 0;
let vy = 0;
let friction = 0.95;
let maxSpeed = 8;
let viper, track;

function preload() {    //Load images
  viper = loadImage("assets/Black_viper.png");
  track = loadImage("assets/race-track.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  x = width/2;
  y = height/2;
}

function draw() {
  background(144);
  imageMode(CENTER);
  image(track, width/2, height/2, 1000, 1000);
  displayShip();
  moveShip();
}


function displayShip() {
  push();
  fill("white");
  translate(x, y);
  rotate(theta);
  imageMode(CENTER);
  image(viper, 0, 0, 30, 30);
  pop();
}

function moveShip() { // Movement
  if (keyIsDown(RIGHT_ARROW)) {
    theta += 4;
  }
  if (keyIsDown(LEFT_ARROW)) {
    theta -= 4;
  }
  if (keyIsDown(UP_ARROW)) {
    moveForward();
  }
  else {
    stopMoving();
  }
}

function moveForward() {
  x += vx;
  y += vy;
  vx += cos(theta) * 0.05;
  vy += sin(theta) * 0.05;
}

function stopMoving() {
  vx *= friction;
  vy *= friction;
  x += vx;
  y += vy;
}