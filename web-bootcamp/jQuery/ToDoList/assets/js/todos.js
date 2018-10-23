// Check off specific todo by clicking
/*$("li").click(function(){
	// if li is gray
	if ($(this).css("color") === "rgb(128, 128, 128)") {
		//turn it black
		$(this).css({
			color: "black",
			textDecoration: "none" 
		});	
	} else {
		//turn it gray
		$(this).css({
			color: "gray",
			textDecoration: "line-through" 
		});		
	}
});*/
// shorter way, "on" method will add listener to all elements (include ones that is added in runtime)
// but jQuery just can effect on existing element, hence we need to run on() method on <ul> element and add sub element when calling it
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// click on X to delete Todo
$("ul").on("click", "span", function(event){
	// $(this) here refers to span element
	$(this).parent().fadeOut(500, function(){
		// $(this) here refers to li element
		$(this).remove();
	});
	event.stopPropagation();

})

$("input[type='text']").keypress(function(event){
	if (event.which === 13){
		// grabbing new todo text from input field
		var newTodoText = $(this).val();
		// create a new li and add to ul
		$("ul").append("<li>" + "<span><i class=\"fas fa-trash\"></i></span> " + newTodoText + "</li>");
		// clear text in input field after adding new todo
		$(this).val("");
	}
});


$(".fas.fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});