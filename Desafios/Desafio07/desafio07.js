// - Desafio 7
//     ### Igualar arrays
//     Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
//     Exemplo:
// // Entrada do método
// run([1, 2, 3, 4],[1, 2, 3, 4])
// run([1, 2, 3, 4],[1, 2, 3, 5])
// // Resultado do método
// true
// false


// Criei uma função que recebe como parametro duas funções para serem comparadas
function comparacaoArray(array1, array2) {
    // Aplicando o metodo que compara as arrays fornecidas
    if (array1.length !== array2.length) {
      return false;
    }
    
    // Laço de repetição para comparar indice por indice das arrays
    // Ou seja, caso for igual, irá retornar o booelan true, caso o contrario, o retornará false
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    
    return true;
  }
  
//   Chamando a função para comparar os valores fornecidos como parametro
  console.log(comparacaoArray(['G', 'R', 'U', 'P', 'O', 'GCB'], ['G', 'R', 'U', 'P', 'O', 'gcb'])); 
  console.log(comparacaoArray(['G', 'R', 'U', 'P', 'O', 'GCB'], ['G', 'R', 'U', 'P', 'O', 'GCB'])); 
  

  module.exports = comparacaoArray