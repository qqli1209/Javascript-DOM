window.onload = function(){
	var testdiv = document.getElementById("testdiv");
	var para = document.createElement("p");
	testdiv.appendChild(para);
	var txt1 = document.createTextNode("This is ");
	para.appendChild(txt1);
	var ele1 = document.createElement("em");
	para.appendChild(ele1);
	var txt2 = document.createTextNode("my");
	ele1.appendChild(txt2);
	var txt3 = document.createTextNode(" content");
	para.appendChild(txt3);
	
}