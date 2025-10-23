//1. Cambiar el texto del primer <h1> y el color del primer párrafo
const titulo = document.querySelector("h1");
titulo.textContent = "¡Cambiando el DOM con JavaScript!";

const primerParrafo = document.getElementsByTagName("p")[0];
primerParrafo.style.color = "darkred";
primerParrafo.style.fontWeight = "bold";
/*
2. Crea tres párrafos con la clase texto.
Usa getElementsByClassName para recorrerlos con un for y cambiar el color de fondo a
gris.
*/
const parrafos = document.getElementsByClassName("texto");
for (let i = 0; i < parrafos.length; i++) {
  parrafos[i].style.backgroundColor = "lightgray";
}
/*
3. Usa querySelector para seleccionar el primer <div> con clase .caja y cambia su borde y
fondo con style.
*/
const primeraCard = document.querySelector(".card");
primeraCard.style.border = "3px solid #0d6efd";
primeraCard.style.backgroundColor = "#f8f9fa";
/*
4. Crea tres botones con clase btn-dom.
Recógelos con querySelectorAll y cambia el texto de todos ellos a “DOM listo ”.
*/
const botones = document.querySelectorAll(".card .btn");
botones.forEach(boton => {
  boton.textContent = "DOM listo";
  boton.classList.remove("btn-outline-primary");
  boton.classList.add("btn-success");
});
/*
5. Crea una lista <ul id="lista"> con dos <li>.
Muestra por consola la diferencia entre getElementsByTagName("li") (viva) y
querySelectorAll("li") (estática) al agregar un nuevo elemento.
*/
const seccion = document.createElement("section");
seccion.className = "container my-5";
seccion.innerHTML = `
  <h2>Ejercicio 5 - Colecciones vivas vs estáticas</h2>
  <ul id="lista" class="list-group mb-3">
    <li class="list-group-item">Elemento 1</li>
    <li class="list-group-item">Elemento 2</li>
  </ul>
  <button id="agregar" class="btn btn-primary">Agregar elemento</button>
`;
document.body.appendChild(seccion);

const lista = document.getElementById("lista");
const lisVivos = document.getElementsByTagName("li");      // colección viva
const lisEstaticos = document.querySelectorAll("li");       // colección estática

console.log("Antes de agregar:");
console.log("Viva:", lisVivos.length);
console.log("Estática:", lisEstaticos.length);

document.getElementById("agregar").addEventListener("click", () => {
  const nuevo = document.createElement("li");
  nuevo.className = "list-group-item";
  nuevo.textContent = `Elemento ${lista.children.length + 1}`;
  lista.appendChild(nuevo);

  console.log("Después de agregar:");
  console.log("Viva:", lisVivos.length);
  console.log("Estática:", lisEstaticos.length);
});
/*
6. Crear elementos dinámicamente
Usa createElement() para crear un <p> con texto "Creado dinámicamente" y añádelo al
body con appendChild().
*/
const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Creado dinámicamente";
nuevoParrafo.style.color = "green";
nuevoParrafo.style.fontWeight = "bold";
document.body.appendChild(nuevoParrafo);
/*
7. Crear nodos de texto
Crea un <div id="contenedor">.
Genera un nodo de texto con createTextNode() y añádelo dentro del div.
*/
const contenedor = document.createElement("div");
contenedor.id = "contenedor";
contenedor.className = "container my-3 p-3 border rounded";
const textoNodo = document.createTextNode("Este texto fue creado con createTextNode()");
contenedor.appendChild(textoNodo);
document.body.appendChild(contenedor);
/*
8. Añadir atributos a un elemento
Crea una imagen con createElement("img") y añade atributos con setAttribute():
● src → una URL de imagen de prueba.
● alt → “Imagen generada por JS”.
*/
const imagen = document.createElement("img");
imagen.setAttribute("src", "https://via.placeholder.com/300x150");
imagen.setAttribute("alt", "Imagen generada por JS");
imagen.className = "d-block mx-auto my-3 rounded shadow";
document.body.appendChild(imagen);