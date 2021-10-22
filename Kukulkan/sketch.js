// Grid based game assignment

let gridHeight = 15;
let gridWidth = 17;
let grid;
let cellSize = 40;
let newTail;
let foodX = 13;
let foodY = 4;
let direction = "";
let start = false;
let gameOver = false;
let cheats = false;
let difficulty = 3;
let snakeColor = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let snakeColorCounter = 0;
let snakeFramerate;
let startButton, colorButton, difficultyButton;
let points = 4;
let tsMusic, music1, music2, music3, goMusic;
let difficultyWord = "easy";
let tsMusicEnabled = true;

let tail = [
  {x:0, y:0}];

let snake = [
  {x:4, y:4},
  {x:3, y:4},
  {x:2, y:4},
  {x:1, y:4},];

function preload() {
  tsMusic = loadSound("assets/level-1.wav");
}


function setup() {
  createCanvas(cellSize * gridWidth, cellSize * gridHeight);
  grid = createEmptyGrid(gridWidth, gridHeight);
  grid[4][13] = 1;
  
  difficulty = 3;
}

function draw() {
  background(0);
  if (gameOver === true && cheats === false) {
    gameOverScreen(points, difficulty);
  }
  else {
    startScreen();
    if (start === true) {
      displayGrid();
      moveSnake();
      displaySnake();
      randomFood();
      displayPoints();
    }
  }
}


function moveSnake() { //Error
  tail.x = snake[snake.length-1].x;
  tail.y = snake[snake.length-1].y;
  grid[snake[snake.length -1].y ][snake[snake.length -1].x] = 0;
  newTail = [
    {x:tail.x, y:tail.y}
  ];
  if (direction === "up" && frameCount % snakeFramerate === 0) {
    if (snake[0].y > 0){
      if (grid[snake[0].y -1][snake[0].x] === 1){
        snake.push(newTail);
        points += 1;
      }
      if (grid[snake[0].y -1][snake[0].x] === 0 || grid[snake[0].y -1][snake[0].x] === 1){
        for (let i= snake.length -1; i>0; i--){
          snake[i].y = snake[i-1].y;
          snake[i].x = snake[i-1].x;
        }
        snake[0].y -= 1;
      }
      else {
        gameOver = true;
      }
    }
    else {
      gameOver = true;
    }
  }
  else if (direction === "left" && frameCount % snakeFramerate === 0) {
    if (snake[0].x > 0){
      if (grid[snake[0].y][snake[0].x -1] === 1){
        snake.push(newTail);
        points += 1;
      }
      if (grid[snake[0].y][snake[0].x -1] === 0 || grid[snake[0].y][snake[0].x -1] === 1){
        for (let i= snake.length -1; i>0; i--){
          snake[i].y = snake[i-1].y;
          snake[i].x = snake[i-1].x;
        }
        snake[0].x -= 1;
      }
      else {
        gameOver = true;
      }
    }
    else {
      gameOver = true;
    }
  }
  else if (direction === "down" && frameCount % snakeFramerate === 0) {
    if (snake[0].y < gridHeight -1){
      if (grid[snake[0].y +1][snake[0].x] === 1){
        snake.push(newTail);
        points += 1;
      }
      if (grid[snake[0].y +1][snake[0].x] === 0 || grid[snake[0].y +1][snake[0].x] === 1){
        for (let i= snake.length -1; i>0; i--){
          snake[i].y = snake[i-1].y;
          snake[i].x = snake[i-1].x;
        }
        snake[0].y += 1;
      }
      else {
        gameOver = true;
      }
    }
    else {
      gameOver = true;
    }
  }
  else if (direction === "right" && frameCount % snakeFramerate === 0) {
    if (snake[0].x < gridWidth - 1){
      if (grid[snake[0].y][snake[0].x +1] === 1){
        snake.push(newTail);
        points += 1;
      }
      if (grid[snake[0].y][snake[0].x +1] === 0 || grid[snake[0].y][snake[0].x +1] === 1){
        for (let i= snake.length -1; i>0; i--){
          snake[i].y = snake[i-1].y;
          snake[i].x = snake[i-1].x;
        }
        snake[0].x += 1;
      }
      else {
        gameOver = true;
      }
    }
    else {
      gameOver = true;
    }
  }
}

