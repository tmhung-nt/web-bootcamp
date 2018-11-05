var projectRepo = function(){
    let get = function(id){
        console.log('Getting project ' + id);
        return {
            name: 'New project'
        };
    };

    return {
        get: get
    };
}

module.exports = projectRepo;