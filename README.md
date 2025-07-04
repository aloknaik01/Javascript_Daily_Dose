# 🎯 JavaScript Identifier and Variables —

![JavaScript Logo](https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png)

> **JavaScript Identifier Variables — Learn with me!**

# `✨ Naming Rules (Identifiers)`

### Variable names:

- Can include letters, numbers, \_ or $

- Cannot start with a number

- Are case-sensitive (Name ≠ name)

- Cannot be JS reserved words (e.g. let, class)

#### `✅ Valid:`

```js
let name;
let user_name;
let $price;
let _id;
let user2;
```

#### `❌ Invalid:`

```js
let 2user;
let var;
```

## `Best Practices`

✅ Prefer const → Signals “I won’t change this variable.”

✅ Use let only when you plan to reassign.

✅ Avoid var.

✅ Name variables meaningfully:

#### `Good:`

```js
let totalPrice;
```

#### `Bad:`

```js
let x;
```

✅ Keep variables as close as possible to where they’re used.

#### `Examples :`

```js
// Using const
const pi = 3.14;

// Using let
let counter = 0;
counter += 1;

// Working with objects
const user = {
  name: "Alice",
  age: 30,
};

user.age = 31; // allowed, value changed
// user = {} ❌ NOT allowed (rebinding the variable)
```

### `🔑 Key Takeaways`

- Prefer const → safer, prevents bugs.

- Use let for changing values.

- Don’t use var unless maintaining old code.

- Understand scopes (block vs function).

- Hoisting affects how you write code.

- Know primitives vs references.

### `⭐ Key Takeaway`

- Think of variables like boxes to store facts about your world (shop name, prices, items).

- Use let for things that change.

- Use const for things that don’t change (or whose reference won’t change).

# `✨ Variables in JavaScript`

## What is a Variable?

### Technical Definition

> A variable is a named storage location in memory where you can keep data and use it later in your program.

Think of it like a box with a label. You put data inside the box and retrieve it whenever you want.

## Declaring Variables

“Declaring” means telling JS you want a new box. You use:

- `var` → Old, avoid this
- `let` → Modern, preferred for values that change
- `const` → Modern, preferred for values that don’t change

## `1.var`

Old way of declaring variables (before 2015).

```js
var name = "Alok";
console.log(name);
```

- Can be redeclared in the same scope.
- Function-scoped (explained below)
- Hoisted (explained below)

→ Best practice: Don’t use var in modern code.

## `2. let`

Introduced in ES6 (2015). Use this when the value might change.

```js
let age = 21;
age = 22;
console.log(age);
```

→ Cannot be redeclared in the same scope

- Block-scoped
- Hoisted (but not initialized)

## `3. const`

Also introduced in ES6. Use when the variable’s value should not change.

- const country = "India";
- console.log(country);
- Cannot be redeclared
- Cannot be reassigned

## `Block-scoped`

⚠️ Important:

- const does not mean the value inside objects or arrays is immutable.

- Only the variable binding cannot change.

### `Example:`

```js
const user = { name: "Alok" };
user.name = "dev alok"; // allowed!
console.log(user.name); // dev alok
```

→ You can change the contents of objects/arrays declared with const.

### `Scoping: Block vs Function Scope`

Block Scope

- A block is code inside { }

- let and const → block-scoped

```js
{
  let a = 10;
  console.log(a); // ❌ Error: a is not defined
  Function Scope
}
```

## `var → function-scoped`

```js
Example: function test() {
  var x = 5;
}
console.log(x); // ❌ Error: x is not defined
```

## `Hoisting`

- Hoisting = JS “moves declarations to the top.”
- var is hoisted:

```js
console.log(a); // undefined
var a = 10;
JS reads it as:
```

```js
var a;
console.log(a); // undefined
a = 10;
let and const are hoisted but stay uninitialized.
```

```js
console.log(b); // ❌ ReferenceError
let b = 20;
```

→ This gap before they’re usable is called the Temporal Dead Zone (TDZ).

## `✅ Data Types in JavaScript — All Concepts Covered

### `1. What Are Data Types?`

A data type defines:

- The kind of data a value holds.

JavaScript is **dynamically typed**:

- Variables do not have fixed types; values have types.
- The type of a variable can change at runtime.

---

### `2. Categories of Data Types`

JavaScript splits types into:

- **Primitive Data Types**
- **Non-Primitive (Object) Data Types**

---

#### `🔷 Primitive Data Types`

These are immutable basic values, not objects.

→A primitive is not an object and has no methods. Operations on primitives return new values instead of modifying the value.

→There are **8 primitive types** in modern JavaScript:

| Type      | Example             |
| --------- | ------------------- |
| Number    | `42`, `3.14`        |
| BigInt    | `9007199254740991n` |
| String    | `"Alok"`            |
| Boolean   | `true`, `false`     |
| undefined | `undefined`         |
| null      | `null`              |
| Symbol    | `Symbol("id")`      |

Let’s see each one in technical detail.

---

##### `1. Number`

All numeric values (integers & floats) share the Number type.

- Stored as double-precision 64-bit floating-point (IEEE 754).
- Special numeric values: `Infinity`, `-Infinity`, `NaN` (Not-a-Number)

```js
let price = 19.99; //decimal number
let age = 30; //integer number
let temperature = -5; //negative number
let invalid = 0 / 0; // NaN
```

---

##### `2. BigInt`

Introduced in ES2020. For integers beyond `Number.MAX_SAFE_INTEGER`.

- Created by appending `n`:

```js
let big = 9007199254740993n; //big integer (note the 'n' at the end)
console.log(10n === 10); // false;
```

BigInt ≠ Number:

```js
console.log(10n === 10); // false
```

---

##### `3. String`

