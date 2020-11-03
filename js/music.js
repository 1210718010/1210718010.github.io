// JavaScript Document
$(function(){
    $("#audio").click(function(){
        if(music.paused){
            music.play();
            $("#audio").removeClass("pause").addClass("play");
        }else{
            music.pause();
            $("#audio").removeClass("play").addClass("pause");
        }
    });
});