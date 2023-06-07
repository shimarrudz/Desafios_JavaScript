// - Desafio 2
//     ### Inverter array
//     Implemente um método que inverta um array, sem utilizar métodos nativos (.map(), .forEach() ...).
//     Exemplo:
//     // Entrada do método
//     run([1, 2, 3, 4])
//     // Resultado do método
//     [4, 3, 2, 1]

// Criei uma função, que recebe a array que desejo inverter como parâmetro
function arrayInvertida(array) {
    // Zero a array que será a array invertida, para que não ocorra sobreposição de valores
    let arrayInvertida = [];
    // Laço de repetição básico, aplicando a regra de inversão
    for (let i = array.length - 1; i >= 0; i--) {
        arrayInvertida.push(array[i]);
    }
    return arrayInvertida;
  }

// Chamei a função, passando a array que desejo inverter   
  let entradaArray = [1, 2, 3, 4, 5, 6, 7, 8];
  let invertida = arrayInvertida(entradaArray);
  console.log('Aqui está sua array invertida: ', invertida);