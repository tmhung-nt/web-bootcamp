export class Vehicle{
    constructor(){  // this is object's contructor, the name can be anything, no need to be "constructor"
        this.type = 'Vehicle';
    };
    start(){ // this is object's method, no need to have 'function' keyword behind the method's name
        return `Starting ${this.type}`;
    };
}

