// JavaScript Document
// Update: 2022.11.22 12:11(GMT+8)
var bg = [
	{
		id: "102940261",
		title: "Handler One",
		artist: "粉帮老大"
	},
	{
		id: "100039624",
		title: "",
		artist: ""
	},
	{
		id: "87706186",
		title: "",
		artist: ""
	},
	{
		id: "102257565",
		title: "",
		artist: ""
	},
	{
		id: "88823878",
		title: "",
		artist: ""
	},
	{
		id: "101114306",
		title: "",
		artist: ""
	},
	{
		id: "85626613",
		title: "",
		artist: ""
	},
	{
		id: "81943456",
		title: "",
		artist: ""
	}
];
var bgCount = bg.length - 1;
var bgOriginal = new Array;
var bgI = 0;
var bgNum = 0;
var bgFlag = 0;
for (var bgJ = 0; bgJ <= bgCount; bgJ++){
    bgOriginal[bgJ] = bgJ;
}
bgOriginal.sort(function(){
    return 0.5 - Math.random();
});
$(document).ready(function(){
	document.body.style.background = "url(//pximg.rainchan.win/img?img_id=" + bg[bgOriginal[bgI]].id + ")";
	document.body.style.backgroundColor = "black";
	document.body.style.backgroundRepeat = "no-repeat";
	document.body.style.backgroundAttachment = "fixed";
	document.body.style.backgroundSize = "cover";
	document.body.style.backgroundPosition = "center";
	bgI += 1;
});
setInterval(function(){
	if(bgI <= bgCount){
		autoSwitch();
		i += 1;
	}
	else{
		bgNum = bgOriginal[bgCount];
		bgOriginal.sort(function(){
			return 0.5 - Math.random();
		});
		ifSwitch();
		bgI = 0;
		autoSwitch();
		i += 1;
	}
},1000);
function autoSwitch(){
	document.body.style.background = "url(//pximg.rainchan.win/img?img_id=" + bg[bgOriginal[bgI]].id + ")";
	document.body.style.backgroundColor = "black";
	document.body.style.backgroundRepeat = "no-repeat";
	document.body.style.backgroundAttachment = "fixed";
	document.body.style.backgroundSize = "cover";
	document.body.style.backgroundPosition = "center";
}
function ifSwitch(){
	if(bgOriginal[0] == bgNum){
		bgOriginal.sort(function(){
			return 0.5 - Math.random();
		});
		ifSwitch();
	}
}
