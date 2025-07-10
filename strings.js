//What is a String?
//What is a String?

let name = "Alok";
console.log(name); // Alok

//1. Creating Strings
//1 Using Literals

let msg = "Welcome";

//2 Using String Constructor
//Not recommended unless you need an object.
let str = new String("Hello");
console.log(typeof str); // object
// /Usually avoid new String() because it creates an object, not a primitive.

//2. String Length
//Gives number of characters.
let word = "JavaScript";
console.log(word.length); // 10

//3. Accessing Characters

//1 Bracket Notation

let text = "Hello";
console.log(text[1]); // e

//2 charAt()
console.log(text.charAt(1)); // e
