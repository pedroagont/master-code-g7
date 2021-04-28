console.log('Hola desde script.js! 👋');

// DOM: DOCUMENT OBJECT MODEL
// Hace referencia a todo el HTML como un árbol de objetos a los que podemos acceder para crear, agregar, modificar, remover o alterar de cualquier forma desde JavaScript
// Más información: https://www.w3schools.com/js/js_htmldom.asp

// La palabra reservada document imprime todo el DOM, es decir, el árbol de objetos del documento donde fue declarado nuestro JS
console.log(document);

// MÉTODOS DE INTERACCIÓN CON LOS OBJETOS DEL DOM
// Para manipular el DOM, primero tenemos que indicar qué elementos/objetos queremos accionar o interactuar desde JS
// Más información sobre los métodos de JS: https://www.w3schools.com/js/js_htmldom_methods.asp

// Podemos hacer uso de diferentes métodos, ya sea para llamar por etiqueta, por clase, por selector o por id
// document.getElementById(id) -> Traer elementos por id
// document.getElementsByTagName(name) -> Traer elementos por etiqueta
// document.getElementsByClassName(name) -> Traer elementos por clase
// document.querySelector(selector) -> Traer el primer elemento que encuentre por selector
// document.querySelectorAll(selector) -> Traer TODOS los elementos con el mismo selector

const titulo = document.getElementById('titulo');
const subtitulo = document.getElementById('subtitulo');
const entrada = document.getElementById('entrada');
const boton = document.getElementById('boton');
const respuesta = document.getElementById('respuesta');

// Podemos imprimir en consola las variables que almacenan los objetos del DOM para validar que las llamamos adecuadamente
// Si no se encuentra el elemento, la variable se mostrará como null
console.log(titulo, subtitulo, entrada, boton, respuesta);

// PROPIEDADES DE LOS OBJETOS DEL DOM
// Una vez que tenemos los elementos del DOM almacenados en variables podemos modificar sus propiedaes con JavaScript
// Las propiedades son aquellos valores que podemos settear o asignar desde JS: Contenido de una etiqueta, atributos de una etiqueta, estilos)
// elemento.innerHTML =  'nuevo html' -> Cambiar el contenido de un elemento HTML
// elemento.attribute = 'nuevo valor'	-> Cambiar el atributo de un elemento HTML
// elemento.style.property = 'nuevo estilo' ->	Cambiar el estilo de un elemento HTML
// elemento.setAttribute(atributo, 'valor') -> Tamibién podemos cambiar atributos con el método setAttribute()

// Podemos cambiar el contenido
titulo.innerHTML = 'Soy el título cambiado desde JS 👋';
subtitulo.innerHTML = 'Soy el subtítulo cambiado desde JS 👋';

// Podemos cambiar los estilos
titulo.style.color = 'red';
subtitulo.style.fontSize = '35px';

// Podemos cambiar los atributos
entrada.placeholder = 'Soy el placeholder desde JS 🥳';
entrada.setAttribute('placeholder', 'Otra vez cambié! 😮');

// EVENTOS DEL DOM
// Podemos acceder a todos los eventos y acciones que suceden en nuestro sitio, desde un scroll, un mouseover, mouseout, click, etc
// Más información: https://www.w3schools.com/js/js_htmldom_eventlistener.asp

// Podemos escuchar eventos de elementos específicos con el método addEventListener()
// elemento.addEventListener('evento', funcionQueQueremosEjecutarConEseEvento)
document.addEventListener('click', () => alert('Saludos desde el click! 👋'));
titulo.addEventListener('mouseover', () => console.log('El usuario pasó su mouse encima del título 🐁'));
subtitulo.addEventListener('mouseout', () => console.log('El usuario quitó su mouse del subtítulo 😳'));

// Declarando una función externa que maneje los cambios que queremos al interactuar con nuestro sitio de determinada forma
const handleClick = () => {
  console.log('Has presionado click en el botón cambiar! 🖲')

  // Validamos que el usuario haya ingresado un valor condicionando que la cadena no esté vacía
  if(entrada.value === '') {
    alert('Debes ingresar un valor en el input') // Esto lo ve el usuario
    console.log('El usuario intentó cambiar sin valor asignado'); // Esto lo ve el desarrollador
  } else {
    // Podemos acceder al valor que se escribe dentro de un input con la propiedad value
    console.log(entrada.value);

    // Sustituimos el contenido de la respuesta con el valor que usuario haya ingresado en el campo de entrada
    respuesta.innerHTML = entrada.value
    respuesta.style.color = 'blue';
    respuesta.style.fontSize = '40px';
  }

};

// Escuchando el evento click y refiriendo a la función declarada previamente
boton.addEventListener('click', handleClick);

// OBJETO WINDOW
// También podemos interactuar con la ventana del navegador haciendo referencia al objeto window
console.log(window);

// Claro, también podemos agregar eventos a la ventana del navegador con el objeto window
window.addEventListener("load", () => console.log('La página cargó correctamente! 🤡'));
window.addEventListener("resize", () => console.log('El usuario cambió el tamaño de la ventana del navegador 🤯'));
