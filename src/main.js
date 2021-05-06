// import { example } from './data.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
// import {pintarCampeones} from './DOMcampeones.js';

import { filtradoPorRoles, sortData } from './data.js';
import data from './data/lol/lol.js';

/* Para mostrar y quitar la barra de navegación con el menú hamburguesa */
const menuHamburguesa = document.querySelector(".menuhamburguesa");
menuHamburguesa.addEventListener("click", mostrarMenuNavegacion);
function mostrarMenuNavegacion() {
  const navegacion = document.querySelector(".menu-nav")
  navegacion.classList.toggle("mostrar");
}

/* se oculta la vista de campeones para mostrar solo la ventana de inicio */
document.getElementById('visualizacionCampeones').style.display = 'none';

/* se muestra la vista de campeones y se oculta la vista de inicio*/
let botonCampeones = document.getElementById('botonParaCampeones');
botonCampeones.addEventListener('click', mostrarPaginaCampeones);
function mostrarPaginaCampeones() {
  document.getElementById('visualizacionCampeones').style.display = 'flex';
  document.getElementById('contenido1').style.display = 'none';
}

/* Para ocultar la vista de campeones y mostrar la vista de inicio haciendo click en la opción home*/
let botonInicio = document.getElementById("home");
botonInicio.addEventListener("click", mostrarInicio);
function mostrarInicio() {
  document.getElementById('contenido1').style.display = 'flex';
  document.getElementById('visualizacionCampeones').style.display = 'none';
}

/* Para ocultar la vista de campeones y mostrar la vista de inicio haciendo click en la imagen logo lol*/
let logoInicio = document.querySelector(".botonimagen");
logoInicio.addEventListener("click", mostrarPaginaInicio);
function mostrarPaginaInicio() {
  document.getElementById('contenido1').style.display = 'flex';
  document.getElementById('visualizacionCampeones').style.display = 'none';
}

/* función para ordenar asc y desc*/
let opcionesOrdenar = document.getElementById("ordenar");
opcionesOrdenar.addEventListener("change", () => {
  let mostrarValores=opcionesOrdenar.value
  // console.log(mostrarValores)
  document.getElementById("todosLosCampeones").innerHTML= "";
  const resultadoOrdenado = sortData(valores, mostrarValores);
  pintarCampeones(resultadoOrdenado);
  // console.log(resultadoOrdenado);
});


const campeones = data.data;
let valores = Object.values(campeones);

function pintarCampeones(arrayCampeones) {
  const seccionCampeones = document.getElementById("todosLosCampeones");
  for (let i = 0; i < arrayCampeones.length; i++) {
    // nombreApodo[i]=[valores[i].id,valores[i].title,valores[i].img];
    // console.log(nombreApodo)
    const llamandoCampeones = document.createElement("div");
    llamandoCampeones.className = "estilocampeones";
    seccionCampeones.appendChild(llamandoCampeones);
    const nuevoDivImgen = document.createElement("div");
    nuevoDivImgen.className = "divImgenpersonaje";
    const nuevaImagen = document.createElement("img");
    nuevaImagen.className = "imagenPersonaje";

    nuevaImagen.src = arrayCampeones[i].splash;
    nuevoDivImgen.appendChild(nuevaImagen);
    llamandoCampeones.appendChild(nuevoDivImgen)

    const nuevoDivContenido = document.createElement("div")
    nuevoDivContenido.className = "nuevoContenido";
    const nuevoNombre = document.createElement("h1");
    nuevoNombre.className = "nombre";
    const apodo = document.createElement("h2");
    apodo.className = "nombreapodo";

    nuevoNombre.innerHTML = arrayCampeones[i].name;
    apodo.innerHTML = arrayCampeones[i].title;
    nuevoDivContenido.appendChild(nuevoNombre);
    nuevoDivContenido.appendChild(apodo);
    llamandoCampeones.appendChild(nuevoDivContenido)

  }
}
pintarCampeones(valores);

//Funcion filtrar por roles

const opcionRol = document.getElementById("ordenRol");
opcionRol.addEventListener("change", () => {
  let rol=opcionRol.value;
  document.getElementById("todosLosCampeones").innerHTML= "";
  pintarCampeones(filtradoPorRoles(valores,rol));
});




















/* opcionesOrdenar1.addEventListener("change", function(e){
  console.log(e)
});

opcionesOrdenar3.addEventListener("change", elNombreDeMiFunción);

function elNombreDeMiFunción(evento){
  console.log(evento)
} */


