// Rollover
// Amelia Pilon
// Feb. 24th
//
// - describe what you did to take this project "above and beyond"
let quad = 0;
let q1Fade = 0;
let q2Fade = 0;
let q3Fade = 0;
let q4Fade = 0;

let FADE_SPEED = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function cursorSide(){
  if(mouseX<width/2 && mouseY > height/2){
    quad = 1;
  }
  else if(mouseX>width/2,0,width/2,height/2);)
}




function renderRectangles(){
  rect(0,0,width/2,height/2); //top left rectangle
  rect(width/2,0,width/2,height/2); //top right rectangle
  rect(0,height/2,width/2,height/2);//bottom left rectangle
  rect(width/2,height/2,width/2,height/2);//botton right rectangle
}

function draw(){
  background(255);
  cursorSide();
  renderRectangles();
  
}
 