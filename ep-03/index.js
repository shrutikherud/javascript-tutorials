//Spread Operators : Object, array, function
// ...
//converts into duplicate

//ARRAY
//Make a duplicate array
const arr = [1,2,3];
const duplicateArr = [ ... arr, 4,5,6, "Apple", 'Banana']; //returns new array with same elements
console.log(duplicateArr);

// Q. Merge two arrays

const num1 = [1,2,3,4,5];
const num2 = [6,7,8,9,10];
//output: result = [1,2,3,4,5,6,7,8,9,10];

const result = [...num1, ...num2]
console.log(result);


//OBJECT

// Q. Merge to object
const obj1 = {
    a: 1,
    b: 2
};
const obj2 = {
    c: "Hello",
    d: "Developers"
};

//output:
//res = {
//    a: 1,
//    b: 2,
//    c: "Hello",
//    d: "Developers"
//}

const res = {...obj1, ...obj2};
console.log(res);

//FUCNTION
function sum(...numbers){ 
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; 
    }
    return sum
}
console.log(sum(1,2,3,4,5,6));
