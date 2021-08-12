// JavaScript Document
if ('mediaSession' in navigator) {
	navigator.mediaSession.metadata = new MediaMetadata({
		title: '木辛木杉',
		artwork: [{src: "https://files.catbox.moe/mnl4p1.jpg"}]
	});
	navigator.mediaSession.setActionHandler('play', function(){
		music.play();
		navigator.mediaSession.playbackState = "playing";
		$("#stop").attr("src", "https://muxmus.com/img/bf.svg");
	});
	navigator.mediaSession.setActionHandler('pause', function(){
		music.pause();
		navigator.mediaSession.playbackState = "Paused";
		$("#stop").attr("src", "https://muxmus.com/img/zt.svg");
	});
	navigator.mediaSession.setActionHandler('nexttrack', function(){
		nextSong();
		if(music.paused){
			$("#stop").attr("src", "https://muxmus.com/img/bf.svg");
		}
		music.play();
	});
}
