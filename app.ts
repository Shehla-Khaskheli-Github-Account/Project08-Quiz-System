#! /usr/bin/env node
import { log } from "console";
import inquirer from "inquirer";

let quiz:{

   question_1: string;
   question_2: string;
   question_3: string;
   question_4: string;
   question_5: string;
   question_6: string;
   question_7: string;
   question_8: string;
   question_9: string;
   question_10: string;
} = await inquirer.prompt([
// Question No:1
   {
   type: "list",
   name: "question_1",
   message: "Q No 1. What is a return type for when nothing is returned?",
   choices: ["A. Void", "B. Unknown", "C. any[]", "D. any"]
   },
// Question No:2
    {
      type: "list",
      name: "question_2",
      message: "Q No 2. TypeScript can always correctly infer a variables type?",
      choices: ["A. True", "B. False"]
    },
// Question No:3
    {
      type: "list",
      name: "question_3",
      message: "Q No 3. Type Aliases are mostly used with?",
      choices: ["A. Numbers", "B. Strings", "C. Booleans"]
    },
// Question No:4
   {
     type: "list",
     name: "question_4",
     message: "Q No 4. What are the two types of enums?",
     choices: ["A. String and Number", "B. String and Boolean","C. Number and Boolean", "D. Number and Number Array"]
   },
// Question No:5
   {
     type: "list",
     name: "question_5",
     message: "Q No 5. TypeScript supports Modulus.",
     choices: ["A. True", "B. False"]
   },
// Question No:6
   {
    type: "list",
    name: "question_6",
    message: "Q No 6. What is TypeScript primarily used for?",
    choices: ["A. Memory Management","B. Dynamic Typing", "C. Static Typing", "D. Asynchronous operations"],
   },
// Question No:7
   {
    type: "list",
    name: "question_7",
    message: "Q No 7. Which TypeScript feature allows for checking the type of a variable at runtime?",
    choices: ["A. Type guard", "B. Runtime type", "C. Dynamic type", "D. Typeof"]
   },
// Question No:8
   {
    type: "list",
    name: "question_8",
    message: "Q No 8. How can you allow an object to have any number of properties of a given type in TypeScript?",
    choices: ["A. { [key: any]: string; }", "B. { [key: string]: any; }", "C. { [property: string]: string; }", "D. { [value: string]: string;}"]
   },
// Question No:9
   {
    type: "list",
    name: "question_9",
    message: "Q No 9. How do you define an array of strings in TypeScript?",
    choices: ["A. Array<string>", "B. string[]", "C. Both A and B", "D. List<string>"]
   },
// Question No:10
   {
    type: "list",
    name: "question_10",
    message: "Q NO 10. How do you denote a variable as readonly in TypeScript? ",
    choices: ["A. const", "B. static", "C. readonly", "D. fixed"]
   } 

]);

let score: number = 0;

switch (quiz.question_1){

   case "A. Void":
   console.log("1. Correct!");
   ++score;
   break;
   default:
   console.log("1. Incorrect!");
         
}

switch (quiz.question_2){

   case "B. False":
   console.log("2. Correct!");
   ++score;
   break;
   default:
   console.log("2. Incorrect!");
}

switch (quiz.question_3){

   case "B. Strings":
   console.log("3. Correct!");
   ++score;
   break;
   default:
   console.log("3. Incorrect!");
}

switch (quiz.question_4){

   case "A. String and Number":
   console.log("4. Correct!");
   ++score;
   break;
   default:
   console.log("4. Incorrect!");
}

switch (quiz.question_5){

   case "A. True":
   console.log("5. Correct!");
   ++score;
   break;
   default:
   console.log("5. Incorrect!");
}

switch (quiz.question_6)
{
   case "Static Typing":
   console.log("6. Correct!");
   ++score;
   break;
   default:
   console.log("6. Incorrect!");
}

switch (quiz.question_7)
{
   case "A. Type guard":
   console.log("7. Correct!");
   ++score;
   break;
   default:
   console.log("7. Incorrect!");
}

switch (quiz.question_8)
{
   case "B. { [key: string]: any; }":
   console.log("8. Correct!");
   ++score;
   break;
   default:
   console.log("8. Incorrect!");
}

switch (quiz.question_9)
{
   case "C. Both A and B":
   console.log("9. Correct!");
   ++score;
   break;
   default:
   console.log("9. Incorrect!");
}

switch (quiz.question_10)
{
   case "C. readonly":
   console.log("10. Correct!");
   ++score;
   break;
   default:
   console.log("10. Incorrect!");
}

console.log(`\nYour Score is :${score}`);

