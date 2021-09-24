const substract = require('../substract');

test('Resta 1 - 2 y el resultado debe ser -1', () => {
  expect(substract(1, 2)).toBe(-1);
});
