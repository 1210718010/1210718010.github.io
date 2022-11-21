// JavaScript Document
// Update: 2022.11.22 02:00(GMT+8)
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
]；
var bgCount = bg.length - 1;
$(function(){
	document.getElementById("body").style.background = "url(//pximg.rainchan.win/img?img_id=" + bg[getRndInteger(0, bgCount)] + ")";
})
function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}