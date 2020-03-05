/* eslint-disable no-undef */
// Perlin Noise

let x, y, size;
const MAX_CIRCLE_SIZE = 200;
let sizeTime = 10;
let dT = 0.01;
let perlinX = 5;
let perlinY = 100;
movementdT = 0.1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  size = 50;
  background(0);

}

function draw() {
  strokeWeight(0);
  fill(0,100);
  rect(0,0,width,height);
  setFill();
  moveCirclePerlin();
  drawCircle();
}

function moveCirclePerlin() {
  let xSpeed = noise(perlinX);
  xSpeed += map(xSpeed, 0, 1, -10, 10);
  x += xSpeed;
  if (x < 0) x += width;
  else if (x > width) x -= width;
  perlinX += movementdT;

  let ySpeed = noise(perlinY);
  ySpeed += map(ySpeed, 0, 1, -10, 10);
  y += ySpeed;
  if (y < 0) y += height;
  else if (y > height) y -= height;
  perlinY += movementdT;
  
}

function setSize() {
  size = random(10, MAX_CIRCLE_SIZE);
}

function setSizePerlin() {
  size = noise(sizeTime) * MAX_CIRCLE_SIZE;
  sizeTime += dT;
}

function drawCircle() {
  setSizePerlin();
  ellipseMode(CENTER);
  print(size);
  ellipse(x, y, size, size);
  //setSize();
}

function setFill(){
  let r = map(x,0,width,0,255);
  let g = map(y,0,height,0,255);
  fill(r,g,180);
}