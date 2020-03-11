// generative art demo
let gridSpacing = 20;
const PADDING = 50;
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

}

function border() {
  strokeWeight(15);
  rect(width/2,height/2, width, height);
  strokeWeight(2);
}

function drawGrid(){
  for(let x = gridSpacing/2+PADDING;x< width-PADDING;x+= gridSpacing){
    for(let y = gridSpacing/2+PADDING;y< height-PADDING;y+= gridSpacing){
      rect(x,y,gridSpacing,gridSpacing);
    }
  }
}

function draw() {
  border();
  drawGrid();
}