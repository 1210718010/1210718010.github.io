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
var musicId = [
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
var title = [
	"ハルヒの想い",
	"「プラチナむかつく」",
	"歳月-雲流れ-",
	"my most precious treasure -orgel-",
	"海の形",
	"アゲイン",
	"追想、桜ノ國",
	"渚",
	"思い出をありがとう",
	"Rain after Summer",
	"疲れたので家に帰ろう",
	"手つかずの感情",
	"どれだけ希望を持ったのか",
	"やわらかな方程式",
	"You",
	"Creep",
	"城南花已开",
	"secret base ~君がくれたもの~",
	"打上花火",
	"僕に光をくれたんだ",
	"だんご大家族",
	"Bloom of Youth",
	"秋",
	"いつも何度でも",
	"新宝島",
	"ふわふわ♪",
	"Fonte",
	"潮鳴り",
	"一番の宝物",
	"Embrace",
	"ninelie",
	"Stay",
	"Umbrella(Matte Remix)",
	"Let It Go",
	"茜さす",
	"動く、動く",
	"Amhrán na farraige",
	"夜航星",
	"ここから、ここから",
	"夜に駆ける",
	"群青",
	"たぶん",
	"ハルジオン",
	"U&I",
	"天使にふれたよ!",
	"晚安喵",
	"有你的江湖",
	"winter bokeh",
	"The Ugly Duckling",
	"あの夏へ",
	"Summer",
	"革命前夜",
	"Legends Never Die",
	"让风告诉你",
	"葵橋",
	"GAMER",
	"Pride",
	"僕が死のうと思ったのは",
	"勾指起誓",
	"彼女は旅に出る",
	"東京ウインターセッション",
	"Stray",
];
var artist = [
	"神前暁",
	"神前暁",
	"Foxtail-Grass Studio",
	"麻枝准",
	"昙轩",
	"横山克",
	"はちみつれもん",
	"麻枝准",
	"坂本昌一郎",
	"羽肿",
	"浜口史郎",
	"中山真斗",
	"中山真斗",
	"中山真斗",
	"M.Graveyard",
	"Gamper & Dadoni/Ember Island",
	"三亩地",
	"茅野愛衣/戸松遥/早見沙織",
	"DAOKO/米津玄師",
	"中山真斗",
	"真理絵/茶太/Morrigan/Rio",
	"清水淳一",
	"FLOWER FLOWER",
	"宗次郎",
	"Lefty Hand Cream",
	"牧野由依",
	"出羽良彰",
	"折戸伸治",
	"karuta",
	"Sappheiros",
	"Aimer/EGOIST",
	"Ember Island",
	"Matte/Ember Island",
	"Idina Menzel",
	"Aimer",
	"水瀬いのり/久保ユリカ",
	"Lisa Hannigan",
	"不才",
	"水瀬いのり/花澤香菜/井口裕香/早見沙織",
	"YOASOBI",
	"YOASOBI",
	"YOASOBI",
	"YOASOBI",
	"放課後ティータイム",
	"放課後ティータイム",
	"艾索",
	"岚AYA",
	"idealism/jinsang",
	"Dancing Line",
	"久石譲",
	"久石譲",
	"井口裕香",
	"Against the Current",
	"花玲/喵☆酱/宴宁/kinsen",
	"さユり",
	"Synth Monsters/千璃Senri/SADRECORDS",
	"遥海",
	"中島美嘉",
	"洛天依/ilem",
	"鎖那",
	"HoneyWorks",
	"Feint",
];
var count = musicId.length - 1;
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
	music.src = url + musicId[original[i]] + ".mp3";
	document.getElementById("songs").innerHTML = title[original[i]] + " · " + artist[original[i]];
	media()
	i += 1;
	music.onended = function(){
		nextSong();
		music.play();
	}
	$("#next").click(function(){
		nextSong();
		if(music.paused){
			$("#stop").attr("src", "https://muxmus.com/img/bf.svg");
		}
		music.play();
	});
}
function nextSong(){
	if(i == musicId.length){
		num = original[count];
		original.sort(function(){
			return 0.5 - Math.random();
		});
		ifNum();
		i = 0;
	}
	music.src = url + musicId[original[i]] + ".mp3";
	document.getElementById("songs").innerHTML = title[original[i]] + " · " + artist[original[i]];
	media()
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
function media(){
    if ('mediaSession' in navigator){
	navigator.mediaSession.metadata = new MediaMetadata({
		title: title[original[i]],
		artist: artist[original[i]],
		artwork: [{src: "https://files.catbox.moe/mnl4p1.jpg"}]
	});
	navigator.mediaSession.setActionHandler('play', function(){
		music.play();
		$("#stop").attr("src", "https://muxmus.com/img/bf.svg");
	});
	navigator.mediaSession.setActionHandler('pause', function(){
		music.pause();
		$("#stop").attr("src", "https://muxmus.com/img/zt.svg");
	});
	navigator.mediaSession.setActionHandler('nexttrack', function(){
		nextSong();
		if(music.paused){
			$("#stop").attr("src", "https://muxmus.com/img/bf.svg");
		}
		music.play();
	});
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
