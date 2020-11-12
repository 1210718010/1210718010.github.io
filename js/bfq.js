// JavaScript Document
var img = "https://k-on.blog/img/zt.svg";
$(function(){
	$("#stop").click(function(){
		img = $(this).attr('src');
		if (img == "https://k-on.blog/img/zt.svg") {
			$("#stop").attr("src", "https://k-on.blog/img/bf.svg");
		}else{
			$("#stop").attr("src", "https://k-on.blog/img/zt.svg");
		}
	});
});
$(function(){
    $("#audio").click(function(){
        if(music.paused){
            music.play();
            $("#audio").removeClass("pause").addClass("play");
        }else{
            music.pause();
            $("#audio").removeClass("play").addClass("pause");
        }
    });
});
var musics = [
	"http://music.163.com/song/media/outer/url?id=29836459.mp3",
	"http://music.163.com/song/media/outer/url?id=460508.mp3",
	"http://music.163.com/song/media/outer/url?id=27853860.mp3",
	"http://music.163.com/song/media/outer/url?id=730631.mp3",
	"http://music.163.com/song/media/outer/url?id=471936.mp3",
	"http://music.163.com/song/media/outer/url?id=535056564.mp3",
	"http://music.163.com/song/media/outer/url?id=31562026.mp3",
	"http://music.163.com/song/media/outer/url?id=27582622.mp3",
	"http://music.163.com/song/media/outer/url?id=22706980.mp3",
	"http://music.163.com/song/media/outer/url?id=28699446.mp3",
	"http://music.163.com/song/media/outer/url?id=430685732.mp3",
	"http://music.163.com/song/media/outer/url?id=30482673.mp3",
	"http://music.163.com/song/media/outer/url?id=26215042.mp3",
	"http://music.163.com/song/media/outer/url?id=26215043.mp3",
	"http://music.163.com/song/media/outer/url?id=26215045.mp3",
	"http://music.163.com/song/media/outer/url?id=561798054.mp3",
	"http://music.163.com/song/media/outer/url?id=485612576.mp3",
	"http://music.163.com/song/media/outer/url?id=468176711.mp3",
	"http://music.163.com/song/media/outer/url?id=33911781.mp3",
	"http://music.163.com/song/media/outer/url?id=496869422.mp3",
	"http://music.163.com/song/media/outer/url?id=1438864651.mp3",
	"http://music.163.com/song/media/outer/url?id=1484336476.mp3",
	"http://music.163.com/song/media/outer/url?id=760533.mp3",
	"http://music.163.com/song/media/outer/url?id=438803553.mp3",
	"http://music.163.com/song/media/outer/url?id=546730028.mp3",
	"http://music.163.com/song/media/outer/url?id=30590331.mp3",
	"http://music.163.com/song/media/outer/url?id=480353.mp3",
	"http://music.163.com/song/media/outer/url?id=1327337964.mp3",
	"http://music.163.com/song/media/outer/url?id=28188231.mp3",
];
var songs = [
	"ハルヒの想い - 神前暁",
	"「プラチナむかつく」 - 神前暁",
	"妄想は個人の自由 - 浜口史郎",
	"歳月-雲流れ- - Foxtail-Grass Studio",
	"my most precious treasure -orgel- - 麻枝准",
	"海の形 - 昙轩",
	"アゲイン - 横山克",
	"追想、桜ノ國 - はちみつれもん",
	"渚 - 麻枝准",
	"思い出をありがとう - 坂本昌一郎",
	"Rain after Summer - 羽肿",
	"疲れたので家に帰ろう - 浜口史郎",
	"手つかずの感情 - 中山真斗",
	"どれだけ希望を持ったのか - 中山真斗",
	"やわらかな方程式 - 中山真斗",
	"You - dai/M.Graveyard",
	"Creep - Gamper & Dadoni/Ember Island",
	"城南花已开 - 三亩地",
	"secret base ~君がくれたもの~ - 茅野愛衣/戸松遥/早見沙織",
	"打上花火 - DAOKO/米津玄師",
	"僕に光をくれたんだ - 中山真斗",
	"恋のうた - Yunomi/鬼頭明里",
	"だんご大家族 - 真理絵/茶太/Morrigan/Rio",
	"Sleeping In - Phil Good",
	"Bloom of Youth - 清水淳一",
	"秋 - FLOWER FLOWER",
	"いつも何度でも - 宗次郎",
	"新宝島 - Lefty Hand Cream",
	"オセンチな歩美 - 大野克夫",
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
		$('#songs').attr("class", "song2");
	});
	$('#stop').on('mouseleave', function () {
		$('#songs').attr("class", "song1");
	});
});
