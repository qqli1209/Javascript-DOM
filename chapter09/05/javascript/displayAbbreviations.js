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
	//��ȡabbrԪ�أ���������abbreviation��
	var abbreviation = document.getElementsByTagName("abbr");
	if(abbreviation.length < 1){
		return false;
	}
	//����dl
	var dl = document.createElement("dl");
	//����abbreviation����
	for (var i=0; i<abbreviation.length; i++){
		//ƽ���˻��������ϰ汾��IE����֧��abbr����
		if (abbreviation[i].childNodes.length < 1){ 
			continue;
		}
		var definationDetail = abbreviation[i].getAttribute("title");
		var definationTitle = abbreviation[i].lastChild.nodeValue;
		//��definationTitle����dt�У�dt����dl��
		var dt = document.createElement("dt");
		var defTitle = document.createTextNode(definationTitle);
		dt.appendChild(defTitle);
		dl.appendChild(dt);
		//��definationDetail����dd�У�dd����dl��
		var dd = document.createElement("dd");
		var defDetail = document.createTextNode(definationDetail);
		dd.appendChild(defDetail);
		dl.appendChild(dd);
	}
	//��body��󴴽�h2Ԫ��
	var header2 = document.createElement("h2");
	var header2_txt = document.createTextNode("Abbreviations");
	header2.appendChild(header2_txt);
	document.body.appendChild(header2);
	//dl׷����body���
	document.body.appendChild(dl);
}
addLoadEvent(displayAbbreviations);




