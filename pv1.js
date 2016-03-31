adingoFluct ={};

window.addEventListener('load',start,false);

function start(){
	adingoFluct ={};
	var arg = new Object;
	var pair=location.search.substring(1).split('&');
		for(var i=0;pair[i];i++) {
   			 var kv = pair[i].split('=');
   			 arg[kv[0]]=kv[1];
		}
	if(arg['idol']){
		xxxjson(lulu2.call(new link(decodeURIComponent(arg['idol']))));
		chkidol(arg['idol']);
		adingoFluct ={};
	}else{
		xxxjson(lulu2.call(new link('女優')));
	}
 }

function chkidol(q){
	// console.log(q);
	var x = document.getElementsByClassName('idolname');
	for (var i = 0; i < x.length; i++){
		if(x[i].firstElementChild.title == decodeURIComponent(q)){
			x[i].style.backgroundColor = "plum";
		}
	}
}

function link(text){
    this.api_url = 'https://api.flickr.com/services/rest/?';
    this.opt = {method:'flickr.photos.search',
                api_key:'665f189ad2f511c7c9595aa9a845da03',
                text: encodeURIComponent(text),
                sort:'relevance',     // sort:'interestingness-desc',
                privacy_filter:'public+photos',
                content_type:'photos+only',
                per_page:'100',
                format:'json',
                nojsoncallback:'1',}
  }

function lulu2(){
        var url = '';
          for(var i in this.opt){
                url = url + i + '=' + this.opt[i] +'&';
          }
        return this.api_url+url;
  }

function imgurl(json_d){
		// console.log(json_d);
		allids(json_d);
	    var xx = document.getElementById('list');
	    var oi = document.getElementsByClassName('flickr_img');
	          for(var l = oi.length; l > 0; l--){
	               xx.removeChild(oi[0]);
	            }
	    var t = json_d['photos']['photo'];
	    var size = '.jpg';    // var size = '_b.jpg';
	    for(var i in t){
	    	if(filter(t[i]['id'])){
		        var url = 'https://farm' + t[i]['farm'] + '.staticflickr.com/' + t[i]['server'] + '/' + t[i]['id'] + '_' + t[i]['secret'] + size;  
		        //console.info('imgurl::',url);
		        var b = document.createElement('div');
		            b.setAttribute('class','flickr_img');
		               for(var inf in t[i]){
		                    b.setAttribute(inf,t[i][inf]);
		                }
		            b.innerHTML = '<img src="'+ url +'" alt="' + t[i]['title'] +'" title="' + t[i]['title'] +'" />';
		            xx.appendChild(b);
		            document.title = t[i]['title'];
			}
	    }
	}

function xxxjson(ulink){
    var flickr_ajax = new XMLHttpRequest();
        flickr_ajax.onreadystatechange = function(){
          if(flickr_ajax.readyState == 4 && flickr_ajax.status == 200 ){
              imgurl(JSON.parse(flickr_ajax.responseText));
            }
          }
        flickr_ajax.open('GET', ulink, true);
        flickr_ajax.send(null);
  }

