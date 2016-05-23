var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
var cards = [cardOne, cardTwo, cardThree, cardFour]


if (cardOne === cardTwo) {
    alert('You found a match!');
} else if (cardTwo === cardThree) {
    alert('You found a match!');
} else if (cardThree === cardFour) {
    alert('You found a match!');
} else {alert('Sorry, try again.') }

var gameBoard = document.getElementById('game-board')

var createBoard = function() {
    cards = document.createElement('dev');
    cards.className = 'card';
    document.getElementsByClassName('card').appendChild(gameBoard);
}
