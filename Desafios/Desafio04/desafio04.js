// - Desafio 4
//     ### Converter array em objeto
//     Implemente um método que possa converter um array de arrays em um objeto com chave e valor
//     Exemplo:
// // Entrada do método
// run([["c",2],["d",4]])
// // Resultado do método
// { c: 2, d: 4 }



// Criando a função que converte uma array para um objeto
function arrayToObject(array) {
    const objeto = {};
//   Utilizei um laço que separa as arryas em chaves e valores
    for (let i = 0; i < array.length; i++) {
      const [key, value] = array[i];
      objeto[key] = value;
    }
  
    return objeto;
  }
  
  // Chamando a função, convertendo minha array para um objeto
  const array = [["nome", "Victor Shimada Serete"], ["idade", 20], ["cargo", "Desenvolvedor Back-End"], ["empresa", "Grupo GCB"]];
  const objeto = arrayToObject(array);
  console.log('Sua conversão de array para objeto está pronta! Segue a conversão: ', objeto); 
  