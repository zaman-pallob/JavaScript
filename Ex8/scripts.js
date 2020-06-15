var fruits = ["mango", "orange", "apple", "lemon"];
var dp = fruits;
var i;
addElement = () => {
    var x = fruits.push(fruits[(Math.random() * 4).toFixed()]);
    document.getElementById('display').innerHTML = "fruits [ " + fruits + " ] new length : " + x;
}

removeElement = () => {
    var y = fruits.pop();
    document.getElementById('display').innerHTML = "fruits [ " + fruits + " ] " + "removed element : " + y;

}
loopingAll = () => {
    var text;
    text = "<ul>"
    for (i = 0; i < fruits.length; i++) {
        text += "<li>" + fruits[i] + "</li>";
    }

    text += "</ul>";
    document.getElementById('loops').innerHTML = text;

}

isarray = () => {
    document.getElementById("isarray").innerHTML = Array.isArray(fruits);
}



sp = () => {
    fruits.splice(2, 0, "Avocado", "SugarCan")
    document.getElementById("splicinga").innerHTML = fruits;

}
shifting = () => {
    fruits.shift();
    document.getElementById("shifting").innerHTML = "fruits [ " + fruits + " ]";

}
unshifting = () => {
    fruits.unshift(fruits[(Math.random() * 4).toFixed()]);
    document.getElementById("unshifting").innerHTML = "fruits [ " + fruits + " ]";

}
joinarray = () => {
    document.getElementById("joinarray").innerHTML = fruits.join("_");
}


