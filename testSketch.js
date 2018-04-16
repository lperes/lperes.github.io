var fs = false;
var circles = [];
var h = 0;
var Xpos = 50;
var Ypos = 50;
var diam = 20;
var space = 50;



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
  fill(100, 102, 153);

push();
while (Xpos <= windowWidth-1){
  while (Ypos<= windowHeight-1){
    fill(67,200,200,50);
    noStroke();
    ellipse(Xpos, Ypos, diam, diam);
    Ypos=Ypos+space;}
    Ypos=50;
    Xpos=Xpos+space;
}
Xpos=50;
pop();

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
  this.gravity=random(2,10);

//display function
  this.display = function(){
    push();
    noStroke();
    fill(h,200,200, 50);
    ellipse(this.x, this.y, 100, 100);
    h=(random(255));
    pop();
  }

//move function
  this.move = function(){

    this.y = this.y + this.gravity;
    if(this.y>= windowHeight){
      this.y=windowHeight;
    }

  }
}
