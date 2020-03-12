// generative art demo
const REC_WIDTH = 10;
const REC_HEIGHT = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function drawRowRGB(yPos) {
  colorMode(RGB, 255);
  for (let x = 0; x < width; x += REC_WIDTH) {
    fill(random(255), random(255), random(255));
    rect(x, yPos, REC_WIDTH, REC_HEIGHT);
  }
}

function drawRowHSB(yPos){
  colorMode(RGB, 255);
  for (let x = 0; x < width; x += REC_WIDTH) {
    fill(x/3%360,map(mouseY,0,height,0,300),300);
    rect(x, yPos, REC_WIDTH, REC_HEIGHT);
  }
}

function border() {
  strokeWeight(15);
  rect(width / 2, height / 2, width, height);
  strokeWeight(2);
}

function draw() {
  background(220);
  randomSeed(0);
  drawRowRGB(height * 0.2);
  drawRowHSB(height/2);
}