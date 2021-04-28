console.log('Hola desde script.js! 👋');

// DOM: DOCUMENT OBJECT MODEL
// Hace referencia a todo el HTML como un objeto en sí mismo al que podemos acceder para crear, agregar, modificar, remover o alterar de cualquier forma desde JavaScript

// Esto imprime todo el HTML donde fue declarado nuestro JS
// Ya nos permite acceder a ese documento como un gran objeto que contiene todo nuestra página
console.log(document);

// MÉTODOS DE INTERACCIÓN CON EL DOM
// Para manipular el DOM, primero tenemos que mandar a llamar los elementos queremos utilizar desde JS
// Podemos hacer uso de diferentes métodos, ya sea para llamar por etiqueta, por clase, por selector o por id
// Traer elementos por id -> document.getElementById(id)
// Traer elementos por etiqueta -> document.getElementsByTagName(name)
// Traer elementos por clase -> document.getElementsByClassName(name)
// Traer elementos por selector -> document.querySelector(selector)
// Traer TODOS los elementos con el mismo selector -> document.querySelectorAll(selector)
// Más información sobre los métodos de JS: https://www.w3schools.com/js/js_htmldom_methods.asp

const titulo = document.getElementById('titulo');
const subtitulo = document.getElementById('subtitulo');
const entrada = document.getElementById('entrada');
const boton = document.getElementById('boton');
const respuesta = document.getElementById('respuesta');

// Podemos imprimir en consola las variables que almacenan los objetos del DOM para validar que las llamamos adecuadamente
console.log(titulo, subtitulo, entrada, boton, respuesta);

// Creamos una función que maneje los cambios que queremos al interactuar con nuestro sitio de determinada forma
const handleClick = () => {
  console.log('Has presionado click en el botón cambiar! 🖲')

  if(entrada.value === '') {
    alert('Debes ingresar un valor en el input')
  } else {
    // Podemos cambiar propiedades de los elementos de HTML como su texto interior (innerHTML)
    titulo.innerHTML = 'Soy el título cambiado desde JS 👋';
    subtitulo.innerHTML = 'Soy el subtítulo cambiado desde JS 🤯';

    // Podemos cambiar estilos CSS
    titulo.style.color = 'red';
    subtitulo.style.fontSize = '30px';

    // Podemos acceder al valor que se escribe dentro de un input
    console.log(entrada.value);

    respuesta.innerHTML = entrada.value
    respuesta.style.color = 'blue';
    respuesta.style.fontSize = '40px';
  }

};

// MANEJAR EVENTOS
// Podemos escuchar todos los eventos que suceden en nuestro sitio, desde un scroll, un mouseover, mouseout, click, etc
boton.addEventListener('click', handleClick);
