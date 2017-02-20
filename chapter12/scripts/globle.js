function addLoadEvent(func){
	var oldLoad = window.onload;
	if(typeof oldLoad != "function"){
		window.onload = func;
	} else {
		window.onload = function(){
			oldLoad();
			func();
		}
	}
}

function insertAfter(NewElement,TagElement){
	var parent = TagElement.parentNode;
	if(parent.lastChild == TagElement){
		parent.appendChild(NewElement);
	} else {
		parent.insertBefore(NewElement,TagElement.nextSibling);
	}
}


function addClass(element,value){
	if(!element.className){
		element.className = value;
	} else {
		newClassName = element.className;
		newClassName += " ";
		newClassName += value;
		element.className = newClassName;
	}
}


function highLightPage(){
	if(!document.getElementsByTagName) return false;
	var header = document.getElementsByTagName("header");
	if(header.length == 0) return false;
	var navs = header[0].getElementsByTagName("nav");
	if(navs.length == 0) return false;
	var links = navs[0].getElementsByTagName("a");
	if(links.length == 0) return false;
	for (var i = 0; i < links.length; i++) {
		var linkurl = links[i].getAttribute("href");
		if (window.location.href.indexOf(linkurl) != -1) {
			addClass(links[i],"here");
			var linkText = links[i].lastChild.nodeValue.toLowerCase();
			document.body.setAttribute("id",linkText);
		}
	}
}


function moveElement(elementID,final_x,final_y,interval){
	if(!document.getElementById) return false;
	if(!document.getElementById(elementID)) return false;
	var elem = document.getElementById(elementID);
	if(elem.movement) {
		clearTimeout(elem.movement);
	}
	if(!elem.style.left) {
		elem.style.left = "0px";
	}
	if(!elem.style.top) {
		elem.style.top = "0px";
	}
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if(xpos==final_x && ypos==final_y){
		return true;
	}
	if(xpos < final_x){
		step_x = Math.ceil((final_x-xpos)/10);
		xpos += step_x;
	}
	if(ypos < final_y){
		step_y = Math.cel((final_y-ypos)/10);
		ypos += step_y;
	}
	if(xpos > final_x){
		step_x = Math.ceil((xpos-final_x)/10);
		xpos -= step_x;
	}
	if(ypos > final_y){
		step_y = Math.cel((ypos-final_y)/10);
		ypos -= step_y;
	}
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")";
	elem.movement = setTimeout(repeat,interval);
}


function prepareSlideshow(){
	if(!document.getElementById) return false;
	if(!document.getElementById("intro")) return false;
	var intro = document.getElementById("intro");
	var slideshow = document.createElement("div");
	slideshow.setAttribute("id","slideshow");
	var frame = document.createElement("img");
	frame.setAttribute("src","./images/frame.gif");
	frame.setAttribute("alt","");
	frame.setAttribute("id","frame");
	slideshow.appendChild(frame);
	var preview = document.createElement("img");
	preview.setAttribute("src","./images/slideshow.gif");
	preview.setAttribute("alt","slideshow");
	preview.setAttribute("id","preview");
	slideshow.appendChild(preview);
	insertAfter(slideshow,intro);
	var links = document.getElementsByTagName("a");
	var destination;
	for (var i = 0; i < links.length; i++) {
		links[i].onmouseover = function(){
			destination = this.getAttribute("href");
			if(destination.indexOf("index.html") != -1){
				moveElement("preview",0,0,5);
			}
			if(destination.indexOf("about.html") != -1){
				moveElement("preview",-150,0,5);
			}
			if(destination.indexOf("photos.html") != -1){
				moveElement("preview",-300,0,5);
			}
			if(destination.indexOf("live.html") != -1){
				moveElement("preview",-450,0,5);
			}
			if(destination.indexOf("contact.html") != -1){
				moveElement("preview",-600,0,5);
			}
		}
	}
}


function showSection(id){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementsByTagName("section")) return false;
	var sections = document.getElementsByTagName("section");
	if(sections.length < 1) return false;
	for (var i = 0; i < sections.length; i++) {
		if(sections[i].getAttribute("id") != id){
            sections[i].style.display = "none";
		} else {
			sections[i].style.display = "block";
		}
	}
}


