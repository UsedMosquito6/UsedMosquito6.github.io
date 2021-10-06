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

let snake = [
  {x:4, y:4},
  {x:3, y:4},
  {x:2, y:4},
  {x:1, y:4},];

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createEmptyGrid(gridWidth, gridHeight);
}

function draw() {
  background(220);
  displaySnake();
  displayGrid();
  
  
}


function displayGrid() {
  let cellSize = windowWidth/17;

  for (let y=0; y<grid.length; y++) {
    for (let x=0; x<grid[y].length; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill("black");
      }
      else if (grid[y][x] === 9){
        fill("green");
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}


function createEmptyGrid(howWide, howTall) {
  let emptyArray = [];
  for (let y=0; y<howTall; y++) {
    emptyArray.push([]);
    for (let x=0; x<howWide; x++) {
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
}

function createRandomGrid(howLarge) {
  let emptyArray = [];
  for (let y=0; y<howLarge; y++) {
    emptyArray.push([]);
    for (let x=0; x<howLarge; x++) {
      if (random(0, 100) < 50) {
        emptyArray[y].push(0);
      }
      else {
        emptyArray[y].push(1);
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
  grid[snake[snake.length-1].y][snake[snake.length-1].x] = 0;
  if (key === "w"){
    if (snake[0].y >0){
      if (grid[snake[0].y -1][snake[0].x] === 0){
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
  if (key === "a"){
    for (let i= snake.length -1; i>0; i--){
      snake[i].y = snake[i-1].y;
      snake[i].x = snake[i-1].x;
    }
    snake[0].x -= 1;
  }
  if (key === "s"){
    for (let i= snake.length -1; i>0; i--){
      snake[i].y = snake[i-1].y;
      snake[i].x = snake[i-1].x;
    }
    snake[0].y += 1;
  }
  if (key === "d"){
    for (let i= snake.length -1; i>0; i--){
      snake[i].y = snake[i-1].y;
      snake[i].x = snake[i-1].x;
    }
    snake[0].x += 1;
  }
}



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












