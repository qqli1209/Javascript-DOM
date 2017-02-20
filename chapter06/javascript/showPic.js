function showPic(pic){
	if (!document.getElementById("placehloder")){
		return false;
	}
	var gallery = document.getElementById("placehloder");
	if (gallery.nodeName != "IMG"){
		return false;
	}
	var source = pic.getAttribute("href");
	gallery.setAttribute("src",source);
	
	if (document.getElementById("description")){
		var description = document.getElementById("description");
/* 		if(pic.getAttribute("title")){
		var text = pic.getAttribute("title");
		} else {
			text = "";
		} */	
		var text = pic.getAttribute("title") ? pic.getAttribute("title") : "";
		if (description.firstChild.nodeType == 3){
			description.firstChild.nodeValue = text;
		}	
	}
	return true;
}


function prepareGallery(){
	if(!document.getElementsByTagName){ 
		return false;
	}
	if(!document.getElementById){ 
		return false;
	}
	var gallery = document.getElementById("imagegallery");
	if(!gallery){ 
		return false;
	}
	var links = gallery.getElementsByTagName("a");
	for(var i=0; i<links.length; i++){
		links[i].onclick = function(){
			return !showPic(this);
		}
		//links[i].onkeypress = links[i].
	}
}
//window.onload = prepareGallery; //网页加载好时，prepareGallery函数就会执行,方案不好

function addLoadEvent(func){
	var oldonload = window.onload;
	if(typeof oldonload != "function"){
		window.onload = func;
	}else {
		window.onload = function(){
			oldonload();
			func();
		}
	}
}

addLoadEvent(prepareGallery);


