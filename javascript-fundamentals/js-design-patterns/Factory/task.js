let Repo = require("./taskRepository")();

class Task{
    constructor(data){
        this.name = data.name;
        this.completed = false;
    };
    complete(){
        console.log("completing task: " + this.name);
        this.comleted = true;
    };
    
    save(){
        console.log("saving Task: " + this.name);
        Repo.save(this);
    };
}

module.exports = Task;