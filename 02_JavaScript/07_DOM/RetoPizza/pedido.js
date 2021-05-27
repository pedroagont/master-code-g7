// GENERALES
const card = document.getElementById('card');
const spinner = document.getElementById('spinner');

// RESPUESTAS
const respuestaNombre = document.getElementById('respuestaNombre');
const respuestaDireccion = document.getElementById('respuestaDireccion');
const respuestaTelefono = document.getElementById('respuestaTelefono');
const pedido = document.getElementById('pedido');
const imagen = document.getElementById('imagen');

// Ocultamos la card desde el inicio
card.style.display = 'none';

// Paso 1: Declarar la función que generará la card con las entradas del usuario
const generarPedido = () => {

  // Obtenemos los parámetros de la url con el objeto URL(), creados y enviados por el usuario desde el index.html
  // Referencias:
  // https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/URL
  const url = new URL(window.location.href);
  const nombre = url.searchParams.get('nombre');
  const direccion = url.searchParams.get('direccion');
  const telefono = url.searchParams.get('telefono');
  const pina = url.searchParams.get('pina');

  // Validamos que ningún parámetro se haya obtenido sin valor o que no está definido en la url
  if (nombre == '' || direccion == '' || telefono == '' || nombre == undefined || direccion == undefined || telefono == undefined) {
    alert('Pedido inválido, vuelve a intentarlo');
    // Retornamos al usuario a la página principal del index
    window.location.href = 'index.html';
  } else {
    // Respuestas cambien por lo obtenido de los parámetros
    respuestaNombre.innerHTML = 'Nombre: ' + nombre;
    respuestaDireccion.innerHTML = 'Dirección: ' + direccion;
    respuestaTelefono.innerHTML = 'Teléfono: ' + telefono;

    if(pina === 'true') {
      pedido.innerHTML = 'Pizza CON piña 🍍';
      imagen.src = 'https://irecetasfaciles.com/wp-content/uploads/2020/03/pizza-hawaiana.jpg';
    } else if(pina) {
      pedido.innerHTML = 'Pizza SIN piña 🧀';
      imagen.src = 'https://www.recetin.com/wp-content/uploads/2012/01/pizza_cuatro_quesos.jpg';
    }

    spinner.style.display = 'none'; //Ocultamos el spinner
    card.style.display = ''; //Quitamos la propiedad display none para mostrar la card
    progress.style.width = '25%'; //Avanzamos la barra de progreso al 25% para indicar al usuario que su pizza está en proceso

    console.log('Pedido recibido');
  }
}

generarPedido();
