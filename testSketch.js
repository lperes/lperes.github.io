var fs = false;

function setup() {

createCanvas(windowWidth, windowHeight);
colorMode(HSB);
print("hi");

}

function draw() {

  background(0);

  push();
  noStroke();
  fill(200,200,255,100);
  translate(width / 2, height /2 );
  ellipse(0, 0, random(40,50), random(40,50));
  fill(32,200,255,100);
  ellipse(0, 0, random(40,50), random(40,50));
  pop();

}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
