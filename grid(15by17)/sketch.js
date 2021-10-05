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
  let cellSize = width/gridWidth;

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
  if (key === "w"){
    snake[0].y += 1;
    for (let i=0; i<snake.length; i++){
      snake[i].y = snake[0].y;
    
    }

  }
}











