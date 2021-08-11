// JavaScript Document
if ('mediaSession' in navigator) {
	navigator.mediaSession.metadata = new MediaMetadata({
		title: '木辛木杉',
		artwork: [
			{src: 'https://files.catbox.moe/mnl4p1.jpg', sizes: '1920x1080', type: 'image/jpge'}
		]
	});
	navigator.mediaSession.setActionHandler('nexttrack', function(){
		nextSong();
		if(music.paused){
			$("#stop").attr("src", "https://muxmus.com/img/bf.svg");
		}
		music.play();
	});
}
