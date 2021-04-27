// import { example } from './data.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
import {pintarCampeones} from './DOMcampeones.js';


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

let botonInicio=document.getElementById("home");
botonInicio.addEventListener("click", mostrarInicio);

let logoInicio=document.querySelector(".botonimagen");
logoInicio.addEventListener("click", mostrarPaginaInicio);

function mostrarPaginaCampeones() {
document.getElementById('todosLosCampeones').style.display='flex';
document.getElementById('contenido1').style.display='none';
}

function mostrarInicio() {
  document.getElementById('contenido1').style.display='flex';
  document.getElementById('todosLosCampeones').style.display='none';
  }

  function mostrarPaginaInicio() {
    document.getElementById('contenido1').style.display='flex';
    document.getElementById('todosLosCampeones').style.display='none';
    }

// var elementos = document.querySelectorAll('.botones');
// Recorremos cada uno de nuestros elementos
// elementos.forEach(function(elemento) {
  // Obtenemos el texto dentro del div para identificarlo
  // var id = elemento.firstChild;
  // console.log(id)
  // Agregamos un listener a cada elemento
//   elemento.addEventListener('click', function() {
//     console.log('Elemento ' + id + ' clickeado');

//     document.getElementById("todosLosCampeones").style.display='none';
//     document.querySelector('contenido1').style.display="flex";
    
// });
  
// });
pintarCampeones();


