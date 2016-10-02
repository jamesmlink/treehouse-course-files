function Song(title, artist, duration) {
	this.title = title;
	this.artist = artist;
	this.duration = duration;
	this.isPlaying = false;
}

Song.prototype.play = function() {
	this.isPlaying = true;
};

Song.prototype.stop = function() {
	this.isPlaying = false;
};

Song.prototype.toHTML = function() {
	if (this.isPlaying) {
		var htmlString = '<li class="current">' + this.title +' - ' + this.artist + '<span class="duration">'+ this.duration + '</span></li>'
	} else {
		var htmlString = '<li class="">' + this.title +' - ' + this.artist + '<span class="duration">'+ this.duration + '</span></li>'
	}
	
};