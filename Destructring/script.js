
/*
let arr = ["alok", "shibham", "priyanshu"];

let [n1, n2, n3] = arr;
console.log(n1);
console.log(n2);
console.log(n3);

//Skipping values targeting unique val
let [a, ,] = arr;
console.log(a);

/*

// Object destructuring


/* let obj  = {
    userName: "alok",
    age : 22,
    gender: "male",
    height: "5.8",
    weight: "68kg",
}

let {userName, height} = obj;
console.log(`name : ${userName}\nheight : ${height}`)
*/


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


let {friends:[x,a],adress:{place}} = data;
console.log(a,x,place)