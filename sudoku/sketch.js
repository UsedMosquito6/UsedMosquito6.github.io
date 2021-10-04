// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let initialGrid =[
  [0, 2, 4, 3, 8, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 6, 0, 0, 7],
  [0, 5, 8, 0, 0, 0, 4, 0, 0],
  [4, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 7, 0, 5, 0, 0, 0],
  [0, 0, 0, 0, 2, 0, 0, 0, 8],
  [0, 0, 1, 0, 0, 0, 6, 7, 0],
  [3, 0, 0, 5, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 4, 9, 2, 1, 0],
];

let gridDimensions = 9;
let cellSize;
let grid;

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

