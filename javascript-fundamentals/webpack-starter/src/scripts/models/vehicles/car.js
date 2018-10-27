// ----------------------- Inheritance"
import { Vehicle } from "./vehicle.js";

export class Car extends Vehicle{
    // constructor(){
    //     super();
    //     this.type = 'Car';
    // }

    start(){
        return 'in Car.start() and call Vehicle.start() by super keyword: super.start():  ' + super.start();
    }
}