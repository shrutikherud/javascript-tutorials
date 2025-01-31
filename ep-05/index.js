//FUNCTIONS

//Function declaration
// function sum(num1, num2){
//     console.log(num1 + num2);
// }
// sum(100,200); //call

// //Function expression
// const sumOfTwoNum = function (num1, num2){
//     console.log(num1 + num2);
// };
// sumOfTwoNum(50,20);

// //Callback function

// const doSomething = function(){
//     console.log("Samose ban rahe hai");
//     setTimeout(function(){
//         callback();
//     }, 3000); 
// }

// const callback = function(){
//     console.log("Samose ready hai");    
// }
// doSomething(callback);

//Higher order function

const radius = [1,2,3,4];
const area = function(radiusArray){
    const result = [];
    for(let i = 0; i < radiusArray.length; i++){
        const a = Math.PI * radiusArray[i] * radiusArray[i];
        result.push(a);
    }
    return result;
}
const ans = area(radius);
console.log(ans);
const circumference = function(radiusArray){
    const result = [];
    for(let i = 0; i < radiusArray.length; i++){
        const a = 2 * Math.PI * radiusArray[i];
        result.push(a);
    }
    return result;
}
const ans1 = circumference(radius);
console.log(ans1);

const formulaOfArea = function(r){
    return Math.PI * r* r;
}

const formulaOfCicumference = function(r){
    return 2 * Math.PI * r;
}

const calculate = function(radiusArray, formula){
    const result = [];
    for(let i = 0; i < radiusArray.length; i++){
        const a = formula(radiusArray[i]);
        result.push(a);
    }
    return result;
}
const ans2 = calculate(radius, formulaOfArea);
const ans3 = calculate(radius, formulaOfCicumference);
console.log(ans2);
console.log(ans3);

//Arrow Function
const multiply = (num1, num2) => {
    return num1 * num2
}
console.log(multiply(2,3));

// import {name} from "../ep-07";
// console.log(name);