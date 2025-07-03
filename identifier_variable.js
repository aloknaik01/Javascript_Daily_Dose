//Naming Rules (Identifiers)

/*Variable names:

Can include letters, numbers, _ or $

Cannot start with a number

 case-sensitive (Name ≠ name)

Cannot be JS reserved words (e.g. let, class)
*/

//  Valid:

let names;
let user_name;
let $price;
let _id;
let user2;

// Invalid:

let 2user;
let var;

/*
 variable is a named storage location in memory where you can keep data and use it later in your program.
Think of it like a box with a label. You put data inside the box and retrieve/use it whenever you want by using its label.

//Declaring Variables.

/*
“Declaring” means telling JS you want a new box. You use:
var 
let 
const 
*/

var name = "Alok";
console.log(name);

let age = 21;
console.log(age);

const country = "India";
console.log(country);

//Block Scope

/*
A block is code inside { }
let and const → block-scoped.
*/

{
  let a = 10;
  const b = 20;
}

console.log(a); // it shows Error: a is not defined.
console.log(b); // it shows Error: b is not defined.

//var → function-scoped

function test() {
  var x = 5;
}
console.log(x); // it shows  Error: x is not defined.

// Hoisting
//Hoisting = JS “moves declarations to the top.”

//var is hoisted:
console.log(a); // undefined
var a = 10;

//JS reads it as:
var a;
console.log(a); // undefined
a = 10;

//let and const are hoisted but stay uninitialized.
console.log(b); // ❌ ReferenceError
let b = 20;


//Best Practices
// Using const
const pi = 3.14;

// Using let
let counter = 0;
counter +=1;

// Working with objects
const user = {
  name: "Alok",
  age: 21
};

user.age = 31; // allowed, value changed
// user = {}  -> NOT allowed (rebinding the variable)