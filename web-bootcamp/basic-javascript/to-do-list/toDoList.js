
function addTodo(todoList){
	var todo = prompt("Add new todo:");
	todoList.push(todo);
	return todoList;
}

function listAllTodos(todoList){
	console.log("****************");
	todoList.forEach(function(color, i){
		console.log(i, ": " + color);
	});
	console.log("****************");
}


function deleteTodo(todoList) {
	var toBeDeleteTodo = prompt("Delete a particular todo: ");
	var indexToBeRemoved = todoList.indexOf(toBeDeleteTodo);
	if (indexToBeRemoved > -1){
		todoList.splice(indexToBeRemoved, 1);
		console.log("Todo is removed.");
	}	
	return todoList;
}

var quit=false;
todos = [];

while (!quit) {
	var action = prompt("What would you like to do?");
	if (action === "add"){	
	//add new todo	
		todos = addTodo(todos);
	} else if (action === "delete") {
	//delete a todo
		todos = deleteTodo(todos);	
	} else if (action === "list") {
	//show all current todos
		listAllTodos(todos);
	} else if (action === "quit") {
		quit = true;
		todos = [];
	}
}