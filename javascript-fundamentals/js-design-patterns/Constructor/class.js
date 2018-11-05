// 'use strict'

class Task{
    constructor(name){
        this.name = name;
        this.completed = false;
    };
    complete(){
        console.log("completing task: " + this.name);
        this.comleted = true;
    };
    
    save(){
        console.log("saving Task: " + this.name);
    };
}

module.exports = Task;