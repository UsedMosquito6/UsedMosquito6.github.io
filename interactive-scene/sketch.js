// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let radius = 25;
let x, y, a;
let cx = 0;
let cy = 0;
let speed = 8;
let pos = 100;
let type;

function preload() {
  tankG = loadImage("assets/tankG-T.png");
  missile = loadImage("assets/missile.png");
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
  tankTop();
  ammoSelectionSquare();
}

//---------------------------------------------------------------------

function tankTop() {
  a = atan2(mouseY - height / 2, mouseX - width / 2);
  push();
  translate(width / 2, height / 2);
  rotate(90);
  rotate(a);
  imageMode(CENTER);
  image(tankG, 0, 0, radius * 2, radius * 2);
  pop();
}

function shoot() {
  push();
  if (keyIsDown(32)) {
    translate(width / 2, height / 2);
    fill("grey");
    if (type === 1) {
      circle(cx, cy, 5);
    } else if (type === 2) {
      image(missile, cx, cy, 25, 5);
    }
    rotate(a);
    cx += cos(a) * speed;
    cy += sin(a) * speed;
    pop();
  } else {
    cx = 0;
    cy = 0;
  }
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
  vertex(pos + 20, height -20)
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
