

// function changeBtnBackground(){
// 	var btn = document.querySelector("button");
// 	btn;

// 	btn.setAttribute("isClick", false);

// 	btn.addEventListener("click",function(){
// 	  var isClickFlag = btn.getAttribute("isClick");
// 	  var originalBackground = btn.getAttribute("style.background");
// 		if (isClickFlag) {
// 			console.log("Current isClick value before clicking: " + btn.getAttribute("isClick"));
// 			btn.style.background = originalBackground;     	  		
// 		}   else {
// 		  		console.log("Current isClick value before clicking: " + btn.getAttribute("isClick"));
// 			    btn.style.background = "purple";
// 		}
// 		btn.setAttribute("isClick", !isClickFlag);
// 	    console.log("Current isClick value after clicking: " + btn.getAttribute("isClick"));
// 	});	
// }


// changeBtnBackground()
var btn = document.querySelector("button");


// var isPurple = false;
// btn.addEventListener("click", function(){
// 	if (isPurple){
// 		document.body.style.background = "white";			
// 	} else {
// 		document.body.style.background = "purple";		
// 	}
// 	isPurple = !isPurple;
// });


// shorter way to use toggle
btn.addEventListener("click", function(){
	document.body.classList.toggle("purple");
});