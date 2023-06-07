// - Desafio 11
//     ### ****Encontrar a intersecção de múltiplos arrays****
//     Implemente um método que encontre a intersecção de múltiplos arrays (ou seja, os valores que aparecem em todos eles).
//     Exemplo:
// // Entrada do método
// run([[1, 2, 3], [2, 3, 4], [3, 4, 5]])
// // Resultado do método
// [3]

// Criando a função que apenas recebera o a array como parametro para encontrar as intersecções
function encontrarInterseccao(arrays) {
    if (arrays.length === 0) {
      return [];
    }
  
    // Inicialmente, consideramos todos os elementos do primeiro array como candidatos à interseção
    let interseccao = arrays[0];
  
    // Itera sobre os arrays restantes
    for (let i = 1; i < arrays.length; i++) {
      const currentArray = arrays[i];
  
      // Filtra a intersecção com base nos elementos presentes no array atual
      interseccao = interseccao.filter((element) => currentArray.includes(element));
    }
  
    return interseccao;
  }
  
  // Exemplo de uso
  const arrays = [['Grupo', 'GCB'], ['Grupo', 'GCB'], ['Vamos pra cima!', 'GCB', 'Grupo'], ['Hands on!', 'Grupo', 'GCB']];
  console.log('Essas foram as intersecções encontradas: ',encontrarInterseccao(arrays));
  