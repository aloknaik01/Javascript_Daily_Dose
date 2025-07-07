//A. Conditional Statements
//Used for decision-making.

//1. if Statement
//Runs code only if a condition is true.

let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
}
// Output: You are an adult.

//2. if...else Statement

let number = 7;

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
// Output: Odd

//3. if...else if...else Statement
let marks = 65;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}
// Output: Grade C

//4. Nested if Statement
let age = 22;
let hasID = true;

if (age >= 18) {
  if (hasID) {
    console.log("Allowed to vote.");
  } else {
    console.log("ID required.");
  }
}
// Output: Allowed to vote.

//5. Ternary Operator

let score = 80;

let result = score >= 50 ? "Pass" : "Fail";
console.log(result); // Pass

//6. switch Statement
let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Another day");
}
// Output: Tuesday

//B. Looping Statements
//Used for repeating a block of code.
//1. for Loop
for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}
// Output: 1 2 3 4 5

//2. while Loop
let i = 1;

while (i <= 3) {
  console.log("While: " + i);
  i++;
}
// Output: 1 2 3

//3. do...while Loop
let j = 5;

do {
  console.log("Do While: " + j);
  j++;
} while (j <= 7);
// Output: 5 6 7

//4. for...in Loop
let me = { name: "Alok", age: 21 };
for (let m in persmeon) {
  console.log(m + ": " + me[m]);
}

// Output: name: Alok, age: 21

//5. for...of Loop
let fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}
// Output: Apple, Banana, Cherry

//6. forEach Method
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (num) {
  console.log("Number: " + num);
});
// Output: Number: 1, Number: 2, Number: 3, Number: 4, Number: 5

//7. Nested Loops
for (let i = 1; i <= 2; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i = ${i}, j = ${j}`);
  }
}
/*
Output:
i = 1, j = 1
i = 1, j = 2
i = 1, j = 3
i = 2, j = 1
i = 2, j = 2
i = 2, j = 3
*/

//8. break Statement
for (let i = 1; i <= 5; i++) {
  if (i === 4) {
    break;
  }
  console.log(i);
}
// Output: 1 2 3

//9. continue Statement
for (let i = 1; i <= 5; i++) {
  if (i === 4) {
    break;
  }
  console.log(i);
}
// Output: 1 2 3

//10. labeled break Statement
outerLoop: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i === 2 && j === 2) {
      break outerLoop;
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}
// Output:
// i = 1, j = 1
// i = 1, j = 2
// i = 1, j = 3
// i = 2, j = 1
// i = 2, j = 2
// i = 2, j = 3
// i = 3, j = 1
// i = 3, j = 2
// i = 3, j = 3

//11. try...catch Statement
try {
  let result = 10 / 0;
  console.log(result);
  throw new Error("Custom error!");
} catch (err) {
  console.log("Caught: " + err.message);
}
// Output:
// Infinity
// Caught: Custom error!

//12. try...catch...finally
try {
  console.log("Trying...");
} catch (e) {
  console.log("Error caught");
} finally {
  console.log("This always runs");
}
// Output:
// Trying...
// This always runs

//13. throw Statement
function checkAge(age) {
  if (age < 18) {
    throw new Error("Age must be 18 or older.");
  }
  return "Age is valid.";
}

checkAge(17); // Throws an error: "Age must be 18 or older."

//14. Logical Operators in Control Flow

let isSir = true;
let isLoggedIn = false;

if (isSir && isLoggedIn) {
  console.log("Welcome, Sir");
} else {
  console.log("Chala ja");
}
// Output: Chala ja

//15. Labelled Loops with break
outerLoop: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) {
      break outerLoop;
    }
    console.log(`i=${i}, j=${j}`);
  }
}
// Output: i=1, j=1

//16. Optional Chaining in Conditions
let user = {
  name: "Rahul",
  address: null,
};

if (user.address?.city) {
  console.log("City exists");
} else {
  console.log("City not found");
}
// Output: City not found

//17. Nullish Coalescing in Control
let name = null;

let finalName = name ?? "Guest";
console.log(finalName); // Guest

//18. Short-Circuit Evaluation
let a = 0;
let b = 10;

let results = a || b;
console.log(results); // 10

let result2 = b && a;
console.log(result2); // 0
