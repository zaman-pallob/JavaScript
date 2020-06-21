var max = 50, min = 40;

var num1 = (Math.random() * (min)).toFixed();
var num2 = ((Math.random() * (max - min)) + min).toFixed();
document.getElementById("p1").innerHTML = "Random Number bellow 40==> " + num1;
document.getElementById("p2").innerHTML = "Random Number between 50-40==> " + num2;