// JavaScript Document
// Update: 2024.1.7 22:49(UTC+8)
$("#bg").append("<div id=\"bg1\"></div><div id=\"bg2\"></div><div id=\"artist\"><span id=\"bgName\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img id=\"bf\" class=\"bf\" src=\"https://muxmus.com/img/bf.svg\" alt=\"\" ><img id=\"zt\" class=\"zt\" src=\"https://muxmus.com/img/zt.svg\" alt=\"\" ><img id=\"yc\" class=\"yc\" src=\"https://muxmus.com/img/yc.svg\" alt=\"\" ><img id=\"xs\" class=\"xs\" src=\"https://muxmus.com/img/xs.svg\" alt=\"\" ><a id=\"title\" href=\"\" target=\"_blank\"></a></span></div><div class=\"left\"><div class=\"left1\"><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 32 32\"><path d=\"M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z\"></path></svg></div></div><div class=\"right\"><div class=\"right1\"><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" viewBox=\"0 0 32 32\"><path d=\"M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z\"></path></svg></div></div>");
var img = [
	{
		id: "84603466",
		title: "VISIONS",
		artist: "米山舞",
		url: "2020/09/25/19/55/14/84603466_p0.jpg"
	},
	{
		id: "93596357",
		title: "esc.006",
		artist: "米山舞",
		url: "2021/10/22/00/13/46/93596357_p0.jpg"
	},
	{
		id: "70059505",
		title: "受験生の夏",
		artist: "杉87",
		url: "2019/01/13/00/38/40/70059505_p0.jpg"
	},
	{
		id: "98260510",
		title: "夕焼け飛行",
		artist: "杉87",
		url: "2022/05/11/00/58/08/98260510_p0.jpg"
	},
	{
		id: "99016503",
		title: "水没の夏",
		artist: "杉87",
		url: "2022/06/13/00/30/02/99016503_p0.jpg"
	},
	{
		id: "99828937",
		title: "海上の駄菓子屋",
		artist: "杉87",
		url: "2022/07/20/02/06/27/99828937_p0.jpg"
	},
	{
		id: "100517229",
		title: "残照",
		artist: "杉87",
		url: "2022/08/18/13/28/18/100517229_p0.jpg"
	},
	{
		id: "102940261",
		title: "Handler One",
		artist: "粉帮老大",
		url: "2022/11/20/07/50/26/102940261_p0.jpg"
	},
	{
		id: "63601864",
		title: "じめじめ日和",
		artist: "くっか",
		url: "2017/06/28/12/00/58/63601864_p0.jpg"
	},
	{
		id: "70140023",
		title: "犬神の憑く睡蓮鉢カフェ",
		artist: "くっか",
		url: "2018/08/11/14/24/51/70140023_p0.jpg"
	},
	{
		id: "75925245",
		title: "幽Tuber",
		artist: "くっか",
		url: "2019/07/27/00/41/58/75925245_p0.jpg"
	},
	{
		id: "75925271",
		title: "ジュライドライ",
		artist: "くっか",
		url: "2019/07/27/00/43/16/75925271_p0.jpg"
	},
	{
		id: "81943456",
		title: "遅刻魔女",
		artist: "くっか",
		url: "2020/05/29/21/26/43/81943456_p0.jpg"
	},
	{
		id: "67101372",
		title: "room",
		artist: "Miv4t",
		url: "2018/02/04/09/37/11/67101372_p0.jpg"
	},
	{
		id: "72235081",
		title: "IRIDESCENT",
		artist: "Miv4t",
		url: "2018/12/23/00/16/04/72235081_p0.jpg"
	},
	{
		id: "102257565",
		title: "I DON'T LOVE YOU",
		artist: "Miv4t",
		url: "2022/10/27/00/12/21/102257565_p0.jpg"
	},
	{
		id: "104923272",
		title: "PAPERCUT 4.0",
		artist: "Miv4t",
		url: "2023/01/30/00/01/17/104923272_p0.jpg"
	},
	{
		id: "90150693",
		title: "夢と郷",
		artist: "vinci_v柒",
		url: "2021/05/29/00/35/36/90150693_p0.png"
	},
	{
		id: "96963173",
		title: "Butterfly",
		artist: "Lifeline",
		url: "2022/03/17/03/12/43/96963173_p0.jpg"
	},
	{
		id: "61879076",
		title: "ー",
		artist: "しおん",
		url: "2017/03/12/22/24/34/61879076_p0.png"
	},
	{
		id: "79288120",
		title: "夕波のドレス",
		artist: "碧風羽",
		url: "2020/02/05/00/00/08/79288120_p0.jpg"
	},
	{
		id: "34844544",
		title: "星月夜",
		artist: "c7肘",
		url: "2013/04/07/01/53/07/34844544_p0.jpg"
	},
	{
		id: "69080429",
		title: "初音ミクシンフォニー2018-2019",
		artist: "Rella",
		url: "2018/06/05/00/00/26/69080429_p0.png"
	},
	{
		id: "57793944",
		title: "浴衣とお面",
		artist: "Hiten｜1日目東Ａ-16a",
		url: "2016/07/08/00/33/45/57793944_p0.png"
	},
	{
		id: "63450144",
		title: "",
		artist: "雨陌",
		url: "2017/06/18/20/05/30/63450144_p0.png"
	},
	{
		id: "87337809",
		title: "",
		artist: "雨陌",
		url: "2021/01/27/16/37/07/87337809_p0.png"
	},
	{
		id: "88417243",
		title: "",
		artist: "雨陌",
		url: "2021/03/13/18/08/24/88417243_p0.png"
	},
	{
		id: "90149890",
		title: "",
		artist: "雨陌",
		url: "2021/05/28/18/15/12/90149890_p0.png"
	},
	{
		id: "109010006",
		title: "Oh, Rain shower",
		artist: "コウ乃トリ",
		url: "2023/06/14/19/42/36/109010006_p0.png"
	},
	{
		id: "93187055",
		title: "FES Time Memories",
		artist: "Csyday",
		url: "2021/10/03/07/32/45/93187055_p0.jpg"
	},
	{
		id: "104289966",
		title: "雪が降ってきた！",
		artist: "紺屋鴉江",
		url: "2023/01/06/20/08/57/104289966_p0.jpg"
	},
	{
		id: "86644511",
		title: "原神印象图",
		artist: "zi13591",
		url: "2020/12/30/13/15/59/86644511_p3.jpg"
	},
	{
		id: "92161881",
		title: "モンド城",
		artist: "藤ちょこ（藤原）",
		url: "2021/08/22/00/00/10/92161881_p0.jpg"
	},
	{
		id: "93077711",
		title: "原神一周年！",
		artist: "池本ゆーこ",
		url: "2021/09/28/15/32/22/93077711_p0.jpg"
	},
	{
		id: "95681846",
		title: "原神拜年祭x洛天依",
		artist: "Yolanda",
		url: "2022/01/22/00/56/09/95681846_p0.jpg"
	},
	{
		id: "101664845",
		title: "💙",
		artist: "Yolanda",
		url: "2022/10/03/20/36/46/101664845_p0.jpg"
	},
	{
		id: "97833640",
		title: "薄櫻が綻ぶ時",
		artist: "ATDAN-",
		url: "2022/04/24/01/05/47/97833640_p0.jpg"
	},
	{
		id: "113904028",
		title: "Amusement Park",
		artist: "ATDAN-",
		url: "2023/12/03/01/52/20/113904028_p0.jpg"
	},
	{
		id: "101660930",
		title: "ちいさな冒険者",
		artist: "猩猩",
		url: "2022/10/03/17/14/47/101660930_p1.jpg"
	},
	{
		id: "100022190",
		title: "夏日晚风",
		artist: "久.",
		url: "2022/07/27/02/32/25/100022190_p0.jpg"
	},
	{
		id: "100307641",
		title: "Goldfish",
		artist: "Taroco",
		url: "2022/08/07/20/50/04/100307641_p0.jpg"
	},
	{
		id: "100339292",
		title: "愛の階段",
		artist: "Anmi@画集発売中",
		url: "2022/08/09/00/00/10/100339292_p0.jpg"
	},
	{
		id: "100857791",
		title: "モーニング ★ スター",
		artist: "Recneps-SAIS",
		url: "2022/08/30/00/18/22/100857791_p0.png"
	},
	{
		id: "102452474",
		title: "NAHIDA纳西妲",
		artist: "KANA",
		url: "2023/03/18/06/58/14/102452474_p0.jpg"
	},
	{
		id: "113058386",
		title: "雨散歩",
		artist: "ふぃーる　日曜日 西 ね32a",
		url: "2023/11/02/00/00/21/113058386_p0.jpg"
	},
	{
		id: "113866439",
		title: "【今日魔女】预售中",
		artist: "balabling",
		url: "2023/12/01/20/58/36/113866439_p0.jpg"
	},
	
];
var bgCount = img.length - 1;
var bgOriginal = new Array;
var bgI = 0;
var bgNum = 0;
var bgFlag = 0;
var lastFlag = 0;
for (var bgJ = 0; bgJ <= bgCount; bgJ++){
    bgOriginal[bgJ] = bgJ;
}
bgOriginal.sort(function(){
    return 0.5 - Math.random();
});
function secondClick(){
	var timer = setInterval(function(){
		nextSwitch();
	},60000);
	$("#bf").click(function(){
    	 $("#bf").attr("class","zt");
    	 $("#zt").attr("class","bf");
    	 clearInterval(timer);
    });
    $("#zt").click(function(){
    	 $("#bf").attr("class","bf");
    	 $("#zt").attr("class","zt");
    	 secondClick();
    });
}
function nextSwitch(){
	if(bgI <= bgCount){
		autoSwitch();
	}else{
		bgNum = bgOriginal[bgCount];
		bgOriginal.sort(function(){
			return 0.5 - Math.random();
		});
		ifNext();
		bgI = 0;
		autoSwitch();
	}
}
function lastSwitch(){
	if(bgI >= 2){
		bgI -= 2;
		autoSwitch();
	}else{
		bgNum = bgOriginal[0];
		bgOriginal.sort(function(){
			return 0.5 - Math.random();
		});
		ifLast();
		bgI = bgCount;
		autoSwitch();
	}
}
function autoSwitch(){
	if(bgFlag == 0){
		$("#bg1").attr("style","position: fixed; top: 0%; left: 0%; width: 100%; height: 100%; transform: translate(0px, 0px); background: url(\"https://i.pixiv.re/img-original/img/" + img[bgOriginal[bgI]].url + "\") center center / cover no-repeat fixed black; z-index: -10; opacity: 1;");
		document.getElementById("title").innerHTML = "id：" + img[bgOriginal[bgI]].id + " | 画师：" + img[bgOriginal[bgI]].artist;
	}else{
		$("#bg1").attr("style","position: fixed; top: 0%; left: 0%; width: 100%; height: 100%; transform: translate(0px, 0px); background: url(\"https://i.pixiv.re/img-original/img/" + img[bgOriginal[bgI]].url + "\") center center / cover no-repeat fixed black; z-index: 119; opacity: 1;");
		document.getElementById("title").innerHTML = "id：" + img[bgOriginal[bgI]].id + " | 画师：" + img[bgOriginal[bgI]].artist;
	}
	$("#title").attr("href","https://www.pixiv.net/artworks/" + img[bgOriginal[bgI]].id);
	if(bgI < bgCount){
		bgI += 1;
		$("#bg2").attr("style","position: fixed; top: 0%; left: 0%; width: 100%; height: 100%; transform: translate(0px, 0px); background: url(\"https://i.pixiv.re/img-original/img/" + img[bgOriginal[bgI]].url + "\") center center / cover no-repeat fixed black; z-index: -11; opacity: 0;");
	}else{
		bgI += 1;
	}
}
function ifNext(){
	if(bgOriginal[0] == bgNum){
		bgOriginal.sort(function(){
			return 0.5 - Math.random();
		});
		ifNext();
	}
}
function ifLast(){
	if(bgOriginal[bgCount] == bgNum){
		bgOriginal.sort(function(){
			return 0.5 - Math.random();
		});
		ifLast();
	}
}
$(function(){
	autoSwitch();
});
if(document.all){
    window.attachEvent('onload',secondClick);
}
else{
    window.addEventListener('load',secondClick,false);
}
$(function(){
    $("#yc").click(function(){
    	$("#yc").attr("class","xs");
    	$("#xs").attr("class","yc");
    	document.getElementById("bg1").style.zIndex = "119";
    	bgFlag = 1;
    });
    $("#xs").click(function(){
    	$("#yc").attr("class","yc");
    	$("#xs").attr("class","xs");
    	document.getElementById("bg1").style.zIndex = "-10";
    	bgFlag = 0;
    });
    $(".left").click(function(){
    	lastSwitch();
    });
    $(".right").click(function(){
    	nextSwitch();
    });
});
