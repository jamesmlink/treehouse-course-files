var playlist = new Playlist();

var song1 = new Song("aaa","bbb","ccc");
var song2 = new Song("advsvsdaa","bvsvdsbb","vdsvs");
var song3 = new Song("a322222222222aa","bb32222222b","cc23333333333c");

playlist.add(song1);
playlist.add(song2);
playlist.add(song3);

var playlistElement = document.getElementById("playlist");
Playlist.renderIn(playlistElement);