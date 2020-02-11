// State Variables Demo

let onLeft, onRight;//boolean state variables
let leftFade = 0;
let rightFade = 0;
const FADE_SPEED = 3;



function setup() {
  createCanvas(windowWidth, windowHeight);
  onLeft = true;
  onRight = false;
}

function updateCurrentSide(){
  // updates variables to represent which side of the mouse is currently on
  if(mouseX < width/2){
    //mouse is on the left
    onLeft = true;
    onRight = false;
  }
  else{
    //mouse is on the right
    onLeft = false;
    onRight = true;
  }
}


function renderRectangles(){
  //draw two rectangles of varying fill values on the screen
  if (onLeft){ //onLeft === true
    fill(200,100,100,leftFade);
    leftFade += FADE_SPEED;
  }
  else{
    fill(255);
    leftFade = 0;
  }
  rect(0,0,width/2,height);
  if (onRight){
    fill(340,80,35,rightFade);
    rightFade += FADE_SPEED;
  }
  else{
    fill(255);
    rightFade = 0;
  }

  rect(width/2,0,width/2,height);
}
function draw() {
  background(220);
  updateCurrentSide();
  //print("left:" + onLeft + "right:" + onRight);
  renderRectangles();
  if(mouseX > width*.25 && mouseX < height*.75 && mouseY < height*.75){
    fill(80,160,240,120);
  }
  else{
    fill(20,200,20,120);
  }
  rect(width*.25,height*.25,width/2,height/2);

}
