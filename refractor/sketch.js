// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(480, 270);
}
function draw() {
  background(255);
  rectangles();
  mouseLocation();

}
function rectangles(){
  stroke(0);
  line(240, 0, 240, 270);
  line(0, 135, 480, 135);
  noStroke();
}
function mouseLocation(){
  fill(0);
  if (mouseX < 240 && mouseY < 135) {
    rect(0, 0, 240, 135);
  }
  else if (mouseX > 240 && mouseY < 135) {
    rect(240, 0, 240, 135);
  }
  else if (mouseX < 240 && mouseY > 135) {
    rect(0, 135, 240, 135);
  }
  else if (mouseX > 240 && mouseY > 135) {
    rect(240, 135, 240, 135);
  }
}

// let x = 200;
// let y = 300;
// let xMove;
// let yMove; 

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   xMove = random(3, 8);
//   yMove = random(3, 8);

// }

// function draw() {
//   move();
//   background(80, 80, 80);
//   rect(x, y, 250, 75);
// }

// function move() {
//   x += xMove; y += yMove;
//   if (y >= height - 75 || y <= 0) {
//     yMove = yMove * -1;
//   }
//   else if(x >= width - 250 || x <= 0) {
//     xMove = xMove * -1;
//   }
// }