/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function declarations to function expression.
        * Please reformat the following function expressions to function declarations.

    Submit the file to Hive

*/

// From function declarations to function expressions

//1
function welcome() {
  let welcome = "Welcome to Appleseeds Bootcamp!";
  return welcome;
}
//arrow function
let welcome2 = () => "Welcome to Appleseeds Bootcamp!";

console.log(welcome2());

// anonymous functuion
// let welcome2 = function() {
//     return 'Welcome to Appleseeds Bootcamp!';
// }

//2
function power(a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
}

//arrow function
let power2 = (a) => Math.pow(a, 2);

console.log(power(5));

// anonymous functuion
// let power2 = function(a) {
//     let myNumber = a;
//     let result = Math.pow(myNumber, 2);
//     return result;
// }

//3
function add(a, b = 5) {
  let myNumber = a;
  let sum = myNumber + b;
  return sum;
}

let add2 = (a, b = 5) => a + b;

console.log(add2(7));

// From function expressions to function declarations

//1
const hello = () => "Hello!";

function hello2() {
  return "hello";
}

//2
const squareRoot = (a) => Math.sqrt(a);

function squareRoot2(a) {
  let sqR = Math.sqrt(a);
  return sqR;
}

//3 - random number between a and b (doesn't matter which number is bigger).
const randomNumbers = (a, b) => Math.random() * (a - b) + b;

function randomNumbers2(a, b) {
  let randomNum = Math.random() * (a - b) + b;
  return randomNum;
}

console.log(randomNumbers2(3, 5));
