// JavaScript Document
// Update: 2021.07.06 12:40(GMT+8)
document.write("<div id=\"bfq\" class=\"divb\">");
document.write("	<img id=\"up\" class=\"up1\" alt=\"\" src=\"https://muxmus.com/img/up.svg\" />");
document.write("	<img id=\"down\" class=\"down1\" alt=\"\" src=\"https://muxmus.com/img/down.svg\" />");
document.write("	<a id=\"audio\"><img id=\"stop\" alt=\"\" src=\"https://muxmus.com/img/zt.svg\" /></a>");
document.write("	<div class=\"divn\">");
document.write("		<img id=\"next\" class=\"next1\" alt=\"\" src=\"https://muxmus.com/img/next.svg\" />");
document.write("	</div>");
document.write("	<audio id=\"music\" preload=\"auto\"></audio>");
document.write("</div>");
document.write("<div class=\"divs\">");
document.write("	<p id=\"songs\" class=\"song1\"></p>");
document.write("</div>");
$(function(){
	$("#audio").click(function(){
		if(music.paused){
			music.play();
			$("#stop").attr("src", "https://muxmus.com/img/bf.svg");
		}else{
			music.pause();
			$("#stop").attr("src", "https://muxmus.com/img/zt.svg");
		}
	});
});
var url = "https://music.163.com/song/media/outer/url?id=";
var musics = [
	"29836459",
	"460508",
	"730631",
	"471936",
	"535056564",
	"31562026",
	"27582622",
	"22706980",
	"28699446",
	"430685732",
	"30482673",
	"26215042",
	"26215043",
	"26215045",
	"786262",
	"485612576",
	"468176711",
	"33911781",
	"496869422",
	"1438864651",
	"760533",
	"546730028",
	"30590331",
	"480353",
	"1327337964",
	"609890",
	"28445782",
	"22707008",
	"471987",
	"485354138",
	"409872504",
	"504016400",
	"518904426",
	"28031119",
	"441116287",
	"520461943",
	"29849049",
	"1431292823",
	"536570516",
	"1409311773",
	"1472480890",
	"1459343252",
	"1444071945",
	"26201948",
	"26201959",
	"28875230",
	"469440680",
	"446732031",
	"1464841552",
	"443794",
	"443242",
	"1470435430",
	"506196018",
	"1818031620",
	"1446326362",
	"1480100912",
	"1445783796",
	"26830207",
	"1345872140",
	"509106775",
	"522528589",
	"30394495",
];
var songs = [
	"ハルヒの想い - 神前暁",
	"「プラチナむかつく」 - 神前暁",
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
	"You - M.Graveyard",
	"Creep - Gamper & Dadoni/Ember Island",
	"城南花已开 - 三亩地",
	"secret base ~君がくれたもの~ - 茅野愛衣/戸松遥/早見沙織",
	"打上花火 - DAOKO/米津玄師",
	"僕に光をくれたんだ - 中山真斗",
	"だんご大家族 - 真理絵/茶太/Morrigan/Rio",
	"Bloom of Youth - 清水淳一",
	"秋 - FLOWER FLOWER",
	"いつも何度でも - 宗次郎",
	"新宝島 - Lefty Hand Cream",
	"ふわふわ♪ - 牧野由依",
	"Fonte - 出羽良彰",
	"潮鳴り - 折戸伸治",
	"一番の宝物 - karuta",
	"Embrace - Sappheiros",
	"ninelie - Aimer/EGOIST",
	"Stay - Ember Island",
	"Umbrella(Matte Remix) - Matte/Ember Island",
	"Let It Go - Idina Menzel",
	"茜さす - Aimer",
	"動く、動く - 水瀬いのり/久保ユリカ",
	"Amhrán na farraige - Lisa Hannigan",
	"夜航星 - 不才",
	"ここから、ここから - 水瀬いのり/花澤香菜/井口裕香/早見沙織",
	"夜に駆ける - YOASOBI",
	"群青 - YOASOBI",
	"たぶん - YOASOBI",
	"ハルジオン - YOASOBI",
	"U&I - 放課後ティータイム",
	"天使にふれたよ! - 放課後ティータイム",
	"晚安喵 - 艾索",
	"有你的江湖 - 岚AYA",
	"winter bokeh - idealism/jinsang",
	"The Ugly Duckling - Dancing Line",
	"あの夏へ - 久石譲",
	"Summer - 久石譲",
	"革命前夜 - 井口裕香",
	"Legends Never Die - Against the Current",
	"让风告诉你 - 花玲/喵☆酱/宴宁/kinsen",
	"葵橋 - さユり",
	"GAMER - Synth Monsters/千璃Senri/SADRECORDS",
	"Pride - 遥海",
	"僕が死のうと思ったのは - 中島美嘉",
	"勾指起誓 - 洛天依/ilem",
	"彼女は旅に出る - 鎖那",
	"東京ウインターセッション - HoneyWorks",
	"Stray - Feint",
];
var count = musics.length - 1;
var original = new Array;
for (var i = 0; i <= count; i++){
	original[i] = i;
}
original.sort(function(){
	return 0.5 - Math.random();
});
var i = 0;
var num = 0;
function next(){
	music.src = url + musics[original[i]] + ".mp3";
	document.getElementById("songs").innerHTML = songs[original[i]];
	i += 1;
	music.onended = function(){
		if ('mediaSession' in navigator) {
			navigator.mediaSession.metadata = new MediaMetadata({
				title: song[original[i]] ,
				artwork: [
					{src: 'https://files.catbox.moe/mnl4p1.jpg', sizes: '1920x1080', type: 'image/jpge'}
				]
			});
		}
		nextSong();
		music.play();
	}
	$("#next").click(function(){
		if ('mediaSession' in navigator) {
			navigator.mediaSession.metadata = new MediaMetadata({
				title: song[original[i]] ,
				artwork: [
					{src: 'https://files.catbox.moe/mnl4p1.jpg', sizes: '1920x1080', type: 'image/jpge'}
				]
			});
		}
		nextSong();
		if(music.paused){
			$("#stop").attr("src", "https://muxmus.com/img/bf.svg");
		}
		music.play();
	});
}
function nextSong(){
	if(i == musics.length){
		num = original[count];
		original.sort(function(){
			return 0.5 - Math.random();
		});
		ifNum();
		i = 0;
	}
	music.src = url + musics[original[i]] + ".mp3";
	document.getElementById("songs").innerHTML = songs[original[i]];
	i += 1;
}
function ifNum(){
	if(original[0] == num){
		original.sort(function(){
			return 0.5 - Math.random();
		});
		ifNum();
	}
}
if(document.all){
	window.attachEvent('onload',next)
}
else{
	window.addEventListener('load',next,false);
}
$(document).ready(function(){
	$('#stop').on('mouseenter',function(){
		$('#songs').attr("class", "song2");
		$('#up').attr("class", "up2");
		$('#down').attr("class", "down2");
		$('#next').attr("class", "next2");
	});
	$('#bfq').on('mouseleave',function(){
		$('#songs').attr("class", "song1");
		$('#up').attr("class", "up1");
		$('#down').attr("class", "down1");
		$('#next').attr("class", "next1");
	});
});
$(function(){
	let vol = 0.3;
	$('#music')[0].volume = vol;
	$('#up').click(function(){
		vol = vol<1?(vol*10+1)/10:1;
		$('#music')[0].volume = vol;
	});
	$('#down').click(function(){
		vol = vol>0?(vol*10-1)/10:0;
		$('#music')[0].volume = vol;
	});
});
