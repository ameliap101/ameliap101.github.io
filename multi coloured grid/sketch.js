// Multi Coloured Grid
// Amelia Pilon
// Febuary 27th, 2020

let gridSpacing = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function rectGrid() {
  windowResized();
  for (let y = gridSpacing / 2; y <= windowHeight; y += gridSpacing) {
    for (let x = gridSpacing / 2; x <= windowWidth; x += gridSpacing){
      fill(random(1,255),random(1,255),random(1,255));
      rect(x,y,gridSpacing,gridSpacing);
      
    }
  }
}

function draw() {
  background(220);
  windowResized();
  rectGrid();
}