Immutable sequence of UTF-16 code units.

Can be:

```js
let name = "Alok Naik"; //double quotes
let greeting = "Hello, World!"; //single quotes
let templateLiteral = `Hello, ${name}`; //template literal
```

---

##### `4. Boolean`

Represents logical true or false.

```js
let isActive = true; //boolean true
let isComplete = false; //boolean false
```

---

##### `5. undefined`

The absence of a value.

Default value for:

- variables declared but not initialized
- missing function parameters

```js
let notDefined; //variable declared but not initialized
console.log(notDefined); //undefined
let x;
console.log(x); // undefined
```

---

##### `6. null`

Explicit assignment meaning no value.

Technically an object (historical bug):

```js
let emptyValue = null; //explicitly set to no value
console.log(typeof null); // "object"
```

---

##### `7. Symbol`

Introduced in ES6. Unique and immutable value, often used as object property keys. Not enumerable.

```js
let uniqueId = Symbol("id"); //unique identifier
const id = Symbol("userId");
```

---

##### `8. undefined vs null`

| undefined          | null              |
| ------------------ | ----------------- |
| default unassigned | intentional empty |
| type: undefined    | type: object      |

---

#### `🔶 Non-Primitive (Reference) Types`

Non-primitives are objects, stored and manipulated by reference.

Examples:

- Object
- Array
- Function
- Date
- RegExp
- Map
- Set
- WeakMap
- WeakSet
- Error
- and more

---

##### `1. Object`

Collection of key-value pairs. Keys are strings (or Symbols). Values can be any data type.

```js
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
```

```js
console.log(me.name); // Accessing object property
console.log(me["age"]); // Accessing object property using bracket notation
console.log(me.hobbies[0]); // Accessing array inside object
console.log(me.address.city); // Accessing nested object property
console.log(me["address"]["country"]); // Accessing nested object property using bracket notation
console.log(typeof me); // "object"
console.log(typeof me.hobbies); // "object" (arrays are also objects in JS)
```

---

##### `2. Array`

Specialized object for ordered collections. Zero-based indices. Dynamic size.

```js
let fruits = ["apple", "banana", "cherry"]; //array of strings
let numbers = [1, 2, 3, 4, 5]; //array of numbers
let mixed = [1, "two", true, null]; //array with mixed types
console.log(fruits[0]); // Accessing first element of array
console.log(numbers.length); // Getting length of array
console.log(mixed[2]); // Accessing third element of mixed array
console.log(typeof fruits); // "object" (arrays are also objects in JS)
```

---

##### `3. Function`

A first-class object. Can be assigned to variables, passed as arguments, or returned.

```js
function sayMyName(name) {
  return `Hello, ${name}!`;
}
console.log(sayMyName("Alok")); // Calling function with argument
console.log(typeof sayMyName); // "function"
```

##### `Arrow function`

```js
// Arrow function
const add = (a, b) => a + b;
console.log(add(5, 10)); // Calling arrow function with arguments
```

---

##### `4. Date`

Object for working with dates and times.

```js
let currentDate = new Date(); // Creating a new Date object
console.log(currentDate); // Current date and time
console.log(currentDate.getFullYear()); // Getting current year
console.log(currentDate.getMonth() + 1); // Getting current month (0-11, so +1 for human-readable)
console.log(currentDate.getDate()); // Getting current day of the month
```

---

##### `5. RegExp`

For pattern matching and text processing.

```js
let regex = /hello/i; // Regular expression to match "hello" case-insensitively
console.log(regex.test("Hello World")); // true
console.log(regex.test("Goodbye")); // false
```

---

##### `6. Map`

Key-value pairs. Keys can be any value type.

```js
let myMap = new Map();
myMap.set("name", "Alok");
myMap.set("age", 21);
console.log(myMap.get("name")); // Accessing value by key
console.log(myMap.has("age")); // Checking if key exists
console.log(myMap.size); // Getting size of the map
```

---

##### `7. Set (ES6)`

Stores unique values.

```js
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // Duplicate value, will not be added
console.log(mySet.has(1)); // true
console.log(mySet.has(3)); // false
console.log(mySet.size); // 2 (only unique values are counted)
```

---

##### `8. WeakMap`

Holds key-value pairs.

- Keys must be objects (not primitives).
- Keys are weakly referenced → garbage-collected if no other refs exist.
- Not iterable, no size property.
- Methods: `set()`, `get()`, `has()`, `delete()`

**Example:**

```js
let weakMap = new WeakMap();
let obj1 = {};
let obj2 = {};
weakMap.set(obj1, "Object 1");
weakMap.set(obj2, "Object 2");
console.log(weakMap.get(obj1)); // "Object 1"
console.log(weakMap.has(obj2)); // true
console.log(weakMap.size); // undefined (WeakMap does not have size property)
```

---

##### `9. WeakSet (in short)`

- Stores objects only (no primitives).
- Objects held weakly.
- No size property, not iterable.
- Methods: `add()`, `has()`, `delete()`

**Example:**

```js
const ws = new WeakSet();
let obj = {};
ws.add(obj);
```

---

##### `10. JSON (in short)`

- Data exchange format (text).
- Converts between JS objects ↔ JSON strings.
- Two main methods:
  - `JSON.stringify()` → object → JSON string
  - `JSON.parse()` → JSON string → object

**Example:**

```js
let jsonString = '{"name": "Alok", "age": 21}'; //
let jsonObject = JSON.parse(jsonString); // Parsing JSON string to object
console.log(jsonObject.name); // Accessing property from parsed JSON object
let jsonStringified = JSON.stringify(jsonObject); // Converting object to JSON string
console.log(jsonStringified); // '{"name":"Alok","age":21}'
```

---
