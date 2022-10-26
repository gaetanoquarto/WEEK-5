//-------------------------------------------------------------------------

const ruota = () => {

   const cubes = document.querySelectorAll(".cube");
   Array.from(cubes).forEach(cube => cube.style.transform = `rotateY(${pos}deg)`);
}
document.querySelector('.right-arrow').addEventListener('click', () => {
   pos -= 90;
   ruota();
});
document.querySelector('.left-arrow').addEventListener('click', () => {
   pos += 90;
   ruota();
});
let btnStart = document.querySelector('.play-pause')
let btnMusic = document.querySelector('.play-music')

let pos = 0;

//-------------------------------------------------------------------------

document.querySelector('.right-arrow').addEventListener('mouseover', () => {
   pos -= 30;
   ruota();
});

document.querySelector('.right-arrow').addEventListener('mouseout', () => {
   pos += 30;
   ruota();
});

//-------------------------------------------------------------------------

document.querySelector('.left-arrow').addEventListener('mouseover', () => {
   pos += 30;
   ruota();
});

document.querySelector('.left-arrow').addEventListener('mouseout', () => {
   pos -= 30;
   ruota();
});

//-------------------------------------------------------------------------

var cubeInterval = setInterval(nextCube, 3000);
function nextCube() {
   pos -= 90;
   ruota();
}
var playing = true;

function pauseCube() {
   btnStart.innerHTML = '<i class="fas fa-play">';
   playing = false;
   clearInterval(cubeInterval);
   
}
function playCube() {
   btnStart.innerHTML = '<i class="fas fa-pause">';
   playing = true;
   cubeInterval = setInterval(nextCube, 2000);
   
}

btnStart.onclick = function () {
   if (playing) { pauseCube(); }
   else { playCube(); }
};


//-------------------------------------------------------------------------

