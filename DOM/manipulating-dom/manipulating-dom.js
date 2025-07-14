//Changing Content in the DOM
// //Changing content in the DOM means modifying what the user sees on the page—either plain text, HTML markup, or entire elements.

//Syntax
//element.textContent = "Hello World!";
//const text = element.textContent;

//example :-

<p id="myPara">
  Hello <strong>World</strong>!
</p>;
const para = document.getElementById("myPara");
console.log(para.textContent);
// Output: "Hello World!"

para.textContent = "New text here.";
//Use textContent when you want plain text.

//2. innerText

/*
Similar to textContent.
Takes CSS styles into account, such as display: none or visibility: hidden.
When you read it, hidden text might be ignored.
Can cause a reflow → slower performance than textContent.
*/

//Syntax
//element.innerText = "Changed!";
//const text = element.innerText;

//Example
<p id="demo" style="display: none;">
  Hello hidden world!
</p>;

console.log(document.getElementById("demo").textContent);
// Outputs: "Hello hidden world!"

console.log(document.getElementById("demo").innerText);
// Outputs: ""  (empty string because it’s hidden)

// Use innerText if you want the visible text only.

//3. innerHTML
/*
Reads or replaces everything inside an element, including HTML tags.
Converts strings into HTML elements if you set it.
*/

//Syntax
element.innerHTML = "<strong>Hello</strong>";
const html = element.innerHTML;

//Example
<div id="box">Original text.</div>;
document.getElementById("box").innerHTML = "<em>Updated!</em>";

// Use innerHTML when you need to insert HTML markup.
//Security Warning: innerHTML
//Using innerHTML is dangerous if you insert user-generated content, because it can cause Cross-Site Scripting (XSS) attacks:

//const userInput = "<img src='x' onerror='alert(1)'>";
element.innerHTML = userInput;

// Always sanitize user input if using innerHTML.

//4. outerHTML

/*
Changes the entire element, not just its contents.
The original element is replaced entirely.
*/

//Syntax
element.outerHTML = "<h2>New Element</h2>";
const html = element.outerHTML;

//Example
<div id="box">Original</div>;

const box = document.getElementById("box");
box.outerHTML = "<p>Replaced!</p>";

//Use outerHTML if you want to swap out an entire element.

//5. insertAdjacentHTML()

/*
Allows inserting HTML without wiping existing content.
Faster than concatenating innerHTML.
Works with plain strings of HTML.
*/

//Syntax
element.insertAdjacentHTML(position, html);

//Positions:

/*
"beforebegin" → Before the element
"afterbegin" → Inside, before first child
"beforeend" → Inside, after last child
"afterend" → After the element
*/

//Example
<ul id="list">
  <li>Item 1</li>
</ul>;

const list = document.getElementById("list");
list.insertAdjacentHTML("beforeend", "<li>Item 2</li>");
// Great for adding elements without losing existing DOM nodes.

//6. createTextNode()

/* 
Creates a pure text node (no HTML tags interpreted).
Often combined with appendChild().
*/

//Syntax
const textNode = document.createTextNode("Hello world!");
element.appendChild(textNode);
// Very safe for inserting plain text.
