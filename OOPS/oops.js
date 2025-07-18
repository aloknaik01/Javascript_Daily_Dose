//  Object-Oriented Programming (OOP)
/*
OOP is a programming paradigm based on the concept of objects, which contain properties (data) and methods (functions). JavaScript supports OOP via prototypes and classes.
*/

// 1. Object Literal
//An object created using {} notation.

const student = {
  name: "Alok",
  age: 21,
  sayMyName: function () {
    console.log(`Hello my name is ${this.name}`);
  },
};

student.greet(); //// Hello, my name is Alok

// 2. Constructor Function

function Student(name, age) {
  (this.name = name),
    (this.age = age),
    (this.sayMyName = function () {
      console.log(`Hii my name is ${this.name}`);
    });
}

const s1 = new Student("Alok", 21);
s1.sayMyName(); // Hi, I'm Alok

//3. Classes (ES6 Syntax)
//More structured and modern way to define objects.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`${this.name}  is speaking.`);
  }
}

const p1 = new Person("Alok", 21);
p1.speak(); //// Alok is speaking.