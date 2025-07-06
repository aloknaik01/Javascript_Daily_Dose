//A function is a block of code designed to perform a particular task.
// A function is executed when "something" invokes it (calls it).

//Basic Syntax:

function functionName(name) {
  // code to execute
  console.log(name);
}

//Call a function:
functionName("Alok");

//1. Function Declaration (Function Statement)
//A function defined using the function keyword.

function sayMyName(name) {
  console.log("Hey i'm " + name);
}

sayMyName("Alok"); // Hey i'm Alok

//2. Function Expression
//A function assigned to a variable.

let invokeMe = function (name) {
  console.log("Hi, " + name);
};

invokeMe("Alok"); // Hi, Alok

// 3. Anonymous Function
//A function without a name. Usually used as a value.

// setTimeout(function() {
//     console.log("I'm Anonymous function.");
// }, 1000);

//4. Named Function Expression
//A function expression with a name.

let add = function sum(x, y) {
  return x + y;
};

console.log(add(3, 4)); // 7

//5. Arrow Functions (ES6)
let multiply = (a, b) => {
  return a * b;
};

console.log(multiply(2, 3)); // 6

//shorter
let square = (x) => x * x;
console.log(square(5)); // 25

//6. Immediately Invoked Function Expression (IIFE)
//A function that runs immediately after it’s defined.

(function () {
  console.log("I'm IIFE!");
})();

//IIFE with arrow

(() => {
  console.log("Arrow IIFE executed!");
})();

//7. Function Parameters
//a. Default Parameters
//Assign default values.

function namaskaram(name = "Alok") {
  console.log("Pranam " + name + " Sir!");
}

namaskaram(); // "Pranam Alok Sir!

//b. Rest Parameters
//Collects multiple arguments into an array.

function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3)); // 6

//c. Arguments Object
//Special object containing all arguments.

function showAllArguments() {
  console.log(arguments);
}

showAllArguments(10, 20, 30);

//8. Return Statement
//Functions can return values.

function add(a, b) {
  return a + b;
}

let result = add(4, 6);
console.log(result); // 10

/*
9. Function as First-Class Citizens
Functions can:
-> Be assigned to variables
-> Be passed as arguments
-> Be returned from other functions 
*/

function sayHello() {
  console.log("Hello!");
}

function execute(fn) {
  fn();
}

execute(sayHello); // Hello!

//10. Higher-Order Functions
//Functions that take other functions as arguments or return functions.

function greet(name) {
  return function (message) {
    console.log(`${message}, ${name}!`);
  };
}

let greetAlice = greet("Alok");
greetAlice("Kudos to, "); // Kudos to, Alok!

//11. Callback Functions
//Functions passed to other functions to run later.

function getDataFromDB(callback) {
  console.log("Fetching data...");
  callback();
}

getDataFromDB(function () {
  console.log("Data fetched!");
});

//12. Recursive Functions
//A function calling itself.

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

//13. Function Hoisting
//Function declarations are hoisted to the top.

sayHello();

function sayHello() {
  console.log("Hello!");
}

//14. Generator Functions (ES6)
//Functions that can pause execution and resume.
//Syntax: function*

function* countNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

let counter = countNumbers();

console.log(counter.next().value); // 1
console.log(counter.next().value); // 2
console.log(counter.next().value); // 3

//15. Async Functions

//a.Functions that return a Promise.

async function fetchData() {
  return "Data loaded";
}

fetchData().then((data) => console.log(data)); // Data loaded

//b.With await.
async function load() {
  let result = await Promise.resolve("Done!");
  console.log(result);
}

load(); // Done!

//16. Function Constructors
//Functions used to create objects.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let p = new Person("John", 30);
console.log(p.name); // John

//17. Methods in Objects
//Functions inside objects are called methods.

let MySelf = {
  name: "Alok",
  greet: function () {
    console.log("MySelf " + this.name + " Naik");
  },
};

user.greet(); // MySelf Alok Naik

//18. Method Shorthand
//Simpler syntax for object methods.

let workHard = {
  working() {
    console.log("Still Hungry!");
  },
};

workHard.working(); // Car started!

//19. This Keyword in Functions
//Refers to the calling object.
//In global functions, this = global object (window in browser).

function showGlobals() {
  console.log(this);
}

showGlobals();

//20. Function Bind, Call, Apply
//Used to control this.

//call
function show() {
  console.log(this.name);
}

let Me = { name: "Alok" };
show.call(Me); // Alok

//apply
//Same as call, but takes arguments as array.

function sum(a, b) {
  console.log(a + b);
}

sum.apply(null, [2, 3]); // 5

//bind
//Returns a new function with bound this.

let greet = function () {
  console.log("Hi, " + this.name);
};

let user = { name: "Alok" };

let newGreet = greet.bind(user);
newGreet(); // Hi, Alok
