// 
// to demo javascript types
//

let value = "9";
console.log(typeof(value) + ": " + value);

value = 9;
console.log(typeof(value) + ": " + value);

value = 4.4 + 8.3;
console.log(typeof(value) + ": " + value);

value = 0/0; // NaN
console.log(typeof(value) + ": " + value);

value = 10/0; //Infinity
console.log(typeof(value) + ": " + value);

value = false;
console.log(typeof(value) + ": " + value);

// undefined
let calculateSalesTax;
console.log(calculateSalesTax, typeof(calculateSalesTax));

//null 
calculateSalesTax = null;
console.log(calculateSalesTax, typeof(calculateSalesTax));