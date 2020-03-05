let x = 200;
let y = 300;
let xMove;
let yMove; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  xMove = random(3, 8);
  yMove = random(3, 8);

}

function draw() {
  move();
  background(80, 80, 80);
  rect(x, y, 250, 75);
}

function move() {
  x += xMove; y += yMove;
  if (y >= height - 75 || y <= 0) {
    yMove = yMove * -1;
  }
  else if(x >= width - 250 || x <= 0) {
    xMove = xMove * -1;
  }
}