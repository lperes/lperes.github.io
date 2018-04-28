var img;
var sentence;

function preload() {
  words = loadJSON("words.json");
}

function setup() {
  createCanvas(windowWidth, 1200);
  var inp = createInput('');
  inp.position(100, 200);
  inp.size(300, 50);
  inp.style('font-size', '30px');
  colorMode(HSB, 255);
  img = loadImage("data/TrumpTweet.png");
}

function draw() {
  background(255);
  textSize(32);
  textAlign(LEFT);
  fill(50);
  text('How does Donald Trump feel about you?', 100, 100);
  textSize(20);
  text('whats your name?', 100, 180);
  var sentence = words.sentences[1];
  image(img, 100, 300);
  textSize(60);
  text(sentence, 250, 400, 800, 600);

  
}
