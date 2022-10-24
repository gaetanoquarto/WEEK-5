var data = new Date();
var giorno = data.getDate();
var stringMese = data.toLocaleString('default', { month: 'long' });
var mese = data.getMonth();
var anno = data.getFullYear();
var ora = data.getHours();

document.getElementById('dataEstratta').innerHTML = `${giorno}/${stringMese}/${anno}`;
document.getElementById('data').innerHTML = data;
document.getElementById('giorno').innerHTML = `Giorno: ${giorno}`;
document.getElementById('giorno').innerHTML = `Mese: ${stringMese}`;
document.getElementById ('dataOggi').innerHTML = `Oggi è il ${giorno} - ${mese} - ${anno}`;
document.getElementById('orario').innerHTML += ora;

function saluto() {
    if (ora < 12 && ora > 4) {
        document.getElementById('saluto').innerHTML = `Buongiorno !`
    } else if (ora > 12 && ora < 17) {
        document.getElementById('saluto').innerHTML = `è l'ora del pisolino, buon pomeriggio !`
    } else if (ora > 16 && ora < 23) {
        document.getElementById('saluto').innerHTML = `Buonasera !`
    } else if (ora > 22 && ora < 5) {
        document.getElementById('saluto').innerHTML = `Buonanotte !`
    }
}

saluto();