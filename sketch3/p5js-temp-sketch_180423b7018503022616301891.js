var img;
var sentence;
var sentenceIndex;
var name = "['your name']";
var inp;
var button;
var button2;


function preload() {
  words = loadJSON("words.json");
}

function setup() {
  createCanvas(windowWidth, 1200);

  /// Input box
  inp = createInput('');
  inp.position(100, 200);
  inp.size(300, 30);
  inp.style('font-size', '20px');

  /// Submit createButton
  button = createButton('Find out');
  button.position(425, 205);
  button.mousePressed(updateName);
  button.mousePressed(displayTweet);
  button.mousePressed(wordReplace);

  colorMode(HSB, 255);
  background(255);
  img = loadImage('data/TrumpTweet.png');
}

function draw() {

  textSize(32);
  textAlign(LEFT);
  fill(50);
  text('How does Donald Trump feel about you?', 100, 100);
  textSize(15);
  text('Because his feedback means everything to you.', 100, 120);

  textSize(20);
  text('Whats your name?', 100, 180);
}

function displayTweet() {
  image(img, 100, 300,600,388.5);
  textSize(35);
  text(sentence, 170, 370, 500, 600);
}

function updateName() {
  sentence = sentence.replace("['your name']", inp.value());
  name = inp.value();
}


function getRandomNumberEntry() {
  var randomIndex = int(Math.random()*words.numbers.length);
  return words.numbers[randomIndex];
}

function getRandomPositiveAdjective() {
  var randomIndex = int(Math.random()*words.positive_adjectives.length);
  return words.positive_adjectives[randomIndex];
}

function getRandomNegativeAdjective() {
  var randomIndex = int(Math.random()*words.negative_adjectives.length);
  return words.negative_adjectives[randomIndex];
}

function getRandomPeopleNegative() {
  var randomIndex = int(Math.random()*words.people_negative.length);
  return words.people_negative[randomIndex];
}

function getRandomPeoplePositive() {
  var randomIndex = int(Math.random()*words.people_positive.length);
  return words.people_positive[randomIndex];
}

function getRandomCharacterTraits() {
  var randomIndex = int(Math.random()*words.character_traits.length);
  return words.character_traits[randomIndex];
}

function getRandomMediaOutlets() {
  var randomIndex = int(Math.random()*words.media_outlets.length);
  return words.media_outlets[randomIndex];
}

function getRandomNicknames() {
  var randomIndex = int(Math.random()*words.nicknames.length);
  return words.nicknames[randomIndex];
}

function getRandomPlace() {
  var randomIndex = int(Math.random()*words.place.length);
  return words.place[randomIndex];
}

function getRandomNegativeCloser() {
  var randomIndex = int(Math.random()*words.negative_closer.length);
  return words.negative_closer[randomIndex];
}

function getRandomPositiveCloser() {
  var randomIndex = int(Math.random()*words.positive_closer.length);
  return words.positive_closer[randomIndex];
}

function wordReplace() {
  sentenceIndex = int(Math.random()*words.sentences.length)

    sentence = words.sentences[sentenceIndex];
  sentence = sentence.replace("['numbers']", getRandomNumberEntry());
  sentence = sentence.replace("['positive adjective']", getRandomPositiveAdjective());
  sentence = sentence.replace("['negative adjective']", getRandomNegativeAdjective());
  sentence = sentence.replace("['people negative']", getRandomPeopleNegative());
  sentence = sentence.replace("['people positive']", getRandomPeoplePositive());
  sentence = sentence.replace("['character traits']", getRandomCharacterTraits());
  sentence = sentence.replace("['media outlets']", getRandomMediaOutlets());
  sentence = sentence.replace("['nicknames']", getRandomNicknames());
  sentence = sentence.replace("['place']", getRandomPlace());
  sentence = sentence.replace("['negative closer']", getRandomNegativeCloser());
  sentence = sentence.replace("['positive closer']", getRandomPositiveCloser());
  sentence = sentence.replace("['your name']", name);
  console.log(sentence);
}
