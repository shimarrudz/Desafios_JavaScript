// - Desafio 8
//     ### Remover aninhamentos de um array
//     Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
//     Exemplo:
// // Entrada do método
// run([1, 2, [3], [4, 5]])
// // Resultado do método
// [1, 2, 3, 4, 5]


// Criando uma function que remove o aninhamento das arrays
function limpaArray(array) {
    let novaArray = [];
  
    // Laço para a aplicação da logica, contatenando os elementos limpos
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        novaArray = novaArray.concat(limpaArray(array[i]));
      } else {
        novaArray.push(array[i]);
      }
    }
  
    return novaArray;
  }
  
  const resultado = limpaArray([1000, 1001, [1002], [1003, 1004], ['Grupo'], ['GCB']]);
  console.log('Esta é sua array sem aninhamento:', resultado);
  

  module.exports = limpaArray