// Hola Mundo! en JavaScript!
console.log('Hola Mundo! 👋🤖');

// VARIABLES
// Para declarar variables puedo usar la palabra reservada var + el nombre de la variable
var variable;

// Para asignar un valor, podemos usar el nombre de la variable y seguido del valor que se le asignará
variable = 123;

// Claro, también puedo declarar y asignar valores a variables de manera directa
var sensei = 'Pedro';
var edad = 27;

// Diferencias entre var, let y const:
// var -> contexto global y SÍ se puede reasignar su valor
// let -> contexto local y SÍ se puede reasignar su valor
// const -> contexto local y NO se puede reasignar su valor

var variableVar = 'Soy una variable VAR';
console.log(variableVar);
variableVar = 'Soy otra variable VAR';
console.log(variableVar);

let variableLet = 'Soy una variable LET';
console.log(variableLet);
variableLet = 'Soy otra variable LET';
console.log(variableLet);

const variableConst = 'Soy una variable CONST';
console.log(variableConst);
// variableConst = 'Soy otra variable const'; //Esto marca error ya que no nos permite reasignar valor a una variable const


// SCOPE/CONTEXTO
{
  var variableVarGlobal = 'Soy una variable VAR global dentro de un SCOPE';
  console.log('scope local', variableVarGlobal); //Puedo acceder a las variables de tipo var tanto dentro como fuera del scope/contexto en el que fueron declaradas
}
console.log('scope global', variableVarGlobal); //Esto imprime la variable aunque haya sido declarada en otro scope/contexto
// Esto puede provocar ciertas vulnerabilidades, por lo tanto NO se considera buena práctica usar la palabra var para declarar variables en JS
// Lo podemos solucionar con el uso de let o const

{
  let variableLetLocal = 'Soy una variable LET local dentro de un scope';
  const variableConstLocal = 'Soy una variable CONST local dentro de un scope';
  //Puedo acceder a las variables de tipo let y const SÓLO en el mismo scope/contexto en el que fueron declaradas
  console.log('scope local', variableLetLocal);
  console.log('scope local', variableConstLocal);
}
// Esto marcará error porque estamos tratando de acceder a estas variables tipo let y const que fueron declaradas en otro scope/contexto
// console.log('scope global', variableLetLocal);
// console.log('scope global', variableConstLocal);


//TIPOS DE DATOS
//Number (números)
let numero = 123123;
console.log(numero);
console.log(typeof numero); //number

//String (cadenas de caracteres)
let string = 'Esto es una cadena';
console.log(string);
console.log(typeof string); //string

//Booleano (true/false)
let booleano = true;
console.log(booleano);
console.log(typeof booleano); //boolean

//Arrays/listas de elementos, se declaran con corchetes []
let arreglo = [12312, 'Holahola', false, ['otro arreglo anidado', 1231]];
let arregloVacio = [];
console.log(arreglo);
console.log(arreglo[0]); // 12312
console.log(arreglo[1]); //'Holahola'
console.log(arreglo[3]); //['otro arreglo anidado', 1231]

console.log(typeof arreglo); // object
console.log(arreglo.length); //La propiedad length indica el tamaño de un arreglo, en este ejemplo esto marca 4 porque es el tamaño de este arreglo en específico

//Objetos, colecciones de propiedades, se declaran con llaves {}
let objeto = { propiedad: 'valor' };
let objetoVacio = {}
let objetoAlumno = {
  nombre: 'Abby',
  apellido: 'Litman',
  programa: 'Master en Code',
  generacion: 7,
  estaInscrito: true
}

console.log(objeto);
console.log(objetoVacio);
console.log(objetoAlumno);
console.log(objetoAlumno.nombre);
console.log(objetoAlumno.generacion);

console.log(typeof objeto); // object
console.log(objeto.length); //Esto marca undefined porque los objetos NO tienen por default la propiedad length ya que NO se rigen por la posición de sus elementos, si no por la definición de propiedades
console.log(typeof objetoAlumno.nombre); //string


//OPERADORES ARITMÉTICOS
//Suma (+)
let suma = 10 + 10;
console.log(suma);
console.log(10 + 10);

//Resta (-)
let resta = 30 - 15;
console.log(resta);
console.log(30 - 15);

//Multiplicación (*)
let multiplicacion = 8 * 8;
console.log(multiplicacion);
console.log(8 * 8);

//División (/)
let division = 50 / 10;
console.log(division);
console.log(50 / 10);

//Módulo / Residuo (%)
let residuo = 20 % 3; //divide 20/3 y nos regresa el residuo
console.log(residuo); //2 porque 20 / 3 = 6 y sobran 2
console.log(20 % 3);

//Concatenación (unir cadenas de caracteres con otras cadenas o con variables)
let nombre = 'Pedro Antonio';
let apellido = 'González Martínez';
let nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);


//OUTPUT
//Mensaje a consola
console.log('Esto es un output que se muestra en consola!');
console.warn('Esto es un output de tipo warn en consola!');
console.error('Esto es un output de tipo error en consola!');

//Mensaje a navegador
alert('Esto es un mensaje de tipo alert que se muestra en el navegador');


//INPUT
prompt('Esto es una solicitud de entrada de tipo prompt');
let promptNombre = prompt('Escribe aquí tu nombre');
console.log(promptNombre);

//Segundo argumento se muestra como referencia por default
let promptNacimiento = prompt('Escribe aquí tu fecha de nacimiento', 'DD/MM/AAAA');
console.log(promptNacimiento);


//PLANTILLAS DE JS
//Creando un output con el uso de plantillas de javascript ´´ y ${}
// El uso de "plantillas de JS" con acentos invertidos nos permiten unir de manera directa cadenas con javascript puro usando la sintaxis `cadenas ${javascript}`  sin separar comillas con concatenación (+)
console.log(`Hola, ${promptNombre}, naciste en la fecha: ${promptNacimiento} y tu id es: ${12+42}`);
alert(`Hola, ${promptNombre}, naciste en la fecha: ${promptNacimiento} y tu id es: ${23+63}`);
