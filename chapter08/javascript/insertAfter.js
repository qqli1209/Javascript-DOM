function insertAfter(newElement,targetElement){
	var parentElement = targetElement.parentNode;
	if(parentElement.lastChild == targetElement){
		parentElement.appendChild(newElement);
	} else {
		parentElement.insertBefore(newElement,targetElement.nextSibling);
	}
}