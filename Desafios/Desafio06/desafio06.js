// - Desafio 6
//     ### Novo array sem valores duplicados
//     Implemente um método que retorne um array, sem valores duplicados.
//     Exemplo:
// // Entrada do método
// run([5, 4, 3, 2, 5], [5, 3])
// // Resultado do método
// [4, 2]



// Criei uma função que remove os elementos duplicados na array passada como parametro
function removeDuplicados(array) {
    // Limpando a array antes de usar como já fiz nos outros códigos, para evitar sobreposições
    let arrayLimpa = [];
// Laço de repetição aplicando a lógica da remoção dos elementos duplicados
    for (let i = 0; i < array.length; i++) {
      if (arrayLimpa.indexOf(array[i]) === -1) {
        arrayLimpa.push(array[i]);
      }
    }
  
    return arrayLimpa;
  }
  
//   Chamando a função e passando a array com elementos duplicados como parametro
  let inputArray = ['Grupo', 'G', 'G', 'C', 'B', 'B', 0, 0, 1, 2, 2, 2, 3, 4, 4, 5];
  let resultado = removeDuplicados(inputArray);
  console.log(resultado); 
  
  module.exports = removeDuplicados;