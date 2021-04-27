//En este DIV va la imagen y el nombre del campeon 


// for(let i=0; i< valores.length; i++){
//   nombreApodo[i]=[valores[i].id,valores[i].title,valores[i].img];
//   console.log(nombreApodo)

// }

// export function pintarCampeones(){
// const seccionCampeones=document.getElementById("todosLosCampeones");
// for(let j=0; j<10; j++){
//  const llamandoCampeones=document.createElement("div");
//  llamandoCampeones.className="estilocampeones";
//  seccionCampeones.appendChild(llamandoCampeones);

// const nuevoDivImgen = document.createElement("div");
// nuevoDivImgen.className="imgenpersonaje";
// const nuevaImagen = document.createElement("imgen");


//  const nuevoDivContenido = document.createElement("div")
//  nuevoDivContenido.className="nuevoContenido";
//  const nuevoNombre = document.createElement("h1");

 
 
 
// nuevaImagen.src =nombreApodo(valores[i].img);
// //   resultadoPersonajes[i].image;
// nuevoDivImgen.appendChild(nuevaImagen);
// estilocampeones.appendChild(nuevoDivImgen)
// }   
import data from './data/lol/lol.js';
const campeones = data.data;
let nombreApodo= [];
let valores = Object.values(campeones); 

export function pintarCampeones(){
const seccionCampeones=document.getElementById("todosLosCampeones");

for(let i=0; i< valores.length; i++){
  // nombreApodo[i]=[valores[i].id,valores[i].title,valores[i].img];
  // console.log(nombreApodo)

const llamandoCampeones=document.createElement("div");
llamandoCampeones.className="estilocampeones";
 seccionCampeones.appendChild(llamandoCampeones);

const nuevoDivImgen = document.createElement("div");
nuevoDivImgen.className="divImgenpersonaje";
const nuevaImagen = document.createElement("img");
nuevaImagen.className="imagenPersonaje";

 const nuevoDivContenido = document.createElement("div")
 nuevoDivContenido.className="nuevoContenido";
 const nuevoNombre = document.createElement("h1");
 nuevoNombre.className="nombre";
 const apodo = document.createElement("h2");
 apodo.className="nombreapodo";

 nuevaImagen.src= valores[i].splash;
 console.log(nuevaImagen)
 nuevoDivImgen.appendChild(nuevaImagen);
 llamandoCampeones.appendChild(nuevoDivImgen)

 nuevoNombre.innerHTML = valores[i].name;
 apodo.innerHTML = valores[i].title;
 nuevoDivContenido.appendChild(nuevoNombre);
 nuevoDivContenido.appendChild(apodo);
llamandoCampeones.appendChild(nuevoDivContenido)

}
}