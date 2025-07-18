//Inheritance
//Allows a class to inherit properties and methods from another class using extends.

class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    console.log(`${this.name} makes sound`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks.`);
  }
}

const d1 = new Dog("Tommy");

d1.sound();
d1.bark();

//. Super Keyword
//Used to call the parent class constructor or methods.

class Vehicle {
  constructor(barnd) {
    this.band = barnd;
  }
}

class Car extends Vehicle {
  constructor(barnd, model) {
    super(barnd); // calling parent constructor
    this.model = model;
  }
}

const c1 = new Car("Proche", "911");
console.log(`${c1.barnd} : ${c1.model}`); //Porshe : 911

//Encapsulation
//Wrapping properties and methods into one unit (object), hiding implementation details using private fields (modern JS).

class BankAccount {
  #balance = 0; // private property

  deposite(amount) {
    if (amount > 0) this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const accout = new BankAccount();
accout.deposite(1000);
console.log(accout.getBalance); // 1000

//Abstraction
//Hiding internal details and showing only essential features via methods.

class Machine {
  start() {
    this.#boot();
    console.log("Machine Started");
  }

  #boot() {
    console.log("Booting up...");
  }
}

const pc = new Machine();

pc.start(); //// Booting up... Machine started
// pc.#boot(); // Error: private method

//Polymorphism
//Same method behaves differently in different classes.

class Bird {
  makeSound() {
    console.log("Chirps up..");
  }
}

class Crow extends Bird {
  makeSound() {
    console.log("caw caw");
  }
}

const b1 = new Bird();
const b2 = new Crow();

b1.makeSound(); // Chirps up..
b2.makeSound(); // caw caw

//Static Methods and Properties
//Belong to the class, not instances.

class StaticMethods {
  static add(a, b) {
    return a + b;
  }
}

console.log(StaticMethods.add(5, 7));

//this Keyword
//Refers to the object the function is called on.

const obj = {
  title: "Rich dad Poor dad",
  show: function () {
    console.log(this.title);
  },
};

obj.show(); // Rich dad Poor dad

//Prototypes
//Every JS object has a prototype—used for inheritance.

function User(name) {
  this.name = name;
}

User.prototype.greet = function () {
  console.log(`Hello ${this.name}`);
};

const user1 = new User("Alok");
user1.greet(); //Hello Alok

//Object.create()
//Creates an object with a specific prototype.

const animal = {
  sounds() {
    console.log("Animal makes sounds..");
  },
};

const cat = Object.create(animal);
cat.sounds(); //Animal makes sounds..

//Object.assign()
//Copies properties from one or more objects into a target.

const obj1 = {
  name: "Alok",
};

const obj2 = {
  n: "kuch bhi",
};

const result = Object.assign({}, obj1, obj2);
console.log(result); // { name: "alok", n: "kuch bhi" }

// instanceof Operator
//Checks if an object is an instance of a class.

class Bike {}

const b1 = new Bike();

console.log(b1 instanceof Bike); //true
console.log(b2 instanceof Bike); //false

//new Keyword
//Used to create an instance from a constructor function or class.

class Pen {}

const p1 = new Pen();
// Factory Function (OOP-like pattern)
//Alternative to constructor function.

function createUser(name) {
  return {
    name,
    sayName() {
      console.log(`Hii i'm ${this.name}`);
    },
  };
}

const user = createUser("Alok");
user.greet(); //Hii i'm Alok

//Mixins (Sharing Behavior)
//Combining methods from multiple sources.

let canEat = {
  eat() {
    console.log("Eating...");
  },
};

let canWalk = {
  walk() {
    console.log("Walking....");
  },
};

const per1 = Object.assign({}, canEat, canWalk);
per1.eat(); //Eating..
per1.walk(); //Walking..

// Object.keys, values, entries
//Used to inspect properties of objects.

const sigmaBoy = {
  name: "Alok",
  age: 21,
};

console.log(Object.keys(sigmaBoy)); // ['name', 'age']
console.log(Object.values(sigmaBoy)); // ['Alok', 21]
