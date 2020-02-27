// Loop Grid

let gridSpacing = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
}

//function mouseClicked(){
 // circleGrid();
//}

function circleGrid() {
  for (let y = gridSpacing/2; y < height; y += gridSpacing) {
    for (let x = gridSpacing/2; x < width; x += gridSpacing) {
      let size = random(gridSpacing*0.8,gridSpacing*1.3);
      fill(random(1,255));
      ellipse(x, y, size, size);
    }
  }
}

function draw() {
  background(220);
  circleGrid();
}
