//What is an Array?
//An array is a special variable that can hold multiple values in a single variable.

/*
Each value in an array is called an element.
Elements have index numbers starting from 0.
*/

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Mango

//1. Creating Arrays
//1 Using Array Literals

let colors = ["Red", "Green", "Blue"];

//2 Using new Array()
let numbers = new Array(10, 20, 30);
console.log(numbers); // [10, 20, 30]

//Avoid this unless needed, because it can be confusing:

let arr = new Array(5);
console.log(arr); //// Creates array of length 5 with empty slots

//2. Accessing Array Elements
let animals = ["Dog", "Cat", "Elephant"];

console.log(animals[0]); //Dog
console.log(animals[1]); // Elephant

//3. Modifying Array Elements

let scores = [10, 20, 30];
scores[1] = 99;

console.log(scores);
// [10, 99, 30]

//4. Array Length
let nums = [1, 2, 3, 4];
console.log(nums.length); //4

//5. Looping Through Arrays
//1 for Loop
let arr1 = ["A", "B", "c"];

for (let i = 0; i <= arr1.length; i++) {
  console.log(arr1[i]);
}

//Output
//A
//B
//C

//2 for...of Loop
//Loops directly over elements.

for (let ar of arr1) {
  console.log(ar);
}

//Output
//A
//B
//C

//3 forEach()
arr1.forEach((index) => {
  console.log(index);
});

//Output
//A
//B
//C

//6. Adding Elements to Arrays
//1.push();
//Adds to end.

let cities = ["Delhi", "Mumbai"];
cities.push("Pune");

console.log(cities);
//["Delhi", "Mumbai", "Pune"]

//2 unshift()
//Adds to start.

cities.unshift("Chennai");
console.log(cities);
// ["Chennai", "Delhi", "Mumbai", "Pune"]

//7. Removing Elements from Arrays
//1 pop()
//Removes from end.

cities.pop();
console.log(cities);
// ["Chennai", "Delhi", "Mumbai"]

//.2 shift()
//Removes from start.

cities.shift();
console.log(cities);
// ["Delhi", "Mumbai"]

//8. splice()
//Adds/removes elements anywhere.

//Syntax:
//array.splice(startIndex, deleteCount, item1, item2, ...);

let items = ["a", "b", "c", "d"];
items.splice(1, 2, "x", "y");

console.log(items);
// ["a", "x", "y", "d"]

//9. slice()
//Returns new array with selected elements.
let letters = ["a", "b", "c", "d"];
let part = letters.slice(1, 3);

console.log(part); // ["b", "c"]
// Original array is not changed.

//10. indexOf()
//Finds first index of an element.

let nums1 = [10, 20, 30, 10];
console.log(nums1.indexOf(10)); // 0
//If not found → returns -1.

//11. lastIndexOf()
//Finds last occurrence.
console.log(nums.lastIndexOf(10)); // 3

//12. includes()
//Checks if value exists.

let found = nums.includes(20);
console.log(found); // true

//13. join()
//Creates a string from array.

let words = ["Hi", "there"];
console.log(words.join(" "));
// Output: Hi there

//14. reverse()
//Reverses array in place.

let nums3 = [1, 2, 3];
nums.reverse();

console.log(nums3); // [3, 2, 1]

//15. sort()
//Sorts elements as strings.
let fruits1 = ["Banana", "Apple", "Mango"];
fruits.sort();

console.log(fruits1); // ["Apple", "Banana", "Mango"]

// For numbers, provide a compare function:
let nums4 = [40, 10, 100, 30];
nums.sort((a, b) => a - b);

console.log(nums4); // [10, 30, 40, 100]

//16. concat()
//Joins arrays.
let a = [1, 2];
let b = [3, 4];

let result = a.concat(b);
console.log(result); // [1, 2, 3, 4]

//17. map()
//Creates new array by transforming each element.

let numbers1 = [1, 2, 3];
let squares = numbers1.map((n) => n * n);

console.log(squares); // [1, 4, 9]

//18. filter()
//Returns elements that pass a test.

let numbers3 = [5, 10, 15];
let filtered = numbers3.filter((n) => n > 7);

console.log(filtered); // [10, 15]

//19. reduce()
//Reduces array to a single value.
let sum = [1, 2, 3, 4].reduce((acc, num) => acc + num, 0);
console.log(sum); // 10

//20. find()
//Returns first element matching condition.

let ar = [10, 20, 30];
let foundData = arr.find((n) => n > 15);

console.log(foundData); // 20

//21. findIndex()
//Returns index of first matching element.

let index = arr.findIndex((n) => n > 15);
console.log(index); // 1

//22. every()
//Checks if all elements pass test.

let res = [2, 4, 6].every((n) => n % 2 === 0);
console.log(res); // true

//23. some()
//Checks if any element passes test.

let res1 = [2, 3, 6].some((n) => n % 2 !== 0);
console.log(res1); // true

//24. flat()
//Flattens nested arrays.
//let nested = [1, [2, [3, 4]]];

let flatArr = nested.flat(2);
console.log(flatArr); // [1, 2, 3, 4]

//25. flatMap()
//Combines mapping + flattening.

//let nums = [1, 2];
let r = nums.flatMap((n) => [n, n * 2]);

console.log(r); // [1, 2, 2, 4]

//26. Array.isArray()
//Checks if variable is an array.

let arrs = [1, 2, 3];
console.log(Array.isArray(arrs)); // true

//27. Spread Operator with Arrays
//Copies or merges arrays.

let arrs1 = [1, 2];
let arr2 = [...arrs1, 3, 4];

console.log(arr2); // [1, 2, 3, 4]

//28. Destructuring Arrays (ES6)
//Extracts values into variables.

let [first, second] = ["A", "B", "C"];

console.log(first); // A
console.log(second); // B

//29. Multidimensional Arrays
//Arrays inside arrays.

let matrix = [
  [1, 2],
  [3, 4],
];

console.log(matrix[1][0]); // 3

//30. Empty Slots in Arrays
//Arrays can have empty slots if created with length.

let ars = new Array(3);
console.log(ars); // [ <3 empty items> ]
