// Interactive Scene
// Amelia Pilon
// Febuary 6th, 2020
//
// Scene where you can interact with character

let currentScene = 0;
let starX,starY;
let starX2,starY2;
let starX3,starY3;
let starX4,starY4;
function setup() {
  createCanvas(windowWidth, windowHeight);
x = width/4;
y = height/4;
}

function draw() {
  background(52, 235, 204);
  if (currentScene === 0)  scene();
  else nextScene();
  character();
  //arrowKey();
}

function keyPressed(){
  if (keyIsPressed === true){
    if (keyCode === LEFT_ARROW){
      currentScene = 1 ;
      starX = random(10,windowWidth);
      starY = random(10,200);
      starX2 = random(10,windowWidth);
      starY2 = random(30,600);
      starX3 = random(10,windowWidth);
      starY3 = random(30,600);
      starX4 = random(10,windowWidth);
      starY4 = random(30,600);
    }
  else if (keyCode === RIGHT_ARROW){
    currentScene = 0;
  }
  else {
    currentScene = 0;
  }
  }
}


function scene(){
  fill(38, 110, 41);
  rect(0,(windowHeight/5)*4,windowWidth, windowHeight);
  strokeWeight(0);
  fill(115, 69, 46);
  rect(760,131,100,500);//tree base
  fill(15, 87, 30);
  ellipse(780,90,300,310);//tree leaf
  ellipse(760,160,300,310);//
  ellipse(860,190,300,310);//
  ellipse(870,100,300,310);//
  fill(230, 226, 44);
  ellipse(100,100,200,200);//sun
  fill(0);
  textSize(25);
  
  text('Amelia Pilon',50,750);
}

function character(){
  strokeWeight(.5);
  fill(230, 87, 123);
  ellipse(mouseX-40,mouseY+40,80,100);//left bottom wing
  fill(173, 87, 230);
  ellipse(mouseX-40,mouseY-40,90,110);//left top wing
  fill(230, 208, 87);
  fill(230, 87, 123);
  ellipse(mouseX+40,mouseY+40,80,100);//right bottom wing
  fill(173, 87, 230);
  ellipse(mouseX+40,mouseY-40,90,110);//right top wing
  fill(230, 208, 87);
  ellipse(mouseX, mouseY,40, 130);//body base 
}
function nextScene(){
  background(9, 44, 71);
  fill(38, 110, 41);
  rect(0,(windowHeight/5)*4,windowWidth, windowHeight);
  character();
  fill(250);
  ellipse(starX,starY,30,30);
  ellipse(starX2,starY2,30,30);
  ellipse(starX3,starY3,30,30);
  ellipse(starX4,starY4,30,30);
  text('Amelia Pilon',50,750);
}