const filtrarArray = require('./desafio05');
// Importe a função a ser testada

test('Teste de exemplo', () => {
  const entrada = [5, 4, 3, 2, 5];
  const itensRemover = [5, 3];
  const resultadoEsperado = [4, 2];
  const resultado = filtrarArray(entrada, itensRemover);
  expect(resultado).toEqual(resultadoEsperado);
});
