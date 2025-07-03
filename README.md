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
