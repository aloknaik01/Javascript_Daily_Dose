//What is Functional Programming?
//Functional Programming is a programming paradigm where functions are first-class citizens. It emphasizes:

/*
Pure functions
Immutability
Function composition
Avoiding side effects
*/

//1. First-Class Functions
/*
Functions in JavaScript can be:
Assigned to variables
Passed as arguments
Returned from other functions
*/

const greet = function (name) {
  return `Hello, ${name}`;
};

function sayName(fn, name) {
  return fn(name);
}

console.log(sayName(greet, "Alok"));

//2. Higher-Order Functions (HOFs)
/*
A function that:
Takes another function as argument
Or returns another function
*/

function multiply(factor) {
  return function (num) {
    return num * factor;
  };
}

const double = multiply(2);
console.log(double(5)); // // 10

//3. Pure Functions
/*
Returns same output for same input
Has no side effects
*/

function add(a, b) {
  return a + b;
}

//Returns same output for same input Has no side effects

//4. Immutability
//Data is not modified, instead new values are returned.

const arr = [1, 2, 3];
const newArr = [...arr, 4];

console.log(arr); //[1,2,3]
console.log(newArr); //[1,2,3,4]

// 5. Recursion
//Function calls itself to solve problems instead of loops.

function factorial(n) {
  if (n === 0) return 1;

  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

//6. Function Composition
//Combining multiple small functions to build complex logic.

const trim = (str) => str.trim();
const toLower = (str) => str.toLowerCase();
const wrapInDiv = (str) => `<div>${str}</div>`;

const compose =
  (...fns) =>
  (input) =>
    fns.reduceRight((acc, fn) => fn(acc), input);

const transform = compose(wrapInDiv, toLower, trim);

console.log(transform("  Hello JS  ")); // <div>hello js</div>

//7. Closures
//An inner function has access to outer function’s scope, even after outer function is done executing.

function outer() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2

//8. Currying
//Breaking a function with multiple arguments into a series of functions that take one argument at a time.

function multiply(a) {
  return function (b) {
    return a * b;
  };
}

console.log(multiply(3)(4)); // 12

//9. Partial Application
//Fixing a few arguments of a function and returning a new function.

function add(a, b, c) {
  return a + b + c;
}

function partialAdd(a) {
  return function (b, c) {
    return add(a, b, c);
  };
}

console.log(partialAdd(2)(3, 4)); // 9

//10. Map, Filter, Reduce
//Map
const nums = [1, 2, 3];
const squared = nums.map((n) => n * n);
console.log(squared); // [1, 4, 9]

//Filter
const even = nums.filter((n) => n % 2 === 0);
console.log(even); // [2]

//Reduce
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 6

// 11. Avoiding Side Effects

//Functions should not modify external variables or states.

////Bad

let count = 0;
function increment() {
  count++;
}

//Good
function increment(count) {
  return count + 1;
}

// 12. Declarative vs Imperative
//Imperative

let arr1 = [1, 2, 3];
let doubled = [];
for (let i = 0; i < arr1.length; i++) {
  doubled.push(arr1[i] * 2);
}

//Declarative (preferred in FP):
const doubles = [1, 2, 3].map((n) => n * 2);

//13. Lazy Evaluation (via functions)
//Expressions are not evaluated until needed.

function lazyAdd(x, y) {
  return () => x + y;
}

const resultFn = lazyAdd(2, 3);
console.log(resultFn()); // 5

//14. Anonymous & Arrow Functions
//Anonymous
setTimeout(function () {
  console.log("Hello");
}, 1000);

setTimeout(() => console.log("Hello"), 1000);

//15. Pure Functional Utility Libraries

/*
Libraries like:
Lodash/fp
Ramda
Promote FP styles with pre-curried and immutable functions.
*/
