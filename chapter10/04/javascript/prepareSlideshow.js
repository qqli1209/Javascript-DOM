function prepareSlideshow(){
	if (!document.getElementById) return false;
	if (!document.getElementsByTagName) return false;
	var slideshow = document.createElement("div");
	slideshow.setAttribute("id","slideshow");
	var preview = document.createElement("img");
	preview.setAttribute("src","./images/topics.gif"); //图片的索引是相对HTML文件，而非js文件
	preview.setAttribute("alt","building blocks of web designing");
	preview.setAttribute("id","preview");
	slideshow.appendChild(preview);
	var list = document.getElementById("linklist");
	insertAfter(slideshow,list);
	preview.style.left = "0px";
	preview.style.top = "0px";
	var links = list.getElementsByTagName("a");
	if (links.length < 1) return false;
	links[0].onmouseover = function(){
		moveElement("preview",-100,0,10);
		}
	links[1].onmouseover = function(){
		moveElement("preview",-200,0,10);
	}
	links[2].onmouseover = function(){
		moveElement("preview",-300,0,10);
	}
}
addLoadEvent(prepareSlideshow);