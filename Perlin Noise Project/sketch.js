// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectWidth = 1;
let y;
let yTime = 10;
let moveRect = 0.1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  strokeWeight(0);

}

function generateTerrain(){
  let yTime = 10;
  for(let x = 0;x<width;x+=rectWidth){
    fill(81, 240, 184);
    rect(x,y,x+rectWidth,height);
    y = map(noise(yTime),0,1,30,height-100);
    yTime +=0.005;
  }

}

function draw() {
  background(220);
  generateTerrain();

}
