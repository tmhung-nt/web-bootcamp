var repo = require("./Repo");
var myRepo = repo();

var taskHandler = function(){
    return {
        save: function(){
            myRepo.save("Hi from TaskHandler");
        }
    }
}

module.exports = taskHandler();