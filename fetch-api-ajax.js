//What is Fetch API?
/*
Fetch API is a modern way to make asynchronous network requests (AJAX) in JavaScript using Promises.
It replaces older methods like XMLHttpRequest.
*/

//1. Basic GET request using fetch()

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//2. GET request using async/await

async function getPost() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();
    console.log("Post :", data);
  } catch (error) {
    console.error("Error", error);
  }
}

//getPost(); call the method

//3. Making a POST request with fetch()

const postData = {
  title: "New Post",
  body: "This is a new Post",
  userId: 1,
};

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },

  body: JSON.stringify(postData),
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("error", err));

//4. POST using async/await
async function createPost() {
  const post = {
    title: "Async Post",
    body: "Using async/await",
    userId: 99,
  };

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com.post", {
      method: "POST",
      headers: {
        "Content-Tye": "application/json",
      },
      body: JSON.stringify(post),
    });

    const data = await res.json();
    console.log("Created:", data);
  } catch (error) {
    console.error("Failed:", err);
  }
}

createPost();

// 5. PUT (full update)

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Updated Title",
    body: "Updated body",
    userId: 1,
  }),
})
  .then((res) => res.json())
  .then((data) => console.log("Update:", data));

//6. PATCH (partial update)

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  headers: {
    "Content-Type": "Papplication/json",
  },

  body: JSON.stringify({
    title: "Only title changed",
  }),
})
  .then((res) => res.json())
  .then((data) => console.log("Pathched:", data));

//7. DELETE request
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
})
  .then(() => console.log("Deleted successfully"))
  .catch((err) => console.error("Delete failed:", err));

// 8. Handling HTTP errors manually
fetch("https://jsonplaceholder.typicode.com/posts/123456789")
  .then((res) => {
    if (!res.ok) throw new Error("Post not found!");
    return res.json();
  })
  .then((data) => console.log(data))
  .catch((err) => console.log("Error:", err));

// 9. Custom headers (auth tokens)

fetch("https://example.com/api/data", {
  headers: {
    Authorization: "Bearer token123",
    Accept: "application/json",
  },
})
  .then((res) => res.json())
  .then((data) => console.log(data));

//10. Using fetch() inside click event (DOM + fetch)

/*
<button id="loadBtn">Load User</button>
<script>
  document.getElementById("loadBtn").addEventListener("click", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await res.json();
    console.log(user);
  });
</script>

*/

// 11. Loading spinner with fetch (UI + async)

document.getElementById("loadBtn").addEventListener("click", async () => {
  document.getElementById("status").textContent = "Loading...";
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await res.json();
    document.getElementById("status").textContent = `Loaded: ${user.name}`;
  } catch {
    document.getElementById("status").textContent = "Error loading!";
  }
});

//12. Parallel fetch requests
Promise.all([
  fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) =>
    res.json()
  ),
  fetch("https://jsonplaceholder.typicode.com/users/1").then((res) =>
    res.json()
  ),
]).then(([post, user]) => {
  console.log("Post:", post);
  console.log("User:", user);
});

//13. Older Way: XMLHttpRequest (for comparison only)
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");
xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  } else {
    console.error("Error fetching data");
  }
};
xhr.send();

//14. Aborting fetch request
const controller = new AbortController();

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  signal: controller.signal,
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => {
    if (err.name === "AbortError") {
      console.log("Fetch aborted");
    } else {
      console.error("Fetch failed", err);
    }
  });

// Abort in 100ms
setTimeout(() => controller.abort(), 100);
