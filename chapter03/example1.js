/* var a = document.getElementById("purchases");
alert(typeof a);
var liValue = document.getElementsByTagName("li");
//alert(liValue.length);

for(var i = 0;i < liValue.length;i++){
	alert(typeof liValue[i]);
}
alert(document.getElementsByTagName("*").length);
 */
var shopping = document.getElementById("purchases");
var items = shopping.getElementsByTagName("*");
alert(items.length);

var value1 = document.getElementById("purchases");
var value2 = getElementsByClassName(value1,"sale");
alert(value2.length);

//如果没有getElementsByClassName方法，则调用这个
function getElementsByClassName(node,classname){
	if (node.getElementsByClassName){
		return node.getElementsByClassName(classname);
	}else {
		var results = [];
		var items = getElementsByTagName("*");
		for(var i = 0;i < items.length;i++){
			if (items[i].className.indexOf(classname) != -1){
				results[results.length] = items[i];
			}
		}
		return results;
	}
}
//找到p元素中的title属性
var paras = document.getElementsByTagName("p");
for(var i = 0; i < paras.length;i++){
	var title_text = paras[i].getAttribute("title");
	if(title_text){
	alert(title_text);
	}
}

var shopping = document.getElementById("purchases");
//alert(shooping.getAttribute("title")); //null
shopping.setAttribute("title","a title");
alert(shopping.getAttribute("title"));


