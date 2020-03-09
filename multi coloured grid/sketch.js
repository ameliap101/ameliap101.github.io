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
  if (keyIsDown(SHIFT) && gridSpacing!=100){
    gridSpacing +=1;
  }
  else if (gridSpacing != 10 ) {
    gridSpacing -= 1;
  }
}
function rectGrid() {
  for (let y = 0; y <= windowHeight; y += gridSpacing) {
    for (let x = 0; x <= windowWidth; x += gridSpacing) {
      fill(random(1, 255), random(1, 255), random(1, 255));
      if (x + gridSpacing <= width && y + gridSpacing <= height) {
        rect(x, y, gridSpacing, gridSpacing);
      }
    }
  }
}

function draw() {
}
