// Gostaria de demonstrar um pouco do meu conhecimento em POO, utilizando classes e métodos.
// Essa abordagem permite encapsular a lógica de conversão em uma classe reutilizável, facilitando o uso e a manutenção do código.



// Criei uma classe ConversorDeArrayParaObjeto
class ConversorDeArrayParaObjeto {
    constructor(array) { // O construtor recebe a array de entrada, e inicializa as duas propriedades.
      this.array = array;
      this.objeto = {};
    }
  
    // Método de conversão, onde apliquei a lógica da conversão de array para objeto
    conversao() {
      for (let i = 0; i < this.array.length; i++) {
        const subArray = this.array[i];
        const key = subArray[0];
        const value = subArray[1];
        this.objeto[key] = value;
      }
  
      return this.objeto;
    }
  }
  
//   Instanciando meu objeto, e aplicando o método conversor na array que quero transformar num objeto
  const array = [["nome", 'teclado gamer'], ["descricao", "teclado gamer, ótimo para jogar jogos fps."], ["preco", 256.99], ["quantidade", 182]];
  const converter = new ConversorDeArrayParaObjeto(array);
  const objeto = converter.conversao();
  console.log('Sua conversão de array para objeto está pronta! Segue a conversão: ', objeto); 
  