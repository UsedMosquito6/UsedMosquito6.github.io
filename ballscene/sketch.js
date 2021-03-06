// Ball Scene

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let index = 0; index < 1000; index++) {
    spawnBall();
  }
  //spawn a ball every 0.5 seconds
  //window.setInterval(spawnBall, 500);
}

function draw() {
  background(255);
  checkIfBallTounchingMouse();
  moveBall();
  displayBall();
  
}

function checkIfBallTounchingMouse(){
  for (let i = ballArray.length-1; i >=0; i--){
    let howFarAway = dist(ballArray[i].x, ballArray[i].y, mouseX, mouseY);
    if (howFarAway < ballArray[1].radius){
      ballArray.splice(i, 1);
    }
  }
}



function mousePressed(){                              //shoot
  spawnBall();
  ballArray[ballArray.length-1].x = mouseX;
  ballArray[ballArray.length-1].y = mouseY;
}

function spawnBall(){
  let newBall = {
    x: random(width),
    y: random(height),
    //x: mouseX,
    //y: mouseY,
    radius: random(10, 30),
    ballColor: color(random(255), random(255), random(255), random(255)),
    dx: random(5, 10),
    dy: random(5, 10),
    xTime : random(1000),
    yTime : random(1000),
    timeChange : random(0.001, 0.01),
  };
  ballArray.push(newBall);    
}



function moveBall() {
  for (let theBall of ballArray) {
    // theBall.x += theBall.dx;
    // theBall.y += theBall.dy;
    // theBall.dx = random(-5, 5);
    // theBall.dy = random(-5, 5);
    theBall.x = noise(theBall.xTime) * width;
    theBall.y = noise(theBall.yTime) * height;

    theBall.xTime += theBall.timeChange;
    theBall.yTime += theBall.timeChange;
  }

}

function displayBall() {
  for (let ball of ballArray) {
    noStroke();
    fill(ball.ballColor);
    circle(ball.x, ball.y, ball.radius*2);
  }
}