/* eslint-disable no-undef */
//Black and White Target

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