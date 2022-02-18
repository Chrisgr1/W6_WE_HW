
// DESTRUCTURING ARRAYS
// const names = ["Fred", "Kate", "Cindy", "Ricky", "Keith"]
// console.log(names);


// ACCESSING ARRAY  *NOT* DESTRUCTURING
// const fred = names[0];
// const kate = names[1];
// console.log(kate);


// ACCESSING ARRAY *WITH* DESTRUCTURING
// const [fred, kate] = names;
// console.log(kate);
// logs kate

// const [fred, kate, , ricky] = names;
// console.log(ricky);
// logs ricky (4th element)

// const [fred, kate, ... remainingNames] = names;
// console.log(remainingNames);
// // returns an array of names after kate

///////////////////////////////////////////////////

// DESTRUCTING OBJECTS 


const person = {
    name: "Joni",
    age: 76
};

// NOT DESTRUCTURING
// const name = person.name;
// const age = person["age"];

// console.log(name, age);

const { name, age } = person;
console.log(name, age);
