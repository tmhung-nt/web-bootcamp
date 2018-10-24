console.log("-----------let vs var");
const carId = 100;
console.log(carId);

console.log(empEId); // undefined
var empEId = 1;

// console.log(empRid); //error, the variable is not define
// let empRid = 1;
// --> let is in block scope, var is not

console.log("============ Rest parameters");
// create an array based on input params, 
// no limitation on the number of input params
function sendCars(...allCars){  //allow developer to input parameter as much as he wants
    allCars.forEach(id => console.log(id));
}

sendCars(5, 10, 200); // pass values to the function, then those values will be pushed into an array

function sendCarsWithDay(day, ...allCars){  //allow developer to input parameter as much as he wants
    allCars.forEach(id => console.log(id));
}

sendCarsWithDay('Monday', '15', '10', 200);

console.log("============ Spread Syntax");
// unpack array into elements
function startCars(car1, car2, car3){ // different with Rest params, number of input params are limited
    console.log(car1, car2, car3);
}
carIds = [100, 200, 300];
startCars(...carIds);  // different with Rest params - way to provide input params (pass array's indexes)
let myName = 'hung';
startCars(... myName); // the letter 'g' won't be printed out, as the function just has 3 params
// string and array are iterables in Javascript
console.log("============ User Rest params and Spread Syntax");
function demoRestAndSpread(car1, car2, car3, ...rest){  // Rest params
    console.log(rest);
}
let otherArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
demoRestAndSpread(... otherArray);  // spread syntax


console.log("============ Destructuring Array, almost the same with python");
let arr = [1, 3, 5];
let [arr1, arr2, arr3] = arr;
let arr4, arr5, arr6;
[, arr5, arr6] = arr;
console.log(arr1,  arr2, arr3);
console.log(arr4,  arr5, arr6);

arr = [1, 3, 5, 6, 10];
let [idx1, ... remaingIdx] = arr;
console.log(remaingIdx);

console.log("============ Destructuring object");
let myObj = {firstname: 'Hung', lastname: 'Tran'};
let {firstname, lastname} = myObj;
console.log(firstname, lastname);
let fn, ln;
// {fn, ln} = myObj; // wrong syntax cause it is similar with object initialization
({fn, ln} = myObj); // put above statement to opening/closing paranthesis to solve the problem
console.log(firstname, lastname);

