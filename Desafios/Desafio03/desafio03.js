// - Desafio 3
//     ### Limpar array
//     Implemente um método que limpe os itens desnecessários de um array que foi passado para a função (false, undefined, strings vazias, zero, null)
//     Exemplo:
// // Entrada do método
// run([1, '', undefined, 0, 4, 'ola'])
// // Resultado do método
// [1, 4, 'ola']



// Criei uma função, usando o método filter, irá filtrar os elementos específicos que não quero na minha array
// Uma coisa interessante que aprendi sobre o método filter, ele não muda a array original, ele apenas filtra criando uma nova array
function limparArray(array) {
    return array.filter(item => {
      return (
        // Definição dos elementos que desejo limpar
        item !== false && item !== undefined && item !== '' && item !== 4 && item !== null && item !== 0
      );
    });
  }
  
//   Chamei a função, declarando uma array contendo elementos que o filter limparia, dando mais coesão a frase que eu gostarua de passar
  const resultado = limparArray([null == "", "Código Limpo", '', undefined, 0, 4, 'ola', 'G', 'A', 4, 'M', 'E', 'R' , 'número:', 1]);
  console.log('Esta array está filtrada e limpa agora!', resultado);