/*function displayAccesskey(){
	if (!document.getElementsByTagName) return false;
	if (!document.createElement) return false;
	if (!document.createTextNode) return false;
	var links =  document.getElementsByTagName("a");
	if (links.length < 1)	return false;
	var dl = document.createElement("dl");
	for (var i=0; i<links.length; i++){
		if (!links[i].getAttribute("accesskey")) continue;
		var akey = links[i].getAttribute("accesskey");
		var txt = links[i].lastChild.nodeValue;
		var dt = document.createElement("dt");
		var dt_txt = document.createTextNode(akey);
		dt.appendChild(dt_txt);
		var dd = document.createElement("dd");
		var dd_txt = document.createTextNode(txt);
		dd.appendChild(dd_txt);
		dl.appendChild(dt);
		dl.appendChild(dd);

	}
	var header3 = document.createElement("h2");
	var header3_txt = document.createTextNode("Accesskeys list");
	header3.appendChild(header3_txt);
	document.body.appendChild(header3);
	document.body.appendChild(dl);
}*/




function displayAccesskey(){
	if (!document.getElementsByTagName) return false;
	if (!document.createElement) return false;
	if (!document.createTextNode) return false;
	var links =  document.getElementsByTagName("a");
	if (links.length < 1)	return false;
	var ul = document.createElement("ul");
	for (var i=0; i<links.length; i++){
		if (!links[i].getAttribute("accesskey")) continue;
		var akey = links[i].getAttribute("accesskey");
		var txt = links[i].lastChild.nodeValue;
		var str = akey + " : " + txt;
		var li = document.createElement("li");
		var li_txt = document.createTextNode(str);
		li.appendChild(li_txt);
		ul.appendChild(li);
	}
	var header3 = document.createElement("h2");
	var header3_txt = document.createTextNode("Accesskeys list");
	header3.appendChild(header3_txt);
	document.body.appendChild(header3);
	document.body.appendChild(ul);
}

addLoadEvent(displayAccesskey);