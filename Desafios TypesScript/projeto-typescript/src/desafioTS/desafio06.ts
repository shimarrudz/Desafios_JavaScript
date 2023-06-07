function removeDuplicados(array: any[]): any[] {
    const arrayLimpa: any[] = [];
  
    for (let i = 0; i < array.length; i++) {
      if (arrayLimpa.indexOf(array[i]) === -1) {
        arrayLimpa.push(array[i]);
      }
    }
  
    return arrayLimpa;
  }
  
  const inputArray: any[] = ['Grupo', 'G', 'G', 'C', 'B', 'B', 0, 0, 1, 2, 2, 2, 3, 4, 4, 5];
  console.log(removeDuplicados(inputArray));
  