function limparArray(arr) {
    return arr.filter(item => {
      return (
        item !== false &&
        item !== undefined &&
        item !== '' &&
        item !== 0 &&
        item !== null
      );
    });
  }
  
  // Teste unitário
  describe('limparArray', () => {
    it('deve retornar um array filtrado e limpo', () => {
      const entrada = [1, '', undefined, 0, 4, 'ola'];
      const resultadoEsperado = [1, 4, 'ola'];
  
      const resultado = limparArray(entrada);
  
      expect(resultado).toEqual(resultadoEsperado);
    });
  });
  