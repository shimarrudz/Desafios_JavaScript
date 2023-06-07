const limpaArray = require('./desafio08');

test('Limpa array com aninhamento', () => {
  const array = [1000, 1001, [1002], [1003, 1004], ['Grupo'], ['GCB']];
  const resultado = limpaArray(array);
  expect(resultado).toEqual([1000, 1001, 1002, 1003, 1004, 'Grupo', 'GCB']);
});
