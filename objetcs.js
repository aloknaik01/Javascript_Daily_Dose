//An object is a collection of key-value pairs.
//Keys → called properties or methods (if value is a function)
//Values → can be any data type: string, number, boolean, array, object, function, etc.

let Me = {
  name: "Alok",
  age: 21,
  isGraduated: false,
  hobbies: ["Coading, Cooking, Gaming", "Crafting"],
};

console.log(Me.name); //Alok
console.log(Me.age); // 21
console.log(Me.isGraduated); // false
console.log(Me.hobbies); // [ 'Coading, Cooking, Gaming', 'Crafting' ]

//1. Creating Objects
//1 Object Literal
//Most common way.

let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};

///2 Object Constructor
let obj = new Object();
obj.name = "Alok";
console.log(obj.name);

//3 Object.create()
let Vehicle = {
  sound: "Sounds when Accelerating",
};

let cars = Object.create(Vehicle);
cars.sound = "Vroom Vroom";

console.log(cars.sound); // Vroom Vroom
console.log(Vehicle.sound); // Sounds when Accelerating

//4 Using Classes
class Student {
  constructor(n, a) {
    this.name = n;
    this.age = a;
  }
}

let stu = new Student("Alok", 21);
console.log(stu.name); // Alok
console.log(stu.age); // 21

//2. Accessing Object Properties
//1 Dot Notation
console.log(Me.name); // Alok

//2 Bracket Notation
//Useful for dynamic keys or keys with spaces.
console.log(Me["age"]); // 21

//3. Updating Object Properties
Me.age = 22; // updated age = 22
Me.isGraduated = true; // updated isGraduated = true

console.log(Me.age, Me.isGraduated); // 22 true

//4. Adding New Properties
Me.Region = "India"; // added new property Region
console.log(Me.Region); // India

//5. Deleting Properties

delete Me.hobbies; // deleted hobbies property
console.log(Me.hobbies); // undefined

//6. Methods in Objects
//Functions inside objects are methods.

let user = {
  name: "Alok",
  sayMyName: () => {
    console.log("Hello, My Name is " + user.name);
  },
};

usersayMyName(); // Hello, My Name is Alok

//7. Method Shorthand
// Shorter way to write methods.
let user2 = {
  sayHi() {
    console.log("Hi!");
  },
};

user.sayHi(); // Hi!

//8. this Keyword
//Refers to the current object.
//Used inside methods.

let someOne = {
  name: "Unknown",
  greet() {
    console.log("Hello, " + this.name);
  },
};

console.log(someOne.name); // Unknown
someOne.greet(); // Hello, Unknown

//9. Nested Objects
//Objects can contain other objects.

let Iam = {
  name: "Alok",
  address: {
    city: "Unknown",
    pincode: 100000,
  },
};

console.log(Iam.address.city); // Unknown
console.log(Iam.address.pincode); // 100000

//10. Objects as Function Parameters
//Objects can be passed to functions.

function showInfo(obj) {
  console.log(obj.name);
  console.log(obj.age);
  console.log(obj.adress);
  console.log(obj.adress.name);
  console.log(obj.adress.age);
}

showInfo({
  name: "Alok",
  age: 21,
  adress: { city: "Unknown", pincode: 100000 },
});

//11. Looping Through Objects
//Loops over keys in object.
//a. for...in

let me = {
  name: "ALok",
  age: 21,
};

for (let key in me) {
  console.log(key + " : " + me.key);
}

/*
Output:
name:Alok
age: 21
*/

//b Object.keys()
//Returns array of keys.

/*
let me = {
  name: "ALok",
  age: 21,
};
*/
let key = Object.keys(me);
console.log(key); // ["name", "age"]

//c.Object.values()
let val = Object.values(me);
console.log(val); // ["Alok", 21]

//d. Object.entries();
//Returns array of [key, value] pairs.

/* 
let me = {
name: "Alok",
age: 21,
}
*/

let ent = Object.entries(me);
console.log(ent); // [["name", "Alok"], ["age", 21]]

//12. Object Destructuring
//Extract properties into variables.

/* 
let me = {
name: "Alok",
age: 21,
}
*/

let { name, age } = me;

console.log(name); // Alok
console.log(age); // 21

//13. Spread Operator with Objects

let obj1 = { name: "Alok", age: 21 };
let obj2 = { ...obj1, profession: "Java & React Developer" };

console.log(obj2);

// output
// {name: "Alok", age: 21, profession: "Java & React Developer"};

//14. Object.freeze();
//Prevents modifications.
/* 
let me = {
name: "Alok",
age: 21,
}
*/

Object.freeze(me);
me.name = "UNKNOWN";
console.log(me.name);

//15. Object.seal();
//Prevents adding/removing properties but allows updating existing ones.

let book = {
  title: "Learn js",
};

Object.seal(book);

book.title = "js Guide";
book.author = "Unknown";
console.log(book);

// tite: "js Guide";

//16. Checking Property Existence
//a. in Operator

/* 
let me = {
name: "Alok",
age: 21,
}
*/

console.log("name" in me); //true
console.log("profession" in me); // false

//b. hasOwnProperty()
//Checks if object itself has property.

let pen = {
  color: "blue",
};

console.log(pen.hasOwnProperty("color")); //true
console.log(pen.hasOwnProperty("inkcolor")); //false

//17. Object Prototype
//All objects inherit from Object.prototype.

let cars = {
  brand: "Suzuki",
};

console.log(cars.toString()); // [object Object]

//18. Class Syntax
//Modern way to define objects.

class MySelf {
  constructor(name, age) {
    this.name = "Alok";
    this.age = "age";
  }
  sayname = () => {
    console.log(`Hii ${this.name}`);
  };
}

let m1 = new MySelf("Alok", 21);
m1.sayname();

//output - Hello, Alok

//19. JSON and Objects
//Objects can be converted to JSON and vice versa.

//a.JSON.stringify()
//Converts object → JSON string.

let me = {
  name: "Alok",
  age: 21,
};

let jsonStrData = JSON.stringify(me);

console.log(jsonStrData);

/*  Output 
' {"name": "Alok", "age": 21 }'
*/

//b.JSON.parse();
//Converts JSON string → object.

let me = '{"name": "Alok", "age": 21 }';
let jsonData = JSON.parse(str);

console.log(jsonData);
console.log(jsonData.name);
/*  Output 
 {
  name: "Alok",
  age: 21,
}

Alok
*/

//20. Optional Chaining with Objects
//Avoids errors if property does not exist.

let me = {
  name: "Alok",
  age: 21,
  adress: {
    city: "Unknown",
    country: "India",
  },
};

console.log(me?.adress?.city); // Unknown
console.log(me?.name); // Alok
console.log(me?.adress?.pincode); // undefiend

//21. Nullish Coalescing with Objects
//Provides default values.

let Myname = {
  name: null,
};

let n = Myname.name ?? "Unknown";
console.log(n); // Unknown

let Myname2 = {
  name: "Alok",
};

let n2 = Myname2.name ?? "Unknown";
console.log(n2); // Alok
