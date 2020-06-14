
var array;
array = {
    Name: 'Pallob',
    Age: 27,
    Roll: 123004,
}

var objectsarray;

objectsarray = [
    {
        Name: 'Pallob',
        Age: 27,
        Roll: 123004,
    },
    {
        Name: 'Faisal',
        Age: 27,
        Roll: 123030,
    },
    {
        Name: 'Abullah',
        Age: 27,
        Roll: 123005,
    },
    {
        Name: 'Tushar',
        Age: 27,
        Roll: 123011,
    },
    {
        Name: 'Asif',
        Age: 27,
        Roll: 123041,
    }


]

document.getElementById('pis').innerHTML = array.Name + " " + array.Age + " " + array.Roll;
document.getElementById('pir').innerHTML = objectsarray[3].Name;