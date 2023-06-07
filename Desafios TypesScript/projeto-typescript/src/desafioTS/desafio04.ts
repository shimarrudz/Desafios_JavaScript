class ArrayToObjectConverter {
    private array: [string, any][];
    private obj: { [key: string]: any };
  
    constructor(array: [string, any][]) {
      this.array = array;
      this.obj = {};
    }
  
    public convert(): { [key: string]: any } {
      for (let i = 0; i < this.array.length; i++) {
        const [key, value] = this.array[i];
        this.obj[key] = value;
      }
  
      return this.obj;
    }
  }
  
  const array: [string, any][] = [
    ["nome", "teclado gamer"],
    ["descricao", "teclado gamer, ótimo para jogar jogos fps."],
    ["preco", 256.99],
    ["quantidade", 182],
  ];
  
  const converter = new ArrayToObjectConverter(array);
  const objeto = converter.convert();
  console.log("Sua conversão de array para objeto está pronta! Segue a conversão: ", objeto);
  