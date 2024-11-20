$(document).pjax('a[date-pjax]', '#main-content', {
        fragment: '#main-content', timeout: '60000'
        });
$(document).on('ready pjax:end', function(event) {
        var bbb = $("#bbb");
	var ccc = $("#ccc");
	var slider = $("#slider");
	bbb.click(function(){
		slider.css({'right':'0px','opacity':'1'});
		bbb.attr("class","gb");
		ccc.attr("class","dk");
        });
	ccc.click(function(){
		slider.css({'right':'-400px','opacity':'0'});
		ccc.attr("class","gb");
		bbb.attr("class","dk");
        });
        hljs.highlightAll();
        twikoo.init({
                envId: 'https://twikoo.muxmus.com',
                el: '#tcomment',
                lang: 'zh-CN'
                })
        });
hljs.highlightAll();
