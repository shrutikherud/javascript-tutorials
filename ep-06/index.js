//ARRAY(MAP, FILTER, REDUCE)"
const arr = [10,20,30,40,50];
// console.log(arr);
// arr.push("Orange");
// console.log(arr);
// arr.unshift("Start")
// console.log(arr);
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[1]);

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }

//Map
const newArr = arr.map(function(element){
    return element*2;
})
console.log(newArr);

const product = [
    {
        price:1200,
        name:"IPhone"
    },
    {
        price:1400,
        name:"Hp"
    },
    {
        price:100,
        name:"Lenovo"
    },
];
product.map((element) => {
    console.log(element.name, element.price);
    
})

//Filter
const arr1 = [10,20,30,40,50];
const res = arr1.filter((element) => {
    return element >= 30;
})
console.log(res);

//Reduce
function sumOfELement(arr1){
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum = sum + arr[i];
    }
    return sum
}
console.log(sumOfELement(arr1));

const ans = arr1.reduce((accumulator, element) => {
    return accumulator + element;
},0)
console.log(ans);