function displayGrid() {
  for (let y=0; y<grid.length; y++) {
    for (let x=0; x<grid[y].length; x++) {
      if (grid[y][x] === 0) {
        stroke("black");
        if (cheats === true) {
          stroke("white");
        }
        fill("black");
      }
      else if (grid[y][x] === 1) {
        fill("white");
      }
      else if (grid[y][x] === 9){
        fill(snakeColor[snakeColorCounter]);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function createEmptyGrid(howWide, howHigh){
  let emptyArray = [];
  for (let y=0; y<howHigh; y++) {
    emptyArray.push([]);
    for (let x=0; x<howWide; x++) {
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
}

function createRandomGrid(howWide, howHigh) {
  let emptyArray = [];
  for (let y=0; y<howHigh; y++) {
    emptyArray.push([]);
    for (let x=0; x<howWide; x++) {
      if (random(0, 100) < 50) {
        emptyArray[y].push(1);
      }
      else {
        emptyArray[y].push(0);
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
  if (key === "w" && direction !== "down"){
    direction = "up";
  }
  else if (key === "a" && direction !== "right"){
    direction = "left";
  }
  else if (key === "s" && direction !== "up"){
    direction = "down";
  }
  else if (key === "d" && direction !== "left"){
    direction = "right";
  }
}

// function randomFood() {
//   if (grid[foodY][foodX] !== 1) {
//     foodX = round(random(0, gridWidth));
//     foodY = round(random(0, gridHeight));
//   }
//   if (grid[foodY][foodX] === 0) {
//     grid[foodY][foodX] = 1;
//   }
// }

function randomFood() {
  if (grid[foodY][foodX] !== 1) {
    foodX = round(random(0, gridWidth));
    foodY = round(random(0, gridHeight));
    foodPlacementGenerator();
  }
  grid[foodY][foodX] = 1;
}

function foodPlacementGenerator() {
  while(grid[foodY][foodX] !== 0) {
    foodX = round(random(0, gridWidth));
    foodY = round(random(0, gridHeight));
  }
}

function displayPoints() {
  fill("white");
  textSize(50);
  textAlign(CENTER, CENTER);
  text(str(points), width/2, 25);
}



//---------------------------------------------------------------------------------------------------------------------------------------------
//Start screen and game over screen



class Button {
  constructor(y, text) {
    this.y = y;
    this.text = text;
    this.tColor = "#B7C3CD";
    this.dark = "#404E5C";
    this.light = "#4F6272";
  }

  display() {
    if (this.checkIfInside(mouseX, mouseY)) {
      fill(color(this.light));
    }
    else {
      fill(color(this.dark));
    }
    rect (width/2 -125, this.y, 250, 50);
    fill(color(this.tColor));
    textSize(30);
    textAlign(CENTER, CENTER);
    text(this.text, width/2, this.y + 25);
  }

  checkIfInside(x, y) {
    return x >= width/2 -100 && x <= width/2 -100 + 200 && y >= this.y &&  y <= this.y + 50;
  }
}

function startScreen() {
  titleText("Kukulkan");
  startButton = new Button (250, "Start");
  startButton.display();
  difficultyButton = new Button (325, "Difficulty: " + difficultyWord);
  difficultyButton.display();
  colorButton = new Button (400, "Color: " + str(snakeColor[snakeColorCounter]));
  colorButton.display();
}

function gameOverScreen(endPoints, difficulty) {
  titleText("Game Over");
  fill(color("#B7C3CD"));
  textSize(30);
  textAlign(CENTER, CENTER);
  text("Points: " + str(points), width/2, 250 + 25);
  text("Difficulty: " + difficultyWord, width/2, 300 + 25);
}

function titleText(words) {
  fill(color("#B7C3CD"));
  stroke(color("#B7C3CD"));
  textSize(75);
  textAlign(CENTER, CENTER);
  text(str(words), width/2, 200);
}


//---------------------------------------------------------------------------------------------------------------------------------------------

function mousePressed(){
  if (tsMusicEnabled === true) {
    tsMusic.loop();
    tsMusicEnabled = false;
  }
  if(mouseX <= width && mouseY <= height && direction !== ""){
    if (cheats === true) {
      let cellX = Math.floor(mouseX/(width/gridWidth));
      let cellY = Math.floor(mouseY/(height/gridHeight));
      swap(cellX, cellY);
    }
  }  
  if (startButton.checkIfInside(mouseX, mouseY) && gameOver === false && start === false) {
    snakeFramerate = difficulty * 5;
    start = true;
  }
  if (difficultyButton.checkIfInside(mouseX, mouseY) && difficulty > 1 && gameOver === false && start === false) {
    difficulty -= 1;
    if (difficulty === 1) {
      difficultyWord = "hard";
    }
    if (difficulty === 2) {
      difficultyWord = "medium";
    }
    if (difficulty === 3) {
      difficultyWord = "easy";
    }
  }
  else if (difficultyButton.checkIfInside(mouseX, mouseY) && gameOver === false && start === false) {
    difficulty = 3;
    if (difficulty === 1) {
      difficultyWord = "hard";
    }
    if (difficulty === 2) {
      difficultyWord = "medium";
    }
    if (difficulty === 3) {
      difficultyWord = "easy";
    }
  }
  if (colorButton.checkIfInside(mouseX, mouseY) && gameOver === false && start === false) {
    if (snakeColorCounter < 6) {
      snakeColorCounter++;
    }
    else {
      snakeColorCounter = 0;
    }
  }
  if (mouseX >= 420 && mouseX <= 430 && mouseY >= 205 &&  mouseY <= 225 && gameOver === false && start === false) {
    cheats = !cheats;
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
