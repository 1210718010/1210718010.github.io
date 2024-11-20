$(document).pjax('a[date-pjax]', '#main-content', {
        fragment: '#main-content', timeout: '60000'
        });
$(document).on('ready pjax:end', function(event) {
        hljs.highlightAll();
        twikoo.init({
                envId: 'https://twikoo.muxmus.com',
                el: '#tcomment',
                lang: 'zh-CN'
                })
        });
hljs.highlightAll();
