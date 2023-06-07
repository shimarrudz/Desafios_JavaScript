const comparacaoArray = require('./desafio07');

test('arrays iguais', () => {
  const array1 = ['G', 'R', 'U', 'P', 'O', 'GCB'];
  const array2 = ['G', 'R', 'U', 'P', 'O', 'GCB'];
  expect(comparacaoArray(array1, array2)).toBe(true);
});

test('arrays diferentes', () => {
  const array1 = ['G', 'R', 'U', 'P', 'O', 'GCB'];
  const array2 = ['G', 'R', 'U', 'P', 'O', 'gcb'];
  expect(comparacaoArray(array1, array2)).toBe(false);
});
