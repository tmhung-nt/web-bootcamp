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

module.exports = repo; // export the whole function 
// --> need to execute to get an instance after requirinng 
// --> the whole function is cached 
// --> everytime we use require(), new instance of this module will be created