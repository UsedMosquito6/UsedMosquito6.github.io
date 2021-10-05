// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let initialGrid;
let gridDimensions = 9;
let cellSize;
let grid;

function preload(){
  initialGrid = loadStrings("assets/level1.txt");
}

function setup() {
  if (windowWidth < windowHeight){
    createCanvas(windowWidth, windowWidth);
  }
  else if (windowWidth > windowHeight){
    createCanvas(windowHeight, windowHeight);
  }
  grid = initialGrid;
  cellSize = width / gridDimensions;
}

initialGrid = convertedToIntGrid(initialGrid);


function convertedToIntGrid(initialGrid){
  //Assume rectagular array
  let rows = initialGrid.length;
  let cols = initialGrid[0].length;

  let newGrid = [];
  for (let y = 0; y < rows; y++){
    newGrid.push([]);
    for (let x =0; x < cols; x++){
      newGrid[y].push(int(initialGrid[y][x]));
    }
  }
  return newGrid;
}

function draw() {
  background(220);
  displayGrid();
}

function displayGrid(){
  for(let y=0; y < gridDimensions; y++){
    for(let x=0; x < gridDimensions; x++){
      fill("white");
      strokeWeight(1);
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
      if (grid[y][x] !== 0){
        fill("black");
        textSize(cellSize);
        textAlign(CENTER, CENTER);
        text(grid[y][x], x*cellSize + cellSize/2, y*cellSize + cellSize/2 +5);
      }
    }
  }
  noFill();
  strokeWeight(10);
  rect(0, 0, width, height);
  for(let i=1; i <= 2; i++){
    strokeWeight(5);
    line(i * (cellSize * 3), 0, i * (cellSize * 3), height);
    line(0, i * (cellSize * 3), width, i * (cellSize * 3));
  }




}

