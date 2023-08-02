// JavaScript Document
$("#cbl").append("<div id=\"slider\"><div class=\"scrolling-area\"><div class=\"js\"><img class=\"tx\" src=\"https://muxmus.com/img/bk_8.png\" alt=\"\" /><p class=\"small\">社交媒体 / Social Media</p><a href=\"https://steamcommunity.com/id/muxmus/\" target=\"_blank\"><img class=\"bq\" src=\"https://img.shields.io/badge/1210718010-103b6b?style=flat-square&logo=steam&logoColor=ffffff\" alt=\"Steam\" /></a><a href=\"https://qm.qq.com/cgi-bin/qm/qr?k=rAN0D35rucs2u-MGcaKEHeWCG9tpTPaE\" target=\"_blank\"><img class=\"bq\" src=\"https://img.shields.io/badge/%E6%9C%A8%E8%BE%9B%E6%9C%A8%E6%9D%89-B73636?style=flat-square&logo=tencentqq&logoColor=ffffff\" alt=\"QQ\" /></a><br><a href=\"https://github.com/1210718010\" target=\"_blank\"><img class=\"bq\" src=\"https://img.shields.io/badge/1210718010-181717?style=flat-square&logo=github&logoColor=ffffff\" alt=\"Github\" /></a><a href=\"https://space.bilibili.com/397649728/\" target=\"_blank\"><img class=\"bq\" src=\"https://img.shields.io/badge/%E6%9C%A8%E8%BE%9B%E6%9C%A8%E6%9D%89-00a1d6?style=flat-square&logo=bilibili&logoColor=ffffff\" alt=\"bilibili\" /></a><p class=\"small\">电子邮箱 / E-mail</p><a href=\"mailto:dzb1211@gmail.com\"><img class=\"bq\" src=\"https://img.shields.io/badge/dzb1211-%40gmail.com-C95543?style=flat-square\" alt=\"Gmail\" /></a><a href=\"mailto:muxmus@qq.com\"><img class=\"bq\" src=\"https://img.shields.io/badge/muxmus-%40qq.com-4169e1?style=flat-square\" alt=\"QQmail\" /></a><br><a href=\"mailto:i@muxmus.com\"><img class=\"bq\" src=\"https://img.shields.io/badge/i-%40muxmus.com-228b22?style=flat-square\" alt=\"Zoho\" /></a><a href=\"mailto:muxmus@foxmail.com\"><img class=\"bq\" src=\"https://img.shields.io/badge/muxmus-%40foxmail.com-fabd03?style=flat-square\" alt=\"Foxmail\" /></a><p class=\"small\">Game uid（点击复制）</p><img id=\"textYs\" class=\"bq\" src=\"https://img.shields.io/badge/原神-116704962-555555?labelColor=EBD0B5&style=flat-square\" alt=\"116704962\" title=\"点击复制\" /><br><img id=\"textDz\" class=\"bq\" src=\"https://img.shields.io/badge/蛋仔派对-0122103787-555555?labelColor=E5B22E&style=flat-square\" alt=\"0122103787\" title=\"点击复制\" /><br><img id=\"text19\" class=\"bq\" src=\"https://img.shields.io/badge/重返未来：1999-300544421-555555?labelColor=C85433&style=flat-square\" alt=\"300544421\" title=\"点击复制\" /><textarea id=\"input\"></textarea><br><br><p><a date-pjax id=\"index\" href=\"https://muxmus.com\">返回首页</a></p><br><p><a date-pjax href=\"https://muxmus.com/blog/20230802/\">低仿pixiv自动轮播背景</a></p><p><a date-pjax href=\"https://muxmus.com/blog/20220912/\">中秋节拍月亮，结果还拍到了木星</a></p><p><a date-pjax href=\"https://muxmus.com/blog/20220731-2/\">一个浏览器主页</a></p><p><a date-pjax href=\"https://muxmus.com/blog/20220731/\">js音乐播放器</a></p><p><a date-pjax href=\"https://muxmus.com/blog/20220727-2/\">天台山</a></p><p><a date-pjax href=\"https://muxmus.com/blog/20220727/\">中华大扁锹饲养日志</a></p></div></div></div><div class=\"dk\" id=\"bbb\"><img class=\"cd\" alt=\"\" src=\"https://muxmus.com/img/cd.svg\" /></div><div class=\"gb\" id=\"ccc\"><img class=\"cd\" alt=\"\" src=\"https://muxmus.com/img/gb.svg\" /></div>");
$(document).ready(function(){
	var bbb = $('#bbb');
	var ccc = $('#ccc');
	var slider = $('#slider');
	bbb.click(function(){
		slider.animate({zIndex:110},0);
		slider.animate({opacity:1},0);
		slider.animate({right:0},500);
		bbb.attr("class","gb");
		ccc.attr("class","dk");
    });
	ccc.click(function(){
		slider.animate({right:-400},500);
		slider.animate({opacity:0},120);
		slider.animate({zIndex:-99},0);
		ccc.attr("class","gb");
		bbb.attr("class","dk");
	});
});
$(function(){
	$("#textYs").click(function(){
		var text = $("#textYs").attr("alt");
		var input = document.getElementById("input");
		input.value = text;
		input.select();
		document.execCommand("copy");
		alert("复制成功 " + text);
	});
	$("#text19").click(function(){
		var text = $("#text19").attr("alt");
		var input = document.getElementById("input");
		input.value = text;
		input.select();
		document.execCommand("copy");
		alert("复制成功 " + text);
	});
	$("#textDz").click(function(){
		var text = $("#textDz").attr("alt");
		var input = document.getElementById("input");
		input.value = text;
		input.select();
		document.execCommand("copy");
		alert("复制成功 " + text);
	});
});
