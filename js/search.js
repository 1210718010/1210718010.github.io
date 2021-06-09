// JavaScript Document
function getinput(){
	var con = document.getElementById('search').value;
	window.location.href=("https://cn.bing.com/search?q=" + con);
}
$("#search").bind("keydown",function(e){
	let theEvent = e || window.event;
	let keyCode = theEvent.keyCode || theEvent.which || theEvent.charCode;
	if (keyCode == 13){
		getinput();
	}
})
