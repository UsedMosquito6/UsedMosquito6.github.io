// Terrain Generation
// Blake Allin
// 09/22/21
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let heights = [];
let numberOfRectangles;

function setup() {
  createCanvas(windowWidth, windowHeight);
  numberOfRectangles = width;
}

function draw() {
  background(220);
  generateTerrain(numberOfRectangles);
  displayTerrain();
}

function displayTerrain(){
  let rectWidth = width/numberOfRectangles;
  for(let i = 0; i <heights.length; i++){
    fill("black");
    rect(i*rectWidth, height-heights[i], rectWidth, heights[i]);
  }

}


function generateTerrain(howMany){
  let time = 0;
  let dTime = 0.003;
  for(let i = 0; i<howMany; i++){
    let currentHeight = noise(time)* height;
    heights.push(currentHeight);
    time += dTime;
  }
}