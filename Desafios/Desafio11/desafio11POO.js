// Gostaria de demonstrar novamente um pouco do meu conhecimento em POO, utilizando classes e métodos.

// Criei a classe InterseccaoArrays
class InterseccaoArrays {
    constructor(arrays) {
      this.arrays = arrays;
    }
  
    // Método que encontra intersecções, utilizando filter e includes
    encontrarInterSeccao() {
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
  
  // Inserindo as arrays como parametro, chamando o metodo encontrarInterSeccao
  const arrays = [['Grupo', 'GCB'], ['Grupo', 'GCB'], ['Vamos pra cima!', 'GCB', 'Grupo'], ['Hands on!', 'Grupo', 'GCB']];
//Instanciando a classe, para utilizar ela passando o parametro de arrays
  const interseccaoArrays = new InterseccaoArrays(arrays);
  console.log('Estas foram as intersecções encontradas utilizando POO! ',interseccaoArrays.encontrarInterSeccao());
  