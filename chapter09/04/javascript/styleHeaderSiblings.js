function styleHeaderSiblings(){
	if(!document.getElementsByTagName) return false;
	var headers = document.getElementsByTagName("h1");
	if (headers.length < 1) return false;
	var elem;
	for(var i=0; i<headers.length; i++){
		elem = getNextElement(headers[i].nextSibling);
		addClass(elem,"intro");
		
	}
}

function addClass(elemt,value){
	if(!elemt.class) {
		elemt.className = value;
	} else {
		elemt.className = elemt.className + " " +value;
	}
}

function getNextElement(node){
	if (node.nodeType == 1){
		return node;
	}
	if (node.nextSibling){
		return getNextElement(node.nextSibling);
	}
	return null;
}

addLoadEvent(styleHeaderSiblings);



