// What is an Event?
//An event is a signal that something has happened in the browser.

/*
Examples:
A user clicks a button → click event
A key is pressed → keydown event
A page finishes loading → load event
A mouse moves over an element → mouseover event
✅ Events connect user actions to JavaScript code.
*/

//How Events Work

/*
When an event occurs:
The browser creates an event object containing details about what happened.
Your code can respond using an event handler.
*/

//Types of Events
//Here’s a table of important events:

/* 
Category	Events
Mouse Events => click, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout, contextmenu
Keyboard Events =>	keydown, keyup, keypress (deprecated)
Form Events	=> submit, change, focus, blur, input
Document Events =>	DOMContentLoaded, load, unload, resize, scroll
Clipboard	=> copy, cut, paste
Drag/Drop	=> drag, dragstart, dragover, drop
Touch Events  => touchstart, touchmove, touchend
*/

//Three Ways to Add Event Handlers
// 1. HTML Attribute
//Example

<button onclick="alert('Hello!')">Click Me</button>;

/*
Pros:
Quick for demos
Easy to understand
*/

/*
Cons:
Bad practice for large apps
Logic mixed with HTML
*/

// 2. DOM Property
//Example

let btn = document.getElementById("myBtn");
btn.onclick = function () {
  alert("Clicked!");
};

//Only one handler allowed via property → newer assignment overwrites older ones.

//3. addEventListener()
//Best practice!

element.addEventListener("event", handler);

// Example:
let btn = document.getElementById("myBtn");
btn.addEventListener("click", () => {
  alert("Clicked via addEventListener!");
});

/*
Benefits:
Multiple listeners allowed
Advanced options (e.g. capture, once)
*/

//The Event Object
//When an event happens, the browser passes an event object to //your function.

//✅ Example:
document.addEventListener("click", function (event) {
  console.log(event.type); // e.g. "click"
  console.log(event.target); // element that triggered the event
});

/*
Common Properties:
type → event name (e.g. "click")
target → element where event occurred
currentTarget → element the listener is attached to
clientX / clientY → mouse position
key → key pressed for keyboard events
preventDefault() → stops default behavior
stopPropagation() → stops bubbling
*/

//Event Bubbling vs Capturing
//The DOM has two phases of event flow:
//Event Bubbling (Default)

//Event starts at the target element and bubbles up to ancestors.

/*
Example:
Click on <button> inside <div>
Both button and div receive the click event (bubbling)
*/

//Example
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});

//Event Capturing
//Event travels down from ancestors to the target before bubbling back up.

//How to use it: element.addEventListener("click", handler, true);
//Third argument true → capture mode

//stopPropagation()
//Stops the event from continuing to bubble or capture.

//Example
document.getElementById("child").addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Child only!");
});

// preventDefault()
//Stops the default browser action.

//Example
document.querySelector("a").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Link was clicked, but not followed.");
});

//Event Delegation
/*
Instead of adding events to every child, add one to the parent and detect which child was clicked.
*/

//Example
document.getElementById("list").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("Clicked item:", e.target.textContent);
  }
});

/*
Benefits:
Fewer event listeners
Efficient for dynamic content
*/

// Event Listener Options
//When using addEventListener, you can pass options:

element.addEventListener("click", handler, {
  once: true,
  capture: false,
  passive: true,
});

/*
Options:
once → runs handler only once
capture → use capture phase
passive → tells browser you won’t call preventDefault() (improves scroll performance)
*/

// Removing Event Listeners
//You can remove listeners using:

element.removeEventListener("click", handler);

//Example
function sayHi() {
  console.log("Hi!");
}

btn.addEventListener("click", sayHi);
btn.removeEventListener("click", sayHi);

/*
Keyboard Events
Event  => 	When it fires
keydown	 => key is pressed down
keyup	=>  key is released
*/

//Example

document.addEventListener("keydown", (e) => {
  console.log("Key pressed:", e.key);
});

/*
Form Events
submit → form is submitted
input → input value changes
change → element loses focus after change
focus / blur → gain/lose focus
*/

//Example
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form submitted!");
});

/*
 Mouse Events
click
dblclick
mouseover / mouseout
mousedown / mouseup
contextmenu (right-click)
*/

//Example
document.querySelector("div").addEventListener("mouseover", () => {
  console.log("Hovered!");
});

/*
DOMContentLoaded
Fires when HTML is loaded and parsed.
Faster than waiting for full resources (images, CSS).
*/

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded!");
});

/*
Summary Table
Method	             Description
onclick = function	=> Only one handler allowed
addEventListener =>	Multiple handlers possible
removeEventListener =>	Removes listener
stopPropagation() => Stops event from bubbling
preventDefault() =>	Stops default browser behavior
once option	     =>   Runs handler only once
Event bubbling	=> Event flows from target up
Event capturing  =>	Event flows from root down
Event delegation =>	Listen on parent for child events
*/

//Example: All Concepts Together

/* 


<button id="myBtn">Click Me</button>
<form id="myForm">
  <input type="text" name="username" />
  <button type="submit">Submit</button>
</form>

<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<script>
  document.getElementById("myBtn").addEventListener("click", () => {
    alert("Button clicked!");
  });

  document.getElementById("myForm").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  });

  document.getElementById("list").addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      console.log("Clicked:", e.target.textContent);
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded");
  });
</script>


*/

/*
 If you memorize these concepts, you’re fully covered for:
Exams
Interviews
Real projects
*/
