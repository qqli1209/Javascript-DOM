function stripTables(){
	var tables = document.getElementsByTagName("table");
	if (tables.length < 1) return false;
	var odd;
	var tableRow;
	for(var i=0; i<tables.length; i++){
		if (!tables[i].getElementsByTagName("tr")) continue;
		odd = false;
		tableRow = tables[i].getElementsByTagName("tr");
		for(var j=0;j<tableRow.length; j++){
			if (odd == true){
				addClass(tableRow[j],"odd");
				odd = false;
			} else {
				odd = true;
			}
		}
	}
}


function addClass(elem,value){
	if(!elem.class){
		elem.className = value;
	} else {
		elem.className = elem.className + " " + value;
	}
}




addLoadEvent(stripTables);