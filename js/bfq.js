// JavaScript Document
var musics = [
	"http://music.163.com/song/media/outer/url?id=29836459.mp3",
	"http://music.163.com/song/media/outer/url?id=460508.mp3",
	"http://music.163.com/song/media/outer/url?id=27853860.mp3",
	"http://music.163.com/song/media/outer/url?id=730631.mp3",
	"http://music.163.com/song/media/outer/url?id=471936.mp3",
	"http://music.163.com/song/media/outer/url?id=535056564.mp3",
	"http://music.163.com/song/media/outer/url?id=31562026.mp3",
	"http://music.163.com/song/media/outer/url?id=27582622.mp3",
	"http://music.163.com/song/media/outer/url?id=471754286.mp3",
	"http://music.163.com/song/media/outer/url?id=28699446.mp3",
	"http://music.163.com/song/media/outer/url?id=430685732.mp3",
	"http://music.163.com/song/media/outer/url?id=30482673.mp3",
	"http://music.163.com/song/media/outer/url?id=26215042.mp3",
	"http://music.163.com/song/media/outer/url?id=26215043.mp3",
	"http://music.163.com/song/media/outer/url?id=481858451.mp3",
	"http://music.163.com/song/media/outer/url?id=26215045.mp3",
	"http://music.163.com/song/media/outer/url?id=561798054.mp3",
	"http://music.163.com/song/media/outer/url?id=485612576.mp3",
	"http://music.163.com/song/media/outer/url?id=468176711.mp3",
	"http://music.163.com/song/media/outer/url?id=33911781.mp3",
	"http://music.163.com/song/media/outer/url?id=496869422.mp3",
	"http://music.163.com/song/media/outer/url?id=1438864651.mp3",
	"http://music.163.com/song/media/outer/url?id=541381.mp3",
	"http://music.163.com/song/media/outer/url?id=1484336476.mp3",
	"http://music.163.com/song/media/outer/url?id=760226.mp3",
	"http://music.163.com/song/media/outer/url?id=438803553.mp3",
	"http://music.163.com/song/media/outer/url?id=546730028.mp3",
	"http://music.163.com/song/media/outer/url?id=30590331.mp3",
];
var songs = [
	"ハルヒの想い - 神前暁"
	"「プラチナむかつく」 - 神前暁"
	"妄想は個人の自由 - 浜口史郎"
	"歳月-雲流れ- - Foxtail-Grass Studio"
	"my most precious treasure -orgel- - 麻枝准"
	"海の形 - 昙轩"
	"アゲイン - 横山克"
	"追想、桜ノ國 - はちみつれもん"
	"渚 - 京田誠一"
	"思い出をありがとう - 坂本昌一郎"
	"Rain after Summer - 羽肿"
	"疲れたので家に帰ろう - 浜口史郎"
	"手つかずの感情 - 中山真斗"
	"どれだけ希望を持ったのか - 中山真斗"
	"브람스 자장가 - 자장가"
	"やわらかな方程式 - 中山真斗"
	"You - dai/M.Graveyard"
	"Creep - Gamper & Dadoni/Ember Island"
	"城南花已开 - 三亩地"
	"secret base ~君がくれたもの~ - 茅野愛衣/戸松遥/早見沙織"
	"打上花火 - DAOKO/米津玄師"
	"僕に光をくれたんだ - 中山真斗"
	"秋も冬も春も - 吉森信"
	"恋のうた - Yunomi/鬼頭明里"
	"だんご大家族 - 茶太"
	"Sleeping In - Phil Good"
	"Bloom of Youth - 清水淳一"
	"秋 - FLOWER FLOWER"
];
var index = 0;
index = Math.floor(Math.random() * musics.length);
window.onload = function()
{
	music.src = musics[index];
	document.getElementById("songs").innerHTML=songs[index];
	music.onended = function()
	{
		index = Math.floor(Math.random() * musics.length);
		music.src = musics[index];
		document.getElementById("songs").innerHTML=songs[index];
		music.play();
	}
}
$(document).ready(function () {
	$('#stop').on('mouseenter', function () {
		$('#songs').attr("class", "song2")
	})
	$('#stop').on('mouseleave', function () {
		$('#songs').attr("class", "song1")
	})
})
