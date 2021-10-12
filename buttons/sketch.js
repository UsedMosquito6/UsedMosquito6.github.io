// Button oop

let button1, button2;
let backgroundColor = "white";

function setup() {
  createCanvas(windowWidth, windowHeight);
  button1 = new Button(300, 200, 200, 50);
  button2 = new Button(300, 300, 200, 50);
  button2.notHoveredColor = "#AF3B6E";
  button2.hoverColor = "#C492B1";
}


function draw() {
  background(backgroundColor);
  button1.display();
  button2.display();
}

function mousePressed(){
  if (button1.checkIfInside(mouseX, mouseY)) {
    backgroundColor = "red";
  }
  else if (button2.checkIfInside(mouseX, mouseY)) {
    backgroundColor = "black";
  }
}


class Button {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y; 
    this.width = w;
    this.height = h;
    this.hoverColor = "#8EE3EF";
    this.notHoveredColor = "#37718E";
  }

  display() {
    if (this.checkIfInside(mouseX, mouseY)){
      fill(this.hoverColor);
    }
    else {
      fill(this.notHoveredColor);
    }
    rect(this.x, this.y, this.width, this.height);
  }

  checkIfInside(x, y) {
    return x >= this.x && x <= this.x + this.width && y >= this.y &&  y <= this.y + this.height;
  }
}
