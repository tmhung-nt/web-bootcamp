let repoFactory = function(){

    this.getRepo = function(repoType){
        if (repoType === 'task') {
            if (this.taskRepo){
                console.log("Retrieving from cache")
                return this.taskRepo;
            } else {
                this.taskRepo = require("./taskRepository")();
                return this.taskRepo;
            }
        }
        if (repoType === 'user') {
            let userRepo = require("./userRepository")();
            return userRepo;
        }
        if (repoType === 'project') {
            let projectRepo = require("./projectRepository")();
            return projectRepo;
        }
        // switch(repoType){
        //     case 'task':
        //         let taskRepo = require("./taskRepository");
        //         return taskRepo;
        //     case 'user':
        //         let userRepo = require("./userRepository");
        //         return userRepo;
        //     case 'project':
        //         let projectRepo = require("./projectRepository");
        //         return projectRepo;
        //     default:
        //         break;
        // }
    }
};

module.exports = new repoFactory;