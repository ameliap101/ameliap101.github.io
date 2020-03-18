// Perlin Noise Project
// Amelia Pilon
// March 13th

let rectWidth = 1;
let y;
let yTime = 10;
let moveRect = 0.1;
let tallestX, tallest;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  strokeWeight(0);
  fill(81, 240, 184);

}

function generateTerrain() {
  //this generates the the graph
  strokeWeight(0);
  let yTime = 10;
  let tallest = height;
  let tallestX = 0;
  for (let x = 0; x < width; x += rectWidth) {
    fill(81, 240, 184);
    y = map(noise(yTime), 0, 1, 30, height - 100);
    rect(x, y, x + rectWidth, height);
    if (y < tallest) {//this makes the flage at the tallest point of the graph
      tallest = y;
      tallestX = x;
    }
    yTime += 0.005;
  }
  drawFlag(tallestX, tallest);

}

function drawFlag(x, y) {
  //draws a flag
  strokeWeight(1);
  line(x, y, x, y - 70);
  triangle(x, y - 70, x, y - 35, x + 35, y - 52.5);
}

function draw() {
  background(220);
  generateTerrain();
}
