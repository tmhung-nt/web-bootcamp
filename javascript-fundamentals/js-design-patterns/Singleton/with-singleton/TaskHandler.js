var myRepo = require("./Repo");

var taskHandler = function(){
    return {
        save: function(){
            myRepo.save("Hi from TaskHandler");
        }
    }
}

module.exports = taskHandler();