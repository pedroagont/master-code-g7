function cloneArray(array) {
  // FORMA 1: Con ciclo for
  // const clone = [];
  // for (let i = 0; i < array.length; i++) {
  //   clone.push(array[i]);
  // }
  // return clone

  // FORMA 2: Con método map
  // return array.map(elemento => elemento);

  // FORMA 3: Con spread operator
  return [...array];
}
module.exports = cloneArray;
