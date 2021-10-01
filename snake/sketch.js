// // Project Title
// // Your Name
// // Date
// //
// // Extra for Experts:
// // - describe what you did to take this project "above and beyond"

// let gridSize = 11;
// let grid;
// let cellX = 5;
// let cellY = 5;

// function setup() {
//   if (windowWidth > windowHeight) {
//     createCanvas(windowHeight, windowHeight);
//   }
//   else {
//     createCanvas(windowWidth, windowWidth);
//   }
  
//   grid = createEmptyGrid(gridSize);
// }

// function draw() {
//   background(220);
//   displayGrid();
//   move();
// }

// function displayGrid() {
//   let cellSize = width/gridSize;
//   for (let y=0; y<grid.length; y++) {
//     for (let x=0; x<grid[y].length; x++) {
//       if (grid[y][x] === 0) {
//         fill("white");
//       }
//       else if (grid[y][x] === 1) {
//         fill("black");
//       }
//       rect(x*cellSize, y*cellSize, cellSize, cellSize);
//     }
//   }
// }



// function createEmptyGrid(howLarge) {
//   let emptyArray = [];
//   for (let y=0; y<howLarge; y++) {
//     emptyArray.push([]);
//     for (let x=0; x<howLarge; x++) {
//       emptyArray[y].push(0);
//     }
//   }
//   emptyArray[cellY][cellX] = 1;
//   return emptyArray;
// }


// function move() {   
//   if (keyIsDown(87)) {
//     if (cellY > 0){
//       swap(cellX, cellY);
//       swap(cellX, cellY -1);
//       cellY = cellY - 1;
//     }
//   }
//   if (keyIsDown(65)) {
//     if (cellX > 0){
//       swap(cellX, cellY);
//       swap(cellX -1, cellY);
//       cellX = cellX -1;   
//     } 
//   }
//   if (keyIsDown(83)) {
//     if (cellY < gridSize -1){
//       swap(cellX, cellY);
//       swap(cellX, cellY +1);
//       cellY = cellY + 1;
//     }
//   }
//   if (keyIsDown(68)) {
//     if (cellX < gridSize -1){
//       swap(cellX, cellY);
//       swap(cellX +1, cellY);
//       cellX = cellX +1;
//     }
//   }
// }

// // function mousePressed(){
// //   //let cellX = Math.floor(mouseX/(width/gridSize));
// //   //let cellY = Math.floor(mouseY/(height/gridSize));
// //   swap(cellX, cellY);
// //   swap(cellX, cellY - 1);
// //   swap(cellX, cellY + 1);
// //   swap(cellX + 1, cellY);
// //   swap(cellX - 1, cellY);
// // }



// function swap(x, y){
//   if (x>=0 && x < gridSize && y>=0 && x < gridSize){
//     if (grid[y][x] === 0){
//       grid [y][x] = 1;
//     }
//     else if (grid[y][x] === 1){
//       grid [y][x] = 0;
//     }
//   }
// }

















// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let gridDimensions = 10;
let grid, ax, ay;
let level1;
let playerX = 0;
let playerY = 0;

function preload(){
  level1 = loadJSON("assets/level1.json");
}

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  
  //grid = createRandomGrid(gridSize);
  grid = level1;
}

function draw() {
  background(220);
  displayGrid();
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
  if (key === "s"){
    tryMovingTo(playerX, playerY+1);
  }
  else if (key === "w"){
    tryMovingTo(playerX, playerY-1);
  }
  else if (key === "a"){
    tryMovingTo(playerX-1, playerY);
  }
  else if (key === "d"){
    tryMovingTo(playerX+1, playerY);
  }
}

function tryMovingTo(newX, newY){
  if(newX >= 0 && newY >=0 && newX < gridDimensions && newY < gridDimensions){
    if(grid[newY][newX] === 0){
      grid[playerY][playerX] = 0;
      playerX = newX;
      playerY = newY;
      grid[newY][newX] = 9;
    }
  }



}