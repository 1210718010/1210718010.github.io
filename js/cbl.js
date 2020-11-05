// JavaScript Document
$(document).ready(function () {
	var bbb=$('#bbb');
	var ccc=$('#ccc');
	var slider=$('#slider');
	bbb.click( function () {
		slider.animate({right:0},500);
		bbb.attr("class", "gb")
		ccc.attr("class", "dk")
	})
	ccc.click( function () {
		slider.animate({right:-350},500);
		ccc.attr("class", "gb")
		bbb.attr("class", "dk")
	})
})
