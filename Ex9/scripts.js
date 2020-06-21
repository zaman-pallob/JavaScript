var max = 30, min = 10;

var num1 = (Math.random() * (max)).toFixed();
var num2 = ((Math.random() * (max - min)) + min).toFixed();
document.getElementById("p1").innerHTML = "Random Number bellow 30==> " + num1;
document.getElementById("p2").innerHTML = "Random Number between 10-30==> " + num2;