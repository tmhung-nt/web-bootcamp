// $("button").on("click", function(){
// 	$("div").fadeOut(1000);  /* without waiting for 1000ms before running next command*/
// 	$("div").fadeOut(1000, function(){
// 		/* just run below command after the fadeOut is finished (after 1000ms in this case) */
// 		console.log("Fade Completed!");
		
// 	});  
// })

// $("div").css("display", "block");
// $("button").on("click", function(){
// 	$("div").fadeIn(1000);  /* without waiting for 1000ms before running next command*/
// 	$("div").fadeIn(1000, function(){
// 		/* just run below command after the fadeIn is finished (after 1000ms in this case) */
// 		console.log("Fade Completed!");
		
// 	});  
// })


// $("button").on("click", function(){
// 	//$("div").slideUp(1000);  /* without waiting for 1000ms before running next command*/
// 	$("div").slideUp(1000, function(){
// 		/* just run below command after the slideUp is finished (after 1000ms in this case) */
// 		console.log("Fade Completed!");
		
// 	});  
// })


$("button").on("click", function(){
	// $("div").slideToggle(1000);  /* without waiting for 1000ms before running next command*/
	$("div").slideToggle(1000, function(){
		/* just run below command after the slideToggle is finished (after 1000ms in this case) */
		console.log("Fade Completed!");
		
	});  
})