var upper = 1000;
var randomNumber = getRandomNumber(upper);
var guess;
var attempts = 0;

function getRandomNumber(upper) {
  return Math.floor( Math.random() * upper ) + 1;
}

while (guess !== randomNumber) {
  guess = getRandomNumber(upper);
  attempts += 1;
}

document.write("<p>the random number was " + randomNumber + "<p>");
document.write("<p>it took the computer this many guesses = " + attempts + "<p>");
