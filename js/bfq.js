// JavaScript Document
var musics = [
	"http://music.163.com/song/media/outer/url?id=30590331.mp3",
];
var index = 0;
index = Math.floor(Math.random() * musics.length);
window.onload = function()
{
	music.src = musics[index];
	music.onended = function()
	{
		index = Math.floor(Math.random() * musics.length);
		music.src = musics[index];
		music.play();
	}
}
