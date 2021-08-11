// JavaScript Document
if ('mediaSession' in navigator) {
	navigator.mediaSession.metadata = new MediaMetadata({
	title: '木辛木杉',
	artwork: [
		{src: 'https://files.catbox.moe/mnl4p1.jpg', sizes: '1920x1080', type: 'image/jpge'}
	]
	});
	navigator.mediaSession.setActionHandler('play', porp());
	navigator.mediaSession.setActionHandler('pause', porp());
	navigator.mediaSession.setActionHandler('nexttrack', clickNext());
}
