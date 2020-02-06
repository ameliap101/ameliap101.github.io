// Interactive Scene
// Amelia Pilon
// Febuary 6th, 2020
//
// Scene where you can interact with character


function setup() {
  createCanvas(windowWidth, windowHeight);
x = width/4;
y = height/4;
}

function draw() {
  background(52, 235, 204);
  grass();
  character();
}

function grass(){
  fill(38, 110, 41);
  rect(0,(windowHeight/5)*4,windowWidth, windowHeight);
}
function character(){
  fill(110, 60, 38);
  strokeWeight(1);
  ellipse(mouseX, mouseY,100, 80);//head
  fill(255, 255, 255);
  ellipse(mouseX+20,mouseY-5,30,20);//eye
  fill(0,0,0);
  ellipse(mouseX+20,mouseY-5,10,10);//inside eye
  triangle(mouseX+45,mouseY+30,mouseX-45,mouseY-60,mouseX+45,mouseY-90);
}