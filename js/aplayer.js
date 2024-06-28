// JavaScript Document
$.ajax({
	type:"get",
	url:"https://file.muxmus.com:5000/api/music",
	dataType:"json",
	success:function(jsonData){
		const ap = new APlayer({
			container: document.getElementById("aplayer"),
			fixed: true,
			theme: "#8E8CD8",
			order: "random",
			volume: 0.3,
			lrcType: 3,
			audio: jsonData,
		});
		ap.on('play', () => {
			const currentPlayMeta = ap.list.audios[ap.list.index];
			navigator.mediaSession.metadata = new MediaMetadata({
				title: currentPlayMeta.name,
				artist: currentPlayMeta.artist,
				artwork: [{ src: currentPlayMeta.cover || '' }],
			});
			navigator.mediaSession.setActionHandler('previoustrack',function(){
				ap.skipBack();
			});
			navigator.mediaSession.setActionHandler('nexttrack',function(){
				ap.skipForward();
			});
		});
	},
});
