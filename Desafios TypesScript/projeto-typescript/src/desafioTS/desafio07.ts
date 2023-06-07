function comparacaoArray(array1: any[], array2: any[]): boolean {
    // Aplicando o método que compara as arrays fornecidas
    if (array1.length !== array2.length) {
      return false;
    }
    
    // Laço de repetição para comparar índice por índice das arrays
    // Ou seja, caso for igual, irá retornar o boolean true, caso contrário, retornará false
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    
    return true;
  }
  
  // Chamando a função para comparar os valores fornecidos como parâmetro
  console.log(comparacaoArray(['G', 'R', 'U', 'P', 'O', 'GCB'], ['G', 'R', 'U', 'P', 'O', 'gcb'])); 
  console.log(comparacaoArray(['G', 'R', 'U', 'P', 'O', 'GCB'], ['G', 'R', 'U', 'P', 'O', 'GCB'])); 
  