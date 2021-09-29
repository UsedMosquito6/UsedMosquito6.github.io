// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gridSize = 30;
let grid, ax, ay;
let autoplay = false;

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  
  grid = createRandomGrid(gridSize);
}

function draw() {
  background(220);
  displayGrid();
  if (autoplay && frameCount % 10 === 0) {
    update();
  }
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

function keyPressed() {
  if (key === "e"){
    grid = createEmptyGrid(gridSize);
  }
  if (key === "r"){
    grid = createRandomGrid(gridSize);
  }
  if (key === " "){
    update();
  }
  if (key === "p"){
    autoplay = !autoplay;
  }
}

function mousePressed(){
  if(mouseX <= width && mouseY <= height){
    let cellX = Math.floor(mouseX/(width/gridSize));
    let cellY = Math.floor(mouseY/(height/gridSize));
    swap(cellX, cellY);
  }
}



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





function update() {
  //need another array so you don't mess up the decisions you're making
  let nextTurn = createEmptyGrid(gridSize);

  for (let y=0; y<gridSize; y++) {
    for (let x=0; x<gridSize; x++) {
      let neighbours = 0;

      //look at the cells in a 3x3 grid next to current cell
      for (let i=-1; i<=1; i++) {
        for (let j=-1; j<=1; j++) {
          if (y+i>=0 && x+j>=0 && y+i<gridSize && x+j<gridSize) {
            neighbours += grid[y+i][x+j];
          }
        }
      }

      //fix adding self
      neighbours -= grid[y][x];

      //applying rules
      if (grid[y][x] === 0) {  //dead
        if (neighbours === 3) {
          nextTurn[y][x] = 1;
        }
        else {
          nextTurn[y][x] = 0;
        }
      }

      if (grid[y][x] === 1) { //alive
        if (neighbours === 2 || neighbours === 3) {
          nextTurn[y][x] = 1;
        }
        else {
          nextTurn[y][x] = 0;
        }
      }
    }
  }

  grid = nextTurn;
}