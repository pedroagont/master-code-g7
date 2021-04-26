console.log('Hola desde script.js 👋');

// FUNCIONES
// Las funciones son un conjunto de instrucciones que podemos mandar a llamar cuando sean requeridas en determinado momento de nuestro código

// Sintáxis básica
// function miFuncion(){
//   // Código a ejecutar
// }

// Sintáxis de función con parámetros
// function miFuncionConParametros(param1, param2, param3, ..., paramN){
// // Código a ejecutar de la función
// // Podemos acceder a param1, param2, param3, ..., paramN
// }

// Para mandar a llamar la función, tenemos que invocarla simplemente escribiendo su nombre, y en caso que lo requiera, pasarle los parámetros necesarios
// miFuncion();
// miFuncionConParametros('param1', 12312, true)

function saludar(){
  console.log('Hola desde la función saludar! 👋🛠');
}
saludar();

function saludarAlumno(alumno){
  console.log('Hola, ' + alumno + ' desde la función saludarAlumno! 👋👩🏻‍🎓');
}
saludarAlumno('July');
saludarAlumno('Alejandrina');
saludarAlumno('Raúl');
saludarAlumno('Max');
saludarAlumno('Gabriela');

// ARROW FUNCTIONS / FUNCIONES FLECHA
// Sintáxis básica () => {}
// Como buena práctica se sugiere declararlas como const
// Las funciones flecha hacen la declaración de funciones más elegante ya que se pueden declarar en una sóla línea y evitar caracteres como ; y/o como {}

// Funcion tradicional
function funcionTradicional(){
  console.log('Hola desde función tradicional! 👋🛠');
}
funcionTradicional();

// Función flecha
const funcionFlecha = () => console.log('Hola desde función flecha! 👋🏹');
funcionFlecha();

// Función flecha con parámetros
const funcionFlechaConParametros = (param1, param2, param3) => {
  console.log('Hola desde función flecha con paramétros! 👋🏹');
  console.log(param1, param2, param3);
}
funcionFlechaConParametros('Este es el parámetro 1', 123123123123, { nombre: 'Parametro 3'});

// EJEMPLO
// Crear una función que reciba como parámetros dos números, e IMPRIMA EN CONSOLA la suma de los mismos

// Función tradicional
function sumaDosNumeros(num1, num2){
  console.log(num1 + num2);
}
sumaDosNumeros(10, 50); // 60

// Funcion flecha
const sumaDosNumerosFlecha = (num1, num2) => console.log(num1 + num2);
sumaDosNumerosFlecha(10, 50) // 60


// RETURN
// Utilizamos la palabra reservada return para indicar dónde finaliza nuestra función y/o qué es lo que nos debe regresar/retornar
// Todo lo que pongamos DESPUÉS del return, NO se va a ejecutar en el código
// En las funciones flecha, si la declaración queda en una sóla línea, el return queda implícito, es decir, que no se necesita escribir

// EJEMPLO RETURN
// Crear una función que reciba como parámetros dos números, y REGRESE la suma de los mismos

// Función tradicional
function sumaDosReturn(num1, num2){
  return num1 + num2
}
sumaDosReturn(10, 50) // Esto NO imprime en consola porque la función solamente retorna la suma, no la imprime en consola
console.log(sumaDosReturn(10, 50)); // 60
let suma = sumaDosReturn(10, 50);
console.log(suma);

// Función flecha
const sumaDosReturnFlecha = (num1, num2) => num1 + num2;
sumaDosReturnFlecha(10, 50);
console.log(sumaDosReturnFlecha(10, 50));
let sumaFlecha = sumaDosReturnFlecha(10, 50);
console.log(sumaFlecha);

// Mandar a llamar una función dentro de otra se manera simple
const imprimirEnConsola = (valor) => console.log(valor);
imprimirEnConsola(sumaDosReturnFlecha(10, 50));
