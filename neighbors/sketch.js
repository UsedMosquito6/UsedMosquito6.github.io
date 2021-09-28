// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let gridDimensions = 10;
let grid;


function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createArray(gridDimensions);
}

function draw() {
  background(220);


  createArray();
}




function createArray(howLarge){
  let newArray = [];
  for(let y=0; y<howLarge; y++){
    newArray.push([]);
    for(let x=0; x<howLarge; y++){
      newArray[y].push(0);
    }
  }
  return newArray;
}


