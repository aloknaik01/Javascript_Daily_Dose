//Operators in JavaScript

//1. Arithmetic Operators
//Used to perform mathematical calculations.

let a = 10;
let b = 3;

console.log(a + b); // 13 -> Addition
console.log(a - b); // 7 -> Substraction
console.log(a * b); // 30 -> Multilplication
console.log(a / b); // 3.333333... // Division
console.log(a % b); // 1 // Modulus (Remainder)
console.log(a ** b); // 100 // Exponentiation (a raised to the power of b)

/*Increment/Decrement can be prefix or postfix.
++x increases first, then returns the value.
x++ returns the value, then increases.
*/

// Increment
let x = 5;
console.log(x++); // prints 5, then x becomes 6
console.log(x); // prints 6

// Decrement
let y = 8;
console.log(--y); // decrements first, prints 7

//2. Assignment Operators
//Used to assign values to variables.

let n = 20; // n = 20 Assignment
n += 5; // n = 25
n -= 2; // n = 23
n *= 2; // n = 46
n /= 2; // n = 23
n %= 5; // n = 3
n **= 3; // n = 27

console.log(n);

// Logical assignment operators
let val1 = null;
val1 ??= "default";
console.log(val1); // "default"

let val2 = false;
val2 ||= "new value";
console.log(val2); // "new value"

let val3 = "keep";
val3 &&= "updated";
console.log(val3); // "updated"

//3. Comparison Operators
//Used to compare values. Result is true or false.

let p = 5;
let q = "5";

console.log(p == q); // true
console.log(p === q); // false
console.log(p != q); // false
console.log(p !== q); // true
console.log(p > 3); // true
console.log(p < 10); // true
console.log(p >= 5); // true
console.log(p <= 4); // false

//4. Logical Operators
//Used with boolean values.
let age = 20;

if (age > 18 && age < 60) {
  console.log("You are an adult.");
}

if (age < 18 || age > 65) {
  console.log("Special age group.");
}

let isLoggedIn = false;
console.log(!isLoggedIn); // true

// && returns first falsy value or last value.
// || returns first truthy value or last value.

//5. Bitwise Operators
let m = 5; // 0101
let n2 = 3; // 0011

console.log(m & n2); // 1 (0001)
console.log(m | n2); // 7 (0111)
console.log(m ^ n2); // 6 (0110)
console.log(~m); // -6

console.log(m << 1); // 10
console.log(m >> 1); // 2
console.log(-5 >>> 1); // large positive value
//Bitwise NOT ~x flips all bits, equivalent to -(x+1).

//6. Ternary Operator
let d = 18;
let message = d >= 18 ? "Adult" : "Minor";
console.log(message); // Adult

//7. Type Operators
//typeof
//Returns the data type of a value.

console.log(typeof "hello"); // string
console.log(typeof 10); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object (historical bug)
console.log(typeof {}); // object
console.log(typeof []); // object

// instanceof
//Checks if an object belongs to a certain class.

function Car(model) {
  this.model = model;
}

let myCar = new Car("Toyota");
console.log(myCar instanceof Car); // true

let arr = [];
console.log(arr instanceof Array); // true

//8. String Operators
//The + operator joins strings.

let firstName = "ALok";
let lastName = "Naik";
let fullName = firstName + " " + lastName;

console.log(fullName); // Alok Naik

//9. Comma Operator
//Allows multiple expressions in one statement. Returns the last value.

//10. Spread Operator ...
//Expands iterable elements.
let nums = [1, 2, 3];
let newNums = [...nums, 4, 5];
console.log(newNums); // [1, 2, 3, 4, 5]

let obj1 = { a: 10, b: 20 };
let obj2 = { ...obj1, c: 30 };
console.log(obj2); // { a: 10, b: 20, c: 30 }

//11. Rest Operator ...
//Collects remaining elements into an array.

function sumAll(...args) {
  let total = 0;
  for (let num of args) {
    total += num;
  }
  return total;
}

console.log(sumAll(5, 10, 15)); // 30

//12. Optional Chaining ?.
//Safely access nested properties.

let user = {
  name: "Alok",
  address: {
    city: "Bhubaneswar",
  },
};

console.log(user?.name); // Alok
console.log(user.address?.city); // Bhubaneswar
console.log(user.profile?.email); // undefined

//13. Nullish Coalescing Operator ??
//Returns right side if left is null or undefined

let name = null;
let output = name ?? "Guest";
console.log(output); // Guest

let val = 0;
console.log(val ?? 100); // 0

//14. Delete Operator
//Removes a property from an object.

let person = { name: "Alok", age: 21 };
delete person.age;
console.log(person); // { name: "Alok" }

let obj = { name: "ALok" };
delete obj.name;
console.log(obj); // {}

/*
15. In Operator
Checks if a property exists in an object or array.
*/

let car = { brand: "Honda" };

console.log("brand" in car); // true
console.log("model" in car); // false

//16. New Operator
//Creates a new object instance.

function Student(name, grade) {
  this.name = name;
  this.grade = grade;
}

let stu = new Student("Alok", "A");
console.log(stu.name); // Alok

function Person(name) {
  this.name = name;
}
let pn = new Person("Alok");
console.log(pn.name); // Alok

//17. Void Operator
//Evaluates an expression and returns undefined.
console.log(void 0); // undefined
let result = void (10 + 20);
console.log(result); // undefined

/*18. typeof vs instanceof vs constructor
typeof → primitive types (number, string, boolean, etc.)
instanceof → checks object prototype chain
.constructor → tells you which function created the object
*/

let arr1 = [];

console.log(typeof arr1); // object
console.log(arr1 instanceof Array); // true
console.log(arr1.constructor); // [Function: Array]
console.log(arr1.constructor.name); // Array
console.log(arr1.constructor === Array); // true
console.log(arr1.constructor === Object); // false
