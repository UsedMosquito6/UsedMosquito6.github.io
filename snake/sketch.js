// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gridSize = 11;
let grid;
let cellX = 5;
let cellY = 5;

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  
  grid = createEmptyGrid(gridSize);
}

function draw() {
  background(220);
  displayGrid();
  move();
}

function displayGrid() {
  let cellSize = width/gridSize;
  for (let y=0; y<grid.length; y++) {
    for (let x=0; x<grid[y].length; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill("black");
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
  emptyArray[cellY][cellX] = 1;
  return emptyArray;
}


function move() {   
  if (keyIsDown(87)) {
    if (cellY > 0){
      swap(cellX, cellY);
      swap(cellX, cellY -1);
      cellY = cellY - 1;
    }
  }
  if (keyIsDown(65)) {
    if (cellX > 0){
      swap(cellX, cellY);
      swap(cellX -1, cellY);
      cellX = cellX -1;   
    } 
  }
  if (keyIsDown(83)) {
    if (cellY < gridSize -1){
      swap(cellX, cellY);
      swap(cellX, cellY +1);
      cellY = cellY + 1;
    }
  }
  if (keyIsDown(68)) {
    if (cellX < gridSize -1){
      swap(cellX, cellY);
      swap(cellX +1, cellY);
      cellX = cellX +1;
    }
  }
}

// function mousePressed(){
//   //let cellX = Math.floor(mouseX/(width/gridSize));
//   //let cellY = Math.floor(mouseY/(height/gridSize));
//   swap(cellX, cellY);
//   swap(cellX, cellY - 1);
//   swap(cellX, cellY + 1);
//   swap(cellX + 1, cellY);
//   swap(cellX - 1, cellY);
// }



function swap(x, y){
  if (x>=0 && x < gridSize && y>=0 && x < gridSize){
    if (grid[y][x] === 0){
      grid [y][x] = 1;
    }
    else if (grid[y][x] === 1){
      grid [y][x] = 0;
    }
  }
}







