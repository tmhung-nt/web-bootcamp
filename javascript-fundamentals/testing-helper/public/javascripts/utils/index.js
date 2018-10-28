$( document ).ready(function() {
	// GET REQUEST
	$("#col-to-in").click(function(event){
		event.preventDefault();
		myGet();
		
	});

	$("#page-wrapper").on('change', function(){
		columnDataToStatement();
	});


	// my GET 
	function myGet(){
		let promise = $.get("/column-to-in-statement");
		promise.then(
			value => {
				let currentHtml = $('#page-wrapper');
				currentHtml.append(value);	
			},
			error => $(document).html(error)			
		);		
	};

	function columnDataToStatement(){
		$("#convert-col-to-in").click(function(){
			console.log("convertColumnDataToInStatement()");
			let inputData = $("#input-col-data").val();
			console.log(inputData);
			inputData = inputData.split('\n');
			let inStatement = "(";
			inputData.forEach( col => {
				inStatement += isNaN(col) ? "'" + col + "', "  : col + ", ";			
			});
			inStatement = inStatement.trim();
			$("#output-in-statement").val(inStatement.substring(0, inStatement.length - 1) + ")");
		});	
	}
});



