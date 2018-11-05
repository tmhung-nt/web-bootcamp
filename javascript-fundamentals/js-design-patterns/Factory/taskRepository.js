var taskRepo = function(){
    var db = {};
    
    let get = function(id){
        console.log('Getting task ' + id);
        return {
            name: 'new task from db'
        }
    };

    let save = function(task){
        console.log('taskRepo - Saving ' + task.name + ' to the db');
    };

    console.log('newing up task repo');

    return {
        get: get,
        save: save
    }
}

module.exports = taskRepo;