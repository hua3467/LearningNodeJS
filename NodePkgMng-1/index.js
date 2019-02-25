var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var n = weekday[d.getDay()];
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
var prepand = ( h >= 12 )? " PM " : " AM ";
console.log(n);
console.log(h + "," + prepand + ":" + m + ":" + s);