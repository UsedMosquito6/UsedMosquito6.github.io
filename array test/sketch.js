let ballArray = [];
let bSpeed = 8;
let a;
let x, y, tankGT, missile, tankGB, bx, by;
let radius = 5;
let tRadius = 25;

function preload() {
  tankGT = loadImage("assets/tankG-T.png");
  missile = loadImage("assets/missile.png");
  tankGB = loadImage("assets/tankG-B.png");
}

function setup() {
  createCanvas(400, 400);
  push();
  x = 200;
  y = 200;
  translate(x, y);
  pop();
}

function draw() {
  background(220);
  tankTop();
  displayBall();
  moveBall();
}

//------------------------------------------------------------------------------------------------------------------------------------------------

function tankTop() {
  push();
  translate(x, y);
  a = atan2(mouseY-y , mouseX-x );
  rotate(a);
  imageMode(CENTER);
  image(tankGT, 0, 0, tRadius * 2, tRadius * 2);
  pop();
}

function mousePressed() {                             
  push();
  console.log(x);
  console.log(y);
  spawnBall();
  ballArray[ballArray.length-1].bx = 0;
  ballArray[ballArray.length-1].by = 0;
  pop();
}

function spawnBall() {
  push();
  translate (x, y);
  let newBall = {
    bx: 0,
    by: 0,
    radius: 30,
    ballColor: "grey",
    changeX : cos(a) * bSpeed,
    changeY : sin(a) * bSpeed,
  };
  ballArray.push(newBall);    
  pop();
}

function displayBall() {
  for (let ball of ballArray) {
    noStroke();
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


// function shoot() {
//   push();
//   if (keyIsDown(32)) {
//     translate(x,y);
//     fill("grey");
//     if (type === 1) {
//       fill("grey");
//       circle(bx, by, 5*40);
//       bulletMovementX = cos(a) * bSpeed;
//       bulletMovementY = sin(a) * bSpeed;
//       bx += bulletMovementX;
//       by += bulletMovementY;
//     } 
//     else if (type === 2) {
//       image(missile, bx, by, 25*10, 5*10);
//       bx += cos(a) * bSpeed;
//       by += sin(a) * bSpeed;
//     }
//     //rotate(a);
//     bx += cos(a) * bSpeed;
//     by += sin(a) * bSpeed;
//     pop();
//   } 
//   else {
// @ @@