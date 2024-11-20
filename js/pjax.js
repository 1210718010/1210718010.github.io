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
		ccc.attr("class","dk")
        });
	ccc.click(function(){
		slider.css({'right':'-400px','opacity':'0'});
		ccc.attr("class","gb");
		bbb.attr("class","dk")
        });
	var sliderHref = window.location.href;
	$("#slider-link a").each(function(){
		if($(this).attr('href') == sliderHref){
			$(this).css({'pointer-events':'none','opacity':'.7','background-color':'#000','border-radius':'5px','padding':'2px'})
		}else{
			$(this).removeAttr("style","")
		}
	})
        hljs.highlightAll();
        twikoo.init({
                envId: 'https://twikoo.muxmus.com',
                el: '#tcomment',
                lang: 'zh-CN'
                })
        });
hljs.highlightAll()
