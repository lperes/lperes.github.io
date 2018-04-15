var fs = false;
var circles = [];
var hue = 0;


function setup() {

createCanvas(windowWidth, windowHeight);
colorMode(HSB, 255);


}

function draw() {
  background(255);

  //add descpriptive text
  textSize(32);
  textAlign(CENTER);
  text('click and drag', windowWidth/2, windowHeight/2);
  fill(0, 102, 153);

//call fuctions
for (var i= 0; i<circles.length; i++) {
  circles[i].move();
  circles[i].display();
}
}

//make window resize
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

//if mouse is dragged, new circles are added to canvas in the mouse position
function mouseDragged(){
circles.push(new Circle(mouseX, mouseY));
}


//setup the constructor function
//assign x and y values to setup the drag click functionality
function Circle(x, y){
  this.x=x;
  this.y=y;

//display function
  this.display = function(){
    push();
    noStroke();
    fill(hue,200,200, 50);
    ellipse(this.x, this.y, 100, 100);
    hue=(random(255));
    pop();
  }

//move function
  this.move = function(){

    this.y = this.y + random(1,20);
    if(this.y>= height){
      this.y=height;
    }

  }
}
