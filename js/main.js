var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
var cardList = [cardOne, cardTwo, cardThree, cardFour];
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

if (cardOne === cardTwo) {
    alert('You found a match!');
} else if (cardTwo === cardThree) {
    alert('You found a match!');
} else if (cardThree === cardFour) {
    alert('You found a match!');
} else {alert('Sorry, try again.'); }

var gameBoard = document.getElementById('game-board');

var createBoard = function() {
    cardList = document.createElement('div');
    cardList.className = 'card';
    document.getElementsByClassName('card').appendChild(gameBoard);
}

for (var i = 0; i < cards.length; i++) {
    cards.setAttribute('data-card', cards[i]);
    cards.addEventListener('click', isTwoCards);
}

function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}
