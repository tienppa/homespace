var item1 = "java";
var item2 = "javascript";
var item3 = "php";

var array = [].concat(item1, item2, item3);
console.log(array);

var item4 = item1 + " " + item2 + " " + item3 + " " + item4;
console.log(item4.split(" "));

var string = "java javascript php";
console.log(string.split(" "));
console.log(string.replace(/java/gi, "js"));
