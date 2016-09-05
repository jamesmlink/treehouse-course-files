
function print(message) {
  document.write(message);
}

var score = 0;
var wrongcount = 0;
var outputMessage = '' ;
var question = '';
var userAnswer = '';
var rightQuestions = [];
var wrongQuestions = [];
var quizQuestions = [
  ["2 times 4", 8],
  ["4 plus 4", 8],
  ["5 plus 5", 10],
  ["3 times 10", 30],
  ["40 divided by 4", 10],
  ["99 problems", 99]
];

for (i=0; i< quizQuestions.length; i+=1) {
  question = quizQuestions[i][0];
  userAnswer = prompt(question);
  userAnswer = parseInt(userAnswer);
  if (userAnswer === quizQuestions[i][1]){
    score += 1;
    rightQuestions.push(quizQuestions[i][0]);
  } else {
    wrongQuestions.push(quizQuestions[i][0]);
  }
}

wrongcount= quizQuestions.length - score;
outputMessage = "You got " + score + " right and " + wrongcount + " wrong. <br>";
print(outputMessage);

print(rightQuestions.join(", ") + " RIGHT <br>");
