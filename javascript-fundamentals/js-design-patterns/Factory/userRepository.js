var userRepo = function(){
    let get = function(id){
        console.log('Getting user ' + id);
        return {
            name: 'Hung Tran'
        };
    };

    return {
        get: get
    };
}

module.exports = userRepo;