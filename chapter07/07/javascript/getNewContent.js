function getNewContent(){
	var request = getHttpObject();
	//alert(request);
	if (request){
		request.open("GET","example.txt",true);
		request.onreadystatechange = function(){
			if (request.readyState == 4){
				alert("response received");
				var para = document.createElement("p");
				var txt = document.createTextNode(request.responseText);
				alert(request.responseText);//Ã»ÓÐ£¬¿Õ°×
				para.appendChild(txt);
				var newdiv = document.getElementById("new");
				newdiv.appendChild(para);
				alert("getting here1");
			}
		};
		request.send(null);
		alert("getting here2");
	} else {
		alert("Sorry,your browser doesn\'t support XMLHttpRequest.");
		alert("getting here3");
	}
}

addLoadEvent(getNewContent);