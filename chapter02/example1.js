//var height = "about 5'30\"";
var height = 'about 5\'30"' //about 5'30"
alert(height);
//数组声明方式1
var beatlet = Array(4);
beatlet[0] = "lqq";
beatlet[1] = "sbb";
alert(beatlet.length); //4
alert(beatlet); //lqq,sbb,,

//数组声明方式2
var researcher = Array("l","s","y","z");
alert(researcher.length);
alert(researcher);

//数组声明方式3
var city = ["beijing","shnaghai","nanjing"];

//数组嵌套
var names = ["lqq","sbb"];
var people = [];
people[0] = names;
alert(people[0][0]); //lqq
alert(people[0][1]); //sbb
alert(people[0]); //lqq,sbb