var ex = "this is a string this should be processed seperately"

document.getElementById('id1').innerHTML = "Main String :" + "<br>" + ex + "<br>" + "First index of   'this'  " + ex.indexOf("this");
document.getElementById('id2').innerHTML = "Last index of 'be' :" + ex.lastIndexOf("be");
document.getElementById('id3').innerHTML = "Substring from 10 to 16 index : " + ex.substring(10, 16);
document.getElementById('id4').innerHTML = "Length of the entire string : " + ex.length;
document.getElementById('id5').innerHTML = "Split string by space :  <br><br>" + ex.split(" ");
document.getElementById('id6').innerHTML = "Replacing single String  \"be\" : " + ex.replace("be", "Be");
document.getElementById('id7').innerHTML = "Replacing all the similar string \"this\" :" + ex.replace(/this/g, "This");
document.getElementById('id8').innerHTML = " Upper casing All  : " + ex.toUpperCase();
document.getElementById('id9').innerHTML = "Lower Casing All   : " + ex.toLowerCase();
document.getElementById('id10').innerHTML = "Text Color Changing to red   :   " + ex.fontcolor("red");
