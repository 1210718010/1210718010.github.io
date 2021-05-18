// JavaScript Document
var img = "https://k-on.blog/img/zt.svg";
$(function(){
	$("#stop").click(function(){
		img = $(this).attr('src');
		if (img == "https://k-on.blog/img/zt.svg"){
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
	"561798054",
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
	"865492223",
	"441116287",
	"520461943",
	"29849049",
	"1431292823",
	"536570516",
	"1409311773",
	"1472480890",
	"1459343252",
	"1444071945",
	"514765041",
	"514761044",
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
	"You - dai/M.Graveyard",
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
	"Umbrella - Ember Island",
	"Let It Go - Loni Lovato",
	"茜さす - Aimer",
	"動く、動く - 水瀬いのり/久保ユリカ",
	"Amhrán na farraige - Lisa Hannigan",
	"夜航星 - 不才",
	"ここから、ここから - 水瀬いのり/花澤香菜/井口裕香/早見沙織",
	"夜に駆ける - YOASOBI",
	"群青 - YOASOBI",
	"たぶん - YOASOBI",
	"ハルジオン - YOASOBI",
	"NO, Thank You! - 放課後ティータイム",
	"U&I - 放課後ティータイム",
];
var index = 0;
index = Math.floor(Math.random() * musics.length);
window.onload = function(){
	music.src = url + musics[index] + ".mp3";
	document.getElementById("songs").innerHTML=songs[index];
	music.onended = function(){
		index = Math.floor(Math.random() * musics.length);
		music.src = url + musics[index] + ".mp3";
		document.getElementById("songs").innerHTML=songs[index];
		music.play();
	};
	$("#next").click(function(){
		index = Math.floor(Math.random() * musics.length);
		music.src = url + musics[index] + ".mp3";
		document.getElementById("songs").innerHTML=songs[index];
		if(music.paused){
			$("#stop").attr("src", "https://k-on.blog/img/bf.svg");
		};
		music.play();
	});
	
};
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
		vol =vol<1?(vol*10 +1)/10:1;
		$('#music')[0].volume = vol;
	});
	$('#down').click(function(){
		vol =vol>0?(vol*10 -1)/10:0;
		$('#music')[0].volume = vol;
	});
});
