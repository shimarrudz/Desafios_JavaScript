function dividirArray<T>(array: T[], quantidade: number): T[][] {
    let resultado: T[][] = [];
    let tamanhoSubArray = Math.ceil(array.length / quantidade);
  
    for (let i = 0; i < array.length; i += tamanhoSubArray) {
      let subarray = array.slice(i, i + tamanhoSubArray);
      resultado.push(subarray);
    }
  
    return resultado;
  }
  
  // Exemplo de uso:
  let arrayOriginal1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let arrayOriginal2 = ['G', 'C', 'B'];
  let quantidadeDesejada = 3;
  let resultado1 = dividirArray<number>(arrayOriginal1, quantidadeDesejada);
  let resultado2 = dividirArray<string>(arrayOriginal2, quantidadeDesejada);
  
  console.log('Primeira divisão de array', resultado1);
  console.log('Segunda divisão de array', resultado2);
  