// JavaScript Document
var img = "zt.svg";
$(function(){
	$("#stop").click(function(){
		img = $(this).attr('src');
		if (img == "zt.svg") {
			$("#stop").attr("src", "bf.svg")
		}else{
			$("#stop").attr("src", "zt.svg")
		}
	});
});
