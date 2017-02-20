function moveElement(ElementID,final_x,final_y,interval){
	if (!document.getElementById) return false;
	if (!document.getElementById(ElementID)) return false;
	var elem = document.getElementById(ElementID);
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if (xpos == final_x && ypos == final_y) return true;
	if (xpos < final_x){
		xpos++;
	}
	if (xpos > final_x){
		xpos--;
	}
	if (ypos < final_y){
		ypos++;
	}
	if (ypos > final_y){
		ypos--;
	}
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	var repeat = "moveElement('" + ElementID + "',"+ final_x + "," + final_y + "," + interval + ")";
	var movement = setTimeout(repeat,interval);
}