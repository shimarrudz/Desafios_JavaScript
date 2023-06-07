"use strict";
function filtrarArray(array, itensParaRemover) {
    return array.filter(item => !itensParaRemover.includes(item));
}
// Chamando a função e passando os parâmetros de entrada (array) e o parâmetro de remoção
const entrada = [1, 1, 1, 1, 3, 5, 6, 8, 6, 6, 6, 6, 6, 6, 3, 3, 3, 3, 7, 9];
const itensRemover = [1, 3, 6];
console.log('Aqui está a array filtrada sem os itens que você deseja remover: ', filtrarArray(entrada, itensRemover));
