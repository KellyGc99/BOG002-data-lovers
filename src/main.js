// import { example } from './data.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const menuHamburguesa = document.querySelector(".menuhamburguesa");
menuHamburguesa.addEventListener("click",mostrarMenuNav);
function mostrarMenuNav () {
   let nav = document.querySelector(".menu-nav")
   nav.classList.toggle("mostrar");
    console.log(nav)
}











import data from './data/lol/lol.js';
console.log(data);
