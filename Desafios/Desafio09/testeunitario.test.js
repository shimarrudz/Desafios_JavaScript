const dividirArray = require('./desafio09');

describe('dividirArray', () => {
  it('deve dividir o array corretamente', () => {
    const arrayOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const quantidadeDesejada = 3;
    const resultadoEsperado = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];

    const resultado = dividirArray(arrayOriginal, quantidadeDesejada);

    expect(resultado).toEqual(resultadoEsperado);
  });

  it('deve dividir o array corretamente com array de caracteres', () => {
    const arrayOriginal = ['G', 'C', 'B'];
    const quantidadeDesejada = 3;
    const resultadoEsperado = [['G'], ['C'], ['B']];

    const resultado = dividirArray(arrayOriginal, quantidadeDesejada);

    expect(resultado).toEqual(resultadoEsperado);
  });
});
