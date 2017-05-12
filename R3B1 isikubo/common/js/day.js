
var hiduke=new Date(); 

var year = hiduke.getFullYear();
var month = hiduke.getMonth()+1;
var week = hiduke.getDay();
var day = hiduke.getDate();

var yobi= new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat");
document.write(year+"年"+month+"月"+day+"日 ("+yobi[week]+") ");