function prepareInternalnav(){
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	if(!document.getElementsByTagName("article")) return false;
	var article = document.getElementsByTagName("article");
	if(article.length < 1) return false;
	var nav = article[0].getElementsByTagName("nav");
	if(nav.length < 1) return false;
	var links = nav[0].getElementsByTagName("a");
	for (var i = 0; i < links.length; i++) {
		var linkId = links[i].getAttribute("href").split("#")[1];
		if(!document.getElementById(linkId)) continue;
		document.getElementById(linkId).style.display = "none";
		links[i].destination = linkId;
		links[i].onclick = function(){
			showSection(this.destination);
			return false;
		}
	}
}

function showPic(whichpic){
	if(!document.getElementById) return false;
	if(!document.getElementById("description")) return false;
	if(!document.getElementById("placeholder")) return false;
	if(!whichpic.getAttribute("title")) return false;
	var title = whichpic.getAttribute("title");
	var description = document.getElementById("description");
	if(description.firstChild.nodeType == 3){
		description.firstChild.nodeValue = title;
	} else {
		description.firstChild.nodeValue = "";
	}
	var placeholder = document.getElementById("placeholder");
	var src = whichpic.getAttribute("href");
	placeholder.setAttribute("src",src);
	return false;
}


function prepareplaceholder(){
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","./images/placeholder.gif");
	placeholder.setAttribute("alt","my image gallery");
	var description = document.createElement("p");
	description.setAttribute("id","description");
	descriptionText = document.createTextNode("choose an image");
	description.appendChild(descriptionText);
	var imageGallery = document.getElementById("imagegallery");
	insertAfter(description,imageGallery);
	insertAfter(placeholder,description);

}


function prepareGallery(){
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	if(!document.getElementsByTagName) return false;
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	if(links.length < 1) return false;
	for (var i = 0; i < links.length; i++) {
		links[i].onclick = function(){
			return showPic(this);
		}
	}
}


function displayAbbreviations(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementsByTagName("abbr")) return false;
	if(!document.createTextNode) return false;
	if(!document.createElement) return false;
	var abbrs = document.getElementsByTagName("abbr");
	if(abbrs.length < 1) return false;
	var abbrsName = document.createElement("h3");
	var text = document.createTextNode("Abbreviations");
	abbrsName.appendChild(text);
	var article = document.getElementsByTagName("article");
	article[0].appendChild(abbrsName);
	var dl = document.createElement("dl");
	article[0].appendChild(dl);
	var title;
	for (var i = 0; i < abbrs.length; i++) {
		title = abbrs[i].getAttribute("title");
		var dt = document.createElement("dt");
		var dt_text = document.createTextNode(abbrs[i].lastChild.nodeValue);
		var dd =  document.createElement("dl");
		var dd_text = document.createTextNode(title);
		dt.appendChild(dt_text);
		dd.appendChild(dd_text);
		dl.appendChild(dt);
		dl.appendChild(dd);
	}

}

function stripeTables(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementsByTagName("table")) return false;
	if(!document.getElementsByTagName("tr")) return false;
	var table = document.getElementsByTagName("table");
	if(table.length < 1) return false;
	for(var i = 0; i < table.length; i++){
		var odd = false;
		var tableRow = table[i].getElementsByTagName("tr");
		if(tableRow.length < 1) continue;
		for (var j = 0; j < tableRow.length; j++) {
			if(odd == true){
				addClass(tableRow[j],"odd");
				odd = false;
			} else {
				odd = true;
			}
		}
	}
}


function highLightRows(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementsByTagName("tr")) return false;
	var rows = document.getElementsByTagName("tr");
	if(rows.length < 1) return false;
	for (var i = 0; i < rows.length; i++) {
		rows[i].oldClassName = rows[i].className;
		rows[i].onmouseover = function(){
			addClass(this,"highlight");
		}
		rows[i].onmouseout = function(){
			this.className = this.oldClassName;
		}
	}
}


