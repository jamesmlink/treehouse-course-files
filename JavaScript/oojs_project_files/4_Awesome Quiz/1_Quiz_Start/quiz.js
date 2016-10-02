//keep track of score and current question
//collection of questions

function Quiz() {
  this.questions = [];
  this.score = 0;
	this.currentQuestionIndex = 0;
}

Quiz.prototype.add = function (question) {
	this.questions.push(question);
};

Quiz.prototype.load = function () {
	var currentQuestion = this.questions[this.currentQuestionIndex];
};

Quiz.prototype.next = function () {
	this.currentQuestionIndex++;
};