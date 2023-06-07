function repArray(repeticoes: number, valor: any): any[] {
    const array: any[] = [];
    
    for (let indice = 0; indice < repeticoes; indice++) {
      array.push(valor);
    }
    
    return array;
  }
  
  const resultado: any[] = repArray(5, 'banana');
  console.log('Esses são os valores que você pediu para eu repetir 5 vezes!', resultado);
  
  export = repArray;
  