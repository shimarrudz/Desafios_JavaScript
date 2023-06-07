// - Desafio 10
//     ### Encontrar valores comuns de arrays
//     Implemente um método que encontre os valores comuns entre dois arrays.
//     Exemplo:
// // Entrada do método
// run([6, 8], [8, 9])
// // Resultado do método
// [8]


// Criei uma função onde recebe dois parametros, no caso duas arrays que serão filtradas
function encontrarValoresComuns(array1, array2) {
    // Filtra os elementos do primeiro array que também estão presentes no segundo array
    const valoresComuns = array1.filter(elemento => array2.includes(elemento));
    
    return valoresComuns;
  }
  
//   Definindo as arrays 
  const array1 = ['Grupo', 1, 2, 3, 'GCB'];
  const array2 = ['Grupo', 4, 5, 6, 'GCB'];
  
  const valoresComuns = encontrarValoresComuns(array1, array2);
  console.log('Estes foram os valores encontrados em comum nas arrays: ', valoresComuns);
  
  module.exports = encontrarValoresComuns