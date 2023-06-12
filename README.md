# 1- Desafios JavaScript & TypeScript :computer:

Fui proposto a realizar 11 desafios de JavaScript, onde eu deveria desenvolver minhas habilidades voltadas para o raciocínio lógico no back-end. Consegui realizar os desafios explorando TypeScript, testes unitários, POO, entre outros tópicos. Me diverti bastante desenvolvendo este desafio! :rocket:


## 2 - Trajetória do desenvolvimento deste projeto:   :zap:

-Gostaria de compartilhar um pouco da trajetória do desenvolvimento desde projeto.

  -Primeiramente analisei todos os desafios, reparei seus possíveis diferencias, e a forma correta que deveriam ser desenvolvidos. Com isso, anotei no meu bloco de anotações One Note, quais exercícios eu poderia aplicar os difirencias, como o teste unitário, TypeScript e POO.
  
  -Comecei desenvolvendo os 11 desafios utilizando JavaScript puro, evitando ao máximo utilização dos métodos nativos, explicando os códigos linha a linha.
  
  -Após finalizar todos, busquei implementar os diferenciais que havia anotado, apliquei o teste unitário em todos os desafios, para garantir a qualidade do código, e POO no desafio 4 e no desafio 11, pois utilizavam objetos no contexto.
  
  -Revisei desafio por desafio, aplicando os testes, e conferindo uma última vez se todos estavam corretos.
  
  -Pude partir para o TypeScript, como ainda estou aprendendo os conceitos de TypeScript foi um desafio ao começo do desenvolvimento, mas nada que uma persistência não resolva kkkkkk.
  
  -Consegui finalizar todos os exercícios feitos em ts, depois disso apenas precisei compilar todos, e testei novamente os resultados um por um.
  
  -Assim finalizei meu projeto, colocando no github e produzindo este readME.

## 3- Estrutura do Projeto :file_folder:

Existem duas pastas principais ao clonar este projeto: 

1. **Desafios**: A pasta "Desafios" é composta por 11 subpastas, separadas pelo número do desafio. Neste arquivo, desenvolvi todos os desafios propostos, contando com explicações completas de código em todos eles. A fim de garantir a qualidade do código, apliquei testes unitários em todas as funções dos desafios. Todos os testes foram aprovados com sucesso! :heavy_check_mark:

      ./Desafios
          │ package.json
          │ package-lock.json
          └───Desafio01
          │ └───desafio01.js
          │ └───testeunitario.test.js
          └───Desafio02
          └───Desafio03
          └───Desafio04
          │ └───desafio04POO.js
          │ └───desafio04.js
          │ └───testeunitario.test.js
          └───Desafio05
          └───Desafio06
          └───Desafio07
          └───Desafio08
          └───Desafio09
          └───.Desafio10
          └───Desafio11



2. **Desafios TypeScript**: Esta pasta foi desenvolvida após a realização da pasta "Desafios". Aqui, pude desenvolver e estruturar um projeto em TypeScript. A pasta `src` contém duas subpastas, "desafioTS", onde estão armazenados todos os arquivos feitos em TypeScript, e o arquivo "desafioCompilados", onde foram armazenados os arquivos compilados para JavaScript. Utilizei o arquivo "tsconfig.json" para configurar o caminho dos arquivos compilados.
          
     ./projeto-typescript
          │ package.json
          │ package-lock.json
          │ tsconfig.json
          └───src
          │ └───desafioCompilados
          │ └───desafiosTS
          │ └───node_modules
          │ │ package-lock
          │ └───typescript
          │ └───.bin
         

## 4- Como executar os desafios e suas dependências :gear:

### Pasta "Desafios"

- Certifique-se de ter o Node.js instalado em sua máquina.
- Clone este repositório.
- Navegue até o diretório do desafio em JavaScript.
- Instale as dependências executando o comando `npm install` e `npm install jest --save-dev` para baixar a biblioteca "jest".
- Após isso, é possível executar o seguinte código no terminal: `npx jest`, que executará todos os testes encontrados.
- Também é possível executar manualmente apenas o teste unitário que deseja consultar como por exemplo `npx jest codigo.test.js`.
- Já os arquivos JavaScript podem ser executados normalmente com o node por exemplo `node .\Desafio01\desafio01.js`.

### Pasta "Desafios TypeScript"

- Após entrar no repositório do projeto "projeto-typescript", abra o terminal e digite `npm install`.
- As bibliotecas utilizadas no projeto serão armazenadas na pasta "node_modules".
- Verifique as alterações feitas no arquivo `tsconfig.json`, como por exemplo o caminho dos desafios compilados.
- Utilize o comando `npx tsc`, que é usado para executar o compilador TypeScript. Após a compilação, só precisamos executar o arquivo com o caminho do próprio arquivo.
- Os arquivos JavaScript compilados podem ser executados normalmente com o node por exemplo `node desafio01.js`.

## Dependências

- Node.js v14.17.3
- Jest v27.0.6
- TypeScript v4.3.5

## Contato :mailbox:

Se tiver alguma dúvida ou sugestão relacionada a este projeto, sinta-se à vontade para entrar em contato comigo através do meu e-mail: vic.shima.vss@gmail.com :email:


## Anotações e Rascunhos :memo:

![img01](https://github.com/shimarrudz/Desafios_JavaScript/assets/104167280/9156fdf4-286c-467c-9130-a72bdc68683a)
![img02](https://github.com/shimarrudz/Desafios_JavaScript/assets/104167280/f868980c-e6d9-463d-ac2b-b9fea7d3e428)
![img03](https://github.com/shimarrudz/Desafios_JavaScript/assets/104167280/71413212-da01-4b29-ba12-1d22e0698adf)
