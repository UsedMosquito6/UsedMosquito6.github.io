// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let tankGT;
let tankGB;
let missile;
let radius = 25;
let x, y, a;
let theta;
let bx = 0;
let by = 0;
let cx = 0;
let cy = 0;
let speed = 8;
let pos = 100;
let type;

function preload() {
  tankGT = loadImage("assets/tankG-T.png");
  missile = loadImage("assets/missile.png");
  tankGB = loadImage("assets/tankG-B.png");
}

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  x = 0;
  y = 0;
}

function draw() {
  background(204);
  angleMode(DEGREES); // Change the mode to DEGREES
  shoot();
  tankBottom();
  tankTop();
  move();
  ammoSelectionSquare();
}

//---------------------------------------------------------------------

function tankTop() {
  a = atan2(mouseY - height / 2, mouseX - width / 2);
  push();
  cx = width / 2;
  cy = height / 2;
  translate(cx, cy);
  cx = 0;
  cy = 0;
  rotate(90);
  rotate(a);
  imageMode(CENTER);
  image(tankGT, cx, cy, radius * 2, radius * 2);
  pop();
}

function shoot() {
  push();
  if (keyIsDown(32)) {
    translate(width / 2, height / 2);
    fill("grey");
    if (type === 1) {
      circle(bx, by, 5);
    } 
    else if (type === 2) {
      image(missile, bx, by, 25, 5);
    }
    rotate(a);
    bx += cos(a) * speed;
    by += sin(a) * speed;
    pop();
  } 
  else {
    bx = 0;
    by = 0;
  }
}

function move(){
  if (keyIsDown(68)) {
    theta += 2.5;
  }
  if (keyIsDown(65)) {
    theta -= 2.5;
  }
  if (keyIsDown(87)) {
    cx += cos(theta) * speed;
    cy += sin(theta) * speed;
  }
  if (keyIsDown(83)) {
    cx -= cos(theta) * speed;
    cy -= sin(theta) * speed;
  }

}

function tankBottom(){
  push();
  cx = width / 2;
  cy = height / 2;
  translate(cx, cy);
  cx = 0;
  cy = 0;
  rotate(theta);
  imageMode(CENTER);
  image(tankGB, cx, cy, radius * 2, radius * 2);
  pop();

}





function ammoSelectionSquare() {
  rectMode(CENTER);
  imageMode(CENTER);
  noFill();
  for (let i = 0; i < 5; i++) {
    square(i * 100 + 100, height - 50, 50);
  }
  square(pos, height - 50, 50);
  beginShape();
  vertex(pos - 20, height -20);
  vertex(pos + 20, height -20);
  endShape();
  image(missile, 200, height - 50, 50, 10);
}

function mouseWheel(event) {
  //print(event.delta);
  if (pos > 50 && pos < width - 50) {
    pos += event.delta;
    //print(pos);
    if (pos < 50) {
      pos = 100;
    }
    if (pos > width - 50) {
      pos = width - 100;
    }
  }
  type = pos / 100;
  //print(type);
}
