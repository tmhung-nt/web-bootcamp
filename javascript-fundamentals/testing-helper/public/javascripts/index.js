
let currentTool = "";


$( document ).ready(function() {
	getBearerToken();
	//==========================================
	// declare variables for page elements
	let sideMenuMainItems 		= $("#side-menu > li"),
		colToStatementLink 		= $("#col-to-statement"),
		genrPRfileLink 			= $("#generatePRfile"),
	//	pageContentAtLandingPage = $('#page-wrapper > div');
		currentPageContent 		= $('#page-wrapper > div'),
		pageContentWrapper 		= $("wrapper");
	//==========================================


	//==========================================
	// set default event listeners for main items on left side menu
	//==========================================
	sideMenuMainItems.on("click", "> a", function(){
		currentPageContent.html("<h1> Blank Page - Not develop yet </h1>")
	});
	
	//==========================================
	// Trigger AJAX requests
	//==========================================
	colToStatementLink.click(function(event){
		event.preventDefault();
		getColumnToStatementPage(currentPageContent);
		
	});
	
	genrPRfileLink.click(function(event){
		event.preventDefault();
		getGeneratePayrollPage(currentPageContent);
	});
	
	//==========================================
	// Handler AJAX responses
	//==========================================
	switch (currentTool){
		case "col-to-statement":
		pageContentWrapper.on('change', function(){
			columnDataToStatement().bind(currentPageContent);
		});
		break;
		case "importPayrollFile":
		
		break;	
	}	
});

//==========================================
// send API requests
//==========================================
function getColumnToStatementPage(currentPageContent){
	let promise = $.get("/col-to-statement");
	currentTool = "col-to-statement";
	promise.then(
		value => {
			console.log(value);
			currentPageContent.html(value);	
		},
		error => $(document).html(error)			
		);		
	};
	
function getGeneratePayrollPage(currentPageContent){
	let promise = $.get("/genr-import-payroll");
	currentTool = "importPayrollFile";
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
	
//==========================================	
// helper functions
//==========================================
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



// Phoenix API
function getBearerToken(){
	let promise = $.ajax({
		url: "https://wapi-smg-phx-sit.azurewebsites.net/api/token",
		method: "POST",
		headers: {
			contentType: "application/x-www-form-urlencoded",
			"x-brand": 3
		},
		data: {
			"grant_type": "client_credentials",
			"client_secret": "39f8ee6e-d609-4d93-a5b5-f80b6708812a",
			"client_id": "6183853a-e741-42f9-9661-539379bc503b",
			"x-brand":3
			}
	});
	promise.then(    
		data => console.log(JSON.stringify(data)),
		error => console.log(error)
	)
}