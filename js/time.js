// JavaScript Document
document.write("<div id=\"divt\"></div>");
function startTime(){
	var now = new Date();
	var year = now.getFullYear();
	var month = now.getMonth() + 1;
	var day = now.getDate();
	var hh = now.getHours();
	var mm = now.getMinutes();
	var ss = now.getSeconds();
	month = checkTime(month);
	day = checkTime(day);
	hh = checkTime(hh);
	mm = checkTime(mm);
	ss = checkTime(ss);
	document.getElementById('divt').innerHTML = year + "." + month + "." + day + " " + hh + ":" + mm + ":" + ss;
	setTime(startTime(),100);
}
function checkTime(i){
	if(i<10){
		i = "0" + i;
	}
	return i;
}