function focusLabels(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementsByTagName("label")) return false;
	var labels = document.getElementsByTagName("label");
	if(labels.length < 1) return false;
	for (var i = 0; i < labels.length; i++) {
		if(labels[i].getAttribute("for")){
			var id = labels[i].getAttribute("for");
			labels[i].onclick = function(){
				var elem = document.getElementById(id);
				elem.focus();
			}
		}
		
	}
}


function resetFields(whichform){
	if(Modernizr.input.placeholder) return;
	for (var i = 0; i < whichform.elements.length; i++) {
		var element = whichform.elements[i];
		if(element.type == "submit") continue;
		var check = element.getAttribute("placeholder");
		if(!check) continue;
		element.onfocus = function(){
			var text = this.placeholder;
			if(element.value == text){
				element.value = "";
				this.className = "";
			} 
		}
		element.onblur = function(){
			if(element.value == ""){
				element.value = check;
				this.className = "placeholder";
			}
		}
		element[i].onblur();
	}
}


function prepareForms(){
	for (var i = 0; i < document.forms.length; i++) {
		var thisform = document.forms[i];
		resetFields(thisform);
		thisform.onsubmit = function(){
			if(!validateForm(this)) return false;
			var article = document.getElementsByTagName("article")[0];
			if(!submitFormWithAjax(this,article)) return false; alert(1);
			return true;
		}
	}
}


function isFilled(field){
	if(field.value.replace(" ","").length == 0) return false;
	var placeholder = field.getAttribute("placeholder");
	return !(field.value == placeholder);
}

function isEmail(field){
	return (field.value.indexOf("@")!=-1 && field.value.indexOf(".")!= -1);
}


function validateForm(whichform){
	for (var i = 0; i < whichform.elements.length; i++) {
		var element = whichform.elements[i];
		if(element.required == "required"){
			if(!isFilled(element)){
				alert("please fill in the " + element.name + " field");
				return false;
			}
		}
		if(element.type == "email"){
			if(!isEmail(element)){
				alert("The " + element.name + " must be a valid email adress");
				return false;
			}
		}
	}
	return true;
}

function getHTTPObject(){
	if(typeof XMLHTTPRequest == "undefined"){
		XMLHTTPRequest = function(){
			try{return new ActiveXObject("Msxml2.XMLHTTP.6.0");}
				catch (e) {}
			try{return new ActiveXObject("Msxml12.XMLHTTP.3.0");}
				catch (e) {}
			try{return new ActiveXObject("Msxml12.XMLHTTP");}
				catch (e) {}
		}
	}
	return new XMLHTTPRequest();
}

function displayAjaxLoading(element){
	while(element.hasChildNodes()){
		element.removeChild(element.lastChild);
	}
	var content = document.createElement("img");
	content.setAttribute("src","images/loading.gif");
	content.setAttribute("alt","loading...");
	element.appendChild(content);
}


function submitFormWithAjax( whichform, thetarget ) {
  
  var request = getHTTPObject();
  if (!request) { return false; }

  // Display a loading message.
  displayAjaxLoading(thetarget);

  // Collect the data.
  var dataParts = [];
  var element;
  for (var i=0; i<whichform.elements.length; i++) {
    element = whichform.elements[i];
    dataParts[i] = element.name + '=' + encodeURIComponent(element.value);
  }
  var data = dataParts.join('&');

  request.open('POST', whichform.getAttribute("action"), true);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  request.onreadystatechange = function () {
    if (request.readyState == 4) {
        if (request.status == 200 || request.status == 0) {
          var matches = request.responseText.match(/<article>([\s\S]+)<\/article>/);
          if (matches.length > 0) {
            thetarget.innerHTML = matches[1];
          } else {
            thetarget.innerHTML = '<p>Oops, there was an error. Sorry.</p>';
          }
        } else {
          thetarget.innerHTML = '<p>' + request.statusText + '</p>';
        }
    }
  };

  request.send(data);
   
  return true;
};



