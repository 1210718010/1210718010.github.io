// JavaScript Document
$.ajax({
	type:"get",
	url:"https://api.muxmus.com:5000/music",
	dataType:"json",
	success:function(jsonData){
		for(int i = 0; i <= jsonData.length - 1; i++){
			jsonData[i].pic += "@350w.webp"
		}
		const ap = new APlayer({
			container: document.getElementById("aplayer"),
			fixed: true,
			theme: "#8E8CD8",
			order: "random",
			volume: 0.3,
			lrcType: 3,
			audio: jsonData,
		});
		ap.on("loadeddata", () => {
			const currentPlayMeta = ap.list.audios[ap.list.index];
			navigator.mediaSession.metadata = new MediaMetadata({
				title: currentPlayMeta.name,
				artist: currentPlayMeta.artist,
				artwork: [{src: currentPlayMeta.cover, size: "350x350", type: "image/webp"}]
			});
			navigator.mediaSession.setActionHandler("previoustrack",function(){
				ap.skipBack();
				ap.play();
			});
			navigator.mediaSession.setActionHandler("nexttrack",function(){
				ap.skipForward();
				ap.play();
			});
		});
	},
});
