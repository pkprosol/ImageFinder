$(document).ready(function() {
	var currentURL = document.URL;
	var pathArray = currentURL.split('#access_token=');
	var accessToken = pathArray[1];
	console.log(accessToken);
	console.log("Hello");

	$("#searchButton").click(function() {
		var userInput = $("#userTag").val();
		console.log(userInput);	
		var getLink = "https://api.instagram.com/v1/tags/snow/media/recent?access_token=" + accessToken;
		console.log(getLink);
		$.GET(getLink,
			console.log("Success");
		);
		xmlhttp.open("GET",getLink,true);

	});

});



