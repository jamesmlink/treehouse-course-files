var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

do {
  guess = prompt("pick a number between 1 and 10");
  guessCount += 1;
  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
  }
} while (! correctGuess)
document.write("<h1>it took you this many times = " + guessCount +"</h1>");
