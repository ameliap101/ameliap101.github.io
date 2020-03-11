// generative art demo
let gridSize = 20;
let seed; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  seed = random(1,1000);
}
function diagonal(x, y, s, dir) {
  //dir → is acending, 1 or anything else → is decending
  if (dir == 0) { //acending
    line(x - s / 2, y + s / 2, x + s / 2, y - s / 2);
  }
  else if (dir === 1) {
    line(x - s / 2, y - s / 2, x + s / 2, y + s / 2);
  }
}

function border() {
  strokeWeight(15);
  rect(0, 0, width, height);
  strokeWeight(2);
}

function createTiles() {
  for (let x = gridSize / 2; x < width; x += gridSize) {
    for (let y = gridSize / 2; y < height; y += gridSize) {
      diagonal(x, y, gridSize, int(random(2)));
    }
  }
}

function draw() {
  gridSize = map(mouseX,0,width,5,60);
  randomSeed(seed);
  background(220);
  border();
  createTiles();

}