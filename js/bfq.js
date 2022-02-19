// JavaScript Document
// Update: 2022.02.19 14:47(GMT+8)
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
	"441116287",
	"520461943",
	"29849049",
	"1431292823",
	"1409311773",
	"1472480890",
	"1459343252",
	"1444071945",
	"26201959",
	"446732031",
	"1464841552",
	"443794",
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
	"28941713",
	"1891619161",
	"1357953768",
	"28707142",
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
	"茜さす",
	"動く、動く",
	"Amhrán na farraige",
	"夜航星",
	"夜に駆ける",
	"群青",
	"たぶん",
	"ハルジオン",
	"天使にふれたよ!",
	"winter bokeh",
	"The Ugly Duckling",
	"あの夏へ",
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
	"No title",
	"Playground",
	"だから僕は音楽を辞めた",
	"嘿咻狂想曲",
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
	"Gamper & Dadoni / Ember Island",
	"三亩地",
	"茅野愛衣 / 戸松遥 / 早見沙織",
	"DAOKO / 米津玄師",
	"中山真斗",
	"真理絵 / 茶太 / Morrigan / Rio",
	"清水淳一",
	"FLOWER FLOWER",
	"宗次郎",
	"Lefty Hand Cream",
	"牧野由依",
	"出羽良彰",
	"折戸伸治",
	"karuta",
	"Sappheiros",
	"Aimer / EGOIST",
	"Ember Island",
	"Matte / Ember Island",
	"Aimer",
	"水瀬いのり / 久保ユリカ",
	"Lisa Hannigan",
	"不才",
	"YOASOBI",
	"YOASOBI",
	"YOASOBI",
	"YOASOBI",
	"放課後ティータイム",
	"idealism / jinsang",
	"Dancing Line",
	"久石譲",
	"井口裕香",
	"Against the Current",
	"花玲 / 喵☆酱 / 宴宁 / kinsen",
	"さユり",
	"Synth Monsters / 千璃Senri / SADRECORDS",
	"遥海",
	"中島美嘉",
	"洛天依 / ilem",
	"鎖那",
	"HoneyWorks",
	"Reol / ギガP",
	"Bea Miller",
	"ヨルシカ",
	"艾索",
];
var album = [
	"YcMoW1Y4UKLJXLbF8SCdww==/3247957351157955",
	"X0Jdt5C1MLbZjLTb2lZzsw==/109951165561011067",
	"tJl-San_dLNzomvAT77KJg==/853221023197375",
	"eyw6kIJBcGpwk31id-XrUA==/3275445142255309",
	"tBHOY6ZMq6grfs3GcvJWbg==/109951163768131371",
	"bc0niruJ9rBQz2kDKltjhg==/2937895070114174",
	"G3fWGyhZ-K5HnPEYihEZXg==/5738351185435997",
	"PtLd62-khEg8iCutTdE5Vg==/109951163286813093",
	"KPluSQe8ANKOYHmKKQJgig==/6012129581245478",
	"0qSEuzSqPNrACMPoGy8efw==/109951162863729074",
	"e0bWedo3fOZROYKZ1VERPg==/109951165579703663",
	"i-SguJ4MFxaGXf33MNKEXw==/2270491511396203",
	"i-SguJ4MFxaGXf33MNKEXw==/2270491511396203",
	"i-SguJ4MFxaGXf33MNKEXw==/2270491511396203",
	"KK6lEOnt-ADbrvT7cflDaQ==/109951163296300547",
	"H0VQBvES9ijYpu4lhZIYPw==/18712588395060972",
	"i-7ktILRPImJ0NwiH8DABg==/109951162885959979",
	"qMg2-kgxvYwMRvABdQJ91Q==/109951166198069948",
	"ZUCE_1Tl_hkbtamKmSNXEg==/109951163009282836",
	"pEStWtGqwpJqeiig0EBGgQ==/109951164884055054",
	"jNhg3v8ayCzL_k470qQyvQ==/3424978721550752",
	"2px9OOkj-c7BkB-mEvN8Qw==/109951163198805758",
	"5zdj5hh_ybsty7f4_BtILg==/109951166198295387",
	"ygxAeYxxXPONww041tylMw==/5996736418028563",
	"6Equs_n-FrHndGb3SGT7EA==/109951165779395044",
	"I31NLw0rw2kPh_nakck9Jw==/109951166200147817",
	"z14HqwDUEqknSB5UZMYcRw==/5892282813453489",
	"PtLd62-khEg8iCutTdE5Vg==/109951163286813093",
	"eyw6kIJBcGpwk31id-XrUA==/3275445142255309",
	"LCmRq8CpGIAWqtBYQiRhcA==/19107313067702013",
	"g7aakYG_Wfmrn1_IDfVUXA==/109951165050166241",
	"gTBPHihncu4dAY91JbpOVA==/109951163019332860",
	"1LrtvH8EpKb5iHKR9qEU0Q==/109951163063843501",
	"ESKiNVBmXgTD5qZgW75S-A==/109951166198341336",
	"SxU9ZctOvc4lJHDa-vcKyg==/109951163072078462",
	"KoX76KbSnDSf-dCaqWUzOw==/6626756582011433",
	"EIJc2Wt5AEsIHCFcVxm6pg==/109951165033567317",
	"3xWlqwYmfwRFebeiONUpGg==/109951164546210608",
	"sF9I_mKMVNtsCD-ZXzfV_A==/109951165251958014",
	"l-oheMQzLncYGGv3E7Wn9A==/109951165101444453",
	"_xZS7ETwZ-EK71Yvr-MFcQ==/109951164945006694",
	"B_sCLXthAHgoVEMIRNU1hw==/109951163559682176",
	"fq0hzTQfWUi8rzv0qhe4Ug==/18583945534233783",
	"Opsxqd-3B0YFy-OAuKUPrw==/109951165159939277",
	"0dym_keDqAbqYlOiQmUjiw==/109951164728012307",
	"h5EaaG1M7F31yy1aJ1D7eA==/109951163677145681",
	"2aTrg-Zz72Ms6ySsjPcKCg==/109951163918904060",
	"pYKBjkB6FoNh5Yxkb9uCbw==/109951165698369632",
	"3fLss9bteRVXZNpWWajNxA==/109951166202396444",
	"YSjS4oUkmB8R9kxuk_5E5Q==/109951165323892198",
	"Y4q55Zfv_SEVoXhVK6eMpQ==/109951166202419826",
	"ECoB5pAS7dnHfFLrsifWPg==/109951165946252774",
	"eMyCr0gv0kPGlew9XTNjyA==/109951163944178164",
	"McwYbq8c2e9uugG51Rm-Jg==/109951166222733663",
	"_Is4YWbdiD4yBoxeR4ZGoA==/109951166200289382",
	"cZPx3peGTuWEI_GaZB5CDg==/8892850045794893",
	"tou7ElOOrFaJ7ICkNMmUkA==/109951166688022119",
	"ks136mj7FcZXgZ8IF-cpSA==/109951163986681435",
	"MjXuHJB9kDPu7X45aUs5GQ==/14457478393642798",
];
var count = musicId.length - 1;
var original = new Array;
var i = 0;
var num = 0;
for (var j = 0; j <= count; j++){
	original[j] = j;
}
original.sort(function(){
	return 0.5 - Math.random();
});
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
function musicClick(){
	musicPlay();
	music.onended = function(){
		nextSong();
		music.play();
	}
	$("#last").click(function(){
		lastSong();
		if(music.paused){
			$("#stop").attr("src", "https://muxmus.com/img/bf.svg");
		}
		music.play();
	});
	$("#next").click(function(){
		nextSong();
		if(music.paused){
			$("#stop").attr("src", "https://muxmus.com/img/bf.svg");
		}
		music.play();
	});
}
function lastSong(){
	i -= 1;
	if(i < 0){
		num = original[0];
		original.sort(function(){
			return 0.5 - Math.random();
		});
		ifLast();
		i = count;
	}
	musicPlay();
}
function nextSong(){
	i += 1;
	if(i > count){
		num = original[count];
		original.sort(function(){
			return 0.5 - Math.random();
		});
		ifNext();
		i = 0;
	}
	musicPlay();
}
function ifLast(){
	if(original[count] == num){
		original.sort(function(){
			return 0.5 - Math.random();
		});
		ifLast();
	}
}
function ifNext(){
	if(original[0] == num){
		original.sort(function(){
			return 0.5 - Math.random();
		});
		ifNext();
	}
}
function musicPlay(){
	music.src = url + musicId[original[i]] + ".mp3";
	document.getElementById("songs").innerHTML = title[original[i]] + " · " + artist[original[i]];
	media();
}
function media(){
    if ('mediaSession' in navigator){
		navigator.mediaSession.metadata = new MediaMetadata({
			title: title[original[i]],
			artist: artist[original[i]],
			artwork: [{src: "https://p1.music.126.net/" + album[original[i]] + ".jpg?param=300y300" }],
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
		navigator.mediaSession.setActionHandler('previoustrack', function(){
			lastSong();
			if(music.paused){
				$("#stop").attr("src", "https://muxmus.com/img/bf.svg");
			}
			music.play();
		});
    }
}
if(document.all){
	window.attachEvent('onload',musicClick);
}
else{
	window.addEventListener('load',musicClick,false);
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
	var vol = 0.3;
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
