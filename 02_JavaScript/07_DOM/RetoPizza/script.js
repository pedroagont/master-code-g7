console.log('Hola desde Reto Pizza! 🍕');

//-------------------> Challenge <------------------
// * Usar Bootstrap *
// Preguntar Nombre
// Preguntar Dirección
// Preguntar Teléfono
// Preguntar si quieren pizza con piña o sin
// respuestas: sí o no
// -> mostrar las respuestas en una card de Bootstrap después de presionar un botón

// 1: Declarar los elementos que vamos a usar del html (getElementById('id') es una forma)
// 2: Declarar la función que generará la card con las respuestas
// 3: Agregar el event listener al botón de ordenar para que cuando se le haga click ejecute la función declarada en el paso 2

// PUNTOS EXTRA!! :)
// * Condicionar que todos los inputs deban ser llenados para que se despliegue la card
// * Cambiar la imagen a la card una para la pizza con piña y otra para la pizza sin piña
// * Evitar que la respuesta de la piña se escriba en mayúscula o cambiar por checkbox o radio button

// PASOS SUGERIDOS
// 1: Declarar los elementos que vamos a usar del html (getElementById('id') es una forma)

// INPUTS
const nombre = document.getElementById('nombre');
const direccion = document.getElementById('direccion');
const telefono = document.getElementById('telefono');
const pina = document.getElementById('pina');
const boton = document.getElementById('boton');

// 2: Declarar la función que generará la card con las respuestas
const generarOrden = () => {

  // Validar que ningún campo esté vacío
  if (nombre.value === '' || direccion.value === '' || telefono.value === '') {
    alert('El campo de nombre está vacío')
  } else if (pina.checked) {
    // window.location.href hace referencia a la dirección web o URL
    // Colocamos en la url la dirección del nuevo html y le concatenamos los valores de los inputs como parámetros en la url
    // Los parámetros inician con el caracter de interrogación (?) se declaran con igual (=) se separan con y/ampersand (&)
    window.location.href = 'pedido.html?nombre=' + nombre.value + '&direccion=' + direccion.value + '&telefono=' + telefono.value + '&pina=' + true;
  } else {
    window.location.href = 'pedido.html?nombre=' + nombre.value + '&direccion=' + direccion.value + '&telefono=' + telefono.value + '&pina=' + false;
  }

  console.log('Orden generada');

}

// 3: Agregar el event listener al botón de ordenar para que cuando se le haga click ejecute la función declarada en el paso 2
boton.addEventListener('click', generarOrden);
