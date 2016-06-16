// Create card variables
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
var equal;

if (cardTwo === cardFour){
  equal = false;
} else if (cardOne === cardTwo){
  equal = true;
} else if (cardThree === cardFour){
  equal = true;
} else if (cardOne === cardThree){
  equal = false;
} else if (cardOne === cardFour){
  equal = false;
} else if (cardTwo === cardThree){
  equal = false;
}

if (equal === true) {
  alert('You found a match!');
} else {
  alert('Sorry, try again.');
}