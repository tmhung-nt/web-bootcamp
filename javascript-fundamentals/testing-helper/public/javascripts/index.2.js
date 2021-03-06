
let currentTool = "";


class HelperAPIs {
	constructor(){
		this.currentTool = "";
	}

	helperControlers(){
		$("#side-menu > li").on("click", "a", function(){
			let currentPageContent = $('#page-wrapper > div');
			currentPageContent.html("<h1> Blank Page - Not develop yet </h1>")
		});
	
		// GET REQUEST
		$("#col-to-statement").click(function(event){
			event.preventDefault();
			getColumnToStatementPage();
			
		});
	
		$("#generatePRfile").click(function(event){
			event.preventDefault();
			getGeneratePayrollPage();
		});
	
		// adding event listner to run "Column To In Statement" tool
		switch (currentTool){
			case "col-to-statement":
				$("#wrapper").on('change', function(){
					columnDataToStatement();
				});
				break;
			case "importPayrollFile":
				
				break;	
		}
	}
}

$( document ).ready(function() {

		
});

// my GET 
function getColumnToStatementPage(){
	let promise = $.get("/col-to-statement");
	currentTool = "col-to-statement";
	promise.then(
		value => {
			let currentPageContent = $('#page-wrapper > div');
			currentPageContent.html(value);	
		},
		error => $(document).html(error)			
	);		
};

function getGeneratePayrollPage(){
	let promise = $.get("/genr-import-payroll");
	currentTool = "importPayrollFile";
	let currentPageContent = $('#page-wrapper > div');
	promise.then(
		value => {
			console.log(value);
			currentPageContent.html(value);	
		},
		error => {
			console.log(error);
			currentPageContent.html(error);		
		}
	);
};

function columnDataToStatement(){
	$("#convert-col-to-statement").click(function(){
		let inputData = $("#input-col-data").val();
		inputData = inputData.split('\n');
		let inStatement = "(";
		inputData.forEach( col => {
			inStatement += isNaN(col) ? "'" + col + "', "  : col + ", ";			
		});
		inStatement = inStatement.trim();
		$("#output-in-statement").val(inStatement.substring(0, inStatement.length - 1) + ")");
	});	
}



