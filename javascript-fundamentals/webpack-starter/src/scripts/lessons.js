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

console.log("Type conversions");
console.log("Number.parseFloat('55.88'): Value: " + Number.parseFloat('55.88') + " has type = " + typeof(Number.parseFloat('55.88')));
console.log("Number.parseInt('55.88'): Value: " + Number.parseInt('55.88') + " has type = " + typeof(Number.parseInt('55.88')));
let num = 4;
console.log("num.toString(): Value: " + num.toString() + " has type = " + typeof(num.toString()));


console.log("----------------demoRest----------------");
function demoRest(in1, ... ins){
    ins.forEach(arg => console.log(arg));
}
demoRest(1, 2, 3, 4, 5, 6);

console.log("----------------demoSpread----------------");
function demoSpread(arr1, arr2, arr3){
    console.log(arr1, arr2, arr3);
}

arr = [3, 5, 6, 4, 2];
demoSpread(... arr);
console.log("--> demoRest and demoSpread are different with each other at:");
console.log("           1. function declaration : with and without \"...\"");
console.log("                   function demoRest(in1, ... ins){}");
console.log("                   function demoSpread(arr1, arr2, arr3){} // pass multiple arguments into function");
console.log("           2. call function        : without and with \"...\"");
console.log("                   demoRest(1, 2, 3, 4, 5, 6)");
console.log("                   demoSpread(... arr) // (pass an array into function)");

console.log("######################## Equality Operators");
console.log(1 == 1);
console.log(1 != 1);
console.log(1 == true);
console.log(1 != true);
console.log(1 === true);
console.log(1 !== true);
console.log("-----------------------------------");
let id = 123;
console.log(id == "123");
console.log(id != "123");
console.log(id === "123");
console.log(id !== "123");

console.log("######################## Unary Operators");
let year = 5;
console.log("year++ --> increased after getting used");
console.log(" year = " + year + " | year++ = " + (year++) + " | year = " + year);
console.log("year++ --> increased before getting used");
console.log(" year = " + year + " | ++year = " + (++year) + " | year = " + year);

console.log("######################## Logical Operators");
// Type	        Falsy value
// Boolean	    false
// Number	    0 and NaN
// String	    ''
// null	        null
// undefined	undefined
console.log("-------------------- Falsy and Truthy");
console.log("-------------------- null is falsy");
console.log("-------------------- object/func is truthy");
let userSetting = null;
let defaultSetting = { name: 'Default'};

console.log( userSetting || defaultSetting);

let bike = null;
if (!bike){
    bike = {};
};



console.log("======================== IIFE's (Immediately Invoked Function Expression)");

(function (){
    console.log('in function');
})();

let app = (function (){
    let message = 'abc';
    function turnKey(){
        console.log(message);
    }
    return {};
})();

console.log(app);

console.log("======================== Closure");

let watchId = (function (){
    let id = 3;
    let getId = function() {
        return id;
    };
    return {
        getId: getId  // object's value is a function
    };
})();

console.log(watchId.getId);  // watchId.getId return a reference to a function (which is assigned to getId variable)
console.log(watchId.getId()); // hence we need opening/closing parenthesises to execute the function and get final value


console.log("======================== Conditional Operator");
(3 > 2 ) ? console.log(true) : console.log(false);

console.log( 4 < 5 ? true : false);
console.log( 4 > 5 ? true : false);

console.log("######################## this keyword --> refer to an object (a special object called a context for the function)");
console.log("######################## this keyword is the context object for a function");
let a = {
    carId: 123,
    getId: function() {
        return this.carId;
    }
};

console.log(a.getId());

console.log("######################## call and apply - there are two ways to call a function");
console.log("************************ call and apply functions are used to change the value of *this*");
console.log("------------------------- call function - pass newCar object to function to change its context - BUT can pass arguments along with the new object/context");
let newCar = { carId: 456};
console.log(a.getId.call(newCar));  // pass newCar object to function to change its context - BUT can pass arguments along with the new object/context
console.log("------------------------- apply apply function - pass arguments (should be an ARRAY) - console.log(b.getId.apply(newCar, ['Pass prefix along with new object (context) by call function']));" );
let b = {
    carId: 123, 
    getId: function(prefix){
        return prefix + " " + this.carId;
    }
};

console.log(b.getId.apply(newCar, ['Pass prefix along with new object (context) by call function'])); // pass arguments (should be an ARRAY)

// use Rest param
console.log("Try to use Rest params with apply function");
let c = {
    carId: 123,
    getId: function(prefix1, prefix2, prefix3){
        return prefix1 + "-" + prefix2 + "-" + prefix3 + this.carId;
    }
};

console.log(c.getId.apply(newCar, ['999', '456', '789']));

console.log("######################## bind");
let p = {
    phoneId: 123,
    getId: function(){
        return this.phoneId;
    }
};

newCar = { phoneId: 456};
let newFn = p.getId.bind(newCar); // brand new function is created (copied and assign new context)
console.log( newFn() );

console.log("######################## arrow function");
getId = () => 123;
console.log("No input param: \"getId = () => 123;\"" + "-----> getId()" + "-----> " + getId());

getId = prefix => prefix + 1;
console.log("Has one input param: " + "\"getId = prefix => prefix + 1;\""+ "-----> getId(123)" + "-----> " + getId(123));

getId = (prefix, suffix) => prefix + 1 + suffix;
console.log("Has two input params: " + "\"getId = (prefix, suffix) => prefix + 1 + suffix;\""+ "-----> getId(1, 2)" + "-----> " + getId(1, 2));

getId = (prefix, suffix) => {
    factor = 3;
    return prefix + factor + suffix;
};
console.log("Has {} to add more complex logic inside the function: (do need to add the return keyword)" + "\"getId = (prefix, suffix) => {\n" + 
"    return prefix + 1 + suffix;\n" + 
"};\" \n"+ "-----> getId(1, 2)" + "-----> " + getId(1, 2));

console.log("Arrow functions do not hvae their own 'this' value.");
console.log("'this' refers to the enclosing context.");


console.log("######################## default parameters");

let trackCar = function(carId, city = 'NY'){
    console.log(`Tracking ${carId} in ${city}`);
};

trackCar(123);
trackCar(123, 'LA');


//######################## Class 

// import { Vehicle } from "./models/vehicles/vehicle";
// import { Car } from "./models/vehicles/car.js";

// let v = new Vehicle();
// console.log( v.start() );

// let car = new Car();
// console.log( car.start() );

// ###################### send Get/Post using jQuery

import $ from 'jquery';

// $.get("http://5bd40c84be3a0b0013d034e1.mockapi.io/users",
//     data => console.log("data: ", data)
// );

let apiEndpoint = "http://5bd40c84be3a0b0013d034e1.mockapi.io/users";

// let promise = $.get(apiEndpoint);
// promise.then(
//     data => console.log('success: ', data),
//     error => console.log('error: ', error)
// );

let user = {
    "name":"Hung Tran",
};

let promise = $.post(apiEndpoint, user);
promise.then(
    data => console.log(data),
    error => console.log(error)
);