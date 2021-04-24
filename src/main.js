// import { example } from './data.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const menuHamburguesa = document.querySelector(".menuhamburguesa");
menuHamburguesa.addEventListener("click",mostrarMenuNavegacion);
function mostrarMenuNavegacion () {
   const navegacion = document.querySelector(".menu-nav")
   navegacion.classList.toggle("mostrar");
}

/* Para mostrar solo la ventana de inicio */
document.getElementById('todosLosCampeones').style.display='none';

/* Para mostrar la vista de campeones y ocultar la vista de inicio*/
let botonCampeones=document.getElementById('botonParaCampeones');
botonCampeones.addEventListener('click', mostrarPaginaCampeones);

function mostrarPaginaCampeones() {
document.getElementById('todosLosCampeones').style.display='flex';
document.getElementById('contenido1').style.display='none';
// document.getElementById('fondoPaginaUno').style.display='none';
}

var elementos = document.querySelectorAll('.botones');
// Recorremos cada uno de nuestros elementos
elementos.forEach(function(elemento) {
  // Obtenemos el texto dentro del div para identificarlo
  var id = elemento.firstChild;
  console.log(id)
  // Agregamos un listener a cada elemento
  elemento.addEventListener('click', function() {
    console.log('Elemento ' + id + ' clickeado');
    document.getElementById("todosLosCampeones").style.display='none';
    // document.querySelector('contiene').style.display='flex;
    elemento.classList.toggle('cont');
});
  
});


import data from './data/lol/lol.js';
// console.log(data);

const seccionDeCampeones = document.getElementById("todosLosCampeones");
const campeones = data.data;
// console.log(campeones)
let valores = Object.values(campeones); 
for(let i=0; i< valores.length; i++){
    document.getElementById("parrafo").innerHTML +=valores[i].title,valores[i].image.sprite;
}

