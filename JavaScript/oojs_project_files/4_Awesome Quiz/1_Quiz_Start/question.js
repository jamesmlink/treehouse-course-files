function Question(hint1, hint2, answer) {
  this.hint1 = hint1;
	this.hint2 = hint2;
	this.answer = answer;
}




Question.prototype.toHTML = function () {

	// create the html for question
	
};



/*Song.prototype.toHTML = function() {
  var htmlString = '<li';
  if(this.isPlaying) {
    htmlString += ' class="current"';
  }
  htmlString += '>';
  htmlString += this.title;
  htmlString += ' - '
  htmlString += this.artist;
  htmlString += '<span class="duration">'
  htmlString += this.duration;
  htmlString += '</span></li>';
  return htmlString;
};*/