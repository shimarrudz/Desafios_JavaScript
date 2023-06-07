const encontrarValoresComuns = require('./desafio10');

describe('encontrarValoresComuns', () => {
  it('deve retornar os valores comuns entre as arrays', () => {
    const array1 = ['Grupo', 1, 2, 3, 'GCB'];
    const array2 = ['Grupo', 4, 5, 6, 'GCB'];

    const resultado = encontrarValoresComuns(array1, array2);

    expect(resultado).toEqual(['Grupo', 'GCB']);
  });

  it('deve retornar um array vazio se não houver valores comuns', () => {
    const array1 = ['A', 'B', 'C'];
    const array2 = ['X', 'Y', 'Z'];

    const resultado = encontrarValoresComuns(array1, array2);

    expect(resultado).toEqual([]);
  });
});
