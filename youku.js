// 2016/04/16 19:02:54
// http://cloud.youku.com/docs?id=81
// 搜索视频通过关键词(searches/video/by_keyword)

function youku_api_help(){
	// <script src="http://player.youku.com/jsapi" type="text/javascript" charset="utf-8" async defer></script>
	// <script type="text/javascript" src="http://player.youku.com/jsapi"></script>
	// <div id = "S0001_youku_video_item"></div>
	// <div id="youku_player_area" style="width:480px;height:400px"></div>
}

// var debug = false;
var debug = true;
adingoFluct ={};
window.addEventListener("load", start,false);

function start(){
	ffc2();
	add_script();
	var x = document.getElementById("youku_player_key");
	// youku_ajax(lulu.call(new youku_url(fn_replace(x.getAttribute("youku_keyword")))));
	
	if(x.getAttribute("youku_keyword")){
		// 一般用
		youku_ajax(lulu.call(new youku_url(x.getAttribute("youku_keyword"))));
	}else{
		// musicinjp.hateblo.jp div 属性作成されるため用
		youku_ajax(lulu.call(new youku_url(x.innerText)));
		console.info(x.innerText);
	}
	
	ffc2();
}

function add_script(){
	var a = document.createElement("script");
		a.src = "http://player.youku.com/jsapi";
	var g = document.getElementsByTagName("script")[0];
		g.parentNode.insertBefore(a, g);
}


function filter(e){
	// 不要的視頻
	if(debug){console.info(e);}
	var filter_id = ["XNDcwNDkxMTY=","XODk2NTQyNDA0","XMTgyOTA2ODAw","XMTk0OTcwOTAw","XNTk0NDI1NjQ4","XNjUwMzAwODY0","XNTg1NjE1OTk2","XMTQ5NjMwODg0","XNDMzNDY2ODMy","XNjI4NDc1MTY=","XMTYzNDU4MjQ0","XMTgwMjcyNTAw","XMTM0NDM3MDA4","XNTg5NzEwMDI4","XNTg4MDkwMzIw","XMjgzOTk5MTg4","XMjg4MjAwMDUy","XMzE5NDg1MTgw","XNDgzNTAwODg0","XMjkyOTgwMTA0","XNjI5OTI4MTQw","XMjM4MDg4MDgw","XMjI2MzAzOTE2","XMTY5MDc1NzA4","XMjQ3MjY3MDUy","XMjQzMTQ3OTQ0","XNTkyOTg1ODAw","XMTYyMjg3ODQ0","XODQ2NDI3ODQw","XNDcxNDgxOTgw","XMTQ5NzcxNjQ0NA==","XNTUxNzE4OTA4","XNDc0ODY1MjY4","XNDk0ODg1NjU2","XNTEzOTgxNDQw","XODc1ODg1Mzg0","XMzU4MDI1MzY4","XNjQ5ODAzNjMy","XMzkyMjUwMTY4","XODczNjkxNjQ4","XNTE0NDU4MjI0","XMTM1ODExNjA5Mg==","XODU5Njk0Njk2","XODQ2NjAxMDky","XODYxMTMwOTE2","XOTE4MDY1MzQ4","XOTA2ODczNTA4"];
		if(filter_id.indexOf(e) == -1){
			if(debug){console.info("#0096 true",e);}
			return true;
		}else{
			if(debug){console.info("#0099 false",e);}
			return false;
		}
}

function filter_uid(e){
	// 不要的視頻用戶
	if(debug){console.info(e);}
	var filter_id = ["54153731","10383377","56583198","33717355","5905594","126954699","7368072","7698972","22339140","454478","367031421","48734628","74493034","482887904","114280274","153875516","136489272","131940235","7416371","482888859","108235295","12295108","32727908","5298518","81437291","715164903","31262980","56203847","41585834","753204826","320120541","79524895","101943556","134652478","80789134","352692222","38156750","19502477","60273750","48313593","123459940","45017611","471838148","65089604","12279623","35090842"];
		if(filter_id.indexOf(e) == -1){
			if(debug){console.info("#0041 true",e);}
			return true;
		}else{
			if(debug){console.info("#0044 false",e);}
			return false;
		}
}


function youku_url(wkey){
	// URL鏈接
	this.url = "https://openapi.youku.com/v2/searches/video/by_keyword.json?";
	this.para = {"client_id" : "b93cd074ce24b0a0",
				 "keyword" : wkey,
				 // "category" : "音乐",
				 "timeless" : 7,
				 "timemore" : 3,
				 "page" : 1,
				 // "count" : 7,
				};
}

function lulu(){
	// URL鏈接
	var temp = "";
	for(var j in this.para){
		if(debug){console.info("#0036",this.para[j]);}
		if(this.para[j] != ""){
			temp = temp + j + "=" + this.para[j] + "&";
		}
	}
	return this.url + temp;
}

