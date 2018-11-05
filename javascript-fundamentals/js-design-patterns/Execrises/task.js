let task = {
    title: "My Title",
    description: 'My Description'
};

Object.defineProperty(task, 'toString', {
    value: function(){
        return this.title + ' ' + this.description;
    },
    writable: false,
    enumerable: true,
    configurable: true
});

// task.toString = function(){
//     return this.title + ' ' + this.description;
// }

task.toString = 'hi';

// console.log(task.toString());
console.log("#############task.toString has enumerable = true #############");
console.log(Object.keys(task));
Object.defineProperty(task, 'toString', {
    enumerable: false
})
console.log("#############task.toString has enumerable = false #############");
console.log(Object.keys(task));

Object.defineProperty(task, 'toString', {    
    configurable: false
})

console.log("#############task.toString set enumerable = true after setting configurable = false #############");
try {
    Object.defineProperty(task, 'toString', {    
        enumerable: true
    })
} catch (error) {
    console.log("------- catch error exception -------")
    console.log(error);
}
console.log(Object.keys(task));    


console.log("########### Inheritance ############");
let urgentTask = Object.create(task);
Object.defineProperty(urgentTask, 'toString', {
    value: function(){
        return this.title + ' is urgent';
    },
    writable: false,
    enumerable: false,
    configurable: false
})
console.log(urgentTask);
console.log(urgentTask.__proto__);
console.log(urgentTask.toString());


