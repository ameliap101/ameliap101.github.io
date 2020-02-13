// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let onTopLeft, onTopRight, onBottomLeft,onBottomRight; //boolean state variable
let leftFade = 0;
let rightFade = 0;
let FADE_SPEED = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function cursorSide(){
  if(mouseX === width/2 && height){
    onTopLeft = true;
    onTopRight = false;
  }
  else{
    onTopLeft = false;
    onTopRight = true;
  }
}

function renderRectangles(){
  if
  rect(0,0,width/2,height/2); //top left rectangle
  rect(width/2,0,width/2,height/2); //top right rectangle
  rect(0,height/2,width/2,height/2);//bottom left rectangle
  rect(width/2,height/2,width/2,height/2);//botton right rectangle
}

function draw(){
  background(220);
  cursorSide();
  renderRectangles();
}
 