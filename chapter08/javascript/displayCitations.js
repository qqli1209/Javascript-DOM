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
	//����blockquoteԪ��
	var quote = document.getElementsByTagName("blockquote");
	if (quote.length < 1) {
		return false;
	}
	for (var i=0; i<quote.length; i++){
		if (!quote[i].getAttribute("cite")){
			continue;
		}
		//����blockquote�����cite
		var url = quote[i].getAttribute("cite");
		var quoteElements = quote[i].getElementsByTagName("*");
		if (quoteElements.length < 1){
			continue;
		}
		//����aԪ�ص�λ��
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




