//var height = "about 5'30\"";
var height = 'about 5\'30"' //about 5'30"
alert(height);
//����������ʽ1
var beatlet = Array(4);
beatlet[0] = "lqq";
beatlet[1] = "sbb";
alert(beatlet.length); //4
alert(beatlet); //lqq,sbb,,

//����������ʽ2
var researcher = Array("l","s","y","z");
alert(researcher.length);
alert(researcher);

//����������ʽ3
var city = ["beijing","shnaghai","nanjing"];

//����Ƕ��
var names = ["lqq","sbb"];
var people = [];
people[0] = names;
alert(people[0][0]); //lqq
alert(people[0][1]); //sbb
alert(people[0]); //lqq,sbb