function filter(chkid){
	// フィルダです。存在するIDの画像は除外する。
	var ids = ["14818130783","14775586556","14611866647","8470144811","8391466323","14611858757","8161101217","14611958158","8318530530","8234120795","8517673515","8489650336","8471205666","8318536016","14611995487","8234049177","8426411663","3078873627","14611629119","8029710849","14798522785","14611627539","8191000828","10603578975","2944199844","14798588165","8317664885","2992065538","3684060686","8507558096","8488555251","8400444533","14795382901","8047490724","6044561753","8489653482","8471242210","8470112489","10838475654","8489650686","8404714227","8392514124","4039374800","8318448696","8043135492","8398912652","8234031753","8397835349","8426366863","8391500874","8317330053","8509145534","14611946458","8390416657","10838662443","10854852863","8488555211","8520420593","8488305199","8401494904","10600662154","8517694175","8398915690","8489400032","8392836973","8476470114","8520417439","8518806000","8491715497","8488349901","8427313996","8234098717","8475408445","8390298815","8398909238","8393925344","8518811816","8401538022","8437195117","8189929407","8517721555","8317323239","8517671671","8426341427","8391361406","8391307745","8430083314","8400379971","8471238396","8318525350","8381153433","8234985150","8234105451","8321051801","14604266549","14611752898","15049290481","8170950923","9521050061","8318457550","9525717418","14795371751","5949405729","7309455680","10601198656","8518788546","8390328925","9189526937","9588540109","9189534435","7309454188","8193425460","14810782093","9189526467","9189535727","9192334146","9189539891","8405808970","8391382858","9189538549","2143381140","8234082231","2143381154","3385222796","2143381148","2143381158","8042978716","7309454714","7309456140","7307950708","7343662428","7366124402","7457110456","7421435386","7324486668","7472915546","7178599403","7326354792","7324885596","7465107334","7407302806","7321235270","7343297050","7178684497","7318821512","7338126986","7363960162","7431989128","7320803082","7315565194","7403769394","7370589100","7157678285","7472833798","7322407950","7314769428","7395658972","7337108092","7420937704","7458716682","7335824060","7337874638","7178655445","7377684704","7371227760","7157559251","7387529942","7320949646","7323727750","7371404034","7367480874","7331777328","7337692804","7323092942","7391814126","7432106238","7403851198","7430350248","7431670066","7157223691","7332831822","7322862752","7498023500","7412466482","7321764672","7411706162","7484928500","7352659628","7184267127","7424390214","2904166509","4533768772","8437194135","14798127152","8170938049","8488555883","8170971016","8391465161","8235097828","14796034774","8317397929","8170972298","8233911429","4039214638","14794947771","5037758423","14818333323","14796031644","14611546887","14611929389","8517691515","10600673356","8476468934","8234941448","8322110428","11338924506","8318458316","8505964208","8426342621","8470232149","8047180458","8069215571","10854619314","8437516113","8502872989","8431999139","6806554353","6806554271","6806554577","9189524011","6806554417","10163796825","8032145472","8392392988","14787801021","25255229013","25934590675","8235165104","8573499621","15008951002","15119405510","15124292177","15125451917","15314788855","5220883120","15114726670","15132337967","9113699277","9918064953","8423660938","16353923729","11798787036","9165995236","11093129715","9398125574","10898041323","9398125972","3581294792","5047705460","2162797809","4333650086","5047467801","5602505296","2911319680","2910258642","3877033505","4539535525","2274937941","12980916564","15968020764"];

	if(ids.indexOf(chkid) == -1){
		// console.info('return true');
		return true;
	}else{
		// console.info('return false');
		return false;
	}
}

function fids(ids){
	// function filter(ids)の重複チェック
	// 単独利用
	var nids = [];
	console.info('old_array',ids.length);
	for(var i = 0 ; i < ids.length; i++){
		if(nids.indexOf(ids[i]) == -1){
			nids.push(ids[i]);
		}
	}
	
	var str = '';
	for(var i = 0; i < nids.length; i++){
		str = str +'"'+nids[i]+'",'
	}
	console.info('new_array',nids.length);
	console.info(str);
}


function allids(json_d){
	//JSON データのすべての写真IDをリターンする。フィルダをIDを集取するためのFNです。
	//単独利用
	vv = json_d["photos"]["photo"];
	ids = [];
		for(var i in vv){
			ids[i]=vv[i]['id'];
		}
	console.log(ids);
}


function at(){
	//すべてリンクのタイトルを取得します。
	//単独利用
	var x = document.getElementsByTagName('a');
	var t1;
	var t2
		for(var i=0; i < x.length; i++){
			t1 = t1 + x[i].title +',';
			t2 = t2 + '"' +x[i].title+ '",';

		}
	console.info(t1);
	console.info(t2);
}

function alla(){
	// あるページのすべてのリンクのInnerTextを集取し、リンクを作成
	// 単独利用
	// 本ベージにある全てのタイトルのをアレイを作成しておく
	// var chk = []; 
	var j = document.getElementsByTagName('a');
	for(var i in j){
		if(chk.indexOf(j[i].innerText) == -1){
			var name = j[i].innerText;
			console.log('<div class = "idolname level_1"><a href="./index.html?idol=' + name + '" title="' + name + '">' + name + '</a></div>');
		}
	}
}
