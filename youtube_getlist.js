// 2016/04/10 9:06:19
function gul(){
	// youtube list gettitle;
	console.clear();
	var item =" ";
	var x = document.getElementsByClassName("vm-pl-title vm-video-title");
	for(var i = 0; i < x.length; i++){
		var temp = x[i].firstElementChild;
		// item = "<a class =\"artist\" listid = \"" + $_GET(temp.href,"list")  + "\" href=\"" + temp.href +"\" title=\"" + temp.innerText +"\">" + f(temp.innerText) + "</a><br>\n" + item;
		item = "<a class =\"artist\" href=\"" + temp.href +"\" title=\"" + temp.innerText +"\">" + f(temp.innerText) + "</a>&nbsp;&nbsp;" + item;
	}
	console.info(item);
}

function f(q){
	var x = {"Artist":'', "-":'', " ":""};
	for (var i in x){
		q = q.replace(RegExp(i,"g"), x[i]);
	}
	 return q;
}

gul();

function $_GET(url,q){
      var temp = {};
        var search = url.split('?')[1].split('&');
          for(var i = 0; i < search.length; i++){
                var para = search[i].split('=');
                temp[para[0]]=para[1];
          }
        if(temp[q]){
        		console.log(temp[q])
                return temp[q];
        }else{
            console.log(temp);
                return temp;
        }
}

gul();

function help(){
	var tag = document.createElement("script");
		tag.type = "text/javascript";
		tag.src = "http://cdefgab.web.fc2.com/youtube_getlist.js";
		document.body.appendChild(tag);
}
