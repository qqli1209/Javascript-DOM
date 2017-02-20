function displayCitations(){
	if (!document.getElementsByTagName) {
		return false;
	}
	if (!document.createElement) {
		return false;
	}
	if (!document.createTextNode) {
		return false;
	}
	//所有blockquote元素
	var quote = document.getElementsByTagName("blockquote");
	if (quote.length < 1) {
		return false;
	}
	for (var i=0; i<quote.length; i++){
		if (!quote[i].getAttribute("cite")){
			continue;
		}
		//保存blockquote里面的cite
		var url = quote[i].getAttribute("cite");
		var quoteElements = quote[i].getElementsByTagName("*");
		if (quoteElements.length < 1){
			continue;
		}
		//插入a元素的位置
		var elem = quoteElements[quoteElements.length - 1];
		var superscript = document.createElement("sup");
		var alink = document.createElement("a");
		var txt = document.createTextNode("source");
		superscript.appendChild(alink);
		alink.appendChild(txt);
		alink.setAttribute("href",url);
		elem.appendChild(superscript);
	}
}

addLoadEvent(displayCitations);




