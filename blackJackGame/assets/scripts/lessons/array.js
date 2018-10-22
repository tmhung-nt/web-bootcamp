let values = [1, 2, 3];

console.log(values[0]);
console.log(values[3]);
console.log(values);
console.log(values.length);

values.push(44);
console.log(values);

let result = values.pop();
console.log(values);

values = [1, 2, 4, 44];
result = values.shift();
console.log(values);

values = [1, 2, 4, 44];
values.splice(2, 2, 11, 55, 66);
console.log(values);