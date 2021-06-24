// JavaScript Document
document.write("<div id=\"slider\">");
document.write("	<img class=\"tx\" src=\"https://files.catbox.moe/w8ygtu.png\" alt=\"头像\" />");
document.write("	<div class=\"js\">");
document.write("		<br>");
document.write("		<a href=\"https://muxmus.com/\"><p>返回首页</p></a>");
document.write("	</div>");
document.write("</div>");
document.write("<div class=\"dk\" id=\"bbb\">");
document.write("	<img class=\"cd\" alt=\"打开菜单\" src=\"https://muxmus.com/img/cd.svg\" />");
document.write("</div>");
document.write("<div class=\"gb\" id=\"ccc\">");
document.write("	<img class=\"cd\" alt=\"关闭菜单\" src=\"https://muxmus.com/img/gb.svg\" />");
document.write("</div>");
$(document).ready(function () {
	var bbb = $('#bbb');
	var ccc = $('#ccc');
	var slider = $('#slider');
	bbb.click(function(){
		slider.animate({right:0},500);
		bbb.attr("class","gb");
		ccc.attr("class","dk");
	});
	ccc.click(function(){
		slider.animate({right:-350},500);
		ccc.attr("class","gb");
		bbb.attr("class","dk");
	});
});
