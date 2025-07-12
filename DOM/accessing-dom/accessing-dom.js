// What is the DOM?
// DOM → Document Object Model

//1. Accessing the DOM

//1. document Object — The Gateway to DOM / document
//The entry point into the DOM.
//document is a global object that represents the entire HTML page.
console.log(document);
//It contains everything: <html>, <head>, <body>, elements, text, etc.
console.log(document);
console.log(document.title);

//How do you change the page title?
document.title = "New Title";
console.log(document.title);
// Title changes to New Title

//2. DOM Tree Structure
//The DOM is a tree of nodes:
//Root → document
//Children → HTML, HEAD, BODY
//Nodes → Elements, Text, Comments
//Every HTML tag becomes a node in this tree.

//3. DOM Node Types
let node = document.body;
console.log(node.nodeType); // 1

//4. DOM Node Properties
//1 nodeName
//Returns the tag name (or type of node).

let node1 = document.body;
console.log(node1.nodeName); // "BODY"

//2 nodeType
console.log(document.nodeType); // 9

//3 nodeValue
//Returns the text content of a text or comment node.
//For element nodes → returns null

let textNode = document.createTextNode("Hello");
console.log(textNode.nodeValue); // "Hello"

//5. DOM Tree Navigation
//1 document.documentElement
//Represents the <html> element.
console.log(document.documentElement); // <html>...</html>

//2 document.body and document.head
console.log(document.body); // <body>...</body>
console.log(document.head); // <head>...</head>

//3 parentNode
let p = document.querySelector("p");
console.log(p.parentNode); // returns its parent element

//4 childNodes
//Returns all child nodes (elements, text, comments).
console.log(document.body.childNodes);

//5 children
//Returns only element nodes (no text/comments).
console.log(document.body.children);

//6 firstChild and firstElementChild
console.log(document.body.firstChild); // can be a text node
console.log(document.body.firstElementChild); // always element

//.7 lastChild and lastElementChild
//Same as above, but for the last child.

//8 nextSibling and nextElementSibling
let para = document.querySelector("p");
console.log(para.nextSibling); // might be text
console.log(para.nextElementSibling); // next element

//9 previousSibling and previousElementSibling

// 6. DOMContentLoaded vs load
//These events help control when DOM is accessible:

//DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM ready!");
});

//Use this to safely access elements in the DOM.

//load
//Fires after all resources (images, scripts, etc.) are loaded.
window.addEventListener("load", () => {
  console.log("Page fully loaded");
});

//7. document.readyState
//Tells current loading status of the document.
console.log(document.readyState);

//8. document.title, URL, and More
//You can access document-level metadata:

console.log(document.title); // "Page Title"
console.log(document.URL); // full URL
console.log(document.domain); // domain
console.log(document.lastModified); // last modified

//9. document.all (Deprecated)
//Old way of accessing everything.
console.log(document.all); // HTMLAllCollection
// Don’t use it anymore — legacy only.

//Coding Practice: Accessing and Navigating the DOM.

// Q1. What will the following code output?
console.log(document.nodeType);

// 9 => Reason: The document is a DOCUMENT_NODE with type 9.

//Q2. Write code to get the <html>, <head>, and <body> nodes from the document.

console.log(document.documentElement); // <html>
console.log(document.head); // <head>
console.log(document.body); // <body>

//Q3. Log the node type and node name of the <title> tag.
let title = document.head.querySelector("title");
console.log(title.nodeType); // 1 (ELEMENT_NODE)
console.log(title.nodeName); // "TITLE"

//Q4. Log all the children of <body> as elements only (ignore text nodes).
console.log(document.body.children); // HTMLCollection

//Q5. Log the first and last element inside <body>.
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);

//Q6. Log the text content of the first child of <body> using firstChild.

console.log(document.body.firstChild.nodeValue); // might be "\n" or text

//Q7. Use DOMContentLoaded to safely log "DOM Ready!" only after all DOM nodes are parsed.

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Ready!");
});

// Q8. Write code to check if the DOM is already loaded (without using an event).

if (
  document.readyState === "complete" ||
  document.readyState === "interactive"
) {
  console.log("DOM already loaded");
}

// Q9. Log the current page title and URL.
console.log(document.title);
console.log(document.URL);

//Q10. Check if a DOM node is an element node using nodeType.
let node2 = document.body.firstChild;
if (node2.nodeType === 1) {
  console.log("It's an element node");
}

// Q11. Create a text node and log its nodeValue.
let textNode1 = document.createTextNode("Hello DOM!");
console.log(textNode1.nodeValue); // "Hello DOM!"

//Q12. Access the parent node of the first paragraph <p> on the page.
let p1 = document.querySelector("p");
console.log(p1.parentNode);

//Q13. Access the next and previous element siblings of a <li>.
let li = document.querySelector("li");
console.log(li.nextElementSibling);
console.log(li.previousElementSibling);

// Q14. Check if an element has child nodes.
let box = document.getElementById("box");
console.log(box?.hasChildNodes());

// Q15. Log the last modified time of the HTML document.
console.log(document.lastModified);

// Q16. Write a function that logs all node names (including text nodes) under <body>.

function logAllNodes() {
  let nodes = document.body.childNodes;
  nodes.forEach((n) => console.log(n.nodeName));
}

//If forEach doesn’t work (childNodes is not an array), use:
Array.from(document.body.childNodes).forEach((n) => console.log(n.nodeName));

//Q17. Use window.getComputedStyle() to log the color of the <h1> element.
let h1 = document.querySelector("h1");
let styles = window.getComputedStyle(h1);
console.log(styles.color);

//Q18. Build a function that prints:
//The number of child elements in <body>
//The number of all child nodes (including text)

function countChildren() {
  console.log(document.body.children.length); // only elements
  console.log(document.body.childNodes.length); // all nodes
}

//Q19. Create and insert a new <div> with some text into the body.
let div = document.createElement("div");
div.textContent = "I'm new here!";
document.body.appendChild(div);

//Q20. Remove the first element inside <body>.
let first = document.body.firstElementChild;
first.remove(); // modern
