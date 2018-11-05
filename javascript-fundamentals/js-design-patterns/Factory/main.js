let Task        = require("./task"),
    taskRepo    = require("./taskRepository"),
    userRepo    = require("./userRepository"),
    projectRepo = require("./projectRepository");

let user    = userRepo.get(1),
    project = projectRepo.get(1),
    task1   = new Task(taskRepo.get(1));

task1.user = user;
task1.project = project;

console.log(task1);
task1.save();
