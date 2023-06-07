const removeDuplicados = require('./desafio06')

describe('removeDuplicados', () => {
  it('deve remover elementos duplicados de uma array', () => {
    const inputArray = ['Grupo', 'G', 'G', 'C', 'B', 'B', 0, 0, 1, 2, 2, 2, 3, 4, 4, 5];
    const resultado = removeDuplicados(inputArray);
    expect(resultado).toEqual(['Grupo', 'G', 'C', 'B', 0, 1, 2, 3, 4, 5]);
  });

  it('deve retornar uma array vazia se nenhum elemento duplicado for encontrado', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const resultado = removeDuplicados(inputArray);
    expect(resultado).toEqual([1, 2, 3, 4, 5]);
  });

  it('deve retornar uma array vazia se a array de entrada for vazia', () => {
    const inputArray = [];
    const resultado = removeDuplicados(inputArray);
    expect(resultado).toEqual([]);
  });
});
