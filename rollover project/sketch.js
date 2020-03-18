// Rollover
// Amelia Pilon
// Feb. 24th
let quad = 0;
let q1Fill = 0;
let q2Fill = 0;
let q3Fill = 0;
let q4Fill = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function cursorSide() {
  //finds where the mouse cursor is located and updates a state variable
  if (mouseX < width / 2 && mouseY < height / 2) {//top left
    quad = 1;
  }
  else if (mouseX > width / 2 && mouseY < height / 2) {//top right
    quad = 2;
  }
  else if (mouseX < width / 2 && mouseY > height / 2) {//bottom left
    quad = 3;
  }
  else if (mouseX > width / 2 && mouseY > height / 2) {//bottom right
    quad = 4;
  }
}




function renderRectangles() {
  //renders the rectangles based on where the mouse cursor is
  if (quad === 1) {
    q1Fill = 0;
  }
  else q1Fill += 10;
  fill(q1Fill);
  rect(0, 0, width / 2, height / 2);//top left rectangle
  if (quad === 2) {
    q2Fill = 0;
  }
  else q2Fill += 10;
  fill(q2Fill);
  rect(width / 2, 0, width / 2, height / 2);//top right rectangle
  if (quad === 3) {
    q3Fill = 0;
  }
  else q3Fill += 10;
  fill(q3Fill);
  rect(0, height / 2, width / 2, height / 2);//bottom left rectangle
  if (quad === 4) {
    q4Fill = 0
  }
  else q4Fill += 10;
  fill(q4Fill);
  rect(width / 2, height / 2, width / 2, height / 2);//bottom right rectangle
}

function draw() {
  background(255);
  cursorSide();
  renderRectangles();

}
