// Destructuring can be done in array and object

const arr = [1,2,3,4,5];

console.log(arr[1]);
console.log(arr[2]);

const [a,b,c,d,e] = arr;
console.log(e);

//Object destructuring
const person = {
    name : "Shruti",
    age : "22",
    gender : "female",
    address : "Pune"
};

//Access values

//Dot notation
console.log(person.gender);
console.log(person.name);

//Bracket notation
console.log(person["age"]);

// Destructuring
const {address} = person;
console.log(address);