function youku_ajax(q_url){
	// 申請數據
	var ajax = new XMLHttpRequest();
		ajax.onreadystatechange = function(){
			if(ajax.status ==200 && ajax.readyState == 4){
				temp = JSON.parse(ajax.responseText);
				if(debug){console.info("#0083 ajax",temp);}
				youku_video_start(temp);
			}
		}
		ajax.open("GET", q_url);
		ajax.send(null);
} 

function youku_video_start(q){
	// 插入位置
	var x = document.getElementById("S0001_youku_video_item");
		x.style.borderStyle =  "solid";
		x.style.borderWidth =  "1px";

	// 有圖片的視頻標籤
	var img = document.createElement("dimgv");
		img.setAttribute("id", "youtube_iimgem_img");
		x.appendChild(img);

	// 只有文字標識的視頻標籤
	var title = document.createElement("div");
		title.setAttribute("id", "youtube_item_title");
		title.setAttribute("style", "display:none;");
		x.appendChild(title);


	var imgc = 0;
	for(var i = 0; i < q.videos.length; i++){
		// 過濾
		if(filter(q.videos[i].id.toString()) && filter_uid(q.videos[i].user.id)) {
			// 計算圖片視頻數量，取4個
			imgc++;
			if(imgc < 5){
				
				var l = document.createElement("img");
					if(debug){console.info("#0077item",q.videos[i].title);}
					l.setAttribute("class", "youku_item_list");
					l.setAttribute("youku_video_id", q.videos[i].id);
					l.setAttribute("src", q.videos[i].thumbnail);
					l.setAttribute("alt", q.videos[i].title);
					l.innerHTML = q.videos[i].title.bold();

					if(debug){
						l.style.width = "120px" ;
						l.style.height = "90px" ;
						l.style.padding = "2px" ;
					}

					img.appendChild(l);
			}

			// 文字標籤取所有
			var b = document.createElement("div");
				b.setAttribute("class", "youtube_video_title");
				b.setAttribute("youku_video_id", q.videos[i].id);
				b.setAttribute("alt", q.videos[i].title);
				b.setAttribute("youku_up_user_id", q.videos[i].user.id);
				b.setAttribute("youku_up_user_link", q.videos[i].user.link);
				b.innerHTML = q.videos[i].title.bold();
				title.appendChild(b);
		}

	}

	// 標籤功能
	youku_click();
}

function youku_click(){
	// 圖片標籤部分
	var c = document.getElementsByClassName("youku_item_list");
	for(var j = 0; j < c.length; j++){
		c[j].addEventListener("click", function(){
			if(debug){console.info("#0087 click", this);}
			youku_player(this.getAttribute("youku_video_id"));
			playing_title(this.getAttribute("alt"));
			document.getElementById("youku_player_area").style.display = "block";
		},false);

		c[j].addEventListener("click", function(){
			document.getElementById("youtube_item_title").style.display = "block";
		}, false);
	}

	// 文字標籤部分
	var d = document.getElementsByClassName("youtube_video_title");
	for(var j = 0; j < d.length; j++){
		d[j].addEventListener("click", function(){
			if(debug){console.info("#00143 click", this);}
			youku_player(this.getAttribute("youku_video_id"));
			document.getElementById("youku_player_area").style.display = "block";
			playing_title(this.getAttribute("alt"));
		},false);
	}

}

function playing_title(q){
	// 顯示正在部分的視頻Title
	if(debug){console.info("#00170", q);}
	if(document.getElementById("playing_title")){
			document.getElementById("playing_title").innerText = q;
		}else{
			var tag = document.getElementById("youku_player_area");
			var a = document.createElement("div");
				a.setAttribute("id", "playing_title");
				a.innerText = q;
				tag.parentElement.insertBefore(a, tag.nextSibling); 
		}

}

function ffc2(){
	// 廣告刪除
	var j = document.getElementById("unitedblades_div");
	if(j){
		j.parentElement.removeChild(j);
	}
}

function fn_replace(q){
	// 編碼整理
	var x = {'&'   :   '%26', 
			 '"'   :   '%22',
			 ' '   :   '+',
			 '%20' :   '+',
			 '\n'  :   '%0d%0a'
			 };

	for(var i in x){
		q= q.replace(RegExp(i,'g'),x[i]);
	}
	return q;
}

function youku_player(q){
	// 播放器
		YKplayer = new YKU.Player('youku_player_area',{
				styleid: '0',
				client_id: 'b93cd074ce24b0a0',
				vid: q,
				autoplay: true,
				events:{
							onPlayerReady: function(){
								if(debug){console.info("onPlayerReady");}
								YKplayer.playVideo();
							},
							onPlayStart: function(){
								if(debug){console.info("onPlayStart");}
								if(debug){console.info(YKplayer.select._vid);}
								YKplayer.resize(320,280);
								var v =document.getElementById("youku_player_area");
								v.style.width = "320px";
								v.style.heigth = "280px";
							},
							onPlayEnd: function(){
								if(debug){console.info("onPlayEnd");}
								YKplayer.resize(0,0);
								document.getElementById("youku_player_area").style.display = "none";
								var temp = document.getElementById("playing_title");
								temp.parentElement.removeChild(temp);
							}
						}
				});
}

