//En este DIV va la imagen y el nombre del campeon 

import data from './data/lol/lol.js';
const campeones = data.data;
let nombreApodo= [];
let valores = Object.values(campeones); 
for(let i=0; i< valores.length; i++){
  nombreApodo[i]=[valores[i].id,valores[i].title,valores[i].img];
  console.log(nombreApodo)
}


 export function pintarCampeones(){
const seccionCampeones=document.getElementById("todosLosCampeones");
for(let j=0; j<10; j++){
 const llamandoCampeones=document.createElement("div");
 llamandoCampeones.className="estilocampeones";
 seccionCampeones.appendChild(llamandoCampeones);

const nuevoDivImgen = document.createElement("div");
 const nuevaImagen = document.createElement("imgen");

 const nuevoDivContenido = document.createElement("div")
 const nuevoNombre = document.createElement("h1");

 nuevoDivImgen.className="imgenpersonaje";
 nuevoDivContenido.className="nuevoContenido"

 
    }
}