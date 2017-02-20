function popUp(URL){
	window.open(URL,"popup","width = 320,height = 480");
}

window.onload = prepareLinks;
function prepareLinks(){
	if(!getElementsByTagName) return false;
	var links = document.getElementsByTagName("a");
	for(var i=0; i<links.length; i++){
		if(links[i].getAttribute("class") == "popup"){
			links[i].onclick = function(){
				popUp(this.getAttribute("href"));
				return false;
			}
		}
	}
}




