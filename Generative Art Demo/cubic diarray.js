// generative art demo
let gridSpacing = 20;
const PADDING = 50;
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noFill();

}

function border() {
  strokeWeight(15);
  rect(width/2,height/2, width, height);
  strokeWeight(2);
}

function drawGrid(){
  for(let x = gridSpacing/2+PADDING;x< width-PADDING;x+= gridSpacing){
    for(let y = gridSpacing/2+PADDING;y< height-PADDING;y+= gridSpacing){
      let amplitude = map(y,gridSpacing/2+PADDING,height-PADDING,0,45);
      push();
      translate(x, y);
      translate(0,random(-amplitude/5,amplitude/2),0);
      rotate(radians(random(-amplitude,amplitude)));
      translate(random(-amplitude/5,amplitude/5),0);

      rect(0,0,gridSpacing,gridSpacing);
      pop();
    }
  }
}

function draw() {
  background(220);
  randomSeed(10);
  border();
  drawGrid();
}