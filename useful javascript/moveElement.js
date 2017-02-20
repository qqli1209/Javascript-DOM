function moveElement(ElementID,final_x,final_y,interval){
	if (!document.getElementById) return false;
	if (!document.getElementById(ElementID)) return false;
	var elem = document.getElementById(ElementID);
	if (elem.movement){
		clearTimeout(elem.movement);
	}
	if (!elem.style.left) {
		elem.style.left = "0px";
	}
	if (!elem.style.top) {
		elem.style.top = "0px";
	}
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	var dist;
	if (xpos == final_x && ypos == final_y) return true;
	if (xpos < final_x){
		dist = Math.ceil((final_x-xpos)/10);
		xpos = xpos + dist;
	}
	if (xpos > final_x){
		dist = Math.ceil((xpos-final_x)/10);
		xpos = xpos - dist;
	}
	if (ypos < final_y){
		dist = Math.ceil((final_y-ypos)/10);
		ypos = ypos + dist;
	}
	if (ypos > final_y){
		dist = Math.ceil((ypos-final_ys)/10);
		ypos = ypos - dist;
	}
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	var repeat = "moveElement('" + ElementID + "',"+ final_x + "," + final_y + "," + interval + ")";
	elem.movement = setTimeout(repeat,interval);
}