// JavaScript Document
if ('mediaSession' in navigator) {
	navigator.mediaSession.metadata = new MediaMetadata({
	title: '123',
	artist: '321',
	artwork: [
	{src: 'https://files.catbox.moe/mnl4p1.jpg', sizes: '1920x1080', type: 'image/jpge'}
	]
	});
}