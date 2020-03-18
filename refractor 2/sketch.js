
const GRID_SPACE = 75;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  squares();
}

function squares() {
  for (let x = 0; x < 600; x += GRID_SPACE) {
    for (let y = 0; y < 600; y += GRID_SPACE) {
      if (x % 2 === 1 && y % 2 === 1) {
        fill(255);
      }
      else if (x % 2 === 0 && y % 2 === 0) {
        fill(255);
      }
      else {
        fill(0);
      }
      rect(x, y, GRID_SPACE, GRID_SPACE);
    }
  }
}
