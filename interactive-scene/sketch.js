// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let radius = 25;
let a, b, missile, tankGB, tankGT;
let theta = 0;
let bx = 0;
let by = 0;
let x = 0;
let y = 0;
let speed = 1;
let bSpeed = 10;
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
}

function draw() {
  background(204);
  angleMode(DEGREES);
  move();
  tankBottom();
  tankTop();
  ammoSelectionSquare();
}

//---------------------------------------------------------------------

function tankTop() {
  push();
  translate(x, y);
  a = atan2(mouseY-y , mouseX-x );
  rotate(90);
  rotate(a);
  imageMode(CENTER);
  image(tankGT, 0, 0, radius * 2, radius * 2);
  pop();
}

function keyTyped() {
  if (key === "f") {
    push();
    translate(x,y);
    fill("grey");
    if (type === 1) {
      circle(bx, by, 5*40);
    } 
    else if (type === 2) {
      image(missile, bx, by, 25*10, 5*10);
    }
    //rotate(a);
    bx += cos(a) * bSpeed;
    by += sin(a) * bSpeed;
    pop(); 
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
    x += cos(theta) * speed;
    y += sin(theta) * speed;
  }
  if (keyIsDown(83)) {
    x -= cos(theta) * speed;
    y -= sin(theta) * speed;
  }

}

function tankBottom(){
  push();
  translate(x, y);
  rotate(theta);
  imageMode(CENTER);
  image(tankGB, 0, 0, radius * 2, radius * 2);
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
