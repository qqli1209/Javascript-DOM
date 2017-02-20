function showPic(pic){
	var source = pic.getAttribute("href");
	var gallery = document.getElementById("placehloder");
	gallery.setAttribute("src",source);
	
	var title_content = pic.getAttribute("title");
	var description_content = document.getElementById("description");
	//alert(description_content.firstChild.nodeValue);
	description_content.firstChild.nodeValue = title_content;
}
/*
function countBodyChildern(){
	var body_ele = document.getElementsByTagName("body")[0];
	alert(body_ele.nodeType);
}
window.onload = countBodyChildern;
*/





