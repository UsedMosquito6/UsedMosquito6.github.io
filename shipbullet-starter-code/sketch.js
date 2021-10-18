// OOP Pair Programming Starter Code
// Your Names
// The Date


// ------------------------------------------------------------------------- //
// You don't need to edit this section...

let enterprise;
let shipImage, bulletImage, fire;
let bullet;
let theBullets = [];
let shootSound;
let bgMusic;

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
  shootSound = loadSound("assets/lazer1.flac");
  bgMusic = loadSound("assets/bgmusic.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width / 2, height / 2, shipImage);
  // bullet = new Bullet (this.x, this.y, 7, bulletImage, fire);
  bgMusic.loop();
}

function draw() {
  background(0);
  enterprise.update();
  enterprise.display();
  enterprise.bulletDisplay();
}

function keyPressed() {
  enterprise.handleKeyPress();
  enterprise.bulletArray();
}

function keyReleased() {
  enterprise.handleKeyRelease();
}

// ------------------------------------------------------------------------- //
// Start editing here!

class Ship {
  constructor(x, y, theImage) {
    // define the variables needed for this ship
    this.x = x;
    this.y = y;
    this.dx = 5;
    this.dy = 5;
    this.theImage = theImage;
    this.size = 25;
    this.w = false;
    this.a = false;
    this.s = false;
    this.d = false;
  }

  handleKeyPress() {
    // handle WASD key presses -- you will likely want to change booleans here
    if (keyIsDown(87)) {
      this.w = true;
    }
    if (keyIsDown(83)) {
      this.s = true;
    }
    if (keyIsDown(65)) {
      this.a = true;
    }
    if (keyIsDown(68)) {
      this.d = true;
    }
  }
  
  bulletArray(){
    if (keyIsDown(32)) {
      fire = true;
      bullet = new Bullet (this.x, this.y, 7, bulletImage, fire);
      theBullets.push(bullet);
      shootSound.play();
    }
  }

  bulletDisplay() {
    for (bullet of theBullets) {
      bullet.update();
      bullet.display();
      bullet.isOnScreen();
    }
  }

    
  

  handleKeyRelease() {
    // handle WASD key release -- you will likely want to change booleans here
    if (keyIsDown(87) === false) {
      this.w = false;
    }
    if (keyIsDown(83) === false) {
      this.s = false;
    }
    if (keyIsDown(65) === false) {
      this.a = false;
    }
    if (keyIsDown(68) === false) {
      this.d = false;
    }
  }

  update() {
    // move ship
    if (this.w === true) {
      this.y -= this.dy;
    }
    if (this.s === true) {
      this.y += this.dy;
    }
    if (this.a === true) {
      this.x -= this.dx;
    }
    if (this.d === true) {
      this.x += this.dx;
    }
    // if doing extra for experts, show bullet(s)
  }

  display() {
    image(shipImage, this.x, this.y, this.size, this.size);
    // show the ship
  }
}

// ------------------------------------------------------------------------- //

// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...

class Bullet {
  constructor(x, y, dy, theImage, fire) {
    // define the variables needed for the bullet here
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.theImage = theImage;
    this.fire = fire;
  }

  update() {
    // what does the bullet need to do during each frame? how do we know if it is off screen?
    if (this.fire === true) {
      this.y -= this.dy;
    }
  }

  display() {
    // show the bullet
    image(this.theImage, this.x, this.y, 25, 25);
  }

  isOnScreen() {
    // check if the bullet is still on the screen
    if (this.y < 0) {
      theBullets.shift();
    }
  }
}
