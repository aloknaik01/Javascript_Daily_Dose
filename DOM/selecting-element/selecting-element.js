// 1. document.getElementById(id)

/*
Selects ONE element with the given id.
Returns the element as an Element object.
If the id doesn’t exist, it returns null.
*/

// Example:
const title = document.getElementById("page-title");
console.log(title);
//Most efficient method for a single element.

//2. document.getElementsByClassName(className)

/*
Selects all elements with the specified class name.
Returns an HTMLCollection (like an array but not exactly).
The collection is live—it updates automatically if the DOM changes.
*/

const notes = document.getElementsByClassName("note");
console.log(notes);

/*
Indexed like an array, but not a real Array
Use indexing: notes[0].
*/

//3. document.getElementsByTagName(tagName)

/*
Selects all elements with the specified tag name (e.g. div, p, li).
Returns an HTMLCollection.
The collection is live.
Pass "*" to get all elements.
*/

const allDivs = document.getElementsByTagName("div");
console.log(allDivs);
// Great for grabbing all elements of a type.

//4. document.querySelector(selector)

/*
Returns the first element matching a CSS selector.
Returns null if nothing matches.
Lets you use complex selectors (e.g. .note p).
*/

const firstNote = document.querySelector(".note");
const titles = document.querySelector("#main-title");
console.log(firstNote);
console.log(titles);

//More powerful than older methods
//Can combine selectors:

console.log(document.querySelector("div#main > p.active"));

//5. document.querySelectorAll(selector);
/*
Selects all elements matching the CSS selector.
Returns a NodeList.
NodeList is not live (it doesn’t update automatically).
You can use .forEach() on a NodeList.
*/

const allNotes = document.querySelectorAll(".note");
console.log(allNotes);
allNotes.forEach((n) => {
  console.log(n); //return all notes one by one
});

//6. getElementsByName()
//Finds elements with a name attribute (mostly for forms).
//Returns a NodeList (in some browsers) or an HTMLCollection (in others). Historically it’s often treated as an HTMLCollection.
/* 
Often used with form elements like:
<input>
<select>
<textarea>
<button>
*/

//document.getElementsByName("nameValue")
//The nameValue is the value of the name attribute you’re looking for.
let fields = document.getElementsByName("userName");
console.log(fields);

//Example HTML

/*
<form>
  <input type="radio" name="gender" value="male" />
  <input type="radio" name="gender" value="female" />
  <input type="text" name="username" />
</form>
*/

const radios = document.getElementsByName("gender");
console.log(radios.length); // → 2

for (let radio of radios) {
  console.log(radio.value);
}

const usernameInput = document.getElementsByName("username")[0];
usernameInput.value = "Alok";

//7. document.all
/* 
Old method to get all elements.
Deprecated → avoid using it.
*/
console.log(document.all);

//document.forms

/*
document.forms returns all <form> elements.
document.images returns all <img> elements.
document.links returns all <a> elements with href.
*/

const firstForm = document.forms[0];
console.log(firstForm);

//Inside an Element: Element Selectors
//All the methods above also exist on element objects:

const container = document.getElementById("container");
const child = container.querySelector(".note");

//You don’t always have to start at document.

console.log(container);
console.log(child);
