function addClass(element,value){
	if(!element.className){
		element.className = value;
	} else {
		newClassName = element.className;
		newClassName += " ";
		newClassName += vlaue;
		element.className = newClassName;
	}
}s