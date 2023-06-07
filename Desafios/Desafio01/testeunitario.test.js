// Importando a função repArray
const repArray = require('./desafio01');

// Teste unitário para a função repArray
test('Repetição de array', () => {
  // Definindo os parâmetros de teste
  const repeticoes = 2;
  const valor = 'i';

  // Chamando a função repArray com os parâmetros de teste
  const resultado = repArray(repeticoes, valor);

  // Verificando se o resultado é igual ao esperado
  expect(resultado).toEqual(['i', 'i']);
});
