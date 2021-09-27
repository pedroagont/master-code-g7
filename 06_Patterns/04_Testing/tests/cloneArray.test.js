const cloneArray = require('../cloneArray');

test('Clonar [1, 2, 3] y que el resultado sea [1, 2, 3]', () => {
  const array = [1, 2, 3];
  expect(cloneArray(array)).toEqual(array);
  expect(cloneArray(array)).not.toBe(array);
});
