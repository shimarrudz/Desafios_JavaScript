// Descrição do desafio
// - Desafio 1
//     ### Array de elementos por repetições
//     Implemente um método que possa criar um array baseado nos valores que foram passados para ele.
//     Exemplo:
// Entrada do método
// run(2, 'i')
// Resultado do método
// ['i', 'i']

// Criei uma função que recebe dois parâmetros, a quantidade de repetições que deseja, e o valor que deseja ser repedito
function repArray(repeticoes, valor) {
    const array = [];
  // Um loop de repetição, que so quebra quando o indice atinge o numero de repetições que foi solicitado
    for (let indice = 0; indice < repeticoes; indice++) {
      // Utilizei o método push, que adiciona valores em uma array
      array.push(valor);
    }
  
    return array;
  }
  
// Aqui apenas chamei a função 'run' passando os valores necessários
  const resultado = repArray(5, 'banana');
  console.log('Esses são os valores que você pediu para eu repetir 5 vezes! ', resultado); 
  
  
module.exports = repArray;