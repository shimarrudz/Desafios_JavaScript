// - Desafio 9
//     ### Dividir array
//     Implemente um método que divida um array por uma quantidade passada por parâmetro.
//     Exemplo:
// // Entrada do método
// run([1, 2, 3, 4, 5], 2)
// // Resultado do método
// [[1, 2], [3, 4], [5]]




// Neste desafio, não pude deixar o código tão "bruto" como foi solicitado, 
// para ter uma eficiência mais precisa, como por exemplo o uso do "Math"



// Criei a função que recebe dois parametros, a array, e depois a quantidade de divisões que deseja fazer
function dividirArray(array, quantidade) {
    let resultado = [];
    // O Math.ceil arredonda pra cima, pois para dividir o array não pode conter numeros quebrados como resposta da
    let tamanhoSubArray = Math.ceil(array.length / quantidade); 
  

    // Aplicando o laço, utilizando o método slice.
    for (let i = 0; i < array.length; i += tamanhoSubArray) {
      let subarray = array.slice(i, i + tamanhoSubArray);
      resultado.push(subarray);
    }
  
    return resultado;
  }
  
  // Exemplo de uso:
  let arrayOriginal1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let arrayOriginal2 = ['G', 'C', 'B']
//   Passando o parametro de quantidades que quero dividir esta array
  let quantidadeDesejada = 3;
  let resultado1 = dividirArray(arrayOriginal1, quantidadeDesejada);
  let resultado2 = dividirArray(arrayOriginal2, quantidadeDesejada);
  
  console.log('Primeira divisão de array', resultado1);
  console.log('Segunda divisão de array', resultado2);
  
  module.exports = dividirArray