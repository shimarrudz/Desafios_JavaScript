"use strict";
function limpaArray(array) {
    let novaArray = [];
    // Laço para a aplicação da lógica, concatenando os elementos limpos
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            novaArray = novaArray.concat(limpaArray(array[i]));
        }
        else {
            novaArray.push(array[i]);
        }
    }
    return novaArray;
}
console.log('Esta é sua array sem aninhamento:', limpaArray([1000, 1001, [1002], [1003, 1004], ['Grupo'], ['GCB']]));
