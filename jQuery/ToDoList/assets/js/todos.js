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
// shorter way
$("li").click(function(){
	$(this).toggleClass("completed");
});

// click on X to delete Todo
$("span").click(function(event){
	// $(this) here refers to span element
	$(this).parent().fadeOut(500, function(){
		// $(this) here refers to li element
		$(this).remove();
	});
	event.stopPropagation();

})