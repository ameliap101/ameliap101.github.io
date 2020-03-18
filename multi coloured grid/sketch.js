// Multi Coloured Grid
// Amelia Pilon
// Febuary 27th, 2020

let gridSpacing = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  windowResized();
  rectGrid();

}

function windowResized() {  // resets the screen
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
  windowResized();
  rectGrid();
  if (keyIsDown(SHIFT) && gridSpacing != 100) {//if you hold shift the grid gets bigger
    gridSpacing += 1;
  }
  else if (gridSpacing != 10) {// grild gets smaller 
    gridSpacing -= 1;
  }
}
function rectGrid() {
  //creates the grid of random coloured squares
  for (let y = 0; y <= windowHeight; y += gridSpacing) {
    for (let x = 0; x <= windowWidth; x += gridSpacing) {
      fill(random(1, 255), random(1, 255), random(1, 255));//random colored
      if (x + gridSpacing <= width && y + gridSpacing <= height) {
        rect(x, y, gridSpacing, gridSpacing);
      }
    }
  }
}

function draw() {
}
