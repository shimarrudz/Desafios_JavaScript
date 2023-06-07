"use strict";
function repArray(repeticoes, valor) {
    const array = [];
    for (let indice = 0; indice < repeticoes; indice++) {
        array.push(valor);
    }
    return array;
}
const resultado = repArray(5, 'banana');
console.log('Esses são os valores que você pediu para eu repetir 5 vezes!', resultado);
module.exports = repArray;
