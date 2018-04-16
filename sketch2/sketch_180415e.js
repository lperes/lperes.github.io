

var diamZ = 500;        //player 1 ellipse diameter
var diamM = 500;        //player 2 ellipse diameter
var XposX = 100;        //player 1 ellipse position
var XposM = 1300;       //player 2 ellipse position
var Zcheck = false;   //Z key variable
var Mcheck = false;   //M key variable
var start = false;    //start button


function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 255);
  background(0);

  //load font
  font = loadFont("DIN-Bold-100.vlw");
}

function draw() {
  //function that places titles
  title();
  //if circles are overlapping halfway, title changes to "we think that"

  //function that generates visual cue for key press
  keyVis();

  //setup for start screen
  //before mouse click, transparent overlay with "click anywhere to start" appears
  if (start == false) {
    startScreen();
  }

  //if the mouse is clicked, the overlay dissapears and the actions start
  if (start == true) {

    //function that draws ellipses
    //variables: (ellipse Z hue, ellipse M hue)
    drawShapes(234, 123);

    //function that establishes key input movements
    //variables: (diameter increase, diameter decrease, position increase, position decrease)
    ellipseMove(4, 1.5, 4, 2);
  }
}




/////FUNCTIONS///////////////////////////////////////////////////////////////////////////////////////////////

//assign click to start var to mouse click
function mouseClicked() {
  start=true;
}


//assign keys to var states
function keyPressed() {
  if (key =='Z' || key == 'z')
  {
    Zcheck = true;
  } else if (key =='M' || key =='m') {
    Mcheck = true;
  }
}

function keyReleased() {
  if (key =='Z' || key == 'z')
  {
    Zcheck = false;
  } else if (key =='M' || key =='m') {
    Mcheck = false;
  }
}

//setup for start screen
function startScreen() {
  fill (255, 255, 0, 200);
  rectMode(CENTER);
  noStroke();
  rect(width/2, height/2, width, height);
  fill(255, 0, 255);

  textFont(font, 10);
  textAlign(CENTER);
  text ("press the assigned keys continuously", width/2, 100);
  text ("try to make the circles move towards each other", width/2, 120);
  textFont(font, 20);
  textAlign(CENTER);
  text ("click anywhere to start", width/2, height/2);
}

//draw ellipses
//make variables for each hue
function drawShapes(h1, h2) {

  noStroke();

  //draw a rectangle to make ellipses fade
  fill(255, 255, 0, 10);
  rectMode(CENTER);
  rect(width/2, height/2, width, height);

  //draw ellipses
  noStroke();
  fill(h1, 255, 200, 50);
  ellipse(XposX, height/2, diamZ, diamZ);
  fill(h2, 255, 200, 50);
  ellipse(XposM, height/2, diamM, diamM);
}

//using var states, draw a rectangle with white fill and black text every time the assigned key is pressed
//if key is not pressed, draw rectangle with white stroke and white text
function keyVis() {
  if (Zcheck == true) {
    noStroke();
    fill(255, 0, 255);
    rect(100, 800, 40, 40, 10);
    fill(255, 255, 0);
    text ("Z", 100, 805);
  }
  if (Zcheck == false) {
    stroke(255, 0, 255);
    noFill();
    rect(100, 800, 40, 40, 10);
    fill(255, 0, 255);
    text ("Z", 100, 805);
  }
  if (Mcheck == true) {
    noStroke();
    fill(255, 0, 255);
    rect(1300, 800, 40, 40, 10);
    fill(255, 255, 0);
    text ("M", 1300, 805);
  }
  if (Mcheck == false) {
    stroke(255, 0, 255);
    noFill();
    rect(1300, 800, 40, 40, 10);
    fill(255, 0, 255);
    text ("M", 1300, 805);
  }
}

//when circles overlap, changes text to "we think that"
function title() {


  textFont(font, 10);
  fill(255, 0, 255);
  textAlign(CENTER);
  text ("press the assigned keys continuously", width/2, 100);
  text ("try to make the circles move towards each other", width/2, 120);
  text ("player 1", 100, 850);
  text ("player 2", 1300, 850);

  textFont(font, 14);

  if (XposX <= XposM/2) {
    text ("I think that", width/2, height/2);
  } else if (XposX >= XposM/2) {
    text ("We think that", width/2, height/2);

    //circles grow automatically once they overlap
    diamM=diamM+4;
    diamZ=diamZ+4;

  }
}

//while keys are not pressed, circle diameter is decreasing
//if keys are pressed individually, circle diameter increases but circles move apart
//if keys are pressed at the same time, circle diameter increases and circles move towards each other
//setup variables for postion and diameter increase and decrease
function ellipseMove(Dinc, Ddec, Pinc, Pdec) {
  if (Zcheck == true) {
    diamZ=diamZ+Dinc;

    if (Mcheck == true) {
      XposX=XposX+Pinc;


    } else if (Mcheck == false) {
      XposX=XposX-Pdec;


    }
  }
  if (Zcheck == false) {
    diamZ=diamZ-Ddec;
  }
  if (Mcheck == true) {
    diamM=diamM+Dinc;

    if (Zcheck == true) {
      XposM=XposM-Pinc;


    } else if (Zcheck == false) {
      XposM=XposM+Pdec;

    }
  }
  if (Mcheck == false) {
    diamM=diamM-Ddec;
  }
}
