var repo = function(){
    var db = {};
    
    let get = function(id){
        console.log('Getting task ' + id);
        return {
            name: 'new task from db'
        }
    };

    let save = function(task){
        console.log('Repo - Saving ' + task.name + ' to the db');
    };

    return {
        get: get,
        save: save
    }
}

module.exports = repo();