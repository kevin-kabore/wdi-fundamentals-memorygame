var cards = ["queen","queen","king","king" ];
var cardsInPlay = [];


var isMatch = function(cards){
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
  this.innerHTML = "";
};

var gameBoard = document.getElementById("game-board");

var createBoard = function(){
for (var i = 0; i < cards.length; i++ ){
  var cardElement = document.createElement('div');
  cardElement.className = "card";
  cardElement.setAttribute('data-card', cards[i]);
   cardElement.addEventListener('click', isTwoCards);
  board.appendChild(cardElement);

}
};


function isTwoCards() {

  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));

  console.log(this.getAttribute('data-card'));
  if (this.getAttribute('data-card') === 'king') {
    this.innerHTML = "<img src='Hearts13.png'>";
  } else {
    this.innerHTML = "<img src='Hearts12.png'>";
  }


  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for next try
    cardsInPlay = [];

  }

}
