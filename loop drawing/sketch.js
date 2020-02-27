// Loop Drawing


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function loopDraw() {
  let spacing = map(mouseX,0,width,1,20);
  for (let x = 0; x < width; x += spacing) {
    line(0, 0, x, height / 2);
    line(0, height, x, height / 2);
  }
  for (let x = width; x > 0; x -= spacing) {
    line(width, 0, x, height / 2);
    line(width, height, x, height / 2);
  }
}

function
function draw() {
  background(220);
  loopDraw();
}
