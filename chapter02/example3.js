var total = 50;
function square(n){
	//total = n*n; //global variable
	var total = n*n; //local variable
	return total;
}
var value = square(10);
alert(total); //100

var num = 13.42;
num = Math.round(num);
alert(num);

var currentDate = new Date();
alert(currentDate.getDay());
alert(currentDate.getHours());
alert(currentDate.getMonth());