/*
// Contact

function focusLabels() {
  if (!document.getElementsByTagName) return false;
  var labels = document.getElementsByTagName("label");
  for (var i=0; i<labels.length; i++) {
    if (!labels[i].getAttribute("for")) continue;
    labels[i].onclick = function() {
      var id = this.getAttribute("for");
      if (!document.getElementById(id)) return false;
      var element = document.getElementById(id);
      element.focus();
    }
  }
}

function resetFields(whichform) {
  //if (Modernizr.input.placeholder) return;
  for (var i=0; i<whichform.elements.length; i++) {
    var element = whichform.elements[i];
    if (element.type == "submit") continue;
    if (!element.getAttribute('placeholder')) continue;
    element.onfocus = function() {
    if (this.value == this.getAttribute('placeholder')) {
      this.value = "";
     }
    }
    element.onblur = function() {
      if (this.value == "") {
        this.value = this.getAttribute('placeholder');
      }
    }
    element.onblur();
  }
}

function validateForm(whichform) {
  for (var i=0; i<whichform.elements.length; i++) {
    var element = whichform.elements[i];
    if (element.getAttribute("required") == 'required') {
      if (!isFilled(element)) {
        alert("Please fill in the "+element.name+" field.");
        return false;
      }
    }
    if (element.getAttribute("type") == 'email') {
      if (!isEmail(element)) {
        alert("The "+element.name+" field must be a valid email address.");
        return false;
      }
    }
  }
  return true;
}

function isFilled(field) {
  return (field.value.length > 1 && field.value != field.placeholder);
}

function isEmail(field) {
  return (field.value.indexOf("@") != -1 && field.value.indexOf(".") != -1);
}

function prepareForms() {
  for (var i=0; i<document.forms.length; i++) {
    var thisform = document.forms[i];
    resetFields(thisform);
    thisform.onsubmit = function() {
      if (!validateForm(this)) return false;
      var article = document.getElementsByTagName('article')[0];
      if (submitFormWithAjax(this, article)) return false;
      return true;
    }
  }
}


// Ajax

function getHTTPObject() {
  if (typeof XMLHttpRequest == "undefined")
    XMLHttpRequest = function () {
      try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); }
        catch (e) {}
      try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); }
        catch (e) {}
      try { return new ActiveXObject("Msxml2.XMLHTTP"); }
        catch (e) {}
      return false;
  }
  return new XMLHttpRequest();
}

function displayAjaxLoading(element) {
    // Remove the existing content.
  while (element.hasChildNodes()) {
      element.removeChild(element.lastChild);
  }
  //  Create a loading image.
  var content = document.createElement("img");
  content.setAttribute("src","images/loading.gif");
  content.setAttribute("alt","Loading...");
  // Append the loading element.
  element.appendChild(content);
}

function submitFormWithAjax( whichform, thetarget ) {
  
  var request = getHTTPObject();
  if (!request) { return false; }

  // Display a loading message.
  displayAjaxLoading(thetarget);

  // Collect the data.
  var dataParts = [];
  var element;
  for (var i=0; i<whichform.elements.length; i++) {
    element = whichform.elements[i];
    dataParts[i] = element.name + '=' + encodeURIComponent(element.value);
  }
  var data = dataParts.join('&');

  request.open('POST', whichform.getAttribute("action"), true);
  request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  request.onreadystatechange = function () {
    if (request.readyState == 4) {
        if (request.status == 200 || request.status == 0) {
          var matches = request.responseText.match(/<article>([\s\S]+)<\/article>/);
          if (matches.length > 0) {
            thetarget.innerHTML = matches[1];
          } else {
            thetarget.innerHTML = '<p>Oops, there was an error. Sorry.</p>';
          }
        } else {
          thetarget.innerHTML = '<p>' + request.statusText + '</p>';
        }
    }
  };

  request.send(data);
   
  return true;
};

*/










addLoadEvent(highLightPage);
addLoadEvent(prepareSlideshow);
addLoadEvent(prepareInternalnav);
addLoadEvent(prepareplaceholder);
addLoadEvent(prepareGallery);
addLoadEvent(displayAbbreviations);
addLoadEvent(stripeTables);
addLoadEvent(highLightRows);
addLoadEvent(focusLabels);
addLoadEvent(prepareForms);

