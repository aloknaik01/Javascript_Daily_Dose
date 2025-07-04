//Primitive Data Types
//There are 8 primitive types in modern JavaScript:

//1 Number
let price = 19.99; //decimal number
let age = 30; //integer number
let temperature = -5; //negative number
let invalid = 0 / 0; // NaN

//2 BigInt
let big = 9007199254740993n; //big integer (note the 'n' at the end)
console.log(10n === 10); // false

//3 Boolean
let isActive = true; //boolean true
let isComplete = false; //boolean false
//4 String
let name = "Alok Naik"; //double quotes
let greeting = "Hello, World!"; //single quotes
let templateLiteral = `Hello, ${name}`; //template literal

//5 undefined
let notDefined; //variable declared but not initialized
console.log(notDefined); //undefined
let x;
console.log(x); // undefined

//6 null
let emptyValue = null; //explicitly set to no value
console.log(typeof null); // "object"

//7 Symbol (ES6)
let uniqueId = Symbol("id"); //unique identifier
const id = Symbol("userId");

// Non-Primitive (Reference) Types
//1 Object

let me = {
  name: "Alok",
  age: 21,
  isActive: true,
  profession: "Software Engineer",
  hobbies: ["coding", "reading", "gaming"],
  address: {
    city: "Odisha",
    country: "India",
  },
};

console.log(me.name); // Accessing object property
console.log(me["age"]); // Accessing object property using bracket notation
console.log(me.hobbies[0]); // Accessing array inside object
console.log(me.address.city); // Accessing nested object property
console.log(me["address"]["country"]); // Accessing nested object property using bracket notation
console.log(typeof me); // "object"
console.log(typeof me.hobbies); // "object" (arrays are also objects in JS)

//2 Array
let fruits = ["apple", "banana", "cherry"]; //array of strings
let numbers = [1, 2, 3, 4, 5]; //array of numbers
let mixed = [1, "two", true, null]; //array with mixed types
console.log(fruits[0]); // Accessing first element of array
console.log(numbers.length); // Getting length of array
console.log(mixed[2]); // Accessing third element of mixed array
console.log(typeof fruits); // "object" (arrays are also objects in JS)

//3 Function
function sayMyName(name) {
  return `Hello, ${name}!`;
}
console.log(sayMyName("Alok")); // Calling function with argument
console.log(typeof sayMyName); // "function"
// Arrow function
const add = (a, b) => a + b;
console.log(add(5, 10)); // Calling arrow function with arguments
//4 Date
let currentDate = new Date(); // Creating a new Date object
console.log(currentDate); // Current date and time
console.log(currentDate.getFullYear()); // Getting current year
console.log(currentDate.getMonth() + 1); // Getting current month (0-11, so +1 for human-readable)
console.log(currentDate.getDate()); // Getting current day of the month
//5 RegExp
let regex = /hello/i; // Regular expression to match "hello" case-insensitively
console.log(regex.test("Hello World")); // true
console.log(regex.test("Goodbye")); // false
//6 Map (ES6)
let myMap = new Map();
myMap.set("name", "Alok");
myMap.set("age", 21);
console.log(myMap.get("name")); // Accessing value by key
console.log(myMap.has("age")); // Checking if key exists
console.log(myMap.size); // Getting size of the map
//7 Set (ES6)
let mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(2); // Duplicate value, will not be added
console.log(mySet.has(1)); // true
console.log(mySet.has(3)); // false
console.log(mySet.size); // 2 (only unique values are counted)

//8 WeakMap (ES6)
let weakMap = new WeakMap();
let obj1 = {};
let obj2 = {};
weakMap.set(obj1, "Object 1");
weakMap.set(obj2, "Object 2");
console.log(weakMap.get(obj1)); // "Object 1"
console.log(weakMap.has(obj2)); // true
console.log(weakMap.size); // undefined (WeakMap does not have size property)

//9 WeakSet (ES6)
const ws = new WeakSet();
let obj = {};
ws.add(obj);

//10 JSON (JavaScript Object Notation)
let jsonString = '{"name": "Alok", "age": 21}'; //
let jsonObject = JSON.parse(jsonString); // Parsing JSON string to object
console.log(jsonObject.name); // Accessing property from parsed JSON object
let jsonStringified = JSON.stringify(jsonObject); // Converting object to JSON string
console.log(jsonStringified); // '{"name":"Alok","age":21}'
