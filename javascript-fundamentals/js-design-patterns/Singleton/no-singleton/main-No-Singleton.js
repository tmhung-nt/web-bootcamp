let taskHandler = require("./TaskHandler");
let repo = require("./Repo");
let myRepo = repo();


myRepo.save("fromMain");
myRepo.save("fromMain");
myRepo.save("fromMain");

taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();