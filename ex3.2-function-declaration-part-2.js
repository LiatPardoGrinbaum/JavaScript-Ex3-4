/*
    JavaScript - Declaring Functions

    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function expressions to IIFE functions.
        * Please reformat the following function declarations in two ways, explicit return and implicit return functions.

    Submit the file to Hive

*/

// From function declarations to explicit and implicit return functions (one of each).

//1
function welcome() {
  let welcome = "Welcome to Appleseeds Bootcamp!";
  return welcome;
}

//1-explicit
const welcome2 = () => {
  return "Welcome to Appleseeds Bootcamp!";
};

//1- implicit
const welcome3 = () => "Welcome to Appleseeds Bootcamp!";

// console.log(welcome3());

//2
function power(a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
}

//2-explicit
const power2 = (a) => {
  return Math.pow(a, 2);
};

//2- implicit
const power3 = (a) => Math.pow(a, 2); // or (Math.pow(a, 2);)

// From function expressions to IIFE functions.
//1
const squareRoot = (a) => Math.sqrt(a);

const squareRoot2 = ((a) => {
  //also works with (function (a) => .....
  return Math.sqrt(a);
})(16);

console.log(squareRoot2);

//2
const randomNumbers = (a, b) => Math.random() * (a - b) + b;
// console.log(randomNumbers(10, 14));

const randomNumbers2 = ((a, b) => {
  return Math.random() * (a - b) + b;
})(2, 6);

console.log(randomNumbers2);
