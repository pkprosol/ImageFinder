$(document).ready(function() {
	var currentURL = document.URL;
	var pathArray = currentURL.split('?code=');
	var code = pathArray[1];
	console.log(code);

	$("#searchButton").click(function() {
		var userInput = $("#userTag").val();
		console.log(userInput);	
	});

});



