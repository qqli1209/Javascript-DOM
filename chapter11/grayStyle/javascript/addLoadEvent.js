function addLoadEvent(func){
	var oldOnLoad = window.onload;
	if(typeof oldOnLoad != "function"){
		window.onload = func;
	} else {
		oldOnLoad();
		func();
	}
}