// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



//HEIGHT 789
//WIDTH 858

let gridHeight = 15;
let gridWidth = 17;
let grid;
let cellSize;
let newTail;
let deleteEnd;
let foodX = 13;
let foodY = 4;
let direction = "";
let snakeFramerate = 15;

let tail = [
  {x:0, y:0}];

let snake = [
  {x:4, y:4},
  {x:3, y:4},
  {x:2, y:4},
  {x:1, y:4},];

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createEmptyGrid(gridWidth, gridHeight);
  grid[4][13] = 1;
}

function draw() {
  background(220);
  displayGrid();
  moveSnake();
  displaySnake();
  randomFood();
}

function moveSnake() {
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
  let cellSize = windowWidth/17;

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
        fill("green");
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
  if (key === "w"){
    direction = "up";
  }

  else if (key === "a"){
    direction = "left";
  }

  else if (key === "s"){
    direction = "down";
  }

  else if (key === "d"){
    direction = "right";
  }
}

function randomFood() {
  if (grid[foodY][foodX] !== 1) {
    foodX = round(random(0, gridWidth));
    foodY = round(random(0, gridHeight));
  }
  if (grid[foodY][foodX] === 0) {
    grid[foodY][foodX] = 1;
  }
}


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












