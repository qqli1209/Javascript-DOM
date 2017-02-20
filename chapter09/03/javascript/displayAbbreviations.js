function displayAbbreviations(){
	if(!document.getElementsByTagName){
		return false;
	}
	if(!document.getElementById){
		return false;
	}
	if(!document.createTextNode){
		return false;
	}
	if(!document.createElement){
		return false;
	}
	//获取abbr元素，放在数组abbreviation中
	var abbreviation = document.getElementsByTagName("abbr");
	if(abbreviation.length < 1){
		return false;
	}
	//创建dl
	var dl = document.createElement("dl");
	//遍历abbreviation数组
	for (var i=0; i<abbreviation.length; i++){
		//平稳退化，对于老版本的IE，不支持abbr属性
		if (abbreviation[i].childNodes.length < 1){ 
			continue;
		}
		var definationDetail = abbreviation[i].getAttribute("title");
		var definationTitle = abbreviation[i].lastChild.nodeValue;
		//把definationTitle放入dt中，dt放入dl中
		var dt = document.createElement("dt");
		var defTitle = document.createTextNode(definationTitle);
		dt.appendChild(defTitle);
		dl.appendChild(dt);
		//把definationDetail放入dd中，dd放入dl中
		var dd = document.createElement("dd");
		var defDetail = document.createTextNode(definationDetail);
		dd.appendChild(defDetail);
		dl.appendChild(dd);
	}
	//在body最后创建h2元素
	var header2 = document.createElement("h2");
	var header2_txt = document.createTextNode("Abbreviations");
	header2.appendChild(header2_txt);
	document.body.appendChild(header2);
	//dl追加在body最后
	document.body.appendChild(dl);
}
addLoadEvent(displayAbbreviations);




