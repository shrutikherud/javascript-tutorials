const age = 10;
if(age >= 18){
    console.log("You're eligible to drive car");
} else {
    console.log("You're not eligible");
}

//ternary operator
age >= 18 ? console.log("You're eligible to drive") : console.log("You're not eligible to drive");

const ob = {
    name: "Shruti",
    address: {

    }
}
// console.log(ob.name);
// console.log(ob.address.city.village);
const x = undefined;
//Optional chaining
console.log(x?.name);

const str = false;
str && console.log("Only when it's true");


