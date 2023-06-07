"use strict";
function arrayInvertida(array) {
    let arrayInvertida = [];
    for (let i = array.length - 1; i >= 0; i--) {
        arrayInvertida.push(array[i]);
    }
    return arrayInvertida;
}
let entradaArray = [1, 2, 3, 4, 5, 6, 7, 8];
let invertida = arrayInvertida(entradaArray);
console.log('Aqui está sua array invertida:', invertida);
