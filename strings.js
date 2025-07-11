//What is a String?
//A string is a sequence of characters (letters, digits, symbols).
//Strings can be written with:

/*
Single quotes → 'Hello'
Double quotes → "Hello"
Backticks → `Hello` (template literals).
*/

let name = "Alok";
console.log(name); // Alok
let name1 = "Alok";
console.log(name1); //Alok
let name2 = `Alok`;
console.log(name2); //Alok

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

/*
text[100] → returns undefined.
text.charAt(100) → returns empty string.
*/

//4. Changing Case
//1 toUpperCase()

let a = "hello";
console.log(a.toUpperCase()); // HELLO

//2 toLowerCase()
let b = "WORLD";
console.log(b.toLowerCase()); // world

//5. trim()
//Removes spaces from both ends.

let str1 = "   Alok Bhai   ";
console.log(str1.trim()); // "Alok Bhai"

//trimStart() / trimEnd()

console.log(str.trimStart()); // "Alok Bhai   "
console.log(str.trimEnd()); // "   Alok Bhai"

//6. indexOf()
//Finds first occurrence.

let s = "Banana";
console.log(s.indexOf("a")); // 1

//Returns -1 if not found.

//7. lastIndexOf()
//Finds last occurrence.

console.log(s.lastIndexOf("a")); // 5

//8. includes()
//Checks if string contains substring.

let title = "JavaScript";

console.log(title.includes("Script")); // true
console.log(title.includes("script")); // false

//✅ Case-sensitive!

//9. startsWith()
console.log(title.startsWith("Java")); // true

//10. endsWith()
console.log(title.endsWith("Script")); // true

//11. slice()
//Extracts part of string.

let text2 = "Programming";

console.log(text2.slice(0, 5)); // Progr
console.log(text2.slice(-3)); // ing

//12. substring()
//Similar to slice, but:
//Can’t use negative indexes.

console.log(text.substring(0, 5)); // Progr

//13. substr() (Deprecated)
//Older method, avoid in new code.

console.log(text.substr(0, 5)); // Progr

//14. replace()
//Replaces first occurrence.

let str2 = "Hello World";
let result = str2.replace("World", "JS");

console.log(result); // Hello JS
//✅ Case-sensitive.

//replaceAll()
//Replaces all matches.

let data = "apple apple";
console.log(data.replaceAll("apple", "orange"));
// orange orange

//15. split()
//Converts string → array.

let sentence = "I love coding";

let words = sentence.split(" ");
console.log(words); // ["I", "love", "coding"]

//16. concat()
//Joins strings.

let x = "Hello ";
let y = "World";

let result1 = x.concat(y);
console.log(result1); // Hello World

//✅ But using + is more common.
console.log(a + b);

//17. repeat()
//Repeats string.

let sound = "Ha!";
console.log(sound.repeat(3)); // Ha!Ha!Ha!

//18. padStart() and padEnd()
//Pads string to desired length.

let num = "5";

console.log(num.padStart(3, "0")); // "005"
console.log(num.padEnd(3, "*")); // "5**"

//19. Template Literals (Backticks)
//Allow multi-line strings
//Allow variable interpolation

let name3 = "Alok";
let msg3 = `Hello, ${name3}!`;

console.log(msg3); // Hello, Alok!

//Multi-line String
let text5 = `This is
a multi-line
string.`;

console.log(text5);

//20. charCodeAt()
//Gives Unicode of character.

let stri = "ABC";

console.log(stri.charCodeAt(0)); // 65

//21. fromCharCode()
//Creates string from Unicode values.

let letters = String.fromCharCode(65, 66, 67);
console.log(letters); // ABC

//22. localeCompare()
//Compares strings alphabetically.

let results = "apple".localeCompare("banana");

console.log(results); // -1 (because "apple" < "banana")

//23. match()
//Searches using regex.

let text3 = "The rain in Spain";

let found = text3.match(/ain/g);
console.log(found); // ["ain", "ain"]

//24. search()
//Finds position of regex match.

console.log(txt.search(/rain/)); // 4

//25. valueOf()
//Returns primitive string value.

let str4 = new String("JS");
console.log(str4.valueOf()); // "JS"

//26. toString()
//Converts value to string.

let num1 = 100;
console.log(num1.toString()); // "100"

//27. String Immutability
//Strings cannot be changed. When you “change” them, you’re creating a new string.

let str5 = "Hi";
str[0] = "h";

console.log(str5); // still "Hi"

//28. Raw Strings
//Used with tagged templates.

console.log(String.raw`Line1\nLine2`);
// Output: Line1\nLine2

//29. Escaping Characters
//Special characters inside strings:

/*
\n → new line

\t → tab

\' → single quote

\" → double quote

\\ → backslash
*/

let str = "Hello\nWorld";
console.log(str);

//output
//Hello
//World
