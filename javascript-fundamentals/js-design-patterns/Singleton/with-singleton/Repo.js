let repo = function(){
    let called = 0;
    let save = function(task){
        called++;
        console.log('Saving ' + task +
                    ' Called ' + called + ' times');
    }
    console.log('newing up task repo');
    return {
        save: save
    }
}

module.exports = repo();  // can use 'new repo' as well, we'll get the same result
// export an object (created after executing the function) 
// --> the object will be cached 
// --> everytime we use require(), we will get the same instance (object) of this module