
let arrr = ["alok", "shibham", "priyanshu"];

let [b1, n2, n3] = arrr;
console.log(b1);
console.log(n2);
console.log(n3);

//Skipping values targeting unique val
let [w, ,] = arr;
console.log(w);



// Object destructuring


let obj  = {
    userName: "alok",
    age : 22,
    gender: "male",
    height: "5.8",
    weight: "68kg",
}

let {userName :uname, height} = obj;
console.log(`name : ${uname}\nheight : ${height}`)


//Complex destructuring

let data = {
    userName : 'sundari',
    friends : ["mala", "leela", "sheela"],
    adress: {
        landmark : "kalinga studio",
        laneNo: 3,
        place: "bharatpur"
    }
}


let {friends:[i,j],adress:{place}} = data;
console.log(i,j,place)


//Defalut value
const [m = 80, s = 50, o=20] = [10, 100, 1000];

console.log(m); // 10
console.log(s); // 100
console.log(o); // 1000

const [x = 30,y=300, z=3000] = [20, , 2000];

const [p = 30,q=300, r=3000] = [20,  2000];

console.log(x); // 20
console.log(y); // 300
console.log(z); // 2000

console.log(p); // 20
console.log(q); // 2000
console.log(r); // 3000

// Object Destructuring

const user = {
  names: "alok",
  age: 22,
};

const {name:n1, age:a1} = user;
console.log(n1, a1) // alok 22

// Default value
const { name:n, age, city = "BBSR" } = user;
console.log(n, age, city ) //alok 22 BBSR

// Renaming variable

const { name: userName, age: userAge, city: userCity = "BBSR" } = user;

console.log(userName, userAge, userCity) //alok 22 BBSR

console.log(name, age , city) // throw error after renaming

// Destruturing in Functions
// 1 - Array

const ar = [2,3];
const arr1 = [2,];

function add([a,b=8])
{
  return a + b;
}

console.log(add(ar)); // 5
console.log(add(arr1)); // 10

const obj1 = {
  name: "Alok",
  age: 22,
  city: "BBSR",
};

const obj2 = {
  name: "Alok",
  age: 22,
};

function getUserData({ name: userName, age, city = "BERHUMPUR" }) {
  console.log(userName, age, city);
}

getUserData(obj1); // Alok 22 BBSR
getUserData(obj2); //Alok 22 BERHUMPUR

const arr = [1,2,3,4];
// cosnt [a, ...rest] = arr; error
const [a, ...rest] = [1, 2, 3]; // allow
console.log(a, rest) // 1, [2,3]

const obj3 = { name: "Alok", age: 22, role: "Dev" };

const { name, ...others } = obj3; //
const { name:username, ...other } = { name: "Alok", age: 22, role: "Dev" };

console.log(name,others); // Alok { age: 22, role: "Dev" }
console.log(username,other); // Alok { age: 22, role: "Dev" }

//Parentheses Required in Assignment Destructuring

let g;
// { a } = { a: 10 }; //Syntax Error
({ g } = { g: 10 }); // Allow // 10

const { b } = { b: 1 }; //Allow
console.log(b) // 1

const companyData = {
  companyName: "TechNova Pvt Ltd",
  loc: "Bangalore",
  departments: [
    {
      deptName: "Engineering",
      manager: {
        name: "Rahul",
        experience: 10,
      },
      employees: [
        { id: 1, name: "Amit", role: "Frontend Dev", salary: 60000 },
        { id: 2, name: "Sneha", role: "Backend Dev", salary: 70000 },
      ],
    },
    {
      deptName: "Medical",
      manager: {
        name: "Pilli",
        experience: 15,
      },
      employees: [
        { id: 1, name: "Sagar", role: "Ortopedic ", salary: 80000 },
        { id: 2, name: "Shantunu", role: "Dermatologist", salary: 50000 },
      ],
    },
  ],
  establishedYear: 2015,
};

const {
  companyName: cname, loc : cloc, establishedYear : cyear,
  departments: [
    {
      deptName: deptName1,
      manager: { name: name1, experience: experience1 },
      employees: [
        { id: emp1id, name: emp1name, role: emp1role, salary: emp1sal },
        { id: emp2id, name: emp2name, role: emp2role, salary: emp2sal },
      ],
    },
    {
      deptName: deptName2,
      manager: { name: name2, experience: experience2 },
      employees: [
        { id: id3, name: name3, role: role3, salary: salary3 },
        { id: id4, name: name4, role: role4, salary: salary4 },
      ],
    },
  ],
} = companyData;

console.log(cname, cyear, cloc);
console.log("department: ",deptName1,"\nmanager : ", name1, "exp : ",experience1, "\nemployee1 : ", emp1id, emp1name, emp1role, emp1sal ,"\nemployee2 ", emp2id, emp2name, emp2role, emp2sal)

// all correct

//Now using loop

const { companyName, loc, establishedYear, departments } = companyData;

departments.forEach(({ deptName, manager: { name: mgrname, experience },employees }) => {
  employees.forEach(({ id, name:empname, role, salary }) => {
    console.log(deptName, mgrname, experience);
    console.log(id, empname, role, salary);
  });
});
