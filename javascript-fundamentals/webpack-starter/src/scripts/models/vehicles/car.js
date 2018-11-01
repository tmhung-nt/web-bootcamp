// ----------------------- Inheritance"
import { Vehicle } from "./vehicle.js";

export class Car extends Vehicle{
    constructor(){
        super();
        this.type = 'Car';
    }

    print(){
        console.log(this.start());
    }

    start(){
        return 'in Car.start() and call Vehicle.start() by super keyword: super.start():  ' + super.start();
    }


}