// JavaScript Document
var img = "https://k-on.blog/img/zt.svg";
$(function(){
	$("#stop").click(function(){
		img = $(this).attr('src');
		if (img == "https://k-on.blog/img/zt.svg") {
			$("#stop").attr("src", "https://k-on.blog/img/bf.svg")
		}else{
			$("#stop").attr("src", "https://k-on.blog/img/zt.svg")
		}
	});
});
