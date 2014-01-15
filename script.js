$(document).ready(function() {
	var currentURL = document.URL;
	var pathArray = currentURL.split('?code=');
	var URLcode = pathArray[1];
	console.log(URLcode);
	console.log("Hello");

	$.ajax({
		type: "POST",
		datatype: 'json',
		client_id: "e4bd275464ca4eaeb2eefa4bd253f2b2",
		client_secret: "5f80c997ad7f4230968d3c44c111f7e8",
		grant_type: "authorization_code",
		redirect_uri: "http://pkprosol.github.io/ImageFinder/",
		code: URLcode
	});

	$("#searchButton").click(function() {
		var userInput = $("#userTag").val();
		console.log(userInput);	
	});

});



