class InterseccaoArrays {
    private arrays: any[][];
  
    constructor(arrays: any[][]) {
      this.arrays = arrays;
    }
  
    public encontrarInterseccao(): any[] {
      if (this.arrays.length === 0) {
        return [];
      }
  
      let interseccao = this.arrays[0];
  
      for (let i = 1; i < this.arrays.length; i++) {
        const currentArray = this.arrays[i];
        interseccao = interseccao.filter((element) =>
          currentArray.includes(element)
        );
      }
  
      return interseccao;
    }
  }
  
  // Exemplo de uso
  const arrays: any[][] = [['Grupo', 'GCB'], ['Grupo', 'GCB'], ['Vamos pra cima!', 'GCB', 'Grupo'], ['Hands on!', 'Grupo', 'GCB']];
  const interseccaoArrays = new InterseccaoArrays(arrays);
  console.log('Estas foram as intersecções encontradas utilizando POO!', interseccaoArrays.encontrarInterseccao());
  