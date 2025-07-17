// Asynchronous JavaScript
//What Does Asynchronous Mean?

/*
JavaScript is single-threaded. It executes one line of code at a time.
However, your programs often need to:
wait for a response from a server
read a file
wait for user actions (clicks, input)
delay execution for a period of time
Instead of blocking the whole program, JavaScript uses asynchronous operations so that the browser (or Node.js) can keep running other code while waiting.
*/

//1. Callbacks
//A callback is a function passed as an argument to another function.

function greet(name, callback) {
  console.log("hi " + name);
  callback();
}

greet("Alice", function () {
  console.log("This is the callback");
});

// Useful but can lead to Callback Hell:

/*
doSomething(function(result) {
  doAnother(result, function(result2) {
    doMore(result2, function(finalResult) {
      console.log(finalResult);
    });
  });
});
*/

//2. Promises
//Promises were introduced in ES6 to fix callback hell and provide better async handling.
//A Promise represents a value that may be available in the future.

/*
Pending → initial state
Fulfilled → operation completed
Rejected → operation failed
*/

//Creating a Promise

const promise = new Promise((res, rej) => {
  if (true) {
    res("Success");
  } else {
    rej("Error");
  }
});

//Using .then()
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Done!");
  });

/*
✅ .then() runs on success.
✅ .catch() runs on failure.
✅ .finally() always runs.
  */

//Example with Timeout
const wait = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Finished Waiting!");
  }, 2000);
});

wait.then((msg) => console.log(msg));

// Promise Chaining
//Promises can be chained:

//Syntax

// doTask()
//   .then(result => doAnotherTask(result))
//   .then(next => doMore(next))
//   .catch(err => console.error(err));

function task1() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Task 1 done"), 1000)
  );
}

function task2(msg) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(msg + " → Task 2 done"), 1000)
  );
}

task1()
  .then((result) => task2(result))
  .then((final) => console.log(final));

//Output
//Task 1 done → Task 2 done

//Promise.all()
//Runs multiple promises in parallel, waits for all to finish:
//Syntax

Promise.all([fetch(url1), fetch(url2)]).then((results) => {
  console.log(results);
});

//If any promise rejects, the entire Promise.all rejects.

//Example
const p1 = new Promise((res) => setTimeout(() => res("One"), 1000));
const p2 = new Promise((res) => setTimeout(() => res("Two"), 1500));

Promise.all([p1, p2]).then((results) => console.log(results));

//Output (after 1.5 sec):
//["One", "Two"]

//Promise.race()
//Resolves/rejects as soon as any promise settles:

//Syntax
Promise.race([fetch(url1), fetch(url2)]).then((result) => {
  console.log(result);
});

//Example
const fast = new Promise((res) => setTimeout(() => res("Fast!"), 500));
const slow = new Promise((res) => setTimeout(() => res("Slow!"), 1500));

Promise.race([fast, slow]).then((winner) => console.log(winner));

// Output:
//Fast!

// Promise.allSettled()
//Resolves after all promises finish, even if some fail.

//Syntax
Promise.allSettled([fetch(url1), fetch(url2)]).then((results) => {
  console.log(results);
});

//Example
const p3 = Promise.resolve("Done 1");
const p4 = Promise.reject("Failed");
const p5 = Promise.resolve("Done 3");

Promise.allSettled([p1, p2, p3]).then((results) => console.log(results));

//Output

/*
[
  { status: 'fulfilled', value: 'Done 1' },
  { status: 'rejected', reason: 'Failed' },
  { status: 'fulfilled', value: 'Done 3' }
]
*/

//3. async/await
/*
async/await is syntax sugar over Promises, introduced in ES2017.

✅ Makes async code look synchronous.
✅ Automatically returns a Promise.
*/

//Declaring an async function
async function fetchData() {
  return "Hello!";
}

//Calling it returns a Promise:
fetchData().then(console.log);

//Syntax
async function name() {
  const result = await someAsyncFunction();
}

//Example
async function loadData() {
  console.log("Loading...");
  const data = await new Promise((res) =>
    setTimeout(() => res("Data loaded!"), 1500)
  );
  console.log(data);
}
loadData();

/*
Loading...
Data loaded!
*/

//10. async/await with try/catch
//Example
async function run() {
  try {
    const result = await Promise.reject("Something went wrong!");
    console.log(result);
  } catch (error) {
    console.error("Caught error:", error);
  }
}
run();

//Output :- Caught error: Something went wrong!

//11. Fetch API (with then)
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// 12. Fetch API with async/await
async function getPost() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Error fetching:", err);
  }
}
getPost();

//13. Microtasks vs Macrotasks
console.log("Start");

setTimeout(() => console.log("setTimeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");

/* 
output => 

Start
End
Promise
setTimeout
*/

//14. Event-driven async (e.g., click)

/*
<button id="btn">Click me</button>
<script>
document.getElementById("btn").addEventListener("click", () => {
  console.log("Button clicked!");
});
</script>

*/

// 15. requestAnimationFrame()
requestAnimationFrame(() => {
  console.log("Runs before next screen repaint!");
});

// 16. Realistic Example: Loading posts

async function loadPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    posts.slice(0, 3).forEach((post) => {
      console.log(post.title);
    });
  } catch (error) {
    console.log("Failed to fetch posts");
  }
}
loadPosts();
