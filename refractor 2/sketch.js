// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
ringSize = 400;
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(240);
  drawCircle();
}

function drawCircle(){
  ringSize = 400;
  for(let i = 0;i<10;i++){
    ellipse(width/2,height/2,ringSize,ringSize);
    ringSize-=40;
  }
}

