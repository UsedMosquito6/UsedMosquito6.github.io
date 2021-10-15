// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let gridHeight = 15;
let gridWidth = 17;
let grid;
let cellSize;
let newTail;
let deleteEnd;
let foodX = 13;
let foodY = 4;
let direction = "";
let start = false;
let gameOver = false;
let difficulty = 1;
let snakeColor = "green";

let startButton, colorButton, difficultyButton;

let points = 4;

let tail = [
  {x:0, y:0}];

let snake = [
  {x:4, y:4},
  {x:3, y:4},
  {x:2, y:4},
  {x:1, y:4},];

function setup() {
  createCanvas(850, 750);
  grid = createEmptyGrid(gridWidth, gridHeight);
  grid[4][13] = 1;
}

function draw() {
  background(0);
  startScene();
  startButton();
  difficultyButton();
  colorButton();

  if (start === true) {
    displayGrid();
    moveSnake();
    displaySnake();
    randomFood();
    displayPoints();
  }
}

function moveSnake() { //error if a turn and back direction are changed before the head moves.
  let snakeFramerate = difficulty * 10 + 5;
  tail.x = snake[snake.length-1].x;
  tail.y = snake[snake.length-1].y;
  grid[snake[snake.length -1].y ][snake[snake.length -1].x] = 0;
  newTail = [
    {x:tail.x, y:tail.y}
  ];
  if (direction === "up" && frameCount % snakeFramerate === 0) {
    if (snake[0].y > 0){
      if (grid[snake[0].y -1][snake[0].x] === 1){
        snake.push(newTail);
      }
      if (grid[snake[0].y -1][snake[0].x] === 0 || grid[snake[0].y -1][snake[0].x] === 1){
        for (let i= snake.length -1; i>0; i--){
          snake[i].y = snake[i-1].y;
          snake[i].x = snake[i-1].x;
        }
        snake[0].y -= 1;
      }
      //else{ game over
    }
    //else { game over
  }
  else if (direction === "left" && frameCount % snakeFramerate === 0) {
    if (snake[0].x > 0){
      if (grid[snake[0].y][snake[0].x -1] === 1){
        snake.push(newTail);
      }
      if (grid[snake[0].y][snake[0].x -1] === 0 || grid[snake[0].y][snake[0].x -1] === 1){
        for (let i= snake.length -1; i>0; i--){
          snake[i].y = snake[i-1].y;
          snake[i].x = snake[i-1].x;
        }
        snake[0].x -= 1;
      }
      //else{ game over
    }
    //else{ game over
  }
  else if (direction === "down" && frameCount % snakeFramerate === 0) {
    if (snake[0].y < gridHeight -1){
      if (grid[snake[0].y +1][snake[0].x] === 1){
        snake.push(newTail);
      }
      if (grid[snake[0].y +1][snake[0].x] === 0 || grid[snake[0].y +1][snake[0].x] === 1){
        for (let i= snake.length -1; i>0; i--){
          snake[i].y = snake[i-1].y;
          snake[i].x = snake[i-1].x;
        }
        snake[0].y += 1;
      }
      //else{ game over
    }
    //else{ game over
  }
  else if (direction === "right" && frameCount % snakeFramerate === 0) {
    if (snake[0].x < gridWidth - 1){
      if (grid[snake[0].y][snake[0].x +1] === 1){
        snake.push(newTail);
      }
      if (grid[snake[0].y][snake[0].x +1] === 0 || grid[snake[0].y][snake[0].x +1] === 1){
        for (let i= snake.length -1; i>0; i--){
          snake[i].y = snake[i-1].y;
          snake[i].x = snake[i-1].x;
        }
        snake[0].x += 1;
      }
      //else{ game over
    }
    //else{ game over
  }
}

function displayGrid() {
  let cellSize = 50;

  for (let y=0; y<grid.length; y++) {
    for (let x=0; x<grid[y].length; x++) {
      if (grid[y][x] === 0) {
        stroke("black");
        //stroke("white");
        fill("black");
      }
      else if (grid[y][x] === 1) {
        fill("red");
      }
      else if (grid[y][x] === 9){
        fill("#C2F6FE");
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function createEmptyGrid(howWide, howHigh){
  let emptyArray = [];
  for (let y=0; y<howHigh; y++) {
    emptyArray.push([]);
    for (let x=0; x<howWide; x++) {
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
}

function createRandomGrid(howWide, howHigh) {
  let emptyArray = [];
  for (let y=0; y<howHigh; y++) {
    emptyArray.push([]);
    for (let x=0; x<howWide; x++) {
      if (random(0, 100) < 50) {
        emptyArray[y].push(1);
      }
      else {
        emptyArray[y].push(0);
      }
    }
  }
  return emptyArray;
}

function displaySnake(){
  for (let i = 0; i < snake.length; i++){
    grid[snake[i].y][snake[i].x] = 9;
  }
}

function keyPressed(){
  if (key === "w" && direction !== "down"){
    direction = "up";
  }

  else if (key === "a" && direction !== "right"){
    direction = "left";
  }

  else if (key === "s" && direction !== "up"){
    direction = "down";
  }

  else if (key === "d" && direction !== "left"){
    direction = "right";
  }
}

function randomFood() {
  if (grid[foodY][foodX] !== 1) {
    foodX = round(random(0, gridWidth));
    foodY = round(random(0, gridHeight));
    points += 1;
  }
  if (grid[foodY][foodX] === 0) {
    grid[foodY][foodX] = 1;
  }
}


function displayPoints() {
  fill("white");
  textSize(50);
  textAlign(CENTER, CENTER);
  text(str(points), width/2, 25);
}

//---------------------------------------------------------------------------------------------------------------------------------------------


//#029EB6 Dark
//#85EEFE Light
//#C2F6FE Text


class Button {
  constructor(y, text) {
    this.y = y;
    this.text = text;
    this.tColor = "#C2F6FE";
    this.dark = "#029EB6";
    this.light = "#85EEFE";
  }

  display() {
    if (this.checkIfInside(mouseX, mouseY)) {
      fill(this.dark);
    }
    else {
      fill(this.light);
    }
    stroke(this.tcolor);
    rect (width/2 -100, this.y, 200, 50);
    fill(this.tColor);
    textSize(30);
    textAlign(CENTER, CENTER);
    text(this.text, width/2, this.y + 25);
  }

  checkIfInside() {

  }

}




function startScene() {
  fill("#C2F6FE");
  stroke("#C2F6FE");
  textSize(75);
  textAlign(CENTER, CENTER);
  text("Kukulkan", width/2, 200);
}


//function startButton() { // y = 250, text = 'Start'
 

//function difficultyButton() { // y = 325, text = "Difficulty: " + str(difficulty)
 
//function colorButton() { // y = 400, text = "Color: " + str(snakeColor) 



//---------------------------------------------------------------------------------------------------------------------------------------------



function mousePressed(){
  if(mouseX <= width && mouseY <= height){
    let cellX = Math.floor(mouseX/(width/gridWidth));
    let cellY = Math.floor(mouseY/(height/gridHeight));
    swap(cellX, cellY);
  }
}

function swap(x, y){
  if (x>=0 && x < gridWidth && y>=0 && y < gridHeight){
    if (grid[y][x] === 0){
      grid [y][x] = 1;
    }
    else if (grid[y][x] === 1){
      grid [y][x] = 0;
    }
  }
}










