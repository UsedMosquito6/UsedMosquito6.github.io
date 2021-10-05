// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gridDimensions = 10;
let grid, ax, ay;
let level1;
let snake = [
  {x:4, y:4},
  {x:3, y:4},
  {x:2, y:4},
  {x:1, y:4},];


function preload(){
  level1 = loadJSON("assets/blank-grid.json");
}

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight *0.8, windowHeight *0.8);
  }
  else {
    createCanvas(windowWidth *0.8, windowWidth *0.8);
  }
  
  //grid = createEmptyGrid(gridDimensions);
  grid = level1;
}

function draw() {
  background(220);
  displayGrid();
}

function windowResized(){
  setup();
}

function displayGrid() {
  let cellSize = width/gridDimensions;
  for (let y=0; y<gridDimensions; y++) {
    for (let x=0; x<grid[y].length; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill("black");
      }
      else if (grid[y][x] === 9){
        fill("red");
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}





function createEmptyGrid(howLarge) {
  let emptyArray = [];
  for (let y=0; y<howLarge; y++) {
    emptyArray.push([]);
    for (let x=0; x<howLarge; x++) {
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
        emptyArray[y].push(0);
      }
    }
  }
  return emptyArray;
}


function mousePressed(){
  if(mouseX <= width && mouseY <= height){
    let cellX = Math.floor(mouseX/(width/gridDimensions));
    let cellY = Math.floor(mouseY/(height/gridDimensions));
    swap(cellX, cellY);
    // swap(cellX, cellY - 1);
    // swap(cellX, cellY + 1);
    // swap(cellX + 1, cellY);
    // swap(cellX - 1, cellY);
  }
}



function swap(x, y){
  if (x>=0 && x < gridDimensions && y>=0 && x < gridDimensions){
    if (grid[y][x] === 0){
      grid [y][x] = 1;
    }
    else if (grid[y][x] === 1){
      grid [y][x] = 0;
    }
  }
}

function keyPressed(){
  if (key === "d"){
    tryMovingTo(snake[0].x, snake[0].y +1);
  }
  else if (key === "a"){
    tryMovingTo(snake[0].x, snake[0].y-1);
  }
  else if (key === "w"){
    tryMovingTo(snake[0].x-1, snake[0].y);
  }
  else if (key === "s"){
    tryMovingTo(snake[0].x+1, snake[0].y);
  }
  
}




function tryMovingTo(newX, newY){
  if(newX >= 0 && newY >=0 && newX < gridDimensions && newY < gridDimensions){
    if(grid[newY][newX] === 0){
      for(let p = 1; p < snake.length; p++){
        snake[p].x = snake[p - 1].x;
        snake[p].y = snake[p - 1].y;
        grid[snake[p].x][snake[p].y] = 9;
        grid[snake[snake.length-1].x][snake[snake.length-1].y] = 0;
      }
    }
  }
  snake[0].x = newX;
  snake[0].y = newY;
  grid[snake[0].x][snake[0].y] = 9;
}