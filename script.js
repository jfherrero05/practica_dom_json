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
/*
9. Crear estructura completa
Crea dinámicamente una tarjeta de Bootstrap (card) con:
● Título (h5)
● Texto (p)
● Botón (button.btn.btn-primary)

Todos generados desde JavaScript y añadidos dentro de un div.container.
*/
const tarjetaContainer = document.createElement("div");
tarjetaContainer.className = "container my-5";
const tarjeta = document.createElement("div");
tarjeta.className = "card";
tarjeta.style.width = "18rem";
const tarjetaCuerpo = document.createElement("div");
tarjetaCuerpo.className = "card-body";
const tarjetaTitulo = document.createElement("h5");
tarjetaTitulo.className = "card-title";
tarjetaTitulo.textContent = "Título de la tarjeta";
const tarjetaTexto = document.createElement("p");
tarjetaTexto.className = "card-text";
tarjetaTexto.textContent = "Este es un texto dentro de la tarjeta generada con JavaScript.";
const tarjetaBoton = document.createElement("button");
tarjetaBoton.className = "btn btn-primary";
tarjetaBoton.textContent = "Ir a algún lugar";
tarjetaCuerpo.appendChild(tarjetaTitulo);
tarjetaCuerpo.appendChild(tarjetaTexto);
tarjetaCuerpo.appendChild(tarjetaBoton);
tarjeta.appendChild(tarjetaCuerpo);
tarjetaContainer.appendChild(tarjeta);
document.body.appendChild(tarjetaContainer);
/*
10. Insertar elementos en distintas posiciones
Crea una lista y usa:
● append() para añadir al final,
● prepend() para añadir al inicio,
● before() y after() para colocar nuevos elementos fuera del <ul>.
*/
const listaDinamica = document.createElement("ul");
listaDinamica.className = "list-group my-5";
const itemFinal = document.createElement("li");
itemFinal.className = "list-group-item";
itemFinal.textContent = "Elemento al final (append)";
listaDinamica.append(itemFinal);
const itemInicio = document.createElement("li");
itemInicio.className = "list-group-item";
itemInicio.textContent = "Elemento al inicio (prepend)";
listaDinamica.prepend(itemInicio);
const itemAntes = document.createElement("li");
itemAntes.className = "list-group-item";
itemAntes.textContent = "Elemento antes de la lista (before)";
const itemDespues = document.createElement("li");
itemDespues.className = "list-group-item";
itemDespues.textContent = "Elemento después de la lista (after)";
listaDinamica.appendChild(itemDespues);
document.body.appendChild(listaDinamica);
listaDinamica.before(itemAntes);
/*
11. Reemplazar y eliminar
Crea un párrafo <p> y un botón “Eliminar”.
Al hacer clic, usa remove() para eliminar el párrafo y muestra un mensaje por consola.

Luego, crea un segundo botón “Reemplazar” que use replaceWith() para cambiar un
elemento por otro.
*/
const parrafoEliminar = document.createElement("p");
parrafoEliminar.textContent = "Este párrafo puede ser eliminado.";
parrafoEliminar.className = "my-3";
const botonEliminar = document.createElement("button");
botonEliminar.className = "btn btn-danger me-3";
botonEliminar.textContent = "Eliminar";
botonEliminar.addEventListener("click", () => {
  parrafoEliminar.remove();
  console.log("El párrafo ha sido eliminado.");
});
const botonReemplazar = document.createElement("button");
botonReemplazar.className = "btn btn-warning";
botonReemplazar.textContent = "Reemplazar";
botonReemplazar.addEventListener("click", () => {
  const nuevoParrafo = document.createElement("p");
  nuevoParrafo.textContent = "Este párrafo ha sido reemplazado.";
  nuevoParrafo.className = "my-3";
  parrafoEliminar.replaceWith(nuevoParrafo);
});
document.body.appendChild(parrafoEliminar);
document.body.appendChild(botonEliminar);
document.body.appendChild(botonReemplazar);
/*
12. Clonar elementos
Crea una tarjeta de Bootstrap con una imagen y texto.
Añade un botón “Clonar tarjeta” que use cloneNode(true) para duplicar la tarjeta y cambiar
el texto del clon.
*/
const tarjetaOriginal = document.createElement("div");
tarjetaOriginal.className = "card my-5";
tarjetaOriginal.style.width = "18rem";
const imgTarjeta = document.createElement("img");
imgTarjeta.className = "card-img-top";
imgTarjeta.setAttribute("src", "https://via.placeholder.com/286x180");
imgTarjeta.setAttribute("alt", "Imagen de la tarjeta");
const cuerpoTarjeta = document.createElement("div");
cuerpoTarjeta.className = "card-body";
const textoTarjeta = document.createElement("p");
textoTarjeta.className = "card-text";
textoTarjeta.textContent = "Esta es la tarjeta original.";
const botonClonar = document.createElement("button");
botonClonar.className = "btn btn-info";
botonClonar.textContent = "Clonar tarjeta";
botonClonar.addEventListener("click", () => {
  const clon = tarjetaOriginal.cloneNode(true);
  clon.querySelector(".card-text").textContent = "Esta es la tarjeta clonada.";
  document.body.appendChild(clon);
});
cuerpoTarjeta.appendChild(textoTarjeta);
cuerpoTarjeta.appendChild(botonClonar);
tarjetaOriginal.appendChild(imgTarjeta);
tarjetaOriginal.appendChild(cuerpoTarjeta);
document.body.appendChild(tarjetaOriginal);
/*
13. Crear lista dinámica con botón
Crea un botón “Agregar elemento” que añada un nuevo <li> a una lista cada vez que se
pulsa.
*/
const lista = document.createElement("ul");
document.body.appendChild(lista);
const botonAgregar = document.createElement("button");
botonAgregar.textContent = "Agregar elemento";
botonAgregar.addEventListener("click", () => {
  const nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = "Elemento " + (lista.children.length + 1);
  lista.appendChild(nuevoElemento);
});
document.body.appendChild(botonAgregar);
/*
14. Eliminar último elemento
Usa removeChild() o lastElementChild.remove() para eliminar el último elemento de la lista
creada en el ejercicio anterior.
*/
const botonEliminar = document.createElement("button");
botonEliminar.textContent = "Eliminar último elemento";
botonEliminar.addEventListener("click", () => {
  if (lista.children.length > 0) {
    lista.lastElementChild.remove();
  }
});
document.body.appendChild(botonEliminar);
/*
15. Recorrer colección y modificar
Selecciona todos los elementos de una lista con querySelectorAll(".item")

Usa forEach() para numerarlos automáticamente:

Ejemplo: Elemento 1, Elemento 2, Elemento 3...
*/
const listaItems = document.createElement("ul");
for (let i = 0; i < 5; i++) {
  const item = document.createElement("li"); 
  item.className = "item";
  item.textContent = "Elemento";
  listaItems.appendChild(item);
} 
document.body.appendChild(listaItems);
const items = document.querySelectorAll(".item");
items.forEach((item, index) => {
  item.textContent = `Elemento ${index + 1}`;
});
/*
16. Crear una galería con JSON local
Crea un array JSON con varios objetos:

const imagenes = [
{ titulo: "Montaña", url: "https://via.placeholder.com/150/1" },
{ titulo: "Lago", url: "https://via.placeholder.com/150/2" },
 { titulo: "Bosque", url: "https://via.placeholder.com/150/3" }
];

Recórrelo con forEach() y genera una galería Bootstrap (card por imagen).
*/
const imagenes = [
  { titulo: "Montaña", url: "https://via.placeholder.com/150/1" },
  { titulo: "Lago", url: "https://via.placeholder.com/150/2" },
  { titulo: "Bosque", url: "https://via.placeholder.com/150/3" }
];
const galeriaContainer = document.createElement("div");
galeriaContainer.className = "container my-5";
const fila = document.createElement("div");
fila.className = "row";
imagenes.forEach(imagen => {
  const columna = document.createElement("div");
  columna.className = "col-md-4 mb-4";
  const card = document.createElement("div");
  card.className = "card";
  const img = document.createElement("img");
  img.className = "card-img-top";
  img.setAttribute("src", imagen.url);
  img.setAttribute("alt", imagen.titulo);
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  const cardTitle = document.createElement("h5");
  cardTitle.className = "card-title";
  cardTitle.textContent = imagen.titulo;
  cardBody.appendChild(cardTitle);
  card.appendChild(img);
  card.appendChild(cardBody);
  columna.appendChild(card);
  fila.appendChild(columna);
});
galeriaContainer.appendChild(fila);
document.body.appendChild(galeriaContainer);
/*
17. Mostrar datos de API JSONPlaceholder
Usa fetch("https://jsonplaceholder.typicode.com/users")

Convierte la respuesta con .json()

Muestra los name y email de cada usuario en una lista <ul> generada dinámicamente.
*/
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {  
    const listaUsuarios = document.createElement("ul");
    listaUsuarios.className = "list-group my-5";
    users.forEach(user => {
      const item = document.createElement("li");
      item.className = "list-group-item";
      item.textContent = `${user.name} - ${user.email}`;
      listaUsuarios.appendChild(item);
    });
    document.body.appendChild(listaUsuarios);
  })
  .catch(error => console.error("Error al obtener los usuarios:", error));
  /*
  18. Mostrar datos anidados de JSON
Usando la misma API, muestra una tabla con name, email y address.city de cada usuario.
Usa table, thead y tbody generados con createElement().
*/
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {  
    const tabla = document.createElement("table");
    tabla.className = "table table-striped my-5"; 
    const thead = document.createElement("thead");
    const filaEncabezado = document.createElement("tr");
    ["Name", "Email", "City"].forEach(texto => {
      const th = document.createElement("th");
      th.scope = "col";
      th.textContent = texto;
      filaEncabezado.appendChild(th);
    });
    thead.appendChild(filaEncabezado);
    tabla.appendChild(thead);
    const tbody = document.createElement("tbody");
    users.forEach(user => {
      const fila = document.createElement("tr");
      const celdaName = document.createElement("td");
      celdaName.textContent = user.name;
      const celdaEmail = document.createElement("td");
      celdaEmail.textContent = user.email;
      const celdaCity = document.createElement("td");
      celdaCity.textContent = user.address.city;
      fila.appendChild(celdaName);
      fila.appendChild(celdaEmail);
      fila.appendChild(celdaCity);
      tbody.appendChild(fila);
    });
    tabla.appendChild(tbody);
    document.body.appendChild(tabla);
  })
  .catch(error => console.error("Error al obtener los usuarios:", error));
/*

*/