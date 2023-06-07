// - Desafio 5
//     ### Filtrar array
//     Implemente um método que retorne um array filtrado, sem os itens passados por parâmetro.
//     Exemplo:
// // Entrada do método
// run([5, 4, 3, 2, 5], [5, 3])
// // Resultado do método
// [4, 2]



// Criei uma função que filtra a array, utilizando novamente o método filter
// Esta função recebe dois parametros, o primeiro a prórpia array, e segundo quais itens serão removidos
function filtrarArray(array, itensParaRemover) {
    return array.filter(item => !itensParaRemover.includes(item));
  }
  
// Chamando a função, e passando os parametros de entrada (array) e o parametro de remoção
  const entrada = [1, 1, 1, 1, 3, 5, 6, 8, 6, 6, 6, 6, 6, 6, 3, 3, 3, 3, 7, 9];
  const itensRemover = [1, 3, 6];
  const resultado = filtrarArray(entrada, itensRemover);
  console.log('Aqui está a array filtrada sem os itens que você deseja remover: ',resultado);
  
  module.exports = filtrarArray;