// 2016/04/09 9:44:13

function help(){
  // <!-- 以下必選項，id值不可改變 -->
  // <!-- mode值shuffle/order可選，defaultVol值在0至100之間，playlistid值必選，Youtube有效的播放列表id. -->
  // <script src="http://cdefgab.web.fc2.com/plist.js" type="text/javascript" charset="utf-8" async defer></script>
  // <div id="player2" mode = "shuffle" defaultVol = "10" playlistid = "PLvswSo32Xlu-UFlzsEnrJ8Y7N_vpinXu0"></div><br />
  // <!-- 以下可选项，id值不可变，其他任意 -->
  // <div id="mute">vol_mute</div>
  // <div id="volPlus">volPlus</div>
  // <div id="volMinus">volMinus</div>
  // <div id="seekTo30">seekTo30</div>
  // <!-- <div id="nextVideo">nextVideo</div> -->
  // <!-- <div id="previousVideo">previousVideo</div> -->
  // <!-- <div id="playVideo">playVideo</div> -->
  // <!-- <div id="stopVideo">stopVideo</div> -->
  // <!-- <div id="pauseVideo">pauseVideo</div> -->
  // <!-- <div id="PlaybackRate">PlaybackRate</div> -->

  // https://developers.google.com/youtube/js_api_reference#Playback_status
}

    var tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var debug = false;
    var player;
    var playlist = document.getElementById("player2").getAttribute("playlistid");
    var videoid = "koNJ1W7gP78";
    // var array_list = ["koNJ1W7gP78","uo35R9zQsAI"];
    
    var div_area = "player2";
    var h = "135";
    var w = "200";
    function onYouTubeIframeAPIReady() {
        player = new YT.Player(div_area, {
          height: h,
          width: w,
          videoId: videoid,
          playerVars:{
                  "controls":"1",
                  "disablekb":"0",
                  "iv_load_policy":"3",
                  "modestbranding":"0",
                  "showinfo":"0",
                  "playsinline":"0"
                },
          events: {
                  "onReady" :   onPlayerReady,
                  "onStateChange" :   onPlayerStateChange,
                  "onError" :   onPlayerError,
                  "onPlaybackRateChange"  :   onPlayerPlaybackRateChange
                }
        });
    }
   
    function onPlayerReady(event) {
            var vol = document.getElementById("player2").getAttribute("defaultVol");
            event.target.setVolume(vol);
            event.target.cuePlaylist({list:playlist});
      }

    function onPlayerPlaybackRateChange(event){
            if(debug){console.info('onPlayerPlaybackRateChange to >', event.target.getPlaybackRate());}
    }


    function onPlayerStateChange(event) {
          if(debug){console.info("#061 onPlayerStateChange");}
          if(debug){console.info("#062 player.getPlayerState()",event.target.getPlayerState());}
          event.target.setPlaybackQuality("tiny");

              // -1（未開始）
              // 0（終了）
              // 1（再生中）
              // 2（停止）
              // 3（バッファリング中）
              // 5（頭出し済み）

              // -1 – 未开始
              // 0 – 已结束
              // 1 – 正在播放
              // 2 – 已暂停
              // 3 – 正在缓冲
              // 5 – 已插入视频

          if(event.target.getPlayerState()== -0){
          	}


          if(event.target.getPlayerState()== 0){
              if(debug){console.info("#078",event.target.getPlayerState());}
              // 再生モードの切り替え
              if(document.getElementById("player2").getAttribute("mode") == "shuffle"){
                event.target.playVideoAt(rand_play_index());
              }else{
                // 自動的に次の動画を再生されます、下のコマンドを追加すると次の次のなります。
                // event.target.nextVideo();
              }
          	}

          if(event.target.getPlayerState()== 1){
          		if(debug){console.info("#079 State:",event.target.getPlayerState());}
          		if(debug){console.info("#080 VideoInfo",player.getVideoData());}
              document.title = event.target.getVideoData()['title'];
          	}

          if(event.target.getPlayerState()== 2){
          	}

          if(event.target.getPlayerState()== 3){
          	}

          if(event.target.getPlayerState()== 4){
          	}

          if(event.target.getPlayerState() == 5 ){
              // 再生モードの切り替え
              if(document.getElementById("player2").getAttribute("mode") == "shuffle"){
                event.target.playVideoAt(rand_play_index());
              }else{
                event.target.playVideo();
              }
            }
      }

    function rand_play_index (){
        // shuffle再生するための再生IDをランダムに
    		var index = Math.floor(Math.random() * player.getPlaylist().length);
    		return index;
      }


    function one_list_play(event){

      }
    
    function onPlayerError(event){
        event.target.nextVideo();
      }
    
    function f_nextVideo(){
        if(document.getElementById("nextVideo")){
            var tag = document.getElementById("nextVideo")
                tag.addEventListener("click",function(){player.nextVideo();},false);
          }
      }
    
    function f_previousVideo(){
        if(document.getElementById("previousVideo")){
            var tag = document.getElementById("previousVideo")
                tag.addEventListener("click",function(){player.previousVideo();},false);
          }
      }

    function f_playVideo(){
        if(document.getElementById("playVideo")){
            var tag = document.getElementById("playVideo");
                tag.addEventListener("click",function(){player.playVideo();},false);
          }
      }
    
    function f_stopVideo(){
        if(document.getElementById("stopVideo")){
            var tag = document.getElementById("stopVideo");
                tag.addEventListener("click",function(){player.stopVideo();},false);
          }
      }

    function f_pauseVideo(){
        if(document.getElementById("pauseVideo")){
            var tag = document.getElementById("pauseVideo");
                tag.addEventListener("click",function(){player.pauseVideo();},false);
          }
      }
    
    function f_seekTo30(){
        if(document.getElementById("seekTo30")){
            var tag = document.getElementById("seekTo30");
                tag.addEventListener("click",function(){
                player.seekTo(player.getCurrentTime()+30);},false);
          }
      }

    function f_mute(){
        if(document.getElementById("mute")){
            var tag = document.getElementById("mute");
                tag.addEventListener("click",function(){
                  if(player.isMuted()){
                        if(debug){console.info("#140 getVolume",player.getVolume());}
                        player.unMute();
                    }else{
                        if(debug){console.info("#143 getVolume",player.getVolume());}
                        player.mute();
                    }},false);
          }
      }

    function f_volPlus(){
        if(document.getElementById("volPlus")){
            var tag = document.getElementById("volPlus");
                tag.addEventListener("click",function(){
                    player.setVolume(player.getVolume()+6);},true);
          }
      }

    function f_volMinus(){
        if(document.getElementById("volMinus")){
            var tag = document.getElementById("volMinus");
                tag.addEventListener("click",function(){
                   player.setVolume(player.getVolume()-6);},true);
          }
      }

    function f_PlaybackRate(){
        if(document.getElementById("PlaybackRate")){
            var x =["0.25","0.5","1","1.25","1.5","2"];
            var tag = document.getElementById("PlaybackRate");
                tag.addEventListener("click",function(){
                    var i = x.indexOf(player.getPlaybackRate().toString());
                    if( i == x.length-1){
                        player.setPlaybackRate(x[0]);
                        tag.innerText= "PlaybackRate  "+ x[0];
                    }else{
                        player.setPlaybackRate(x[i+1]);
                        tag.innerText= "PlaybackRate  "+ x[i+1];
                    }
                  },true);
        }
    }

    function debug_info(line_num){
        console.info("#" + line_num);
        console.info(player.getVolume());
        console.info(player.getVideoData());
        console.info(player.getCurrentTime());
        console.info(player.getDebugText());
        console.info(player.getVideoUrl());
        console.info(player.getPlaylistId());
    }
    
    onload = function(){
        f_nextVideo();
        f_previousVideo();
        f_playVideo();
        f_stopVideo();
        f_pauseVideo();
        f_seekTo30();
        f_mute();
        f_volPlus();
        f_volMinus();
        f_PlaybackRate();
    }