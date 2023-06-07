"use strict";
function encontrarValoresComuns(array1, array2) {
    // Filtra os elementos do primeiro array que também estão presentes no segundo array
    const valoresComuns = array1.filter(elemento => array2.includes(elemento));
    return valoresComuns;
}
// Exemplo de uso
const array1 = ['Grupo', 1, 2, 3, 'GCB'];
const array2 = ['Grupo', 4, 5, 6, 'GCB'];
const valoresComuns = encontrarValoresComuns(array1, array2);
console.log('Estes foram os valores encontrados em comum nas arrays: ', valoresComuns);
