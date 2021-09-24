const sum = require('../sum');

test('Suma 1 + 2 y el resultado debe ser 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Suma 1 + 2 y el resultado NO debe ser 12 como cadena', () => {
  expect(sum(1, 2)).not.toBe('12');
});
