var num = 3.141615123781290;

document.getElementById('id1').innerHTML = "Original number : " + num;
document.getElementById('id2').innerHTML = "Writing to 1,2,3,4,5,6 decimal places using fixed method:<br>" + num.toFixed(1) + "<br>" + num.toFixed(2) + "<br>" + num.toFixed(3) + "<br>" + num.toFixed(4) + "<br>" + num.toFixed(5) + "<br>" + num.toFixed(6);
document.getElementById('id3').innerHTML = "Rounding to 1,2,3,4,5,6 decimal places using precision method  :<br>  " + num.toPrecision(1) + "<br>" + num.toPrecision(2) + "<br>" + num.toPrecision(3) + "<br>" + num.toPrecision(4) + "<br>" + num.toPrecision(5) + "<br>" + num.toPrecision(6);
document.getElementById('id4').innerHTML = "Converting different variables to number : " + Number(false) + " " + Number(true) + " " + Number("123456789") + " " + Number("10.456") + " " + Number("Infinity");
document.getElementById('id5').innerHTML = "Converting date into numbers :  " + Number(new Date("2020-06-15"));
