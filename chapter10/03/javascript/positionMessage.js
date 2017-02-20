function positionMessage(){
	if (!document.getElementById) return false;
	if (!document.getElementById("message")) return false;
	var elem = document.getElementById("message");
	elem.style.position = "absolute";
	elem.style.left = "50px";
	elem.style.top = "100px";
	moveElement("message",125,25,20);
	
	if (!document.getElementById("message1")) return false;
	var elem = document.getElementById("message1");
	elem.style.position = "absolute";
	elem.style.left = "50px";
	elem.style.top = "50px";
	moveElement("message1",125,125,20);
}


addLoadEvent(positionMessage);
