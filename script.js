$(document).ready(function() {
	var currentURL = document.URL;
	var pathArray = currentURL.split('#access_token=');
	var URLcode = pathArray[1];
	console.log(URLcode);
	console.log("Hello");

	$("#searchButton").click(function() {
		var userInput = $("#userTag").val();
		console.log(userInput);	
	});

});



