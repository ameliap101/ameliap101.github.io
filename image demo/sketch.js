// Image Demo

let lionL,lionR;
let movingLeft = true;

function preload(){
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");
}

function determineDirection(){
  if(pmouseX < mouseX){
    movingLeft = false;
  }
  else if(pmouseX > mouseX){
    movingLeft = true;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  noCursor();
}

function draw() {
  background(220);

  if (keyIsPressed){
    tint(50,100,200);
  }
  else{
    noTint();
  }

  if(movingLeft){
    image(lionL,mouseX,mouseY,130,90);
  }
  else{
    image(lionR,mouseX,mouseY,130,90);
  }
  determineDirection();
}
