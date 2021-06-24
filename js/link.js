// JavaScript Document
document.body.addEventListener('copy',function(e){
	if(window.getSelection().toString() && window.getSelection().toString().length > 20){
		setClipboardText(e);
	}
});
function setClipboardText(event){
	var clipboardData = event.clipboardData || window.clipboardData;
	if(clipboardData){
		event.preventDefault();
		var htmlData = window.getSelection().toString() + '<br>' + '---------------' + '<br>' + '原文：' + window.location.href;
		var textData = window.getSelection().toString() + '\n' + '---------------' + '\n' + '原文：' + window.location.href;
		clipboardData.setData('text/html', htmlData);
		clipboardData.setData('text/plain',textData);
	}
}
