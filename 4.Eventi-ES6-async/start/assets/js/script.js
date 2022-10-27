var dropDown = document.getElementById('myDropdown');
var testo = document.getElementById('testo');
let lista = document.querySelectorAll('li');

function toggleBtn() {
    dropDown.classList.toggle("mostra");
}

function ingrandisci() {
    testo.style.fontSize = "6em";
}

function cambiaColore() {
    testo.style.color = "Orange";
}

function maiusc() {
    testo.style.textTransform = "uppercase";
}

function nascondi() {
    testo.style.color = "transparent";
}

function mostra() {
    testo.style.color = "orange";
}

function reset() {
    testo.style.fontSize = "3em";
    testo.style.color = "#337185";
    testo.style.textTransform = "";
}


for (var i = 0; i < lista.length; i++) {
    lista[i].addEventListener('mouseover', function () {
      this.classList.add('selezione');
    });
    lista[i].addEventListener('mouseout', function () {
      this.classList.remove('selezione');
    });
    lista[i].addEventListener('click', function () {
      this.classList.toggle('fatto');
    });
  }