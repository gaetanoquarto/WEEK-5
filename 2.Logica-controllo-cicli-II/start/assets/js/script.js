let operazioni = 0;
const myArray = [1000];
var btn = document.getElementById('btn');

document.getElementById('budgetIniziale').innerHTML += myArray;

btn.addEventListener('click', function() {
    while (myArray > 0) {
    let random = Math.floor((Math.random() * 100) + 1);
    document.getElementById("lista").innerHTML += `<li>Hai speso €${random}</li>`;
    let risultato = myArray - random;
    document.getElementById("lista").innerHTML += `<li>Il budget corrente è: €${risultato}</li>`;
    myArray.splice(0, 1, risultato);
    operazioni++
    document.getElementById("lista").innerHTML += `<li>Operazioni effettuate: ${operazioni}</li><br>`;
    }
    if (myArray < 0) {
        document.getElementById('msg').innerHTML = `Attenzione! Fondi insufficienti! Rischio BANCAROTTA!!`;
    }
})