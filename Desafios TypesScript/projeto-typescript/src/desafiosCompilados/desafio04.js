"use strict";
class ArrayToObjectConverter {
    constructor(array) {
        this.array = array;
        this.obj = {};
    }
    convert() {
        for (let i = 0; i < this.array.length; i++) {
            const [key, value] = this.array[i];
            this.obj[key] = value;
        }
        return this.obj;
    }
}
const array = [
    ["nome", "teclado gamer"],
    ["descricao", "teclado gamer, ótimo para jogar jogos fps."],
    ["preco", 256.99],
    ["quantidade", 182],
];
const converter = new ArrayToObjectConverter(array);
const objeto = converter.convert();
console.log("Sua conversão de array para objeto está pronta! Segue a conversão: ", objeto);
