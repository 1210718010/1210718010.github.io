// JavaScript Document
var tips = new Array(16);
tips[0] = "<div id=\"slider\">";
tips[1] = "	<img class=\"tx\" src=\"https://files.catbox.moe/w8ygtu.png\" alt=\"\" />";
tips[2] = "	<div class=\"js\">";
tips[3] = "		<br>";
tips[4] = "		<a date-pjax href=\"https://muxmus.com/blog/\"><p>返回首页</p></a>";
tips[5] = "		<br>";
tips[6] = "		<a date-pjax href=\"https://muxmus.com/blog/20201225/\"><p>关于《全员恶玉》的一些看法</p></a>";
tips[7] = "		<a date-pjax href=\"https://muxmus.com/blog/20210601/\"><p>关于原神游戏适龄提示的一些讨论</p></a>";
tips[8] = "	</div>";
tips[9] = "</div>";
tips[10] = "<div class=\"dk\" id=\"bbb\">";
tips[11] = "	<img class=\"cd\" alt=\"\" src=\"https://muxmus.com/img/cd.svg\" />";
tips[12] = "</div>";
tips[13] = "<div class=\"gb\" id=\"ccc\">";
tips[14] = "	<img class=\"cd\" alt=\"\" src=\"https://muxmus.com/img/gb.svg\" />";
tips[15] = "</div>";
for (var i = 0; i < tips.length; i++){ 
	document.getElementById('cbl').innerHTML = tips[i];
}
$(document).ready(function(){
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
