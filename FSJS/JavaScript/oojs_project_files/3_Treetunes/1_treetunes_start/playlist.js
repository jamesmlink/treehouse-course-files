function Playlist() {
	this.songs = [];
	this.nowPlayingIndex = 0;
	
}

Playlist.prototype.add = function() {
	this.songs.push(Song);
};

Playlist.prototype.play = function() {
	var currentSong = this.songs[nowPlayingIndex];
	currentSong.play();
};

Playlist.prototype.stop = function(){
	var currentSong = this.songs[nowPlayingIndex];
	currentSong.stop();
};

Playlist.prototype.next = function() {
	this.stop();
	this.nowPlayingIndex++;
	if (this.nowPlayingIndex === this.songs.length) {
		this.nowPlayingIndex = 0;
	}
	this.play();
};

Playlist.prototype.renderIn = function(list) {
	list.innerHTML = "";
	for (var i = 0 ; i < this.songs.length; i ++ ) {
		list.innerHTML += this.songs[i].toHTML();
	}
};