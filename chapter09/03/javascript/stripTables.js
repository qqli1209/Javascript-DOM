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
				tableRow[j].style.backgroundColor = "#ffc";
				odd = false;
			} else {
				odd = true;
			}
		}
	}
}

addLoadEvent(stripTables);