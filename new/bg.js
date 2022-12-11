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
	},
	{
		id: "100517229",
		title: "",
		artist: ""
	},
	{
		id: "99828937",
		title: "",
		artist: ""
	},
	{
		id: "72235081",
		title: "",
		artist: ""
	},
	{
		id: "99016503",
		title: "",
		artist: ""
	},
	{
		id: "75925271",
		title: "",
		artist: ""
	},
	{
		id: "98260510",
		title: "",
		artist: ""
	},
	{
		id: "67101372",
		title: "",
		artist: ""
	},
	{
		id: "75925245",
		title: "",
		artist: ""
	},
	{
		id: "70140023",
		title: "",
		artist: ""
	},
	{
		id: "101532841",
		title: "",
		artist: ""
	},
	{
		id: "90150693",
		title: "",
		artist: ""
	},
	{
		id: "63601864",
		title: "",
		artist: ""
	},
	{
		id: "101862996",
		title: "",
		artist: ""
	},
	{
		id: "96963173",
		title: "",
		artist: ""
	},
	{
		id: "70059505",
		title: "",
		artist: ""
	},
	{
		id: "100879225",
		title: "",
		artist: ""
	},
	{
		id: "65047674",
		title: "",
		artist: ""
	},
	{
		id: "82528811",
		title: "",
		artist: ""
	},
	{
		id: "61879076",
		title: "",
		artist: ""
	},
	{
		id: "79288120",
		title: "",
		artist: ""
	},
	{
		id: "34844544",
		title: "",
		artist: ""
	},
	{
		id: "69080429",
		title: "",
		artist: ""
	},
	{
		id: "57793944",
		title: "",
		artist: ""
	},
	{
		id: "70937229",
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
$(function(){
	autoSwitch();
});
setInterval(function(){
	if(bgI <= bgCount){
		autoSwitch();
	}else{
		bgNum = bgOriginal[bgCount];
		bgOriginal.sort(function(){
			return 0.5 - Math.random();
		});
		ifSwitch();
		bgI = 0;
		autoSwitch();
	}
},60000);
function autoSwitch(){
	document.body.style.background = "url(//px.s.rainchan.win/img/original/" + bg[bgOriginal[bgI]].id + ")";
	document.body.style.backgroundColor = "black";
	document.body.style.backgroundRepeat = "no-repeat";
	document.body.style.backgroundAttachment = "fixed";
	document.body.style.backgroundSize = "cover";
	document.body.style.backgroundPosition = "center";
	bgI += 1;
	img1 = new Image();
	img1.src = "//pximg.rainchan.win/img?img_id=" + bg[bgOriginal[bgI + 1]].id;
}
function ifSwitch(){
	if(bgOriginal[0] == bgNum){
		bgOriginal.sort(function(){
			return 0.5 - Math.random();
		});
		ifSwitch();
	}
}
