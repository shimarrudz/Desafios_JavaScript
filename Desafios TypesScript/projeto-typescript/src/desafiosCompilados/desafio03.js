"use strict";
function limparArray(array) {
    return array.filter((item) => {
        return (
        // Definição dos elementos que desejo limpar
        item !== false &&
            item !== undefined &&
            item !== '' &&
            item !== 4 &&
            item !== null &&
            item !== 0);
    });
}
// Chamei a função, declarando uma array contendo elementos que o filter limparia, dando mais coesão à frase que eu gostaria de passar
const resultado = limparArray([
    null == '',
    'Código Limpo',
    '',
    undefined,
    0,
    4,
    'ola',
    'G',
    'A',
    4,
    'M',
    'E',
    'R',
    'número:',
    1,
]);
console.log('Esta array está filtrada e limpa agora!', resultado);
