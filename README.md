# 1- JavaScript & TypeScript Challenges :computer:

I was challenged to complete 11 JavaScript challenges, where I had to develop my backend logical reasoning skills. I successfully completed the challenges by exploring TypeScript, unit testing, OOP, and other topics. I had a lot of fun working on this challenge! :rocket:

## 2 - Development Journey:   :zap:

-I would like to share a little bit about the development journey of this project.

  -First, I analyzed all the challenges, identified their possible unique features, and determined the correct way to approach them. I made note of which exercises I could apply the unique features to, such as unit testing, TypeScript, and OOP.
  
  -I started by developing all 11 challenges using pure JavaScript, avoiding the use of built-in methods as much as possible, and explaining the code line by line.
  
  -After completing all the challenges, I implemented the unique features I had identified. I applied unit testing to all the challenges to ensure code quality, and used OOP in challenges 4 and 11, as they involved working with objects.
  
  -I reviewed each challenge, applied the tests, and double-checked that everything was correct.
  
  -Then, I moved on to TypeScript. As I am still learning TypeScript, it was a challenge at the beginning of the development process, but nothing that persistence couldn't overcome. 😄
  
  -I successfully completed all the challenges in TypeScript. Afterwards, I compiled all the TypeScript files and retested the results one by one.
  
  -With that, I finished my project, pushed it to GitHub, and created this README.

## 3- Project Structure :file_folder:

There are two main folders when cloning this project:

1. **Challenges**: The "Challenges" folder consists of 11 subfolders, numbered according to the challenge. In each folder, I developed the proposed challenges, including detailed code explanations. To ensure code quality, I applied unit testing to all the challenge functions. All tests passed successfully! :heavy_check_mark:

      ./Challenges
          │ package.json
          │ package-lock.json
          └───Challenge01
          │ └───challenge01.js
          │ └───unittest.test.js
          └───Challenge02
          └───Challenge03
          └───Challenge04
          │ └───challenge04OOP.js
          │ └───challenge04.js
          │ └───unittest.test.js
          └───Challenge05
          └───Challenge06
          └───Challenge07
          └───Challenge08
          └───Challenge09
          └───.Challenge10
          └───Challenge11



2. **TypeScript Challenges**: This folder was developed after completing the "Challenges" folder. Here, I had the opportunity to structure a TypeScript project. The `src` folder contains two subfolders: "typescriptChallenges", which stores all the TypeScript files, and "compiledChallenges", where the compiled JavaScript files are stored. I used the "tsconfig.json" file to configure the path of the compiled files.

     ./typescript-project
          │ package.json
          │ package-lock.json
          │ tsconfig.json
          └───src
          │ └───compiledChallenges
          │ └───typescriptChallenges
          │ └───node_modules
          │ │ package-lock
          │ └───typescript
          │ └───.bin
         

## 4- Running the Challenges and Dependencies :gear:

### "Challenges" Folder



- Make sure you have Node.js installed on your machine.
- Clone this repository.
- Navigate to the JavaScript challenge directory.
- Install the dependencies by running `npm install` and `npm install jest --save-dev` to download the "jest" library.
- After that, you can execute the following command in the terminal: `npx jest`, which will run all the tests found.
- You can also manually run individual unit tests, for example: `npx jest code.test.js`.
- The JavaScript files can be executed normally with Node.js, for example: `node .\Challenge01\challenge01.js`.

### "TypeScript Challenges" Folder

- After entering the "typescript-project" repository, open the terminal and run `npm install`.
- The libraries used in the project will be stored in the "node_modules" folder.
- Check the changes made in the `tsconfig.json` file, such as the path of the compiled challenges.
- Use the `npx tsc` command, which is used to run the TypeScript compiler. After compilation, you only need to execute the file with the path to the file itself.
- The compiled JavaScript files can be executed normally with Node.js, for example: `node challenge01.js`.

## Dependencies

- Node.js v14.17.3
- Jest v27.0.6
- TypeScript v4.3.5

## Contact :mailbox:

If you have any questions or suggestions related to this project, feel free to contact me via email: vic.shima.vss@gmail.com :email:


## Notes and Drafts :memo:

![img01](https://github.com/shimarrudz/Desafios_JavaScript/assets/104167280/9156fdf4-286c-467c-9130-a72bdc68683a)
![img02](https://github.com/shimarrudz/Desafios_JavaScript/assets/104167280/f868980c-e6d9-463d-ac2b-b9fea7d3e428)
![img03](https://github.com/shimarrudz/Desafios_JavaScript/assets/104167280/71413212-da01-4b29-ba12-1d22e0698adf)

Is there anything else I can help you with?
